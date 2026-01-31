import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QUICK_SHARE_URLS, type QuickShareKey } from "@/lib/quick-share";

const VALID_SOURCES = Object.keys(QUICK_SHARE_URLS) as QuickShareKey[];

/**
 * QR redirect page: records a qr_scan event in GA (when GA is loaded), then redirects to the target URL.
 * Route: /qr/:source (e.g. /qr/linkedin, /qr/instagram, /qr/website)
 */
const QrRedirect = () => {
  const { source } = useParams<{ source: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const raw = (source ?? "").toLowerCase();
    const key = VALID_SOURCES.find((k) => k === raw) ?? null;
    const destination = key ? QUICK_SHARE_URLS[key] : null;

    const sendEventAndRedirect = () => {
      if (key) {
        const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
        if (typeof gtag === "function") {
          gtag("event", "qr_scan", {
            qr_source: key,
            event_category: "engagement",
          });
        }
      }

      if (destination) {
        window.location.href = destination;
      } else {
        navigate("/", { replace: true });
      }
    };

    // Short delay so GA has time to send the event before navigation
    const t = setTimeout(sendEventAndRedirect, 400);
    return () => clearTimeout(t);
  }, [source, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirecting…</p>
    </div>
  );
};

export default QrRedirect;
