import { Quote } from "lucide-react";
import { Card } from "./ui/card";
import ScrollAnimation from "./ScrollAnimation";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I am really excited to see how far you can go with this! Count me in for your journey.",
      author: "Alex Kaluyu",
      role: "Head of Education and Rehabilitation, KSB",
    },
    {
      quote: "I can't wait to see how this will allow me move with more independence than ever before.",
      author: "Bethlyn Wandia",
      role: "Receptionist, KSB",
    },
    {
      quote: "This program is going to making a real difference for the visually impaired community.",
      author: "Kristine Nyabera",
      role: "Programme Officer, IAPB",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <ScrollAnimation>
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Testimonials
              </h2>
              <p className="text-lg text-muted-foreground">
                Hear from those who experience the difference
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={index} delay={index * 150}>
                <Card
                  className="p-8 space-y-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary h-full"
                >
                  <Quote className="w-12 h-12 text-primary opacity-50" />
                  <p className="text-lg text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
