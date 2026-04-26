# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run lint     # ESLint
```

E2E tests run via Playwright against a live dev server:

```bash
npm run test:e2e              # run all Playwright tests (Chromium, WebKit, Mobile Safari)
npx playwright test e2e/ux.spec.ts  # run a single spec
```

A QA audit script also runs via `npm run qa` (wraps Playwright + pa11y accessibility checks).

## Stack

- **Next.js 16.2.4** with the App Router (`app/` directory). This is a newer major version — read `node_modules/next/dist/docs/` before writing routing, data-fetching, or rendering code.
- **React 19.2.4**
- **Tailwind CSS v4** — configured via `@tailwindcss/postcss` (not the classic `tailwind.config.js`). Customize design tokens in `app/globals.css` using `@theme { ... }` (no `inline` keyword).
- **TypeScript**
- **Firebase Admin SDK** — Firestore is used server-side via `app/lib/firebase-admin.ts`. Credentials come from `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, and `FIREBASE_PRIVATE_KEY` env vars.
- **framer-motion** and **gsap** — animation libraries available globally; `magicui/` primitives wrap these for section-level use.
- **Zod v4** — used for Server Action input validation (see `app/actions/newsletter.ts`).
- **Deployment** — Firebase App Hosting via `apphosting.yaml`.

## Architecture

Single-page marketing/landing site for an AI athletic coaching app. `app/page.tsx` composes all sections in order: `Nav → Hero → TechBar → AgentNetwork → ProductShowcase → ProblemSolution → Demo → HowItWorks → FeaturesCarousel → FeaturesGrid → FinalCTA → Footer`.

**Backend surface:** one Server Action at `app/actions/newsletter.ts` — handles email subscription, writes to Firestore `subscribers` collection.

**Component layout:**
- `app/components/` — all section components (one file per section, named after the section)
- `app/components/magicui/` — animation primitives: `animated-beam.tsx`, `light-rays.tsx`, `shimmer-button.tsx`, `terminal.tsx`, `text-animate.tsx`
- `app/lib/utils.ts` — exports `cn()` (clsx/tailwind-merge helper); import from `@/app/lib/utils`
- `app/lib/firebase-admin.ts` — singleton Firebase Admin init, exports `db` and `admin`
- `app/sitemap.ts` — auto-generates `sitemap.xml`; update when adding new routes

## Key conventions

### Styling
- All CSS lives in `app/globals.css`. There is no separate component CSS.
- Tailwind v4 design tokens are declared in `@theme { ... }` at the top of `globals.css` as `--color-*`, `--radius-*`, etc. These become Tailwind utilities (e.g. `bg-bg`, `text-fg`, `text-muted`, `border-subtle`).
- Raw CSS vars (`--bg`, `--fg`, `--muted`, `--subtle`, `--max`, `--pad`) are declared in `:root` under `@layer base` and used directly in `globals.css` component classes. Do not use these in Tailwind class names — use the `--color-*` tokens instead.
- Most section layout styles use named CSS classes defined in `@layer components` in `globals.css` (e.g. `.section-inner`, `.hero-left`, `.feat-card`). Prefer extending these over adding inline Tailwind for structural layout.
- Spacing uses `--max` (1200px max-width) and `--pad` (80px desktop / 24px mobile) CSS vars. Use `p-pad` and `max-w-spacing-max` in Tailwind, or `var(--pad)` / `var(--max)` in CSS classes.

### Theming
- Theme is controlled by `data-theme="dark"|"light"` on `<html>`, toggled by `ThemeToggle.tsx` which persists to `localStorage`.
- Light theme overrides are in `[data-theme="light"] { ... }` blocks in `globals.css`. Do **not** use Tailwind's `dark:` class strategy.
- Font is Space Mono (monospace, loaded in `app/layout.tsx`) for `--font-mono`, and SF Pro / system sans-serif for `--font-sans`.

### Components
- Client components that need browser APIs (localStorage, matchMedia) use the `mounted` guard pattern (render `null` or hidden until `useEffect` fires) to avoid hydration mismatches — see `ThemeToggle.tsx`.
- `AgentNetwork.tsx` uses `AnimatedBeam` from `magicui/` — beams require both a `containerRef` on the wrapping div and `fromRef`/`toRef` on node divs.

## Design system

`Design.md` is the canonical reference for colors, typography scale, spacing, component specs, and copy guidelines. Consult it before making any visual changes. The `athletic-management.ai/` directory contains original wireframes and HTML mockups — background context only, not part of the Next.js build.

## E2E selector contract

Playwright tests in `e2e/ux.spec.ts` bind to these CSS class names — renaming them breaks tests:
- `.theme-toggle` — theme toggle button
- `.carousel-container` — features carousel wrapper
- `.mobile-menu-trigger` / `.mobile-menu-overlay` / `.mobile-menu-close` — mobile nav

## Theme anti-flash

`app/layout.tsx` injects an inline `<Script strategy="beforeInteractive">` that reads `localStorage('theme')` and sets `document.documentElement.dataset.theme` before hydration. This is why `<html>` carries `suppressHydrationWarning` and always renders `data-theme="dark"` on the server. Do not move or defer this script.

## Git hooks

- **pre-commit**: runs `npm run lint` (ESLint must pass before committing)
- **pre-push**: runs `npm run qa` (full QA audit including Playwright + pa11y)

## Server Action conventions

`subscribeToNewsletter` in `app/actions/newsletter.ts` uses the `useActionState` pattern — it accepts `(prevState, formData)` and returns `{ success?, error?, message? } | null`. New Server Actions should follow this same shape. Honeypot field name is `website`.
