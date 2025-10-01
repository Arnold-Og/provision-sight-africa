import { Button } from "./ui/button";
import { ArrowRight, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Empowering independence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className={`max-w-4xl mx-auto space-y-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Globe className="w-8 h-8 text-secondary" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-secondary leading-tight">
            Navigation has never been easier for the visually impaired
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary/90 max-w-2xl mx-auto">
            With our assistive device, you can now move about safely and independently — without strain or mental spatial translation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              variant="secondary"
              onClick={scrollToAbout}
              className="text-lg px-8 py-6 group"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 border-secondary text-secondary hover:bg-secondary hover:text-primary"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
