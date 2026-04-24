# Athlete AI — Your coaches talk to each other.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**Athlete AI** is a next-generation training management system designed for elite athletes. It features two specialized AI agents — **Nutrition** and **Training** — that share information in real-time via the proprietary **A2A (Agent-to-Agent)** protocol.

> [!NOTE]  
> This project is currently in the **hypothesis testing phase**. The landing page is designed to gather early interest and validate product-market fit via a waitlist.

---

## ✨ Key Features

- **🔄 A2A Protocol:** Real-time synchronization between training load and nutritional needs. No more manual data entry or fragmented advice.
- **⚡ Dynamic Agent Network:** A visual hub connecting your health data, training logs, and specialized agents.
- **📱 Immersive Product Showcase:** Interactive UI mockups demonstrating the mobile experience for competitive athletes.
- **🛠️ Modern UI/UX:** Built with a performance-first mindset, featuring glassmorphism, smooth animations, and a polished design system.
- **🌗 Adaptive Theming:** Fully optimized for both Light and Dark modes with rigorous attention to contrast and accessibility.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 16.2.4](https://next.js.org) (App Router)
- **Library:** [React 19](https://react.dev)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) (Performance-optimized JIT engine)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Protocol:** [Model Context Protocol (MCP)](https://modelcontextprotocol.com) integrated for AI context management.
- **Icons & UI:** Custom-built components inspired by [Magic UI](https://magicui.design).

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/athlete-ai-landing-page.git
   cd athlete-ai-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📐 Design System

The project follows a strict design system defined in `Design.md`.

- **Primary Colors:** Deep Slate Navy (`#13151f`), Emerald Green (`#22c55e`), and Indigo (`#6366f1`).
- **Typography:** SF Pro for UI, Space Mono for technical labels.
- **Aesthetics:** Clean, high-performance feel with subtle gradients and radial glows.

---

## 🧪 QA & Standards

The project includes a custom QA pipeline:

```bash
# Run linting and type checks
npm run lint

# Run the comprehensive QA audit (Linting + Design System Check)
node .gemini/skills/qa-engineer/scripts/run_qa_checks.cjs
```

---

## 🗺️ Roadmap

- [x] Initial design and architecture.
- [x] Responsive landing page implementation.
- [x] A2A Protocol visualization (Animated Beams).
- [x] Waitlist integration for hypothesis testing.
- [ ] Backend integration for automated coaching sync.
- [ ] Closed Alpha for professional decathletes.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Built with ❤️ for athletes who take their performance seriously.  
© 2026 athletic-management.ai, Inc.
