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
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Connect With Us</DialogTitle>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <p className="text-sm text-muted-foreground text-center">
                  Scan the QR codes below to follow us on social media and visit our website.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center space-y-3">
                    <img 
                      src={qrLinkedIn} 
                      alt="LinkedIn QR Code" 
                      className="w-full max-w-[120px] h-auto"
                    />
                    <p className="text-xs font-medium">LinkedIn</p>
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <img 
                      src={qrInstagram} 
                      alt="Instagram QR Code" 
                      className="w-full max-w-[120px] h-auto"
                    />
                    <p className="text-xs font-medium">Instagram</p>
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <img 
                      src={qrWebsite} 
                      alt="Website QR Code" 
                      className="w-full max-w-[120px] h-auto"
                    />
                    <p className="text-xs font-medium">Website</p>
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
