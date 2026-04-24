# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run lint     # ESLint
```

No test suite is configured yet.

## Stack

- **Next.js 16.2.4** with the App Router (`app/` directory). This is a newer major version — read `node_modules/next/dist/docs/` before writing routing, data-fetching, or rendering code.
- **React 19.2.4**
- **Tailwind CSS v4** — configured via `@tailwindcss/postcss` (not the classic `tailwind.config.js`). Customize design tokens in `app/globals.css` using `@theme inline { ... }`.
- **TypeScript**

## Architecture

This is a single-page marketing/landing site. All code lives in the `app/` directory (App Router). There are no additional routes, API routes, or components yet — `app/page.tsx` is the only page.

- `app/layout.tsx` — root layout; sets Geist Sans/Mono fonts as CSS variables and applies them globally.
- `app/globals.css` — imports Tailwind, defines `--background`/`--foreground` CSS vars, and exposes them as Tailwind color tokens via `@theme inline`.
- `app/page.tsx` — the landing page (currently the default Next.js starter template).
- `public/` — static assets served at `/`.

## Key conventions

- Tailwind v4 theming lives in `globals.css` under `@theme inline { ... }`, not in a config file.
- Font variables (`--font-geist-sans`, `--font-geist-mono`) are injected on `<html>` and consumed by Tailwind via `--font-sans` / `--font-mono` tokens.
- Dark mode is handled via `prefers-color-scheme` CSS media query in `globals.css`, not Tailwind's `dark:` class strategy.
