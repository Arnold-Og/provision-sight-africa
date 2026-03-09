import { useEffect, useRef } from "react";
import { trackEvent } from "./GoogleAnalytics";

const SECTION_IDS = ["hero", "about", "features", "testimonials", "partners", "contact", "beta-cta"];

/**
 * Pushes section_view to dataLayer when each section first enters the viewport.
 * Used by GTM for scroll-depth / section engagement.
 */
const SectionViewTracker = () => {
  const sentRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          if (!id || sentRef.current.has(id)) continue;
          sentRef.current.add(id);
          trackEvent("section_view", { section: id });
        }
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0 }
    );

    const attach = () => {
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
    };

    attach();
    const t = setTimeout(attach, 800);
    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, []);

  return null;
};

export default SectionViewTracker;
