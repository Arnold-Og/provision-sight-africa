import type { ProvisionConfig } from "./types";

export const sightConfig: ProvisionConfig = {
  /** Empty in dev uses Vite proxy; override with VITE_SIGHT_API_URL if needed. */
  apiBaseUrl:
    import.meta.env.VITE_SIGHT_API_URL ??
    (import.meta.env.DEV
      ? ""
      : "https://b57wegf5vb6wp9-7860.proxy.runpod.net"),
  describePath: "/sight/describe",
  readyPath: "/sight/ready",
  captureIntervalMs: 10000,
  captureMaxSide: 640,
  style: "short",
  enableTts: true,
  useBrowserTts: true,
  requestTimeoutMs: 45000,
  autoStart: true,
};
