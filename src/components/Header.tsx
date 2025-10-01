import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import provisionLogo from "@/assets/provision-logo.jpg";

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
