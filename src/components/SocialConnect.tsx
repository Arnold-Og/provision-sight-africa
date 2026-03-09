import ScrollReveal from "@/components/ScrollReveal";
import { QUICK_SHARE_URLS, type QuickShareKey } from "@/lib/quick-share";
import { Instagram, Linkedin, Mail, QrCode } from "lucide-react";
import QRCode from "qrcode";
import { useEffect, useState } from "react";

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    url: "https://www.instagram.com/provisionsightafrica/",
    handle: "@provisionsightafrica",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://linkedin.com/company/provision-sight-africa",
    handle: "Provision Sight Africa",
  },
  {
    icon: Mail,
    label: "Email",
    url: "mailto:blindsightafrica@gmail.com",
    handle: "blindsightafrica@gmail.com",
  },
];

const QR_KEYS: QuickShareKey[] = ["linkedin", "instagram", "website"];
const QR_LABELS: Record<QuickShareKey, string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  website: "Website",
};

const SocialConnect = () => {
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
        const dataUrl = await QRCode.toDataURL(url, { width: 256, margin: 2 });
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
    <section className="py-20 bg-card" aria-labelledby="social-heading">
      <div className="container max-w-4xl">
        <ScrollReveal>
          <h2
            id="social-heading"
            className="text-3xl font-bold text-foreground text-center mb-4"
          >
            Follow Our <span className="text-gradient-accent">Journey</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Stay connected and follow our progress across Africa.
          </p>
        </ScrollReveal>

        {/* Social links */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {socials.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <a
                href={s.url}
                target={s.url.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-primary/30 transition-colors group focus-visible-ring"
                aria-label={`${s.label}: ${s.handle}`}
              >
                <div className="w-12 h-12 p-2 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">
                    {s.label}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {s.handle}
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* QR Codes */}
        <ScrollReveal>
          <div className="flex items-center justify-center gap-2 mb-6">
            <QrCode className="w-5 h-5 text-primary" aria-hidden="true" />
            <h3 className="text-xl font-bold text-foreground">
              Connect With Provision
            </h3>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {QR_KEYS.map((key, i) => (
            <ScrollReveal key={key} delay={i * 0.1}>
              <div className="flex flex-col items-center space-y-4">
                <div
                  className="relative m-3 cursor-pointer group min-h-[200px] min-w-[200px] flex items-center justify-center rounded-xl bg-muted"
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
                        className={`w-full max-w-[200px] h-auto transition-all duration-300 rounded-lg ${unblurredQr === key ? "blur-0 scale-105" : "blur-md"}`}
                      />
                      {unblurredQr !== key && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl">
                          <p className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded-full">
                            Click to scan
                          </p>
                        </div>
                      )}
                    </>
                  ) : (
                    <p className="text-sm text-muted-foreground">Loading QR…</p>
                  )}
                </div>
                <p className="text-sm font-bold text-muted-foreground">
                  {QR_LABELS[key]}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialConnect;
