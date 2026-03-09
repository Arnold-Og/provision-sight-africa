import ScrollReveal from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import PageMeta from '@/components/PageMeta';

const partners = [
  {
    name: 'Kilimanjaro Blind Trust Africa',
    type: 'Advocacy',
    desc: 'Supporting visually impaired communities across East Africa through assistive technology and rehabilitation.',
    url: 'https://www.kilimanjaroblindtrustafrica.org',
  },
  {
    name: 'Assistive Technology for Disability Trust',
    type: 'Technology',
    desc: 'Dedicated to developing and distributing assistive technologies for people with disabilities.',
    url: '#',
  },
  {
    name: 'AT Innovate Now',
    type: 'Innovation',
    desc: 'Accelerating assistive technology innovation through mentorship and funding support.',
    url: '#',
  },
  {
    name: 'Zero Bionic Africa',
    type: 'Technology',
    desc: 'Building affordable bionic and assistive devices for amputees and people with disabilities across Africa.',
    url: 'https://www.zerobionicafrica.com',
  },
  {
    name: 'StartHub Africa',
    type: 'Accelerator',
    desc: 'Supporting early-stage social enterprises and startups in Africa with mentorship and resources.',
    url: 'https://www.starthubafrica.org',
  },
  {
    name: 'Strathmore University',
    type: 'Research',
    desc: 'Academic partner providing research support, innovation facilities, and student collaboration.',
    url: 'https://www.strathmore.edu',
  },
  {
    name: 'Bridge for Billions',
    type: 'Mentorship',
    desc: 'Global incubation program connecting entrepreneurs with mentors to develop impactful business models.',
    url: 'https://www.bridgeforbillions.org',
  },
  {
    name: 'Disability Innovation Institute',
    type: 'Research',
    desc: 'Driving disability research and innovation to create more inclusive societies globally.',
    url: '#',
  },
];

const Partners = () => {
  return (
    <div>
      <PageMeta title="Partners" description="Explore the schools, organizations, and research institutions partnering with Provision Sight Africa to make navigation accessible across Africa." path="/partners" />
      <section className="py-20 md:py-32" aria-labelledby="partners-heading">
        <div className="container max-w-4xl text-center">
          <ScrollReveal>
            <h1 id="partners-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient-accent">Partners</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We collaborate with schools, organizations, researchers, and communities to build and deploy accessible technology across Africa.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20" aria-label="Partner organizations">
        <div className="container max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-colors h-full group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">{p.type}</span>
                    {p.url !== '#' && (
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    )}
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 text-center">
        <ScrollReveal>
          <p className="text-muted-foreground mb-6">Interested in partnering with us?</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity focus-visible-ring glow-accent">
            Become a Partner
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Partners;
