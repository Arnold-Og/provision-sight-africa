import PageMeta from "@/components/PageMeta";
import ScrollReveal from "@/components/ScrollReveal";
import SightDemoClient from "@/components/SightDemoClient";
import { Link } from "react-router-dom";
import { ArrowRight, Eye, Shield } from "lucide-react";

const Demo = () => {
  return (
    <div>
      <PageMeta
        title="Try the Demo"
        description="Experience Provision Sight Africa's assistive vision technology live in your browser. Point your camera and hear AI-powered scene descriptions."
        path="/demo"
      />

      <section className="py-16 md:py-24" aria-labelledby="demo-heading">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              <Eye className="h-3.5 w-3.5" aria-hidden="true" />
              Live demo
            </span>
            <h1
              id="demo-heading"
              className="mb-4 text-4xl font-bold text-foreground md:text-5xl"
            >
              Try <span className="text-gradient-primary">Provision Sight</span> now
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Point your camera at your surroundings and hear short, spoken descriptions
              every few seconds — the same assistive vision experience our smart glasses
              deliver in the field.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-8" aria-label="Interactive demo">
        <div className="container">
          <ScrollReveal delay={0.1}>
            <SightDemoClient />
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20" aria-label="Demo tips">
        <div className="container max-w-2xl">
          <ScrollReveal delay={0.15}>
            <div className="rounded-xl border border-border bg-muted/40 p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Shield className="h-4 w-4 text-primary" aria-hidden="true" />
                Before you start
              </div>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>Allow camera access when your browser prompts you.</li>
                <li>
                  Keep your volume on — descriptions are read aloud using your device&apos;s
                  speech engine.
                </li>
                <li>
                  The vision service may take a moment to load on first use; status updates
                  appear at the bottom of the camera preview.
                </li>
                <li>
                  This demo runs in your browser. Frames are sent to our vision API for
                  processing only while the demo is active.
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Need a guided walkthrough for your organization?{" "}
              <Link
                to="/contact?reason=request-demo"
                className="inline-flex items-center gap-1 font-semibold text-primary hover:underline focus-visible-ring rounded-sm"
              >
                Request a live demo
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Demo;
