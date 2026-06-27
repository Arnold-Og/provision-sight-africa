import type { ProvisionConfig } from "./types";

export const sightConfig: ProvisionConfig = {
  /** Empty in dev uses Vite proxy; set VITE_SIGHT_API_URL in production. */
  apiBaseUrl:
    import.meta.env.VITE_SIGHT_API_URL ??
    (import.meta.env.DEV ? "" : "http://127.0.0.1:7860"),
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
