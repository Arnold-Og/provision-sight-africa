import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';
import { AlertTriangle, Glasses, Cpu, Smile } from 'lucide-react';

const stages = [
  {
    icon: AlertTriangle,
    number: '01',
    title: 'The Challenge',
    subtitle: 'Navigating Without Sight',
    desc: 'Millions of visually impaired individuals across Africa face daily barriers — unfamiliar environments, unmarked obstacles, and limited tools for independent movement. Simple tasks like walking to school or crossing a street become sources of anxiety and risk.',
    visual: (
      <div className="relative h-48 rounded-xl overflow-hidden bg-muted/30 border border-border flex items-center justify-center" aria-hidden="true">
        <div className="absolute inset-0 backdrop-blur-[6px] bg-background/40" />
        <div className="grid grid-cols-3 gap-4 p-6 opacity-40">
          {['🚧', '🚗', '🕳️', '🚦', '🪨', '⚠️'].map((e, i) => (
            <span key={i} className="text-3xl text-center">{e}</span>
          ))}
        </div>
        <span className="absolute text-lg font-bold text-foreground z-10">Uncertainty</span>
      </div>
    ),
    accent: 'secondary',
  },
  {
    icon: Glasses,
    number: '02',
    title: 'Discovering Provision',
    subtitle: 'A Wearable Solution',
    desc: 'Provision Sight Africa introduces a lightweight, affordable wearable device paired with a mobile application — designed specifically for visually impaired users in Africa. No complex setup, no expensive equipment, just technology that works.',
    visual: (
      <div className="relative h-48 rounded-xl overflow-hidden bg-primary/5 border border-primary/20 flex items-center justify-center" aria-hidden="true">
        <motion.div
          className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Glasses className="w-12 h-12 text-primary" />
        </motion.div>
      </div>
    ),
    accent: 'primary',
  },
  {
    icon: Cpu,
    number: '03',
    title: 'Technology in Action',
    subtitle: 'See · Understand · Guide',
    desc: 'A camera captures the surroundings. Intelligent software interprets obstacles, pathways, and objects. The system delivers clear, real-time audio instructions — helping users understand exactly what is around them.',
    visual: (
      <div className="relative h-48 rounded-xl overflow-hidden bg-primary/5 border border-primary/20 flex items-center justify-center gap-6" aria-hidden="true">
        {['📷', '🧠', '🔊'].map((icon, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-3xl">{icon}</span>
            <span className="text-xs font-bold text-muted-foreground">{['Capture', 'Process', 'Guide'][i]}</span>
          </motion.div>
        ))}
        <div className="absolute top-1/2 left-[25%] w-[50%] h-px bg-primary/30" />
      </div>
    ),
    accent: 'primary',
  },
  {
    icon: Smile,
    number: '04',
    title: 'Independence',
    subtitle: 'Confident Navigation',
    desc: 'With Provision, visually impaired users navigate schools, walkways, and public spaces with confidence. They move independently — not defined by their disability, but empowered by technology that understands their world.',
    visual: (
      <div className="relative h-48 rounded-xl overflow-hidden bg-primary/5 border border-primary/20 flex items-center justify-center" aria-hidden="true">
        <div className="flex gap-6">
          {['🏫', '🛤️', '🏙️'].map((icon, i) => (
            <motion.div
              key={i}
              className="text-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
            >
              <span className="text-3xl block mb-1">{icon}</span>
              <span className="text-xs text-muted-foreground">{['Schools', 'Walkways', 'Public'][i]}</span>
            </motion.div>
          ))}
        </div>
      </div>
    ),
    accent: 'accent',
  },
];

const UserJourney = () => (
  <section className="py-20" aria-labelledby="journey-heading">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <h2 id="journey-heading" className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          The Journey to <span className="text-gradient-primary">Independence</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          How Provision Sight Africa transforms navigation for visually impaired individuals.
        </p>
      </ScrollReveal>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

        <div className="space-y-16">
          {stages.map((stage, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                {/* Dot on timeline */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 top-8 md:top-1/2 md:-translate-y-1.5 z-10" aria-hidden="true" />

                <div className={`pl-16 md:pl-0 ${i % 2 === 1 ? 'md:col-start-2 md:pl-12' : 'md:pr-12'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{stage.number}</span>
                    <stage.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{stage.title}</h3>
                  <p className="text-sm font-bold text-muted-foreground mb-3">{stage.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{stage.desc}</p>
                </div>

                <div className={`pl-16 md:pl-0 ${i % 2 === 1 ? 'md:col-start-1 md:row-start-1 md:pr-12' : 'md:pl-12'}`}>
                  {stage.visual}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default UserJourney;
