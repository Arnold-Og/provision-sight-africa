import { useState } from "react";
import { FlaskConical } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import ScrollAnimation from "./ScrollAnimation";
import { trackEvent } from "./GoogleAnalytics";

const BETA_TESTER_FORM_NAME = "beta-tester";

type BetaFormData = {
  name: string;
  email: string;
  message: string;
};

const BetaCTA = () => {
  const [formData, setFormData] = useState<BetaFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const body = new URLSearchParams({
        "form-name": BETA_TESTER_FORM_NAME,
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }).toString();

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!res.ok) throw new Error("Submission failed");
      trackEvent("generate_lead", { form_name: "beta_tester" });
      toast.success("Thank you! We'll be in touch about beta testing.");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast.error(
        "Something went wrong. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="beta-cta" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <ScrollAnimation>
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <FlaskConical className="w-10 h-10 text-primary-foreground" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Be a Beta Tester
              </h2>
              <p className="text-lg text-primary-foreground/90">
                We have finished development of our application and are
                currently in beta testing. Would you like to be a beta tester?
                Fill in the form today.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <form
              name={BETA_TESTER_FORM_NAME}
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4 p-6 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20"
            >
              <input
                type="hidden"
                name="form-name"
                value={BETA_TESTER_FORM_NAME}
              />
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Your Name
                </label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full bg-background text-foreground border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Your Email
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full bg-background text-foreground border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us a bit about yourself or why you'd like to beta test..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="w-full resize-none bg-background text-foreground border-border"
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                size="lg"
                variant="secondary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting…" : "Apply to be a beta tester"}
              </Button>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default BetaCTA;
