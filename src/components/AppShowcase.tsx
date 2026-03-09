import { useRef } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';
import appHome from '@/assets/app-home.jpeg';
import appGuide from '@/assets/app-guide.jpeg';
import appSupport from '@/assets/app-support.jpeg';
import appSettings from '@/assets/app-settings.jpeg';
import appDescription from '@/assets/app-description.jpeg';
import appTutorial from '@/assets/app-tutorial.jpeg';
import appProfile from '@/assets/app-profile.jpeg';

const screens = [
  { src: appHome, title: 'Home Page', desc: 'The central hub where users access navigation features and key functions.', alt: 'Provision app home screen showing grid layout with Description, Guide, Profile, Contacts, Settings, Tutorial, Help, and Support buttons' },
  { src: appGuide, title: 'Guide Page', desc: 'Provides real-time navigation guidance and environment descriptions.', alt: 'Provision app guide page showing Google Maps integration with real-time scene description and voice input' },
  { src: appDescription, title: 'Description Page', desc: 'Provides details about nearby objects or environments detected by the system.', alt: 'Provision app description mode showing live camera feed with AI-generated scene description of surroundings' },
  { src: appTutorial, title: 'Tutorial Page', desc: 'Guides new users on how to effectively use the navigation system.', alt: 'Provision app tutorial screen introducing the AI-powered navigation assistant features' },
  { src: appSettings, title: 'Settings Page', desc: 'Users can customize accessibility preferences and application behavior.', alt: 'Provision app settings showing audio controls for speech rate, volume, pitch and visual accessibility options' },
  { src: appSupport, title: 'Support Page', desc: 'Allows users to access assistance resources and support information.', alt: 'Provision app support page with email and message support options and direct contact information' },
  { src: appProfile, title: 'Profile Page', desc: 'Allows users to manage their personal settings and accessibility preferences.', alt: 'Provision app profile information form with first name, last name, phone number, and email fields' },
];

const AppShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-card" aria-labelledby="app-showcase-heading">
      <div className="container">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Smartphone className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20">
              Beta Testing
            </span>
          </div>
          <h2 id="app-showcase-heading" className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Provision <span className="text-gradient-primary">Navigation App</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            The mobile application that works alongside the Provision wearable system — designed with accessibility at its core.
          </p>
        </ScrollReveal>

        {/* Scroll controls */}
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-muted transition-colors focus-visible-ring hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-muted transition-colors focus-visible-ring hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2 snap-x snap-mandatory"
            role="region"
            aria-label="App screenshots carousel"
            tabIndex={0}
          >
            {screens.map((screen, i) => (
              <ScrollReveal key={i} delay={i * 0.08} className="flex-shrink-0 snap-center">
                <div className="w-64 group">
                  {/* Phone mockup */}
                  <div className="relative bg-background rounded-[2rem] p-2 border-4 border-border shadow-2xl overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-border rounded-b-xl z-10" aria-hidden="true" />
                    <img
                      src={screen.src}
                      alt={screen.alt}
                      className="w-full rounded-[1.5rem] group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-sm font-bold text-foreground">{screen.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{screen.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
