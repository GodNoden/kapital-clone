# Kapital Landing Page — Study Reconstruction

> A technical exercise: rebuilding the Kapital landing page from scratch to 
> explore frontend performance, internationalization patterns, and component 
> architecture — from a Backend Engineer's perspective.

---

## ⚠️ Important — Legal & Ethical Notice

**This is a study project, not an official Kapital product.**

- All **design credit**, brand identity, copy, logos, and original visual 
  assets belong to **Kapital** (KPTL México Bank).
- This repository **does not redistribute** Kapital's original assets (fonts, SVGs, or 
  copy). Any asset used in the live demo has been **recreated 
  from scratch** for illustration purposes.
- The **code** (Astro components, i18n system, CSS, TypeScript logic) is my own 
  original work and is licensed under MIT.
- This project is **not intended for commercial use**, **not affiliated with 
  Kapital**, and **not published as an official replacement** for their site.
- The purpose is purely educational: to demonstrate backend/frontend integration 
  skills and rapid prototyping ability.

If you are from Kapital and would like this repository modified or removed, 
please open an issue or contact me directly.

---

## Why I Built This

I'm a **Backend Engineer** with 4+ years of experience in Java, Spring Boot, and 
AWS. I applied to a Backend position at Kapital and, before the interview, I 
spent a night exploring their landing page.

While browsing, I noticed a few opportunities — some technical, some related to 
internationalization — and I decided the best way to show initiative was to 
**build a version that addressed them**, rather than just talk about them.

This is that version.

---

## What I Improved

### 1. Real Internationalization (i18n)

**The original site** translates text to English and French, but **graphic 
assets with embedded text remain in Spanish** — SVG cards, charts, and 
in-app screenshots stay in the source language when the user switches locale.

**My approach:** I built a lightweight i18n system that treats **every visible 
string — including text inside graphics — as translatable content**. Text is 
injected into SVG backgrounds at runtime from the same dictionary that powers 
the rest of the site.

**Impact:** Adding a new language means adding keys to a JSON file. No new 
graphics need to be generated.

### 2. Performance

Measured in Chrome DevTools (Incognito, cache disabled, same machine):

| Metric              | Kapital (prod) | This build | Δ         |
|---------------------|----------------|------------|-----------|
| Total requests      | 135            | 54         | **−60%**  |
| Transferred (gzip)  | 3.44 MB        | 1.29 MB    | **−62%**  |
| Uncompressed        | 6.77 MB        | 1.61 MB    | **−76%**  |
| JavaScript          | 1.42 MB        | 30.7 KB    | **−98%**  |
| CSS                 | 243 KB         | 11.9 KB    | **−95%**  |
| HTML                | 258 KB         | 29.6 KB    | **−88%**  |

**Honest note:** Kapital's production site includes third-party scripts 
(analytics, HubSpot, tracking) that this study build does not. The comparison 
reflects **first-party content only** — it is not a claim that "my version is 
faster than Kapital."

### Why I don't compare Lighthouse scores

Lighthouse measures a live environment, not just code. Kapital serves from 
a CDN with brotli compression, HTTP/2, and aggressive caching. This rebuild 
runs on localhost — no CDN, no compression, no cache. A direct Lighthouse 
score comparison would reflect those infrastructure differences more than 
the code itself, so I've left it out of the comparison table.

### 3. Mobile experience

On a Samsung S24 Ultra (high-end device, good connection), the original site's 
images took noticeable time to appear on first load. I rebuilt the app section 
using responsive components that scale proportionally with their container via 
CSS container queries (`cqw`), eliminating layout shift and reducing 
initial payload.

### 4. Componentization

Rather than replicating static images, I rebuilt three of the app-section 
screens as **real, translated components**:

- **Investment plans card** — 3 rows of investment data
- **Payments screen** — accordion + line items
- **Dynamic key screen** — OTP input + actions

Each one pulls its content from the i18n dictionary, so switching locale 
updates everything in place.

---

## Tech Stack

- **[Astro](https://astro.build/)** — static-first framework, zero JS by default
- **TypeScript** — for all logic and type-safe i18n
- **Tailwind CSS v4** — via `@tailwindcss/vite`
- **Swiper.js** — for carousels
- **CSS Container Queries** — for responsive components that scale with 
  their container, not the viewport

---

## Architecture Highlights
```
src/
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   ├── AppSection.astro
│   ├── Planes.astro          # Translated investment card
│   ├── Pagos.astro           # Translated payments card
│   ├── ClaveDinamica.astro   # Translated OTP card
│   └── InversionCard.astro   # Translated hero card
├── i18n/
│   ├── index.ts              # t(lang, key) with dot notation
│   ├── es.json
│   ├── en.json
│   └── fr.json
└── layouts/
    └── Layout.astro
```

**Key decisions:**

- **Type-safe i18n**: `Record<Lang, typeof es>` enforces that all three 
  dictionaries share the same shape. TypeScript fails the build if any 
  translation is missing.
- **Dot-notation resolver**: `t("en", "header.nav.business")` resolves nested 
  keys with fallback to Spanish when a translation is missing.
- **Component scaling via container queries**: translated components scale 
  proportionally to their parent's width, not the viewport, so the same 
  component works in a 300px card and a 600px hero without JS.

---

## What I Learned

- Astro's zero-JS-by-default model is a strong fit for marketing pages.
- **Internationalization is architecture, not translation**. Treating graphics 
  as static assets is what breaks multi-language sites.
- **Backend thinking applies everywhere**: this is essentially an i18n 
  resolver, a component composition system, and a performance budget — all 
  things a backend engineer reasons about daily.

---

## Running Locally

```bash
# Install dependencies
npm install

# Dev server (http://localhost:4321)
npm run dev

# Production build
npm run build

# Preview the production build
npm run preview

Credits
Design language, brand identity, and product concept: Kapital.

All code in this repository: Noé Quezada (@GodNoden).

No third-party code was copied from Kapital's site.

