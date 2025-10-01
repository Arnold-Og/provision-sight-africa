import { Handshake } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const Partners = () => {
  const partners = [
    "Kilimanjaro School for the Blind",
    "Kilimanjaro Blind Trust",
    "ATiD",
    "ADD International",
    "Strathmore University – iBiz Africa",
    "Zerobionic",
    "Innovate Now",
    "DDDCIC – Queen's University",
    "InAble",
    "DOTIC",
  ];

  return (
    <section id="partners" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <ScrollAnimation>
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Handshake className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Partners & Collaborators
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We proudly collaborate with leading organizations to make accessibility a reality
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border-2 border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <p className="text-center font-medium text-foreground group-hover:text-primary transition-colors">
                    {partner}
                  </p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Partners;
