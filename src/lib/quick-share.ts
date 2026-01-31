/**
 * Quick Share QR code target URLs.
 * Update these to change what each QR code links to (no need to replace image assets).
 */
export const QUICK_SHARE_URLS = {
  linkedin: "https://www.linkedin.com/company/provision-sight-africa/",
  instagram: "https://instagram.com/provision_africa",
  website: "https://provision.co.ke",
} as const;

export type QuickShareKey = keyof typeof QUICK_SHARE_URLS;
