import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, MapPin, Send } from "lucide-react";
import { z } from "zod";
import PageMeta from "@/components/PageMeta";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div>
      <PageMeta
        title="Contact Us"
        description="Get in touch with Provision Sight Africa — request a demo, explore partnerships, or ask questions about our accessible navigation technology."
        path="/contact"
      />
      <section className="pt-20 pb-10 md:pt-32" aria-labelledby="contact-heading">
        <div className="container max-w-4xl text-center">
          <ScrollReveal>
            <h1
              id="contact-heading"
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Get In <span className="text-gradient-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions, partnership ideas, or want to request a demo? We'd
              love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ScrollReveal delay={0.1}>
              <div className="text-center flex flex-col items-center justify-center p-6 rounded-xl bg-card border border-border">
                <Mail
                  className="w-6 h-6 text-primary mx-auto mb-3"
                  aria-hidden="true"
                />
                <h3 className="font-bold text-foreground mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">
                  provisionsightafrica@gmail.com
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="text-center flex flex-col items-center justify-center p-6 rounded-xl bg-card border border-border">
                <MapPin
                  className="w-6 h-6 text-primary mx-auto mb-3"
                  aria-hidden="true"
                />
                <h3 className="font-bold text-foreground mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">Africa</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="text-center flex flex-col items-center justify-center p-6 rounded-xl bg-card border border-border">
                <Send
                  className="w-6 h-6 text-primary mx-auto mb-3"
                  aria-hidden="true"
                />
                <h3 className="font-bold text-foreground mb-1">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/company/provision-sight-africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline focus-visible-ring rounded-sm"
                >
                  Follow us
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            {submitted ? (
              <div
                className="text-center p-12 rounded-xl bg-card border border-primary/30"
                role="status"
              >
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Thank You!
                </h2>
                <p className="text-muted-foreground">
                  We've received your message and will get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-xl bg-card border border-border space-y-6"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-foreground mb-2"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="text-sm text-destructive mt-1"
                        role="alert"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-foreground mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="text-sm text-destructive mt-1"
                        role="alert"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-foreground mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                    aria-describedby={
                      errors.subject ? "subject-error" : undefined
                    }
                    aria-invalid={!!errors.subject}
                  />
                  {errors.subject && (
                    <p
                      id="subject-error"
                      className="text-sm text-destructive mt-1"
                      role="alert"
                    >
                      {errors.subject}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-foreground mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow resize-y"
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="text-sm text-destructive mt-1"
                      role="alert"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity focus-visible-ring glow-primary"
                >
                  Send Message
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
