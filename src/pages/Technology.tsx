import ScrollReveal from '@/components/ScrollReveal';
import AppShowcase from '@/components/AppShowcase';
import { Eye, Brain, Volume2, Feather } from 'lucide-react';
import heroDevice from '@/assets/hero-device.jpg';
import prototypeV3 from '@/assets/prototype-v3.jpeg';
import PageMeta from '@/components/PageMeta';

const features = [
  {
    icon: Eye,
    title: 'Smart Wearable Device',
    desc: 'A lightweight, comfortable pair of smart glasses with an integrated camera that captures the environment around the user in real-time.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Understanding',
    desc: 'Intelligent software processes what the camera sees — identifying obstacles, pathways, objects, and hazards to create a real-time understanding of the surroundings.',
  },
  {
    icon: Volume2,
    title: 'Audio Guidance System',
    desc: 'Clear, natural audio instructions guide the user through their environment — telling them what is ahead, warning of obstacles, and suggesting safe paths.',
  },
  {
    icon: Feather,
    title: 'Lightweight & Affordable',
    desc: 'Designed to be comfortable for all-day wear and priced accessibly for communities across Africa — because independence should not be a luxury.',
  },
];

const Technology = () => {
  return (
    <div>
      <PageMeta title="Technology" description="Discover how Provision Sight Africa's AI-powered smart glasses and audio guidance system help visually impaired users navigate independently." path="/technology" />
      <section className="py-20 md:py-32" aria-labelledby="tech-heading">
        <div className="container max-w-4xl text-center">
          <ScrollReveal>
            <h1 id="tech-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The <span className="text-gradient-primary">Technology</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our technology combines a smart wearable device with artificial intelligence to give visually impaired users 
              real-time understanding of their environment — all through simple, clear audio guidance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Device showcase */}
      <section className="py-16 bg-card" aria-label="Device visualization">
        <div className="container max-w-4xl">
          <ScrollReveal direction="scale">
            <div className="relative rounded-3xl overflow-hidden glow-primary">
              <img
                src={heroDevice}
                alt="Provision Sight Africa smart glasses — a sleek wearable device with integrated camera and AI processing for visually impaired navigation"
                className="w-full h-auto scale-105"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-20" aria-label="Technology features">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="p-8 rounded-xl border border-border hover:border-primary/30 transition-colors h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <f.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Prototype milestone */}
      <section className="py-20 bg-card" aria-labelledby="prototype-heading">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="rounded-2xl overflow-hidden border border-border glow-primary">
                <img
                  src={prototypeV3}
                  alt="Version 3 Prototype of Provision wearable navigation glasses alongside a 3D-printed head model at Strathmore University Ideas Festival"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-secondary/10 text-secondary border border-secondary/20 mb-4">
                  Milestone
                </span>
                <h2 id="prototype-heading" className="text-3xl font-bold text-foreground mb-4">
                  Version 3 <span className="text-gradient-primary">Prototype</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This prototype represents a key iteration in the development of the Provision wearable navigation system 
                  for visually impaired users. Featuring an integrated camera module and refined form factor, it was showcased 
                  at the Strathmore University Ideas Festival.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Each prototype brings us closer to a wearable device that is comfortable, reliable, and affordable — 
                  designed specifically for real-world use across Africa.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <AppShowcase />
    </div>
  );
};

export default Technology;
