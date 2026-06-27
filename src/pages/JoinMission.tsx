import ScrollReveal from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';
import { ArrowRight, Handshake, Heart, Eye, Mail, Users } from 'lucide-react';
import UserTestingForm from '@/components/UserTestingForm';
import PageMeta from '@/components/PageMeta';

const options = [
  {
    icon: Eye,
    title: 'Try the Demo',
    desc: 'Experience assistive vision right in your browser — point your camera and hear AI-powered scene descriptions in real time.',
    cta: 'Try Demo',
    to: '/demo',
  },
  {
    icon: Handshake,
    title: 'Partner With Us',
    desc: 'Join our network of schools, organizations, and institutions working together to make navigation accessible.',
    cta: 'Partner With Us',
    to: '/contact?reason=partner',
  },
  {
    icon: Heart,
    title: 'Support the Mission',
    desc: 'Your support helps us reach more communities, develop better technology, and create real impact across Africa.',
    cta: 'Get In Touch',
    to: '/contact?reason=support',
  },
  {
    icon: Mail,
    title: 'Contact the Team',
    desc: "Have questions? Want to learn more? Reach out — we'd love to hear from you.",
    cta: 'Contact Us',
    to: '/contact?reason=contact-team',
  },
];

const JoinMission = () => {
  return (
    <div>
      <PageMeta title="Join the Mission" description="Partner with Provision Sight Africa, request a demo, join user testing, or support accessible navigation technology for visually impaired individuals in Africa." path="/join" />
      <section className="py-20 md:py-32" aria-labelledby="join-heading">
        <div className="container max-w-4xl text-center">
          <ScrollReveal>
            <h1 id="join-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join the <span className="text-gradient-accent">Mission</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Every partnership, every test, every conversation brings us closer to a world where visual impairment 
              is no longer a barrier to independence. There are many ways to be part of this journey.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20" aria-label="Ways to get involved">
        <div className="container max-w-5xl">
          <div className="grid sm:grid-cols-2 gap-8">
            {options.map((o, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-xl bg-card border border-border hover:border-accent/30 transition-colors h-full flex flex-col">
                  <o.icon className="w-8 h-8 text-accent mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{o.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1 mb-6">{o.desc}</p>
                  <Link
                    to={o.to}
                    className="inline-flex items-center gap-2 text-accent font-bold hover:underline focus-visible-ring rounded-sm self-start"
                  >
                    {o.cta} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* User Testing Form */}
      <UserTestingForm />
    </div>
  );
};

export default JoinMission;
