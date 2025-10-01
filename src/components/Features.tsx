import { MapPin, Navigation, Users, BookOpen, PhoneCall } from "lucide-react";
import { Card } from "./ui/card";
import ScrollAnimation from "./ScrollAnimation";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Indoor Navigation",
      description: "Move confidently inside rooms and buildings",
    },
    {
      icon: Navigation,
      title: "Outdoor Navigation",
      description: "Navigate fields, paths, and open spaces",
    },
    {
      icon: Users,
      title: "Person Identification",
      description: "Detect people nearby, with details such as gender — announced aloud in real-time",
    },
    {
      icon: BookOpen,
      title: "Text Reading",
      description: "Read printed or handwritten text aloud (e.g., pages, signs)",
    },
    {
      icon: PhoneCall,
      title: "Emergency Contacting",
      description: "Share your live location with trusted contacts at the tap of a button",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <ScrollAnimation>
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need for safe, independent navigation
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card
                    className="p-6 space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary group"
                  >
                    <div className="p-4 rounded-lg bg-primary/10 w-fit group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
