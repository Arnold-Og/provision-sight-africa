import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import { Quote } from 'lucide-react';
import outreachMachakos from '@/assets/outreach-machakos.jpeg';
import outreachKenyatta from '@/assets/outreach-kenyatta.jpeg';
import outreachKSB from '@/assets/outreach-ksb.jpeg';
import PageMeta from '@/components/PageMeta';

const testimonials = [
  {
    quote: "This technology could change the way visually impaired students navigate our campus. It's exactly what we've been looking for.",
    author: "School Administrator",
    role: "Partner School",
  },
  {
    quote: "The device is lightweight and the audio guidance is clear. For the first time, I felt like I could walk independently without fear.",
    author: "Beta Tester",
    role: "Visually Impaired User",
  },
  {
    quote: "Provision Sight Africa is tackling one of the most important accessibility challenges on the continent with real innovation.",
    author: "Accessibility Advocate",
    role: "Partner Organization",
  },
];

const outreachGallery = [
  {
    src: outreachMachakos,
    alt: 'Provision Sight Africa team at Machakos Technical Institute for the Blind — team members standing with institute staff at the campus entrance',
    title: 'Machakos Technical Institute for the Blind',
    desc: 'Prototype testing and accessibility feedback sessions with visually impaired students.',
  },
  {
    src: outreachKenyatta,
    alt: 'Provision Sight Africa outreach at Kenyatta University — team member presenting to a group of visually impaired students in a classroom',
    title: 'Kenyatta University',
    desc: 'Technology demonstrations and research engagement.',
  },
  {
    src: outreachKSB,
    alt: 'Provision Sight Africa team at Kenya Society for the Blind — team member with a visually impaired user wearing the prototype device',
    title: 'Kenya Society for the Blind',
    desc: 'User testing and discussions on accessibility challenges.',
  },
];

const outreachLocations = [
  'Lagos, Nigeria', 'Accra, Ghana', 'Nairobi, Kenya', 'Kampala, Uganda',
  'Dar es Salaam, Tanzania', 'Kigali, Rwanda',
];

const Impact = () => {
  return (
    <div>
      <PageMeta title="Impact & Outreach" description="See how Provision Sight Africa engages schools, organizations, and communities across Africa to test and deploy accessible navigation technology." path="/impact" />
      <section className="py-20 md:py-32" aria-labelledby="impact-heading">
        <div className="container max-w-4xl text-center">
          <ScrollReveal>
            <h1 id="impact-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Impact & <span className="text-gradient-accent">Outreach</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We work directly with schools, organizations, and communities to test, refine, and deploy our technology where it's needed most.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card" aria-label="Impact statistics">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}><AnimatedCounter end={500} suffix="+" label="Users Reached" /></ScrollReveal>
            <ScrollReveal delay={0.2}><AnimatedCounter end={15} label="Schools Visited" /></ScrollReveal>
            <ScrollReveal delay={0.3}><AnimatedCounter end={10} label="Partnerships" /></ScrollReveal>
            <ScrollReveal delay={0.4}><AnimatedCounter end={6} label="Countries" /></ScrollReveal>
          </div>
        </div>
      </section>

      {/* Outreach gallery */}
      <section className="py-20" aria-labelledby="outreach-gallery-heading">
        <div className="container max-w-5xl">
          <ScrollReveal>
            <h2 id="outreach-gallery-heading" className="text-2xl font-bold text-foreground text-center mb-12">
              Community <span className="text-gradient-primary">Outreach</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {outreachGallery.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-colors group">
                  <div className="overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outreach map placeholder */}
      <section className="py-16 bg-card" aria-label="Outreach locations">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">Where We've Been</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {outreachLocations.map((loc, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="p-4 rounded-xl bg-background border border-border text-center hover:border-primary/30 transition-colors">
                  <span className="text-2xl mb-2 block" aria-hidden="true">📍</span>
                  <span className="text-sm font-bold text-foreground">{loc}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16" aria-labelledby="testimonials-heading">
        <div className="container max-w-5xl">
          <ScrollReveal>
            <h2 id="testimonials-heading" className="text-2xl font-bold text-foreground text-center mb-12">What People Are Saying</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="p-6 rounded-xl border border-border h-full flex flex-col">
                  <Quote className="w-6 h-6 text-primary mb-4 flex-shrink-0" aria-hidden="true" />
                  <blockquote className="text-muted-foreground leading-relaxed flex-1 mb-4">
                    "{t.quote}"
                  </blockquote>
                  <div>
                    <div className="text-sm font-bold text-foreground">{t.author}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
