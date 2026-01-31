import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import ScrollAnimation from "./ScrollAnimation";

const ENCODED_FORM_NAME = "contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const body = new URLSearchParams({
        "form-name": ENCODED_FORM_NAME,
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }).toString();

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!res.ok) throw new Error("Submission failed");
      toast.success("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <ScrollAnimation>
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Mail className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                Have questions? Want to support or partner with us?
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimation delay={200}>
              <div className="space-y-6">
                <div className="p-6 rounded-lg bg-card border-2 border-border">
                  <p className="text-lg font-semibold text-foreground mb-2">
                    Email Us
                  </p>
                  <a
                    href="mailto:blindsightafrica@gmail.com"
                    className="text-primary hover:underline text-lg"
                  >
                    blindsightafrica@gmail.com
                  </a>
                </div>
                <div className="p-6 rounded-lg bg-card border-2 border-border space-y-4">
                  <p className="text-lg font-semibold text-foreground">
                    Or send us a message
                  </p>
                  <p className="text-muted-foreground">
                    Fill out the form and we'll get back to you as soon as possible.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <form
                name={ENCODED_FORM_NAME}
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value={ENCODED_FORM_NAME} />
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending…" : "Send Message"}
                </Button>
              </form>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
