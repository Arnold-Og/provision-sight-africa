import { Handshake, ChevronDown } from "lucide-react";
import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";
import headsetImage from "@/assets/headset-1.jpg";
import thikaSchool from "@/assets/partners/thika-school.png";
import kilimanjaroTrust from "@/assets/partners/kilimanjaro-blind-trust.png";
import kenyaSociety from "@/assets/partners/kenya-society-blind.png";
import strathmore from "@/assets/partners/strathmore.png";
import ibizAfrica from "@/assets/partners/ibiz-africa.png";
import at4d from "@/assets/partners/at4d.png";
import zerobionic from "@/assets/partners/zerobionic.png";
import ddqic from "@/assets/partners/ddqic.png";
import innovateNow from "@/assets/partners/innovate-now.png";

const Partners = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const partners = [
    {
      name: "Thika School for the Blind",
      logo: thikaSchool,
      description: "A leading institution providing quality education and skills training for visually impaired students in Kenya.",
    },
    {
      name: "Kilimanjaro Blind Trust",
      logo: kilimanjaroTrust,
      description: "Dedicated to improving literacy and independence for blind and visually impaired individuals in East Africa through Braille and accessible technology.",
    },
    {
      name: "Kenya Society for the Blind",
      logo: kenyaSociety,
      description: "Kenya's premier organization advocating for the rights and empowerment of persons with visual disabilities.",
    },
    {
      name: "Strathmore University",
      logo: strathmore,
      description: "A leading African university fostering innovation and entrepreneurship through research and technology development.",
    },
    {
      name: "iBiz Africa",
      logo: ibizAfrica,
      description: "Strathmore's innovation hub driving digital transformation and ICT research across Africa.",
    },
    {
      name: "AT4D",
      logo: at4d,
      description: "Assistive Technologies for Disability Trust - advancing accessible technology solutions for persons with disabilities globally.",
    },
    {
      name: "Zerobionic",
      logo: zerobionic,
      description: "An innovative technology company developing cutting-edge assistive devices for enhanced independence.",
    },
    {
      name: "DDQIC - Queen's University",
      logo: ddqic,
      description: "Dunin-Deshpande Queen's Innovation Centre - fostering social innovation and entrepreneurship for positive impact.",
    },
    {
      name: "Innovate Now",
      logo: innovateNow,
      description: "A dynamic incubator supporting early-stage startups and social enterprises with mentorship and resources.",
    },
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border-2 border-border bg-card transition-all duration-500 hover:shadow-2xl"
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onMouseEnter={() => setExpandedCard(index)}
                  onMouseLeave={() => setExpandedCard(null)}
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                >
                  {/* Card Content */}
                  <div className="relative z-10 p-6 bg-white/95 backdrop-blur-sm cursor-pointer">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-full h-24 flex items-center justify-center p-2 bg-white rounded-lg">
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} logo`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-center font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {partner.name}
                        </h4>
                        <ChevronDown 
                          className={`w-5 h-5 text-primary transition-transform duration-300 ${
                            expandedCard === index ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Expandable Description */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out bg-gradient-to-b from-primary/5 to-primary/10 ${
                      expandedCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 pt-2">
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                  </div>
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
