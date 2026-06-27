import { useRef } from "react";
import { useSightDemo } from "@/hooks/useSightDemo";
import type { StatusKind } from "@/lib/sight/types";
import { cn } from "@/lib/utils";
import { Camera, History, Volume2 } from "lucide-react";

const overlayStyles: Record<StatusKind, string> = {
  idle: "from-transparent to-black/65",
  live: "from-transparent to-emerald-700/70",
  busy: "from-transparent to-amber-700/75",
  error: "from-transparent to-destructive/75",
};

const SightDemoClient = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    statusKind,
    statusText,
    description,
    isDescriptionPlaceholder,
    isDescriptionBlocked,
    showCameraPlaceholder,
    history,
  } = useSightDemo(videoRef);

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <section
        className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
        aria-label="Live camera demo"
      >
        <div className="flex items-center gap-2 border-b border-border bg-primary/5 px-4 py-3">
          <Camera className="h-4 w-4 text-primary" aria-hidden="true" />
          <span className="text-sm font-semibold text-foreground">Live camera</span>
        </div>

        <div className="relative aspect-[4/3] bg-black">
          <video
            ref={videoRef}
            playsInline
            muted
            autoPlay
            aria-label="Live camera preview"
            className="h-full w-full object-cover"
          />
          {showCameraPlaceholder && (
            <div className="absolute inset-0 grid place-items-center bg-black/80 px-6 text-center text-sm text-white/70">
              Allow camera access to start the demo
            </div>
          )}
          <div
            className={cn(
              "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t px-4 py-2.5 text-sm font-medium text-white",
              overlayStyles[statusKind],
            )}
            aria-live="polite"
            aria-atomic="true"
          >
            {statusText}
          </div>
        </div>

        <div className="border-t border-border px-4 py-4 sm:px-5">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
            Current description
          </div>
          <p
            className={cn(
              "text-base leading-relaxed sm:text-lg",
              isDescriptionPlaceholder && "italic text-muted-foreground",
              isDescriptionBlocked && "text-amber-700 dark:text-amber-400",
              !isDescriptionPlaceholder && !isDescriptionBlocked && "text-foreground",
            )}
            aria-live="polite"
          >
            {description}
          </p>
        </div>
      </section>

      <section
        className="rounded-2xl border border-border bg-card p-4 shadow-lg sm:p-5"
        aria-label="Recent descriptions"
      >
        <div className="mb-4 flex items-center gap-2">
          <History className="h-4 w-4 text-primary" aria-hidden="true" />
          <h2 className="text-base font-semibold text-foreground">Recent descriptions</h2>
        </div>

        {history.length === 0 ? (
          <p className="text-sm italic text-muted-foreground">
            Descriptions will appear here as the camera watches your surroundings.
          </p>
        ) : (
          <ul className="max-h-80 space-y-0 divide-y divide-border overflow-y-auto">
            {history.map((entry) => (
              <li
                key={entry.id}
                className={cn(
                  "py-3 text-sm first:pt-0 last:pb-0",
                  entry.blocked && "text-amber-700 dark:text-amber-400",
                )}
              >
                <time className="mb-1 block text-xs text-muted-foreground">{entry.time}</time>
                {entry.text}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default SightDemoClient;
