# Athlete AI - Project Context & Guidelines

This project is a high-performance landing page for **Athlete AI**, built with Next.js 16.2.4 and React 19. It serves as a showcase for the platform's AI-driven athletic management capabilities and the proprietary **A2A (Agent-to-Agent)** protocol.

## 🏗 Project Overview

- **Core Tech:** Next.js 16.2.4 (App Router), React 19.2.4, TypeScript.
- **Styling:** Tailwind CSS v4 (using `@theme` inline in `app/globals.css`).
- **Animations:** Framer Motion and GSAP.
- **Testing:** Playwright for E2E testing.
- **Design System:** Strictly defined in `Design.md` and implemented via CSS variables in `app/globals.css`.

## 🚀 Building and Running

| Command | Action |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the application for production |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint for code quality checks |
| `npm run test:e2e` | Executes Playwright E2E tests |
| `node .gemini/skills/qa-engineer/scripts/run_qa_checks.cjs` | Runs custom QA audit (Linting + Design System Check) |

## 🛠 Development Conventions

### 1. Architecture & Components
- **Server First:** Use React Server Components (RSC) by default. Use `"use client"` only when client-side interactivity or hooks are strictly necessary.
- **Component Location:** Shared UI components reside in `app/components/`. Specialized Magic UI components are in `app/components/magicui/`.
- **Next.js 16.2.4 Rules:** This version has breaking changes and unique APIs. Refer to `AGENTS.md` and `node_modules/next/dist/docs/` for specific guidance.

### 2. Styling & Design System
- **Tailwind v4:** The theme is defined inline in `app/globals.css`. Do not look for a `tailwind.config.js`.
- **CSS Variables:** Strictly adhere to tokens in `app/globals.css` and `Design.md`. Use `var(--token-name)` instead of hardcoded hex values.
- **Glassmorphism:** Use `backdrop-filter: blur()` and semi-transparent borders as specified in the "Borders & Surfaces" section of `Design.md`.

### 3. Performance & Assets
- **Images:** Use `next/image` for automatic optimization.
- **Fonts:** SF Pro Display/Text for UI (default sans) and Space Mono for technical labels.
- **Client Renders:** Minimize client-side re-renders by lifting state or using RSC where possible.

### 4. Code Quality & Testing
- **TypeScript:** Strict typing is required for all props, states, and functions.
- **QA Audit:** Always run the custom QA script before finalizing UI changes to ensure design system compliance.

## 📁 Key Files & Directories

- `app/globals.css`: Tailwind v4 theme, CSS variables, and core component styles.
- `Design.md`: The "Source of Truth" for the visual design system.
- `AGENTS.md`: Technical warnings regarding the specific Next.js/React versions.
- `app/components/`: Reusable UI components.
- `app/actions/`: Server Actions (e.g., newsletter subscriptions).
- `app/lib/`: Shared utilities and database clients (Firebase Admin).

## 🤖 Agent Workflow

When working on this project, activate specialized skills for expert guidance:
- `frontend-lead`: Implementation, Next.js 16.2.4 patterns, and performance.
- `ui-ux-designer`: Design system adherence, spacing, and visual polish.
- `qa-engineer`: Testing, accessibility (A11y), and visual regression.
- `seo-expert`: Metadata, structured data, and performance optimization.
- `backend-lead`: Firebase integrations and Server Actions.
