import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface PreorderContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  openPopup: () => void;
}

const PreorderContext = createContext<PreorderContextValue | null>(null);

export const PreorderProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const openPopup = useCallback(() => setOpen(true), []);

  const value = useMemo(
    () => ({ open, setOpen, openPopup }),
    [open, openPopup],
  );

  return (
    <PreorderContext.Provider value={value}>
      {children}
    </PreorderContext.Provider>
  );
};

export const usePreorder = (): PreorderContextValue => {
  const ctx = useContext(PreorderContext);
  if (!ctx) {
    throw new Error("usePreorder must be used within a PreorderProvider");
  }
  return ctx;
};
