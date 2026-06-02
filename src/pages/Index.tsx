import heroDevice from "@/assets/hero-device.jpg";
import provisionLogo from "@/assets/provision-logo.png";
import AnimatedCounter from "@/components/AnimatedCounter";
import AppShowcase from "@/components/AppShowcase";
import PageMeta from "@/components/PageMeta";
import ScrollReveal from "@/components/ScrollReveal";
import SocialConnect from "@/components/SocialConnect";
import UserJourney from "@/components/UserJourney";
import UserTestingForm from "@/components/UserTestingForm";
import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const partners = [
  { name: "Strathmore University", url: "https://www.strathmore.edu" },
  {
    name: "Kilimanjaro Blind Trust Africa",
    url: "https://www.kilimanjaroblindtrustafrica.org",
  },
  { name: "Zero Bionic Africa", url: "https://www.zerobionicafrica.com" },
  { name: "Bridge for Billions", url: "https://www.bridgeforbillions.org" },
  { name: "StartHub Africa", url: "https://www.starthubafrica.org" },
  { name: "AT Innovate Now", url: "#" },
];

const ParticleField = () => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
    {Array.from({ length: 30 }).map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-primary/20 animate-pulse-glow"
        style={{
          width: `${2 + Math.random() * 4}px`,
          height: `${2 + Math.random() * 4}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 4}s`,
        }}
      />
    ))}
  </div>
);

const Index = () => {
  return (
    <div>
      <PageMeta
        title="Home"
        description="Provision Sight Africa builds affordable AI-powered wearable navigation technology for visually impaired individuals across Africa, enabling independent and confident movement."
        path="/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Provision Sight Africa",
            url: "https://provision-sight-vision.lovable.app",
            logo: "https://provision-sight-vision.lovable.app/favicon.ico",
            description:
              "Building affordable AI-powered navigation technology for visually impaired individuals across Africa.",
            email: "contactus@provisionsightafrica.com",
            sameAs: [
              "https://www.instagram.com/provisionsightafrica/",
              "https://linkedin.com/company/provision-sight-africa",
            ],
          }),
        }}
      />
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <ParticleField />
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-gradient-shift"
          aria-hidden="true"
        />

        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={provisionLogo}
              alt="Provision Sight Africa logo"
              className="h-16 w-auto mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-6">
              Assistive Technology for Africa
            </span>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6"
            >
              Reimagining{" "}
              <span className="text-gradient-primary">Navigation</span> for the
              Visually Impaired
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Provision Sight Africa builds affordable AI-powered wearable
              devices that help visually impaired individuals navigate their
              environments independently and confidently.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact?reason=request-demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity focus-visible-ring glow-primary"
              >
                Request a Demo{" "}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/join"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-secondary text-secondary font-bold hover:bg-secondary/10 transition-colors focus-visible-ring"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden glow-primary">
              <img
                src={heroDevice}
                alt="Provision Sight Africa AI-powered smart glasses — a sleek wearable device with green and orange light trails representing AI navigation technology"
                className="w-full h-full scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-20 border-t border-border"
        aria-label="Impact statistics"
      >
        <div className="container">
          <ScrollReveal>
            <h2 className="text-center text-2xl font-bold text-foreground mb-12">
              Our Impact So Far
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <AnimatedCounter end={500} suffix="+" label="People Reached" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <AnimatedCounter end={15} label="Schools Visited" />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <AnimatedCounter end={10} label="Partner Organizations" />
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <AnimatedCounter end={3} label="Prototype Milestones" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* User Journey storytelling */}
      <UserJourney />

      {/* Mission preview */}
      <section className="py-20 bg-card" aria-labelledby="mission-heading">
        <div className="container max-w-4xl text-center">
          <ScrollReveal>
            <h2
              id="mission-heading"
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Technology That Gives{" "}
              <span className="text-gradient-accent">Independence</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Across Africa, millions of visually impaired individuals face
              daily challenges navigating their environments. Provision Sight
              Africa is changing that with affordable, AI-powered wearable
              technology that provides real-time audio guidance — giving people
              the freedom to move through their world independently.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline focus-visible-ring rounded-sm"
            >
              Learn about our mission{" "}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* How it works preview */}
      <section className="py-20" aria-labelledby="how-heading">
        <div className="container">
          <ScrollReveal>
            <h2
              id="how-heading"
              className="text-3xl font-bold text-foreground text-center mb-16"
            >
              How It <span className="text-gradient-primary">Works</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Eye,
                title: "See",
                desc: "A small camera captures the environment around the user.",
              },
              {
                icon: "🧠",
                title: "Understand",
                desc: "AI software processes and understands the surroundings in real-time.",
              },
              {
                icon: "🔊",
                title: "Guide",
                desc: "The system delivers clear audio guidance to the user.",
              },
              {
                icon: "🚶",
                title: "Navigate",
                desc: "The user moves confidently and independently.",
              },
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-2xl">
                    {typeof step.icon === "string" ? (
                      <span aria-hidden="true">{step.icon}</span>
                    ) : (
                      <step.icon
                        className="w-6 h-6 text-primary"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    Step {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-10">
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 text-primary font-bold hover:underline focus-visible-ring rounded-sm"
              >
                Learn more <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* App Showcase */}
      <AppShowcase />

      {/* User Testing */}
      <UserTestingForm />

      {/* Partners showcase */}
      <section
        className="py-20 bg-card"
        aria-labelledby="partners-home-heading"
      >
        <div className="container">
          <ScrollReveal>
            <h2
              id="partners-home-heading"
              className="text-3xl font-bold text-foreground text-center mb-4"
            >
              Our <span className="text-gradient-accent">Partners</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              We collaborate with leading organizations across Africa to build
              and deploy accessible technology.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 h-20 rounded-xl border border-border bg-background hover:border-primary/30 transition-colors text-center"
                >
                  <span className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors">
                    {p.name}
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-10">
              <Link
                to="/partners"
                className="inline-flex items-center gap-2 text-primary font-bold hover:underline focus-visible-ring rounded-sm"
              >
                View all partners{" "}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Social Connect */}
      <SocialConnect />

      {/* CTA */}
      <section className="py-20" aria-labelledby="cta-heading">
        <div className="container text-center max-w-3xl">
          <ScrollReveal>
            <h2
              id="cta-heading"
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Join the Mission to Make Navigation{" "}
              <span className="text-gradient-accent">Accessible</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're an organization, school, researcher, or supporter —
              there's a place for you in building accessible technology for
              Africa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact?reason=request-demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity focus-visible-ring glow-primary"
              >
                Request a Demo
              </Link>
              <Link
                to="/join"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-bold hover:opacity-90 transition-opacity focus-visible-ring glow-accent"
              >
                Partner With Us
              </Link>
              <Link
                to="/#testing-heading"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-bold hover:bg-primary/10 transition-colors focus-visible-ring"
              >
                Join User Testing
              </Link>
              <Link
                to="/contact?reason=contact-team"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-bold hover:bg-muted transition-colors focus-visible-ring"
              >
                Contact Provision
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
