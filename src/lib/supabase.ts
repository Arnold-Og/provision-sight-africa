import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase env vars (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY) are missing. Form submissions will not be saved."
  );
}

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl.trim(), supabaseAnonKey.trim())
    : null;

/** Map Supabase/PostgREST error to user-facing message for toasts. */
export function getSubmitErrorMessage(error: {
  message?: string;
  code?: string;
  status?: number;
}): string {
  const msg = (error.message ?? "").toLowerCase();
  const status = error.status;
  if (status === 401 || status === 403 || msg.includes("permission") || msg.includes("policy")) {
    return "You don't have permission to submit. Please try again or email us directly.";
  }
  if (status === 422 || status === 400 || msg.includes("invalid") || msg.includes("constraint")) {
    return "Invalid or duplicate submission. Please check your details and try again.";
  }
  if (status != null && status >= 500) {
    return "Our servers are temporarily unavailable. Please try again in a moment.";
  }
  if (msg.includes("fetch") || msg.includes("network") || msg.includes("failed to fetch")) {
    return "Network error. Please check your connection and try again.";
  }
  return "Something went wrong. Please try again or email us directly.";
}
