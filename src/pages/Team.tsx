import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import teamEvent from '@/assets/team-event.jpeg';
import teamPhoto1 from '@/assets/team-photo-1.jpeg';
import teamPhoto2 from '@/assets/team-photo-2.jpeg';
import PageMeta from '@/components/PageMeta';

const team = [
  {
    name: 'Victoria Mwaura',
    role: 'Founder & CEO',
    bio: 'Responsible for strategic oversight and hardware development. Leading the vision to make navigation accessible for visually impaired individuals across Africa.',
  },
  {
    name: 'Arnold Oguda',
    role: 'CTO',
    bio: 'Responsible for software architecture and technology development. Building the AI systems that power the Provision navigation platform.',
  },
  {
    name: 'Furaha Makena',
    role: 'CFO',
    bio: 'Responsible for finance and accounting. Ensuring sustainable growth and financial health of the organization.',
  },
  {
    name: 'Clinton Njoroge',
    role: 'COO',
    bio: 'Responsible for partnerships and operational coordination. Building relationships with schools, organizations, and communities.',
  },
];

const Team = () => {
  return (
    <div>
      <PageMeta title="Our Team" description="Meet the passionate team behind Provision Sight Africa — building accessible AI navigation technology for visually impaired individuals across Africa." path="/team" />
      <section className="py-20 md:py-32" aria-labelledby="team-heading">
        <div className="container max-w-4xl text-center">
          <ScrollReveal>
            <h1 id="team-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient-primary">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meet the people behind Provision Sight Africa — a dedicated team driven by the mission to make navigation accessible for everyone.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team members */}
      <section className="pb-20" aria-label="Team members">
        <div className="container max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="text-center p-6 rounded-xl bg-card border border-border group cursor-default"
                  whileHover={{ y: -4, borderColor: 'hsl(var(--primary) / 0.3)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                    {m.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{m.name}</h3>
                  <p className="text-xs text-primary font-bold uppercase tracking-wider mb-3">{m.role}</p>
                  <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">{m.bio}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team photos */}
      <section className="pb-20" aria-label="Team photos">
        <div className="container max-w-5xl">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-foreground text-center mb-10">The Team in Action</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: teamEvent, alt: 'Provision Sight Africa team at Strathmore University Ideas Festival wearing branded t-shirts' },
              { src: teamPhoto1, alt: 'Provision Sight Africa team members outdoors holding a 3D-printed prototype model' },
              { src: teamPhoto2, alt: 'Provision Sight Africa team members together in the evening with prototype' },
            ].map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-colors">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-56 object-cover"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20" aria-label="Team note">
        <div className="container max-w-2xl text-center">
          <ScrollReveal>
            <p className="text-muted-foreground italic">
              Our team continues to grow. We're looking for passionate individuals who share our vision of accessible technology for Africa.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Team;
