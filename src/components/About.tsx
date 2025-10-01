import { Shield, Users, Navigation, Phone } from "lucide-react";
import { Card } from "./ui/card";
import ScrollAnimation from "./ScrollAnimation";
import headset1 from "@/assets/headset-1.jpg";
import headset2 from "@/assets/headset-2.jpg";

const About = () => {
  const benefits = [
    {
      icon: Navigation,
      title: "Safe Movement",
      description: "Navigate confidently without strain",
    },
    {
      icon: Users,
      title: "Person Detection",
      description: "Identify people in your surroundings",
    },
    {
      icon: Shield,
      title: "Indoor & Outdoor",
      description: "Seamless navigation everywhere",
    },
    {
      icon: Phone,
      title: "Emergency Contact",
      description: "Reach trusted contacts instantly",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <ScrollAnimation>
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Trouble moving about?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Moving about in unfamiliar indoor environments may cause anxiety. Sometimes it's not exactly "scary," but not knowing where you are — or having to rely on strangers — can be uncomfortable.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="text-center space-y-6 py-8">
              <p className="text-2xl font-semibold text-foreground">
                With ProVision, you'll have your <span className="text-primary">own assistant</span> with you everywhere you go.
              </p>
              <p className="text-xl text-muted-foreground italic">
                Fascinating, right?
              </p>
            </div>
          </ScrollAnimation>

          {/* Product Images Showcase */}
          <ScrollAnimation delay={300}>
            <div className="grid md:grid-cols-2 gap-8 py-8">
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={headset1} 
                  alt="ProVision Headset Device" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={headset2} 
                  alt="ProVision Technology" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={400}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-center text-foreground">
                How it works
              </h3>
              <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
                Using advanced AI algorithms, our device captures your environment and relays information in <span className="font-semibold text-foreground">real-time</span> using audio.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={500}>
            <div className="grid md:grid-cols-2 gap-6 pt-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-foreground">
                          {benefit.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
