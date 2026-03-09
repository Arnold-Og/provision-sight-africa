import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface AccessibilityState {
  highContrast: boolean;
  textScale: number; // 1 = normal, 1.25, 1.5
  reducedMotion: boolean;
  simpleNav: boolean;
}

interface AccessibilityContextType extends AccessibilityState {
  toggleHighContrast: () => void;
  increaseTextSize: () => void;
  decreaseTextSize: () => void;
  toggleReducedMotion: () => void;
  toggleSimpleNav: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

export const useAccessibility = () => {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error('useAccessibility must be used within AccessibilityProvider');
  return ctx;
};

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AccessibilityState>({
    highContrast: false,
    textScale: 1,
    reducedMotion: false,
    simpleNav: false,
  });

  useEffect(() => {
    const root = document.documentElement;
    if (state.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    root.style.fontSize = `${state.textScale * 100}%`;
  }, [state.highContrast, state.textScale]);

  const toggleHighContrast = useCallback(() => setState(s => ({ ...s, highContrast: !s.highContrast })), []);
  const increaseTextSize = useCallback(() => setState(s => ({ ...s, textScale: Math.min(s.textScale + 0.25, 2) })), []);
  const decreaseTextSize = useCallback(() => setState(s => ({ ...s, textScale: Math.max(s.textScale - 0.25, 0.75) })), []);
  const toggleReducedMotion = useCallback(() => setState(s => ({ ...s, reducedMotion: !s.reducedMotion })), []);
  const toggleSimpleNav = useCallback(() => setState(s => ({ ...s, simpleNav: !s.simpleNav })), []);

  return (
    <AccessibilityContext.Provider value={{ ...state, toggleHighContrast, increaseTextSize, decreaseTextSize, toggleReducedMotion, toggleSimpleNav }}>
      {children}
    </AccessibilityContext.Provider>
  );
};
