import { useEffect, useRef, useState, type RefObject } from "react";
import { sightConfig } from "@/lib/sight/config";
import type {
  DescribeResponse,
  HistoryEntry,
  PipelineErrorDetail,
  ReadyResponse,
  StatusKind,
  TtsPayload,
} from "@/lib/sight/types";

const config = sightConfig;
const apiBase = config.apiBaseUrl.replace(/\/$/, "");
const describeUrl = `${apiBase}${config.describePath}`;
const readyUrl = `${apiBase}${config.readyPath}`;

function parseApiError(data: unknown, status: number): string {
  if (status === 429) {
    return "Vision is briefly busy. Waiting before the next look.";
  }
  if (typeof data === "object" && data !== null && "detail" in data) {
    const detail = (data as { detail: unknown }).detail;
    if (typeof detail === "string") return detail;
    if (typeof detail === "object" && detail !== null) {
      const d = detail as PipelineErrorDetail;
      if (d.stage === "rate_limit") {
        return d.message ?? "Vision is briefly busy. Please wait a moment.";
      }
      return d.message ?? "Something went wrong. Please try again.";
    }
  }
  if (status >= 500) return "Vision service is busy. Trying again shortly.";
  return "Could not describe this moment. Trying again shortly.";
}

function historyErrorMessage(msg: string): string | null {
  if (msg.includes("Failed to fetch")) return null;
  if (
    msg.includes("LLM HTTP") ||
    msg.includes("meta-llama") ||
    msg.includes("rate_limit") ||
    msg.includes("Rate limit")
  ) {
    return "Vision is briefly busy. Trying again shortly.";
  }
  return msg;
}

