/**
 * Quick Share QR code target URLs.
 * Update these to change what each QR code links to (no need to replace image assets).
 */
export const QUICK_SHARE_URLS = {
  linkedin: "https://linkedin.com/company/provision-sight-africa",
  instagram: "https://www.instagram.com/provisionsightafrica/",
  website: "https://provisionsightafrica.com",
} as const;

export type QuickShareKey = keyof typeof QUICK_SHARE_URLS;
