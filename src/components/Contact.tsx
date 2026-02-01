import { useState, useEffect } from "react";
import { Mail, Bell } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";
import ScrollAnimation from "./ScrollAnimation";
import { trackEvent } from "./GoogleAnalytics";

const CONTACT_FORM_NAME = "contact";
const KEEP_ME_NOTIFIED_FORM_NAME = "keep-me-notified";

const NOTIFICATION_TYPES = [
  {
    id: "awareness",
    label: "Awareness and education of our product",
    defaultSubject: "Awareness and education – ProVision",
    defaultMessage:
      "I'd like to learn more about ProVision and your educational resources.",
  },
  {
    id: "leads",
    label: "Leads and inquiries",
    defaultSubject: "Leads and inquiries – ProVision",
    defaultMessage:
      "I have a question or would like more information about ProVision.",
  },
  {
    id: "trials",
    label: "Trials and demo requests",
    defaultSubject: "Trial / demo request – ProVision",
    defaultMessage:
      "I'd like to request a trial or schedule a demo of the ProVision device.",
  },
] as const;

const KEEP_ME_NOTIFIED_SUBJECT = "Keep me notified – ProVision";
const KEEP_ME_NOTIFIED_MESSAGE =
  "Please add me to your mailing list for product updates and news.";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [notificationType, setNotificationType] = useState<string>(
    NOTIFICATION_TYPES[0].id
  );
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: NOTIFICATION_TYPES[0].defaultSubject,
    message: NOTIFICATION_TYPES[0].defaultMessage,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [keepMeNotifiedEmail, setKeepMeNotifiedEmail] = useState("");
  const [isNotifySubmitting, setIsNotifySubmitting] = useState(false);

  const currentType = NOTIFICATION_TYPES.find((t) => t.id === notificationType);

  useEffect(() => {
    const type = NOTIFICATION_TYPES.find((t) => t.id === notificationType);
    if (type) {
      setFormData((prev) => ({
        ...prev,
        subject: type.defaultSubject,
        message: type.defaultMessage,
      }));
    }
  }, [notificationType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const body = new URLSearchParams({
        "form-name": CONTACT_FORM_NAME,
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
      trackEvent("generate_lead", {
        form_name: "contact",
        notification_type: notificationType,
      });
      toast.success("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: currentType?.defaultSubject ?? "",
        message: currentType?.defaultMessage ?? "",
      });
    } catch {
      toast.error(
        "Something went wrong. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeepMeNotified = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = keepMeNotifiedEmail.trim();
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }
    setIsNotifySubmitting(true);
    try {
      const body = new URLSearchParams({
        "form-name": KEEP_ME_NOTIFIED_FORM_NAME,
        email,
        subject: KEEP_ME_NOTIFIED_SUBJECT,
        message: KEEP_ME_NOTIFIED_MESSAGE,
      }).toString();

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!res.ok) throw new Error("Submission failed");
      trackEvent("generate_lead", {
        form_name: "keep_me_notified",
      });
      toast.success("You're on the list! We'll keep you notified.");
      setKeepMeNotifiedEmail("");
    } catch {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsNotifySubmitting(false);
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
                    onClick={() =>
                      trackEvent("outbound_click", {
                        link_url: "mailto:blindsightafrica@gmail.com",
                      })
                    }
                  >
                    blindsightafrica@gmail.com
                  </a>
                </div>
                <div className="p-6 rounded-lg bg-card border-2 border-border space-y-4">
                  <p className="text-lg font-semibold text-foreground">
                    Or send us a message
                  </p>
                  <p className="text-muted-foreground">
                    Fill out the form and we'll get back to you as soon as
                    possible.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-card border-2 border-border space-y-4">
                  <p className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Bell className="h-5 w-5 text-primary" />
                    Keep me notified
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Get updates on awareness, education, leads, trials, and
                    demos.
                  </p>
                  <form
                    name={KEEP_ME_NOTIFIED_FORM_NAME}
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleKeepMeNotified}
                    className="flex flex-col sm:flex-row gap-2"
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value={KEEP_ME_NOTIFIED_FORM_NAME}
                    />
                    <Input
                      type="email"
                      placeholder="Your email"
                      value={keepMeNotifiedEmail}
                      onChange={(e) => setKeepMeNotifiedEmail(e.target.value)}
                      required
                      className="flex-1"
                      disabled={isNotifySubmitting}
                    />
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isNotifySubmitting}
                      className="shrink-0"
                    >
                      {isNotifySubmitting ? "Submitting…" : "Keep me notified"}
                    </Button>
                  </form>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <form
                name={CONTACT_FORM_NAME}
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input
                  type="hidden"
                  name="form-name"
                  value={CONTACT_FORM_NAME}
                />
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    What can we help with?
                  </label>
                  <Select
                    value={notificationType}
                    onValueChange={setNotificationType}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {NOTIFICATION_TYPES.map((type) => (
                        <SelectItem key={type.id} value={type.id}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name (optional)"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
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
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
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
