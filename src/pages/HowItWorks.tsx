import ScrollReveal from '@/components/ScrollReveal';
import { Camera, Cpu, Volume2, Navigation } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PageMeta from '@/components/PageMeta';

const steps = [
  {
    icon: Camera,
    title: 'Capture',
    subtitle: 'See the world',
    desc: 'A small camera built into the wearable device continuously captures the environment around the user — just like human eyes would.',
    color: 'primary',
  },
  {
    icon: Cpu,
    title: 'Understand',
    subtitle: 'AI processes surroundings',
    desc: 'Our intelligent software analyzes what the camera sees in real-time — identifying obstacles, pathways, people, objects, and potential hazards.',
    color: 'primary',
  },
  {
    icon: Volume2,
    title: 'Guide',
    subtitle: 'Clear audio instructions',
    desc: 'The system converts its understanding into clear, natural audio guidance — telling the user what is around them and how to navigate safely.',
    color: 'accent',
  },
  {
    icon: Navigation,
    title: 'Navigate',
    subtitle: 'Move with confidence',
    desc: 'The user walks confidently and independently, receiving continuous real-time guidance as they move through their environment.',
    color: 'accent',
  },
];

const HowItWorks = () => {
  return (
    <div>
      <PageMeta title="How It Works" description="Discover the simple 4-step process behind Provision Sight Africa's AI navigation — from camera capture to real-time audio guidance." path="/how-it-works" />
      <section className="py-20 md:py-32" aria-labelledby="how-heading">
        <div className="container max-w-4xl text-center">
          <ScrollReveal>
            <h1 id="how-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How It <span className="text-gradient-primary">Works</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our technology works in four simple steps — from seeing the environment to guiding the user through it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20" aria-label="Step by step process">
        <div className="container max-w-4xl">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0">
                  <div className={`w-24 h-24 rounded-2xl flex items-center justify-center ${step.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'}`}>
                    <step.icon className={`w-10 h-10 ${step.color === 'accent' ? 'text-accent' : 'text-primary'}`} aria-hidden="true" />
                  </div>
                </div>
                <div className={`flex-1 ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Step {i + 1}</span>
                  <h3 className="text-2xl font-bold text-foreground mt-1 mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{step.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