export function useSightDemo(videoRef: RefObject<HTMLVideoElement | null>) {
  const [statusKind, setStatusKind] = useState<StatusKind>("idle");
  const [statusText, setStatusText] = useState("Starting…");
  const [description, setDescription] = useState(
    "Descriptions appear every few seconds once the camera is on.",
  );
  const [isDescriptionPlaceholder, setIsDescriptionPlaceholder] = useState(true);
  const [isDescriptionBlocked, setIsDescriptionBlocked] = useState(false);
  const [showCameraPlaceholder, setShowCameraPlaceholder] = useState(true);
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const runtimeRef = useRef({
    stream: null as MediaStream | null,
    pollTimer: null as ReturnType<typeof setInterval> | null,
    nextCaptureTimer: null as ReturnType<typeof setTimeout> | null,
    busy: false,
    liveActive: false,
    backendOk: false,
    systemReady: false,
    systemLoading: false,
    loadWaitSec: 0,
    speechActive: false,
    serverAudio: null as HTMLAudioElement | null,
    canvas: null as HTMLCanvasElement | null,
  });

  useEffect(() => {
    const rt = runtimeRef.current;
    rt.canvas = document.createElement("canvas");

    const setOverlay = (kind: StatusKind, text: string) => {
      setStatusKind(kind);
      setStatusText(text);
    };

    const addHistory = (text: string, blocked: boolean) => {
      setHistory((prev) => {
        const entry: HistoryEntry = {
          id: `${Date.now()}-${Math.random()}`,
          text,
          blocked,
          time: new Date().toLocaleTimeString(),
        };
        return [entry, ...prev].slice(0, 30);
      });
    };

    const primeSpeech = () => {
      if (!("speechSynthesis" in window)) return;
      if (window.speechSynthesis.getVoices().length) return;
      window.speechSynthesis.onvoiceschanged = () => undefined;
    };

    const isSpeaking = () => {
      if (rt.speechActive) return true;
      if (config.useBrowserTts && "speechSynthesis" in window) {
        return window.speechSynthesis.speaking || window.speechSynthesis.pending;
      }
      if (rt.serverAudio && !rt.serverAudio.paused && !rt.serverAudio.ended) return true;
      return false;
    };

    const speakBrowser = (text: string): Promise<void> =>
      new Promise((resolve) => {
        if (!("speechSynthesis" in window)) {
          resolve();
          return;
        }
        primeSpeech();
        rt.speechActive = true;
        const utter = new SpeechSynthesisUtterance(text);
        utter.rate = 1.05;
        const en = window.speechSynthesis
          .getVoices()
          .find((v) => v.lang.toLowerCase().startsWith("en"));
        if (en) utter.voice = en;

        const done = () => {
          rt.speechActive = false;
          resolve();
        };
        utter.onend = done;
        utter.onerror = done;
        window.speechSynthesis.speak(utter);
      });

    const speak = async (text: string) => {
      const cleaned = text.trim();
      if (!cleaned || !config.enableTts) return;
      if (config.useBrowserTts) await speakBrowser(cleaned);
    };

    const playServerAudio = (tts: TtsPayload): Promise<void> =>
      new Promise((resolve) => {
        if (!tts.available || !tts.audio_base64) {
          resolve();
          return;
        }
        const mime = tts.audio_mime ?? "audio/wav";
        if (rt.serverAudio) {
          rt.serverAudio.pause();
          rt.serverAudio = null;
        }
        const audio = new Audio(`data:${mime};base64,${tts.audio_base64}`);
        rt.serverAudio = audio;
        rt.speechActive = true;
        const done = () => {
          rt.speechActive = false;
          if (rt.serverAudio === audio) rt.serverAudio = null;
          resolve();
        };
        audio.onended = done;
        audio.onerror = done;
        void audio.play().catch(done);
      });

    const playDescription = async (spoken: string, tts?: TtsPayload) => {
      if (config.enableTts && !config.useBrowserTts && tts) {
        await playServerAudio(tts);
        return;
      }
      await speak(spoken);
    };

    const scheduleNextCapture = (delayMs?: number) => {
      if (
        !rt.liveActive ||
        rt.busy ||
        isSpeaking() ||
        !rt.systemReady ||
        !rt.stream ||
        !rt.backendOk
      ) {
        return;
      }
      if (rt.nextCaptureTimer) clearTimeout(rt.nextCaptureTimer);
      const wait = delayMs ?? config.captureIntervalMs;
      rt.nextCaptureTimer = setTimeout(() => void sendFrame(), wait);
    };

    const stopCapture = () => {
      rt.liveActive = false;
      if (rt.nextCaptureTimer) {
        clearTimeout(rt.nextCaptureTimer);
        rt.nextCaptureTimer = null;
      }
    };

    const schedulePoll = (ms: number) => {
      if (rt.pollTimer) clearInterval(rt.pollTimer);
      rt.pollTimer = setInterval(() => void pollReady(), ms);
    };

    const tryStartCapture = () => {
      if (
        !config.autoStart ||
        !rt.stream ||
        !rt.backendOk ||
        !rt.systemReady ||
        rt.liveActive ||
        rt.busy
      ) {
        return;
      }
      void beginAutoCapture();
    };

    const pollReady = async () => {
      try {
        const health = await fetch(`${apiBase}/health`, { cache: "no-store" });
        if (!health.ok) throw new Error("offline");
        rt.backendOk = true;

        const res = await fetch(readyUrl, { cache: "no-store" });
        const data = (await res.json()) as ReadyResponse;

        const wasReady = rt.systemReady;
        rt.systemReady = !!data.ready;
        rt.systemLoading = !!data.loading && !rt.systemReady;

        if (data.failed) {
          setOverlay("error", "Vision unavailable — reload page");
          schedulePoll(10000);
          return;
        }

        if (rt.systemLoading) {
          rt.loadWaitSec += 2;
          const min = Math.floor(rt.loadWaitSec / 60);
          const sec = rt.loadWaitSec % 60;
          const elapsed = min > 0 ? `${min}m ${sec}s` : `${sec}s`;
          setOverlay("idle", `Loading vision… ${elapsed}`);
          schedulePoll(2000);
          return;
        }

        if (rt.systemReady) {
          rt.loadWaitSec = 0;
          schedulePoll(8000);
          if (!wasReady) {
            setIsDescriptionPlaceholder(false);
            setDescription("Watching — describing what I see…");
          }
          setOverlay("live", "Watching");
          tryStartCapture();
          return;
        }

        setOverlay("idle", "Connecting vision…");
        schedulePoll(2000);
      } catch {
        rt.backendOk = false;
        rt.systemReady = false;
        rt.systemLoading = false;
        if (rt.liveActive) stopCapture();
        setOverlay("error", "Connecting to vision service…");
        schedulePoll(2000);
      }
    };

    const captureBlob = (video: HTMLVideoElement): Promise<Blob | null> => {
      let w = video.videoWidth || 640;
      let h = video.videoHeight || 480;
      const maxSide = config.captureMaxSide;

      if (w > maxSide || h > maxSide) {
        if (w >= h) {
          h = Math.round((h * maxSide) / w);
          w = maxSide;
        } else {
          w = Math.round((w * maxSide) / h);
          h = maxSide;
        }
      }

      const canvas = rt.canvas!;
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) return Promise.resolve(null);
      ctx.drawImage(video, 0, 0, w, h);
      return new Promise((resolve) => {
        canvas.toBlob((blob) => resolve(blob), "image/jpeg", 0.78);
      });
    };

    const sendFrame = async () => {
      const video = videoRef.current;
      if (rt.busy || isSpeaking() || !video || !rt.stream || !rt.backendOk || !rt.systemReady) {
        return;
      }

      rt.busy = true;
      const startedAt = Date.now();
      const tick = setInterval(() => {
        const sec = Math.round((Date.now() - startedAt) / 1000);
        setOverlay("busy", `Seeing… ${sec}s`);
      }, 500);
      setOverlay("busy", "Seeing…");

      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), config.requestTimeoutMs);
      let httpStatus = 0;
      let nextDelayMs: number | undefined;

      try {
        const blob = await captureBlob(video);
        if (!blob) return;

        const fd = new FormData();
        fd.append("file", blob, "frame.jpg");
        const params = new URLSearchParams({
          style: config.style,
          tts: config.enableTts && !config.useBrowserTts ? "true" : "false",
        });

        const res = await fetch(`${describeUrl}?${params}`, {
          method: "POST",
          body: fd,
          signal: controller.signal,
        });
        httpStatus = res.status;

        const data = (await res.json()) as DescribeResponse & { detail?: unknown };
        if (!res.ok) throw new Error(parseApiError(data, res.status));

        const spoken = (data.spoken || data.description || "").trim();
        if (!spoken) return;

        setIsDescriptionPlaceholder(false);
        setDescription(spoken);
        setIsDescriptionBlocked(!!data.blocked);
        addHistory(spoken, !!data.blocked);
        setOverlay("live", "Speaking…");
        await playDescription(spoken, data.tts);

        setOverlay("live", "Watching");
      } catch (err) {
        if (!(err instanceof DOMException && err.name === "AbortError")) {
          const raw = err instanceof Error ? err.message : "Trying again shortly.";
          const msg = historyErrorMessage(raw);
          if (msg) addHistory(msg, true);
          if (httpStatus === 429 || raw.toLowerCase().includes("busy")) {
            setOverlay("live", "Waiting…");
            nextDelayMs = 20000;
          }
        }
        if (!nextDelayMs) setOverlay("live", "Watching");
      } finally {
        clearInterval(tick);
        clearTimeout(timer);
        rt.busy = false;
        scheduleNextCapture(nextDelayMs);
      }
    };

    const beginAutoCapture = async () => {
      if (rt.liveActive || !rt.stream || !rt.backendOk || !rt.systemReady) return;

      rt.liveActive = true;
      primeSpeech();
      setOverlay("live", "Watching");
      await sendFrame();
    };

    const initCamera = async () => {
      const video = videoRef.current;
      if (!video) return;

      if (!navigator.mediaDevices?.getUserMedia) {
        setOverlay("error", "Camera not supported");
        return;
      }

      setOverlay("idle", "Opening camera…");
      const constraints: MediaStreamConstraints[] = [
        {
          video: {
            facingMode: { ideal: "environment" },
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
          audio: false,
        },
        { video: true, audio: false },
      ];

      for (const c of constraints) {
        try {
          rt.stream = await navigator.mediaDevices.getUserMedia(c);
          video.srcObject = rt.stream;
          video.muted = true;
          await video.play();
          setShowCameraPlaceholder(false);
          tryStartCapture();
          if (!rt.systemReady) {
            setOverlay(
              "idle",
              rt.systemLoading ? "Loading vision…" : "Connecting vision…",
            );
          }
          return;
        } catch {
          /* try next constraint set */
        }
      }

      setOverlay("error", "Allow camera access in your browser");
    };

    primeSpeech();
    void initCamera();
    void pollReady();

    return () => {
      stopCapture();
      if (rt.pollTimer) clearInterval(rt.pollTimer);
      rt.stream?.getTracks().forEach((t) => t.stop());
      if (rt.serverAudio) {
        rt.serverAudio.pause();
        rt.serverAudio = null;
      }
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, [videoRef]);

  return {
    statusKind,
    statusText,
    description,
    isDescriptionPlaceholder,
    isDescriptionBlocked,
    showCameraPlaceholder,
    history,
  };
}
