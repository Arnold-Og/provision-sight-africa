import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';
import PageMeta from '@/components/PageMeta';

const milestones = [
  { year: '2023', title: 'The Idea', desc: 'Provision Sight Africa was born from a passion to solve real accessibility challenges using technology.' },
  { year: '2023', title: 'Early Research', desc: 'Began exploring AI-powered navigation systems and understanding the needs of visually impaired communities.' },
  { year: '2024', title: 'First Prototype', desc: 'Developed the first working prototype of the smart wearable device for testing.' },
  { year: '2024', title: 'Community Testing', desc: 'Partnered with schools and organizations for the visually impaired to test and refine the technology.' },
  { year: '2025', title: 'School Outreach', desc: 'Visited 15+ schools for the visually impaired to conduct awareness and testing sessions.' },
  { year: '2025', title: 'Partnerships', desc: 'Established partnerships with 10+ organizations to expand reach and impact.' },
  { year: '2026', title: 'Scaling Up', desc: 'Working toward mass-accessible deployment and continued innovation.' },
];

const About = () => {
  return (
    <div>
      <PageMeta title="About Us" description="Learn about Provision Sight Africa's mission to build affordable AI-powered assistive navigation technology for visually impaired individuals across Africa." path="/about" />
      {/* Hero */}
      <section className="py-20 md:py-32" aria-labelledby="about-heading">
        <div className="container max-w-4xl text-center">
          <ScrollReveal>
            <h1 id="about-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient-primary">Provision Sight Africa</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a mission-driven initiative building affordable assistive technology for visually impaired individuals across Africa, 
              helping them navigate environments independently using AI-powered wearable devices.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-card" aria-label="Mission and vision">
        <div className="container grid md:grid-cols-2 gap-12 max-w-5xl">
          <ScrollReveal direction="left">
            <div className="p-8 rounded-xl border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To design and deploy affordable AI-powered navigation technology that empowers visually impaired individuals 
                across Africa to navigate their environments independently, safely, and with dignity.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="p-8 rounded-xl border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where visual impairment is no longer a barrier to independent movement. 
                We envision accessible technology that is designed in Africa, for Africa, and eventually for the world.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-16" aria-labelledby="why-heading">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <h2 id="why-heading" className="text-3xl font-bold text-foreground mb-6">
              Why This <span className="text-gradient-accent">Matters</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Africa has one of the highest rates of visual impairment globally, yet access to assistive technology remains 
              extremely limited. Existing solutions are often too expensive, not adapted to local environments, or simply unavailable.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Provision Sight Africa bridges this gap by building technology that is affordable, practical, and designed 
              with direct input from the communities it serves.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-card" aria-labelledby="timeline-heading">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <h2 id="timeline-heading" className="text-3xl font-bold text-foreground text-center mb-16">
              Our <span className="text-gradient-primary">Journey</span>
            </h2>
          </ScrollReveal>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" aria-hidden="true" />
            
            {milestones.map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`relative flex items-start mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{m.year}</span>
                    <h3 className="text-lg font-bold text-foreground mt-1">{m.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{m.desc}</p>
                  </div>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background mt-2" aria-hidden="true" />
                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
