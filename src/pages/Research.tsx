import ScrollReveal from '@/components/ScrollReveal';
import { Brain, Map, AudioLines, Lightbulb } from 'lucide-react';
import PageMeta from '@/components/PageMeta';

const areas = [
  {
    icon: Brain,
    title: 'AI-Powered Navigation',
    desc: 'Researching how artificial intelligence can interpret real-world environments and generate meaningful navigation guidance for visually impaired users.',
  },
  {
    icon: Map,
    title: 'Spatial Understanding',
    desc: 'Exploring how AI systems can build a real-time understanding of physical spaces — identifying paths, obstacles, and safe routes.',
  },
  {
    icon: AudioLines,
    title: 'Real-Time Environment Description',
    desc: 'Developing methods to describe surroundings naturally through audio — so users understand not just where to go, but what is around them.',
  },
  {
    icon: Lightbulb,
    title: 'Affordable Assistive Tech',
    desc: 'Innovating to make advanced assistive technology accessible at a price point that works for communities across Africa.',
  },
];

const Research = () => {
  return (
    <div>
      <PageMeta title="Research & Innovation" description="Explore Provision Sight Africa's research into AI-powered navigation, spatial understanding, and affordable assistive technology for Africa." path="/research" />
      <section className="py-20 md:py-32" aria-labelledby="research-heading">
        <div className="container max-w-4xl text-center">
          <ScrollReveal>
            <h1 id="research-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="text-gradient-primary">Research</span> & Innovation
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our technology is built on continuous research and innovation, focused on making assistive navigation 
              smarter, more natural, and more accessible.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20" aria-label="Research areas">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {areas.map((a, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors h-full">
                  <a.icon className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{a.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
