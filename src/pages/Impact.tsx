import { useRef } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import { outreaches } from "@/data/outreaches";

const testimonials = [
  {
    quote:
      "This technology could change the way visually impaired students navigate our campus. It's exactly what we've been looking for.",
    author: "School Administrator",
    role: "Partner School",
  },
  {
    quote:
      "The device is lightweight and the audio guidance is clear. For the first time, I felt like I could walk independently without fear.",
    author: "Beta Tester",
    role: "Visually Impaired User",
  },
  {
    quote:
      "Provision Sight Africa is tackling one of the most important accessibility challenges on the continent with real innovation.",
    author: "Accessibility Advocate",
    role: "Partner Organization",
  },
];

const outreachLocations = [
  "Lagos, Nigeria",
  "Accra, Ghana",
  "Nairobi, Kenya",
  "Kampala, Uganda",
  "Dar es Salaam, Tanzania",
  "Kigali, Rwanda",
];

const CARD_WIDTH = 280;
const CARD_GAP = 24;
const SCROLL_AMOUNT = CARD_WIDTH + CARD_GAP;

const Impact = () => {
  const outreachScrollRef = useRef<HTMLDivElement>(null);

  const scrollOutreach = (dir: "left" | "right") => {
    outreachScrollRef.current?.scrollBy({
      left: dir === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <PageMeta
        title="Impact & Outreach"
        description="See how Provision Sight Africa engages schools, organizations, and communities across Africa to test and deploy accessible navigation technology."
        path="/impact"
      />
      <section className="py-20 md:py-32" aria-labelledby="impact-heading">
        <div className="container max-w-4xl text-center">
          <ScrollReveal>
            <h1
              id="impact-heading"
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Impact & <span className="text-gradient-accent">Outreach</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We work directly with schools, organizations, and communities to
              test, refine, and deploy our technology where it's needed most.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card" aria-label="Impact statistics">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <AnimatedCounter end={500} suffix="+" label="Users Reached" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <AnimatedCounter end={15} label="Schools Visited" />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <AnimatedCounter end={10} label="Partnerships" />
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <AnimatedCounter end={6} label="Countries" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Community outreach — horizontal scroll of compact cards */}
      <section className="py-20" aria-labelledby="outreach-heading">
        <div className="container max-w-5xl">
          <ScrollReveal>
            <h2
              id="outreach-heading"
              className="text-2xl font-bold text-foreground text-center mb-4"
            >
              Community <span className="text-gradient-primary">Outreach</span>
            </h2>
            <p className="text-center text-muted-foreground text-sm max-w-2xl mx-auto mb-8">
              Events, programs, and engagements where we test, learn, and grow
              with the disability community and innovation ecosystem.
            </p>
          </ScrollReveal>
          <div className="relative">
            <button
              onClick={() => scrollOutreach("left")}
              className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-muted transition-colors focus-visible-ring hidden md:flex"
              aria-label="Scroll outreach left"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => scrollOutreach("right")}
              className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-muted transition-colors focus-visible-ring hidden md:flex"
              aria-label="Scroll outreach right"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
            <div
              ref={outreachScrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2 scroll-smooth snap-x snap-mandatory"
              role="list"
            >
              {outreaches.map((item, i) => (
                <ScrollReveal
                  key={item.id}
                  delay={Math.min(i * 0.08, 0.4)}
                  className="flex-shrink-0 w-[min(100%,280px)] snap-start"
                >
                  <Link
                    to={`/impact/outreach/${item.id}`}
                    className="block rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-colors group h-full flex flex-col"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={item.images[0].src}
                        alt={item.images[0].alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-1 min-h-0">
                      <h3 className="text-sm font-bold text-foreground mb-1 line-clamp-2">
                        {item.title}
                      </h3>
                      {item.date && (
                        <p className="text-xs text-primary font-medium mb-2">
                          {item.date}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4 overflow-hidden text-ellipsis flex-1">
                        {item.body}
                      </p>
                      <span className="text-xs font-medium text-primary mt-2 inline-flex items-center gap-1 group-hover:underline">
                        Read more →
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outreach map placeholder */}
      <section className="py-16 bg-card" aria-label="Outreach locations">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Where We've Been
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {outreachLocations.map((loc, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="p-4 rounded-xl bg-background border border-border text-center hover:border-primary/30 transition-colors">
                  <span className="text-2xl mb-2 block" aria-hidden="true">
                    📍
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    {loc}
                  </span>
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
            <h2
              id="testimonials-heading"
              className="text-2xl font-bold text-foreground text-center mb-12"
            >
              What People Are Saying
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="p-6 rounded-xl border border-border h-full flex flex-col">
                  <Quote
                    className="w-6 h-6 text-primary mb-4 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <blockquote className="text-muted-foreground leading-relaxed flex-1 mb-4">
                    "{t.quote}"
                  </blockquote>
                  <div>
                    <div className="text-sm font-bold text-foreground">
                      {t.author}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
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
