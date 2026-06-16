import provisionGlasses from "@/assets/provision-glasses.jpeg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "psa-preorder-popup-seen";

const PreorderPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) dismiss();
      }}
    >
      <DialogContent className="overflow-hidden p-0 sm:max-w-md">
        <div className="relative">
          <img
            src={provisionGlasses}
            alt="Provision Sight Africa smart glasses"
            className="h-44 w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"
            aria-hidden="true"
          />
        </div>
        <div className="px-6 pb-6 pt-2 text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Now Available
          </span>
          <DialogTitle className="text-2xl font-bold text-foreground">
            The glasses are{" "}
            <span className="text-gradient-primary">ready!</span>
          </DialogTitle>
          <DialogDescription className="mt-3 text-base leading-relaxed">
            Our AI-powered smart glasses are finally here. Be among the first to
            experience independent navigation — pre-order or order yours today.
          </DialogDescription>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              to="/contact?reason=preorder"
              onClick={dismiss}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90 focus-visible-ring glow-primary"
            >
              Pre-order Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={dismiss}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible-ring rounded-sm"
            >
              Maybe later
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PreorderPopup;
