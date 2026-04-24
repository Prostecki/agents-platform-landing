# Athlete AI - Project Context & Guidelines

This project is a high-performance landing page for **Athlete AI**, built with Next.js 16.2.4 and React 19. It serves as a showcase for the platform's AI-driven athletic management capabilities and the proprietary **A2A (Agent-to-Agent)** protocol.

## 🏗 Project Overview

- **Core Tech:** Next.js 16.2.4 (App Router), React 19.2.4, TypeScript.
- **Styling:** Tailwind CSS v4 (using `@theme` inline in `app/globals.css`).
- **Animations:** Framer Motion and custom CSS animations.
- **Testing:** Playwright for E2E testing.
- **Design System:** Strictly defined in `Design.md` and implemented via CSS variables in `app/globals.css`.

## 🚀 Building and Running

| Command | Action |
|---|---|
| `npm run dev` | Starts the development server at `http://localhost:3000` |
| `npm run build` | Builds the application for production |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint for code quality checks |
| `npm run test:e2e` | Executes Playwright E2E tests |
| `node .gemini/skills/qa-engineer/scripts/run_qa_checks.cjs` | Runs the custom QA audit (Linting + Design System Check) |

## 🛠 Development Conventions

### 1. Architecture & Components
- **Server First:** Use React Server Components (RSC) by default. Use `"use client"` only when client-side interactivity or hooks (e.g., `useState`, `useEffect`) are strictly necessary.
- **Component Location:** All shared UI components reside in `app/components/`.
- **Semantic HTML:** Always use semantic HTML5 tags (`<section>`, `<nav>`, `<footer>`, `<header>`, etc.) for accessibility and SEO.
- **Next.js 16.2.4 Rules:** This version may have unique APIs or conventions. Always refer to `AGENTS.md` for specific technical warnings and heeded deprecation notices.

### 2. Styling & Design System
- **Tailwind v4:** The theme is defined inline in `app/globals.css`. **Do not** create or look for a `tailwind.config.js`.
- **CSS Variables:** Strictly adhere to the design system tokens defined in `app/globals.css` and `Design.md`. Use `var(--token-name)` instead of hardcoded hex values.
- **Responsive Design:** Mobile-first approach. Main breakpoints are 768px (Mobile) and 1024px (Tablet).
- **Glassmorphism:** Use `backdrop-filter: blur()` and semi-transparent borders as specified in the "Borders & Surfaces" section of `Design.md`.

### 3. Performance & Assets
- **Images:** Use `next/image` for automatic optimization.
- **Fonts:** Geist for UI and Space Mono for technical/mono labels (defined in `app/layout.tsx`).
- **Client Renders:** Minimize client-side re-renders by lifting state or using RSC where possible.

### 4. Code Quality & Testing
- **TypeScript:** Strict typing is required for all props, states, and functions.
- **QA Audit:** Always run the custom QA script (`node .gemini/skills/qa-engineer/scripts/run_qa_checks.cjs`) before finalizing changes to ensure design system compliance.

## 📁 Key Files & Directories

- `app/globals.css`: Tailwind v4 theme, CSS variables, and core component styles.
- `Design.md`: The "Source of Truth" for the visual design system.
- `AGENTS.md`: Technical warnings regarding the specific Next.js/React versions.
- `.gemini/skills/`: Custom agent skills for specialized roles (Frontend, UX, SEO, QA).
- `app/components/`: Reusable UI components.

## 🤖 Agent Workflow

When working on this project, you can activate specific skills via `activate_skill` to receive expert guidance:
- `frontend-lead`: Implementation and performance.
- `ui-ux-designer`: Design system and UX.
- `seo-expert`: Metadata and Core Web Vitals.
- `qa-engineer`: Visual regression and testing.
