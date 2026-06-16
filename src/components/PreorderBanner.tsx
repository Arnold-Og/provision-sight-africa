import { usePreorder } from "@/contexts/PreorderContext";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const BANNER_ROUTES = ["/", "/technology"];
const STORAGE_KEY = "psa-preorder-banner-dismissed";

const PreorderBanner = () => {
  const location = useLocation();
  const { openPopup } = usePreorder();
  const [dismissed, setDismissed] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) === "1",
  );

  if (dismissed || !BANNER_ROUTES.includes(location.pathname)) return null;

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setDismissed(true);
  };

  return (
    <div className="relative bg-primary text-primary-foreground">
      <div className="container flex items-center justify-center gap-3 py-2.5 pr-8 text-center text-sm">
        <span className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15 sm:inline-flex">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
        </span>
        <p className="font-medium">
          <span className="font-bold">Manufacturing complete!</span> The smart
          glasses are ready — pre-orders are now open.
        </p>
        <button
          type="button"
          onClick={openPopup}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary-foreground px-4 py-1.5 text-xs font-bold text-primary transition-opacity hover:opacity-90 focus-visible-ring"
        >
          Pre-order now
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
      <button
        type="button"
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-sm p-1 opacity-80 transition-opacity hover:opacity-100 focus-visible-ring"
        aria-label="Dismiss pre-order announcement"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
};

export default PreorderBanner;
