import { useAccessibility } from '@/contexts/AccessibilityContext';
import { Eye, ZoomIn, ZoomOut, Monitor, Gauge } from 'lucide-react';

const AccessibilityToolbar = () => {
  const { highContrast, textScale, reducedMotion, toggleHighContrast, increaseTextSize, decreaseTextSize, toggleReducedMotion } = useAccessibility();

  return (
    <div
      role="toolbar"
      aria-label="Accessibility controls"
      className="fixed top-1/2 right-0 -translate-y-1/2 z-50 flex flex-col gap-1 bg-card/90 backdrop-blur-md border border-border rounded-l-lg p-2 shadow-lg"
    >
      <button
        onClick={toggleHighContrast}
        className={`p-2 rounded-md transition-colors focus-visible-ring ${highContrast ? 'bg-primary text-primary-foreground' : 'hover:bg-muted text-foreground'}`}
        aria-label={`High contrast mode: ${highContrast ? 'on' : 'off'}`}
        aria-pressed={highContrast}
        title="Toggle high contrast"
      >
        <Eye className="w-4 h-4" aria-hidden="true" />
      </button>
      <button
        onClick={increaseTextSize}
        disabled={textScale >= 2}
        className="p-2 rounded-md hover:bg-muted text-foreground disabled:opacity-30 transition-colors focus-visible-ring"
        aria-label="Increase text size"
        title="Increase text size"
      >
        <ZoomIn className="w-4 h-4" aria-hidden="true" />
      </button>
      <button
        onClick={decreaseTextSize}
        disabled={textScale <= 0.75}
        className="p-2 rounded-md hover:bg-muted text-foreground disabled:opacity-30 transition-colors focus-visible-ring"
        aria-label="Decrease text size"
        title="Decrease text size"
      >
        <ZoomOut className="w-4 h-4" aria-hidden="true" />
      </button>
      <button
        onClick={toggleReducedMotion}
        className={`p-2 rounded-md transition-colors focus-visible-ring ${reducedMotion ? 'bg-primary text-primary-foreground' : 'hover:bg-muted text-foreground'}`}
        aria-label={`Reduced motion: ${reducedMotion ? 'on' : 'off'}`}
        aria-pressed={reducedMotion}
        title="Toggle reduced motion"
      >
        <Gauge className="w-4 h-4" aria-hidden="true" />
      </button>
    </div>
  );
};

export default AccessibilityToolbar;
