import provisionLogo from "@/assets/provision-logo.png";
import { QUICK_SHARE_URLS, type QuickShareKey } from "@/lib/quick-share";
import { Instagram, Linkedin, Mail } from "lucide-react";
import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const QR_KEYS: QuickShareKey[] = ["linkedin", "instagram", "website"];
const QR_LABELS: Record<QuickShareKey, string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  website: "Website",
};

const Footer = () => {
  const [unblurredQr, setUnblurredQr] = useState<string | null>(null);
  const [qrDataUrls, setQrDataUrls] = useState<
    Record<QuickShareKey, string | null>
  >({
    linkedin: null,
    instagram: null,
    website: null,
  });

  useEffect(() => {
    const generateQrCodes = async () => {
      const entries = QR_KEYS.map(async (key) => {
        const url = QUICK_SHARE_URLS[key];
        const dataUrl = await QRCode.toDataURL(url, { width: 128, margin: 2 });
        return [key, dataUrl] as const;
      });
      const results = await Promise.all(entries);
      setQrDataUrls(
        Object.fromEntries(results) as Record<QuickShareKey, string | null>,
      );
    };
    generateQrCodes();
  }, []);

  const handleQrClick = (qrType: string) => {
    setUnblurredQr(unblurredQr === qrType ? null : qrType);
  };

  return (
    <footer className="border-t border-border bg-card" role="contentinfo">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <img
                src={provisionLogo}
                alt=""
                className="h-8 w-auto"
                aria-hidden="true"
              />
              <h3 className="text-lg font-bold text-foreground">
                <span className="text-gradient-primary">Provision</span> Sight
                Africa
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Building affordable AI-powered navigation technology for visually
              impaired individuals across Africa.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/provisionsightafrica/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors focus-visible-ring"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4 text-muted-foreground" />
              </a>
              <a
                href="https://linkedin.com/company/provision-sight-africa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors focus-visible-ring"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground" />
              </a>
              <a
                href="mailto:contactus@provisionsightafrica.com"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors focus-visible-ring"
                aria-label="Email us"
              >
                <Mail className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { to: "/about", label: "About Us" },
                { to: "/technology", label: "Technology" },
                { to: "/impact", label: "Impact" },
                { to: "/contact?reason=contact-team", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible-ring rounded-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">
              Get Involved
            </h4>
            <ul className="space-y-2">
              {[
                { to: "/join", label: "Join the Mission" },
                { to: "/partners", label: "Partners" },
                { to: "/demo", label: "Try the Demo" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible-ring rounded-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">
              Connect
            </h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <Mail
                  className="w-3.5 h-3.5 inline mr-1.5"
                  aria-hidden="true"
                />
                contactus@provisionsightafrica.com
              </li>
            </ul>
            {/* QR Codes */}
            <div className="mt-4 flex gap-3">
              {QR_KEYS.map((key) => (
                <div key={key} className="text-center">
                  <div
                    className="relative cursor-pointer inline-block rounded-sm bg-muted min-w-[48px] min-h-[48px] flex items-center justify-center overflow-hidden"
                    onClick={() => handleQrClick(key)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleQrClick(key);
                      }
                    }}
                    aria-label={`${QR_LABELS[key]} QR code — click to reveal for scanning`}
                  >
                    {qrDataUrls[key] ? (
                      <>
                        <img
                          src={qrDataUrls[key]!}
                          alt={`${QR_LABELS[key]} QR Code`}
                          className={`w-15 h-15 object-contain transition-all duration-300 ${unblurredQr === key ? "blur-0 scale-110" : "blur-md hover:blur-lg"}`}
                        />
                        {unblurredQr !== key && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-md">
                            <span className="text-white text-[8px] font-medium bg-black/50 px-1 py-0.5 rounded">
                              Scan
                            </span>
                          </div>
                        )}
                      </>
                    ) : (
                      <span className="text-[10px] text-muted-foreground">
                        …
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1">
                    {QR_LABELS[key]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Provision Sight Africa. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
