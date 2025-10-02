import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import provisionLogo from "./assets/provision-logo.jpg";


const setFavicon = (href: string) => {
  const existingLink =
    (document.querySelector('link[rel="icon"]') as HTMLLinkElement | null) ||
    document.createElement("link");
  existingLink.rel = "icon";
  existingLink.href = href;
  if (!existingLink.parentNode) {
    document.head.appendChild(existingLink);
  }
};

setFavicon(provisionLogo);
createRoot(document.getElementById("root")!).render(<App />);
