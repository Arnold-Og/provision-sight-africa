import emailjs from "@emailjs/browser";

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export function isEmailJsConfigured(): boolean {
  return Boolean(publicKey && serviceId && templateId);
}

export type ContactEmailPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendContactEmail(payload: ContactEmailPayload) {
  if (!isEmailJsConfigured()) {
    throw new Error(
      "Email is not configured. Please email us at provisionsightafrica@gmail.com.",
    );
  }

  const time = new Date().toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  await emailjs.send(
    serviceId,
    templateId,
    {
      name: payload.name,
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
      time,
    },
    { publicKey },
  );
}
