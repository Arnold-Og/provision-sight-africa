export interface ProvisionConfig {
  apiBaseUrl: string;
  describePath: string;
  readyPath: string;
  captureIntervalMs: number;
  captureMaxSide: number;
  style: "short" | "full";
  enableTts: boolean;
  useBrowserTts: boolean;
  requestTimeoutMs: number;
  autoStart: boolean;
}

export interface ReadyResponse {
  ready: boolean;
  loading?: boolean;
  failed?: boolean;
}

export interface TtsPayload {
  available: boolean;
  audio_mime?: string;
  audio_base64?: string;
}

export interface DescribeResponse {
  description: string;
  spoken: string;
  blocked: boolean;
  timestamp: string;
  tts?: TtsPayload;
}

export interface PipelineErrorDetail {
  stage?: string;
  message?: string;
}

export type StatusKind = "idle" | "live" | "busy" | "error";

export interface HistoryEntry {
  id: string;
  text: string;
  blocked: boolean;
  time: string;
}
