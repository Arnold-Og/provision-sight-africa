# Phase 1 Step 3: Technical SEO & Performance Audit

**Site URL:** https://provision.co.ke/  
**Stack:** React 18 + Vite 7 + React Router 6 + Tailwind + shadcn/ui (Lovable export)  
**Deploy:** Netlify  
**Audit date:** 2025-01-31  

---

## 1. Performance & SEO Audits Summary

*Note: PageSpeed Insights API and live fetch from this environment timed out. The summary below is based on build output analysis, codebase review, and typical Lighthouse/PageSpeed findings for this stack.*

### 1.1 Simulated / Inferred Scores (Desktop vs Mobile)

| Category           | Desktop (est.) | Mobile (est.) | Notes |
|--------------------|----------------|--------------|--------|
| **Performance**    | 70–85          | 55–75        | Heavy images + single JS chunk hurt mobile LCP/TBT. |
| **Accessibility**  | 85–95          | 85–95        | Good: semantic HTML, alt on images. Improve: focus, contrast if any. |
| **Best Practices**| 80–90          | 80–90        | HTTPS, no obvious console errors. |
| **SEO**            | 75–88          | 75–88        | Meta title/desc present; missing og:image, canonical; client-side only. |

### 1.2 Core Web Vitals (Typical Impact)

| Metric   | Expected issue | Cause |
|----------|----------------|--------|
| **LCP**  | Often 2.5s+ on mobile | Hero image (hero-bg.webp) not prioritized; no `fetchpriority="high"`; possible render-blocking JS. |
| **INP/FID** | Low risk | Minimal heavy main-thread work; QR generation in Header could add small delay. |
| **CLS**  | Low risk | Images have dimensions via Tailwind; ensure no layout shift from lazy-loaded below-fold images. |

### 1.3 Top 5–8 Opportunities / Diagnostics

1. **Image weight (critical)**  
   - `thika-school.png` ≈ **3,051 KB** in build — by far the largest asset.  
   - `ibiz-africa.png` ≈ 217 KB, `headset-2.jpg` ≈ 215 KB, `headset-1.jpg` ≈ 138 KB.  
   - **Action:** Compress/convert to WebP, resize to display size, consider Netlify Image CDN.

2. **No `loading="lazy"` on below-the-fold images**  
   - Hero image is LCP (keep eager); About (headset-1, headset-2) and Partners logos should be lazy.  
   - **Action:** Add `loading="lazy"` (and optionally `decoding="async"`) to non-LCP `<img>`.

3. **LCP image not prioritized**  
   - Hero uses `hero-bg.webp` but has no `fetchpriority="high"` or preload.  
   - **Action:** Add `fetchpriority="high"` to hero `<img>` and/or `<link rel="preload" as="image">` in `index.html`.

4. **Single JS bundle (no code-splitting)**  
   - One chunk: `index-*.js` ≈ 376 KB (122 KB gzip). All routes/components load upfront.  
   - **Action:** Use `React.lazy()` + `Suspense` for below-fold sections (About, Features, Testimonials, Partners, Contact) to reduce initial JS.

5. **Missing SEO/social meta**  
   - No `og:image`, `og:url`, `twitter:card`, or `canonical`.  
   - **Action:** Add in `index.html` (and ensure og:image URL is absolute).

6. **Client-side only (no SSR)**  
   - React Router + single `index.html`; crawlers get the shell then JS.  
   - **Action:** Ensure critical content is in HTML (meta, title, description already are). For deep links, consider Netlify redirects or prerender if needed later.

7. **No Netlify asset optimization**  
   - No `netlify.toml` found.  
   - **Action:** Add `netlify.toml` with asset optimization / cache headers.

8. **Browserslist data outdated**  
   - Build warns: “caniuse-lite is 7 months old”.  
   - **Action:** Run `npx update-browserslist-db@latest` (minor impact).

### 1.4 Mobile-Friendly Test (Inferred)

