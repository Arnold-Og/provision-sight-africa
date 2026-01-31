/**
 * Quick Share QR code target URLs (final destinations after redirect).
 * Update these to change where each QR code ultimately sends users.
 */
export const QUICK_SHARE_URLS = {
  linkedin: "https://www.linkedin.com/company/provision-sight-africa/",
  instagram: "https://instagram.com/provision_africa",
  website: "https://provision.co.ke",
} as const;

export type QuickShareKey = keyof typeof QUICK_SHARE_URLS;

/** Base URL of this site (used for QR redirect links so scans can be tracked). Set VITE_SITE_URL in .env if different. */
const SITE_BASE =
  (typeof import.meta !== "undefined" && (import.meta as unknown as { env?: { VITE_SITE_URL?: string } }).env?.VITE_SITE_URL) ||
  "https://provision.co.ke";

/**
 * URLs to encode in each QR code. These point to /qr/:source on this site so that
 * a scan is recorded in GA (event: qr_scan, param: qr_source) before redirecting to QUICK_SHARE_URLS.
 * Monitor scans in GA4: Events → qr_scan, then break down by qr_source.
 */
export const QUICK_SHARE_QR_URLS: Record<QuickShareKey, string> = {
  linkedin: `${SITE_BASE.replace(/\/$/, "")}/qr/linkedin`,
  instagram: `${SITE_BASE.replace(/\/$/, "")}/qr/instagram`,
  website: `${SITE_BASE.replace(/\/$/, "")}/qr/website`,
};
