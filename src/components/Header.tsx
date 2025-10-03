import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Share2 } from "lucide-react";
import provisionLogo from "@/assets/provision-logo.jpg";
import qrLinkedIn from "@/assets/qr-linkedin.png";
import qrInstagram from "@/assets/qr-instagram.png";
import qrWebsite from "@/assets/qr-website.svg";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [unblurredQr, setUnblurredQr] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling past viewport height
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleQrClick = (qrType: string) => {
    setUnblurredQr(unblurredQr === qrType ? null : qrType);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-background/95 backdrop-blur-sm border-b border-border`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={provisionLogo} 
            alt="ProVision Logo" 
            className="h-10 w-auto object-contain"
          />
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("partners")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Partners
          </button>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" className="gap-2">
                <Share2 className="h-4 w-4" />
                Quick Share
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle>Connect With Us</DialogTitle>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <p className="text-sm text-muted-foreground text-center">
                  Scan the QR codes below to follow us on social media and stay updated with ProVision's latest developments.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div 
                      className="relative cursor-pointer group"
                      onClick={() => handleQrClick('linkedin')}
                    >
                      <img 
                        src={qrLinkedIn} 
                        alt="LinkedIn QR Code" 
                        className={`w-full max-w-[200px] h-auto transition-all duration-300 ${
                          unblurredQr === 'linkedin' 
                            ? 'blur-0 scale-105' 
                            : 'blur-md hover:blur-lg'
                        }`}
                      />
                      {unblurredQr !== 'linkedin' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
                          <p className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded-full">
                            Click to scan
                          </p>
                        </div>
                      )}
                    </div>
                    <p className="text-sm font-medium">LinkedIn</p>
                  </div>
                  <div className="flex flex-col items-center space-y-4">
                    <div 
                      className="relative cursor-pointer group"
                      onClick={() => handleQrClick('instagram')}
                    >
                      <img 
                        src={qrInstagram} 
                        alt="Instagram QR Code" 
                        className={`w-full max-w-[200px] h-auto transition-all duration-300 ${
                          unblurredQr === 'instagram' 
                            ? 'blur-0 scale-105' 
                            : 'blur-md hover:blur-lg'
                        }`}
                      />
                      {unblurredQr !== 'instagram' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
                          <p className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded-full">
                            Click to scan
                          </p>
                        </div>
                      )}
                    </div>
                    <p className="text-sm font-medium">Instagram</p>
                  </div>
                  <div className="flex flex-col items-center space-y-4">
                    <div 
                      className="relative cursor-pointer group"
                      onClick={() => handleQrClick('website')}
                    >
                      <img 
                        src={qrWebsite} 
                        alt="Website QR Code" 
                        className={`w-full max-w-[200px] h-auto transition-all duration-300 ${
                          unblurredQr === 'website' 
                            ? 'blur-0 scale-105' 
                            : 'blur-md hover:blur-lg'
                        }`}
                      />
                      {unblurredQr !== 'website' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
                          <p className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded-full">
                            Click to scan
                          </p>
                        </div>
                      )}
                    </div>
                    <p className="text-sm font-medium">Website</p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Button
            size="sm"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