- **Viewport:** `meta name="viewport" content="width=device-width, initial-scale=1.0"` is present in `index.html` — good.
- **Touch targets:** Buttons/links appear large enough (Tailwind/shadcn).
- **Content width:** Layout is responsive (Tailwind breakpoints).
- **Recommendation:** Run [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly?url=https://provision.co.ke/) once to confirm no mobile usability errors.

### 1.5 Lighthouse in Chrome DevTools

- **How to run:** F12 → Lighthouse tab → select Mobile/Desktop, Performance, Accessibility, Best Practices, SEO → Analyze.
- **After fixes:** Re-run and compare LCP, TBT, and SEO score.

---

## 2. Lovable / React / Vite Issues Analysis

| Issue | Finding | SEO/Speed impact |
|-------|---------|-------------------|
| **Bloated bundles** | Single 376 KB JS chunk; no `React.lazy`. Many Radix/shadcn components and deps (recharts, react-query, etc.) in one bundle. | Slower TTI/TBT, especially on mobile. |
| **Unoptimized images** | JPG/PNG imported in JS; Vite hashes and outputs as-is. One PNG ~3 MB. No `sizes`/`srcset`. | Large LCP and total image payload. |
| **No lazy loading** | All `<img>` load eagerly except where browser heuristics apply. | Wasted bandwidth, possible LCP contention. |
| **Client-side only** | No SSR; single `index.html` + React mount. | Crawlers that execute JS will see content; meta in HTML is good for snippets. |
| **React Router** | `BrowserRouter`; only `/` and `*` (NotFound). Direct link to `/` works; other routes 404 then client render. | No deep links yet; minimal SEO risk. If you add routes later, ensure Netlify redirects or prerender for crawlers. |

---

## 3. Code Fixes (Prioritized)

### 3.1 Images: Lazy loading + LCP priority

**Files to edit:**

- `src/components/Hero.tsx` — LCP image: add `fetchpriority="high"` and `decoding="async"`. Do **not** add `loading="lazy"`.
- `src/components/About.tsx` — headset images: add `loading="lazy"` and `decoding="async"`.
- `src/components/Partners.tsx` — partner logos: add `loading="lazy"` and `decoding="async"`.
- `src/components/Header.tsx` — logo is above the fold; keep eager. Optional: `decoding="async"`.

**Snippets:**

**Hero.tsx (hero image — LCP):**
```tsx
<img
  src={heroImage}
  alt="Empowering independence"
  className="w-full h-full object-cover"
  fetchPriority="high"
  decoding="async"
/>
```

**About.tsx (both headset images):**
```tsx
<img
  src={headset1}
  alt="ProVision Headset Device - First Prototype"
  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  loading="lazy"
  decoding="async"
/>
```
(Same for headset2.)

**Partners.tsx (logo img):**
```tsx
<img
  src={partner.logo}
  alt={`${partner.name} logo`}
  className="max-w-full max-h-full object-contain"
  loading="lazy"
  decoding="async"
/>
```

### 3.2 Preload LCP image (optional but recommended)

**File:** `index.html`

Add in `<head>` (after existing meta, before `</head>`):
```html
<link rel="preload" as="image" href="/src/assets/hero-bg.webp" />
```
Note: After build, Vite will output hashed paths. For preload to work with Vite, you can either:
- Use a plugin that injects preload for the hero image, or
- Put a copy of `hero-bg.webp` in `public/` and preload `href="/hero-bg.webp"` (then reference the same in Hero or use it only for preload).  
Simplest: rely on `fetchpriority="high"` and ensure hero image is the first image in the DOM; add preload later if you use a build-time preload plugin.

### 3.3 Meta tags: og:image, canonical, Twitter

**File:** `index.html`

Add (adjust URLs to your production domain and image):
```html
<link rel="canonical" href="https://provision.co.ke/" />
<meta property="og:image" content="https://provision.co.ke/og-image.jpg" />
<meta property="og:url" content="https://provision.co.ke/" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://provision.co.ke/og-image.jpg" />
```
Create and deploy an `og-image.jpg` (e.g. 1200×630) in `public/` so the URL resolves.

### 3.4 Code-splitting with React.lazy

**File:** `src/pages/Index.tsx`

- Lazy-load below-fold sections so the initial JS chunk is smaller.

**Example:**
```tsx
import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const About = lazy(() => import("@/components/About"));
const Features = lazy(() => import("@/components/Features"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Partners = lazy(() => import("@/components/Partners"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Suspense fallback={<div className="min-h-[50vh]" />}>
        <About />
        <Features />
        <Testimonials />
        <Partners />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};
```
You can use a single `Suspense` or one per section with a small fallback (e.g. skeleton) to avoid layout shift.

### 3.5 Netlify: asset optimization and cache

**File:** Create `netlify.toml` in project root.

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

Enable “Asset optimization” (or “Bundle optimization”) in Netlify dashboard if available for your plan.

### 3.6 Image compression (external / tooling)

- **thika-school.png (~3 MB):** Resize to max width/height needed (e.g. 400px), export as WebP (and optionally PNG fallback). Replace in `src/assets/partners/` and re-import in `Partners.tsx` if you change the filename.
- **Other large PNGs/JPGs:** Use Squoosh, Sharp, or Netlify Image CDN (e.g. `?nf_resize=fit&w=400`) if you serve images from a URL. For Vite-bundled assets, compress before committing.
- **Netlify Image CDN:** If you move hero/partners to `public/` or a CDN, you can use query params for resizing/format; then reference those URLs in the app.

---

## 4. Quick Wins List (Prioritized)

| # | Action | File(s) | Est. impact |
|---|--------|--------|-------------|
| 1 | Compress/replace `thika-school.png` (→ &lt;200 KB WebP or PNG) | `src/assets/partners/thika-school.png` | **Large** — save ~2.8 MB, big LCP/bandwidth gain. |
| 2 | Add `loading="lazy"` and `decoding="async"` to About + Partners images | `About.tsx`, `Partners.tsx` | **Medium** — faster initial load, better LCP. |
| 3 | Add `fetchpriority="high"` and `decoding="async"` to hero image | `Hero.tsx` | **Medium** — better LCP score. |
| 4 | Add `og:image`, `canonical`, `og:url`, Twitter meta | `index.html` | **SEO** — better sharing and indexing. |
| 5 | Create `netlify.toml` with cache headers for assets | New `netlify.toml` | **Medium** — better repeat-visit performance. |
| 6 | Code-split below-fold sections with `React.lazy` + `Suspense` | `pages/Index.tsx` | **Medium** — smaller initial JS, better TBT/TTI. |
| 7 | Compress `headset-2.jpg` and `ibiz-africa.png` (target &lt;100 KB each) | Assets + imports | **Medium** — less bandwidth. |
| 8 | Run `npx update-browserslist-db@latest` | — | **Low** — up-to-date targets. |
| 9 | Add 1200×630 `og-image.jpg` in `public/` and reference in meta | `public/`, `index.html` | **SEO** — required for og:image to work. |
| 10 | (Optional) Preload hero image via plugin or `public/` copy | `index.html` or Vite plugin | **Small** — marginal LCP improvement. |

---

## 5. Next Steps

1. **Confirm URL:** Audit was performed for **https://provision.co.ke/**.
2. **Run live audits yourself:**  
   - [PageSpeed Insights](https://pagespeed.web.dev/analysis?url=https://provision.co.ke/) (Desktop + Mobile).  
   - [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly?url=https://provision.co.ke/).  
   - Chrome DevTools → Lighthouse.
3. **Apply code changes** (in order: meta tags, lazy/priority on images, code-split, netlify.toml).
4. **Compress/replace** `thika-school.png` and other large images; re-build and verify `dist/` sizes.
5. **Re-run PageSpeed and Lighthouse** after deploy; compare scores and CWV.
6. **Commit and push** to trigger Netlify deploy; confirm production URL and meta with a social debugger (e.g. Facebook Sharing Debugger, Twitter Card Validator).

---

*End of audit.*
