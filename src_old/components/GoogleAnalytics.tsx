import { useEffect } from "react";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

/** Push to dataLayer for GTM; do not call gtag() directly from React. */
export function trackEvent(
  event: string,
  params: Record<string, unknown> = {}
) {
  if (typeof window !== "undefined" && (window as Window & { dataLayer?: unknown[] }).dataLayer) {
    (window as Window & { dataLayer: unknown[] }).dataLayer.push({
      event,
      ...params,
    });
  }
}

export function GoogleAnalytics() {
  useEffect(() => {
    if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;

    window.dataLayer = window.dataLayer ?? [];
    function gtag(
      ...args: (string | Date | Record<string, unknown>)[]
    ) {
      window.dataLayer.push(args);
    }
    (window as unknown as { gtag: typeof gtag }).gtag = gtag;
    gtag("js", new Date());

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.onload = () => {
      gtag("config", GA_MEASUREMENT_ID);
    };
    document.head.appendChild(script);
  }, []);

  return null;
}
