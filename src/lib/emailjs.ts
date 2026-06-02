import emailjs from "@emailjs/browser";

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const contactTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const betaTemplateId = import.meta.env.VITE_EMAILJS_BETA_TEMPLATE_ID;

function hasEmailJsCore(): boolean {
  return Boolean(publicKey && serviceId);
}

function formatSubmissionTime(): string {
  return new Date().toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function isEmailJsConfigured(): boolean {
  return Boolean(hasEmailJsCore() && contactTemplateId);
}

export function isBetaTesterEmailJsConfigured(): boolean {
  return Boolean(hasEmailJsCore() && betaTemplateId);
}

export type ContactEmailPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type BetaTesterEmailPayload = {
  name: string;
  email: string;
  organization?: string;
  role: string;
  location: string;
};

const ROLE_LABELS: Record<string, string> = {
  "visually-impaired": "A visually impaired individual",
  supporter: "Supporting accessibility work",
  organization: "Representing an organization",
  researcher: "A researcher in assistive technology",
};

export function formatBetaTesterRole(role: string): string {
  return ROLE_LABELS[role] ?? role;
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  if (!isEmailJsConfigured()) {
    throw new Error(
      "Email is not configured. Please email us at contactus@provisionsightafrica.com.",
    );
  }

  await emailjs.send(
    serviceId,
    contactTemplateId,
    {
      name: payload.name,
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
      time: formatSubmissionTime(),
    },
    { publicKey },
  );
}

export async function sendBetaTesterEmail(payload: BetaTesterEmailPayload) {
  if (!isBetaTesterEmailJsConfigured()) {
    throw new Error(
      "Email is not configured. Please email us at contactus@provisionsightafrica.com.",
    );
  }

  await emailjs.send(
    serviceId,
    betaTemplateId,
    {
      name: payload.name,
      email: payload.email,
      organization: payload.organization?.trim() || "Not provided",
      role: formatBetaTesterRole(payload.role),
      location: payload.location,
      time: formatSubmissionTime(),
    },
    { publicKey },
  );
}
