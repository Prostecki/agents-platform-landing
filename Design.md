# Athlete AI — Design System

> Design documentation for the Athlete AI landing page. Use this as a reference for any new pages, components, or UI extensions. Reflects the **actual implemented state** of the codebase.

---

## Brand

**Product name:** Athlete AI  
**Domain:** athlete-ai.tech  
**Tagline:** "Your coaches talk to each other."  
**Voice:** Direct, performance-oriented, human. No jargon, no fluff. Write like a smart coach, not a SaaS company.

---

## Color Palette

### Core Tokens (CSS Variables)

Defined in `app/globals.css` under `:root` and `@theme`. Use `var(--token)` everywhere — never hardcode hex values.

| Token | Value (dark) | Value (light) | Usage |
|---|---|---|---|
| `--bg` | `#13151f` | `#f8fafc` | Page background |
| `--bg-white` | `#1c1f2e` | `#ffffff` | Elevated surfaces (cards, sections) |
| `--fg` | `#e8e6f0` | `#0f172a` | Primary text, headings |
| `--muted` | `#b0bece` | `#334155` | Secondary text, labels, captions |
| `--subtle` | `rgba(255,255,255,0.07)` | `rgba(0,0,0,0.06)` | Borders, dividers |
| `--green-text` | `#4ade80` | `#15803d` | Green text on dark/light backgrounds |

> **Note:** `--muted` is `#b0bece` in the implementation (lighter than the old `#6b6f82`).

### Accent — Green (Nutrition Agent)

| Token | Value | Usage |
|---|---|---|
| `--color-green` / `--green` | `#22c55e` | Primary accent, CTAs, active states |
| `--color-green-bg` | `rgba(34,197,94,0.10)` | Tinted backgrounds |
| `--color-green-border` | `rgba(34,197,94,0.22)` | Tinted borders |
| `--color-green-text` / `--green-text` | `#4ade80` (dark) / `#15803d` (light) | Green text |

### Accent — Indigo / Blue (Training Agent)

The training agent uses **blue (`#3B82F6`)** in the actual demo, not pure indigo.

| Token | Value | Usage |
|---|---|---|
| `--color-indigo-base` | `#6366f1` | Indigo accent (generic) |
| `--color-indigo-light` | `#818cf8` | Status dots, text on dark |
| `--color-indigo-subtle` | `rgba(99,102,241,0.12)` | Tinted backgrounds |
| `--color-indigo-text` | `#a5b4fc` | Text in indigo containers |
| `--color-blue` | `#3b82f6` | Training agent accent in Demo/DemoSection |

### Semantic

| Token | Value | Usage |
|---|---|---|
| `--color-orange` | `#f97316` | Warning, "above target" states |
| Amber | `#F59E0B` | Fatigue / recovery indicators |
| Red | `#ef4444` | Heart rate, alerts |
| `--color-purple` | `#9678dc` | Body composition graph (unused in current UI) |

### Demo Surface Variables

| Token | Value (dark) | Value (light) |
|---|---|---|
| `--demo-surface` | `#0f0f0f` | `#f0f2f5` |
| `--demo-bar` | `#1a1a1a` | `#e4e6ea` |
| `--demo-dot` | `#333333` | `#bcc0c9` |
| `--demo-msg-bg` | `#1e1e1e` | `#e9eaec` |
| `--demo-msg-text` | `#cccccc` | `#374151` |
| User bubble bg | `#1e3a5f` | — |
| User bubble text | `#e8f4fd` | — |

### macOS Traffic Lights

| Name | Value |
|---|---|
| Red | `#FF5F57` |
| Yellow | `#FFBD2E` |
| Green | `#27C840` |

---

## Typography

### Fonts

| Role | Family | CSS Variable |
|---|---|---|
| **Primary (UI)** | SF Pro Display / SF Pro Text | `var(--font-sans)` → `-apple-system, BlinkMacSystemFont, sans-serif` |
| **Monospace** | Space Mono (Google Fonts) | `var(--font-mono)` → `var(--font-space-mono)` |

### Type Scale

| Name | Size | Weight | Letter-spacing | Usage |
|---|---|---|---|---|
| Hero H1 | `40px` → `52px` → `66px` (mobile→tablet→desktop) | 700 | `-1.5px` → `-2px` → `-2.5px` | Page hero headline |
| Section H2 | `30px` → `36px` → `42px` | 700 | `-1px` → `-1.5px` | Section headings |
| Final CTA H2 | `36px` → `48px` → `64px` | 700 | `tracking-tight` | CTA section |
| Demo H2 | `32px` → `42px` | 700 | `-1.5px` | Demo section |
| Step number | `48px` → `64px` | 700 | `-2px` | Large ghost numerals (1, 2, 3) |
| Step title | `18px` → `20px` | 700 | — | How-it-works step names |
| Feature title | `18px` | 700 | — | Feature card titles (`text-lg`) |
| Body large | `15px` → `16px` → `17px` | 400 | — | Hero subtitle |
| Body | `15px` | 400 | — | Pain/gain copy, step descriptions |
| Body small | `13–14px` | 400 | — | General body, footer links |
| Label / Mono | `10–11px` | 400 | `+0.5px` to `+1.5px` | Eyebrow badges, section labels, tech bar |
| Micro | `9–10px` | 400 | — | Card sub-labels, status text |
| Nav logo | `text-xl` / `20px` | 700 | `tracking-tighter` | |
| Nav links | `13px` | 500 | — | |
| Footer copy | `13px` | 400 | — | `font-mono` |

---

## Spacing & Layout

### Grid

- **Max content width:** `1200px` (`--max`)
- **Page horizontal padding:** `80px` desktop / `48px` tablet (769–1024px) / `24px` mobile (`--pad`)
- **Section vertical padding:** `96px` desktop / `64px` mobile (`section-inner`)
- **Hero vertical padding:** `80px` → `120px` (mobile → desktop)

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `8px` | Inputs, small buttons, nav CTA |
| `--radius-md` | `12px` | Primary CTA buttons, form inputs |
| `--radius-lg` | `16px` | Feature cards |
| `20px` | — | Eyebrow badges, mobile nav items |
| `24px` | — | Carousel cards |
| `14px` | — | Mobile CTA button (`rounded-[14px]`) |
| `50%` | — | Circular icons, status dots, avatar circles |

### Common Gaps

- Nav internal gap (logo+links): `gap-12` (48px)
- Nav link gap: `gap-8` (32px)
- Hero CTA row gap: `gap-4` (16px)
- Section heading bottom margin: `mb-12` (48px)
- Feature card grid gap: `gap-5` (20px)
- Demo grid gap: `gap-8` (32px)
- Footer sections gap: `gap-16` (64px)
- Footer social gap: `gap-6` (24px)

---

## Borders & Surfaces

All borders in dark mode use `rgba(255,255,255, ...)` — never solid opaque borders.

| Surface | Border | Background |
|---|---|---|
| Page | — | `var(--bg)` |
| Elevated card | `1px solid var(--subtle)` | `var(--bg-white)` |
| Demo Mac frame | `1px solid var(--subtle)` | `var(--bg)` |
| Demo card | `0.5px solid var(--subtle)` | `var(--bg-white)` |
| iPhone chat area | `0.5px solid var(--subtle)` | `var(--bg-white)` |
| Agent panel header | `1px solid rgba(255,255,255,0.05)` | — |
| Chat bubble (user) | none | `#1e3a5f` |
| Chat bubble (N) | left `2px solid #22C55E` | — |
| Chat bubble (T) | left `2px solid #3B82F6` | — |
| Eyebrow badge | `1px solid var(--green-border)` | `var(--green-bg)` |
| Feature card | `1px solid var(--subtle)` | `var(--bg)/20` |
| Feature card (hover) | — | `var(--bg)/40` |
| CTA email form | `1px solid var(--subtle)` | `var(--bg)` |

---

## Components

### Navigation

**Behavior:** Fixed, `top-0`, `z-[100]`. Transitions from transparent (`h-20`) to blurred (`h-16`) on scroll past 20px.

```css
/* Scrolled state */
background: rgba(19,21,31,0.80);  /* bg/80 */
backdrop-filter: blur(24px);       /* backdrop-blur-xl */
border-bottom: 1px solid var(--subtle);
height: 64px;

/* Unscrolled state */
background: transparent;
height: 80px;
```

- **Logo:** `text-xl`, 700, `tracking-tighter` + `32×32px` `bg-fg rounded-lg` diamond SVG icon
- **Nav links (desktop, ≥lg):** `13px`, `font-medium`, `var(--muted)`, hover → `var(--fg)`. Links: Features, How it works, Demo
- **Nav CTA:** `ShimmerButton` (hidden on mobile), `borderRadius="8px"`, `h-10`
- **Theme toggle:** Visible in nav at all breakpoints
- **Mobile:** Hamburger trigger (≥md hidden) → `MobileMenu` overlay

---

### ShimmerButton

Custom Magic UI component from `app/components/magicui/shimmer-button.tsx`.

Used for:
- Nav "Join Waitlist" CTA → `background` default (dark shimmer), `borderRadius="8px"`, `h-10`
- Hero "Join the Waitlist" → `background="var(--fg)"`, `shimmerColor="rgba(255,255,255,0.7)"`, `borderRadius="12px"`
- CTA "Lock Access" (submit) → same as Hero

```tsx
<ShimmerButton
  background="var(--fg)"
  shimmerColor="rgba(255,255,255,0.7)"
  borderRadius="12px"
>
  <span className="text-bg font-bold text-[15px]">Join the Waitlist</span>
</ShimmerButton>
```

---

### Ghost Button

```css
border: 1px solid var(--subtle);
color: var(--muted);
font-size: 14px;
padding: 14px 30px;
border-radius: var(--radius-md);  /* 12px */
/* hover: */ border-color: var(--muted); color: var(--fg);
/* active: */ transform: scale(0.98);
```

---

### Eyebrow / Badge

Used in Hero and CTA section:

```css
display: inline-flex; align-items: center; gap: 7px;
background: var(--green-bg);
border: 1px solid var(--green-border);
border-radius: 20px;
padding: 5px 14px;
```

```tsx
<div className="inline-flex items-center gap-[7px] bg-green-bg border border-green-border rounded-[20px] py-[5px] px-[14px] mb-7">
  <span className="w-[7px] h-[7px] rounded-full bg-green" />
  <span className="font-mono text-[10px] text-green-text tracking-[0.5px]">
    AI coaching that actually works together
  </span>
</div>
```

CTA variant uses `rounded-full`, `px-3 py-1`, `text-green/20` border, `animate-pulse` on dot.

---

### Mobile Menu

Full-screen overlay (`position: fixed`, `100dvh`, `z-999`). Slides in with `opacity` animation.

- **Nav items:** `border border-subtle rounded-2xl bg-bg-white` cards with 44×44px icon and label+subtitle
- **Footer:** social icons (40px circles) + full-width CTA button `(56px, bg-fg, rounded-[14px])`
- **Safe area:** Uses `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)` padding

---

## Section Structure

| Order | Component | ID | Background | Notes |
|---|---|---|---|---|
| 1 | Nav | — | Transparent → `bg/80 blur-xl` | Fixed overlay |
| 2 | Hero | — | `var(--bg)` + dot grid | Centered single-column, LightRays |
| 3 | DemoSection | `#demo` | `var(--bg)` | MacFrame + IPhoneFrame side-by-side |
| 4 | TechBar | — | `var(--bg-white)` | Mono text bar |
| 5 | ProblemSolution | `#problem` | `var(--bg)` | 2-col pain/gain |
| 6 | ImageDivider | — | — | Visual break |
| 7 | HowItWorks | `#how` | `var(--bg)` | 3-col steps, right-aligned h2 |
| 8 | FeaturesGrid | `#features` | `var(--bg-white)` | 2×2 feature cards |
| 9 | FinalCTA | `#cta` | `var(--bg-white)` | Email waitlist form |
| 10 | Footer | — | `var(--bg)` | Brand + socials + copyright |

---

## Hero Section

**Layout:** Centered single-column (max-width `680px`), `py-[80px]` → `py-[120px]`.

**Background:**
```css
background-image: radial-gradient(circle, #ffffff15 1px, transparent 1px);
background-size: 24px 24px;
```

**Animated overlay:** `<LightRays>` with `color="rgba(34, 197, 94, 0.35)"`, `count={8}`, `speed={10}`.

**H1:**
```
"Your coaches talk to each other."
"Finally." (green-text, opacity-90)
```
Font: `40px` → `52px` → `66px`, weight 700, tracking `-1.5px` → `-2px` → `-2.5px`.

**CTA group:** ShimmerButton (primary) + ghost link "See it in action ↓"
**Below CTA:** `"No credit card. No catch. First 20 athletes free."` — `12px`, `font-mono`, `text-muted`

---

## Demo Section

**ID:** `#demo`  
**Layout:** Centered header + side-by-side device frames (`demo-frames`)

**Headline:** `"Performance intelligence, synchronized."` (green-text on "synchronized.")

**MacFrame** (`demo-mac`):
- `border-radius: 12px`, `border: 1px solid var(--subtle)`, `bg: var(--bg)`
- macOS chrome: 40px titlebar, `bg-bg-white`, traffic light dots `[#FF5F57, #FFBD2E, #27C840]`
- URL pill: `athlete-ai.tech` in mono 11px
- 46px app nav: logo + tabs (Dashboard, Nutrition, Training) + MK avatar
- 4 metric cards (2340 cal / 142g protein / 7/10 fatigue / 18d competition)
- 2-column chat panels: Nutrition Coach (green) + Training Coach (blue)
- Hidden at ≤1024px via `.demo-mac { display: none }`

**IPhoneFrame** (`demo-iphone`):
- Uses `<Iphone>` Magic UI component, width `270px`
- Content: status bar → app header → 2 metric cards → chat thread → tab bar
- Tab icons: `⊞ Dashboard` (active, green) / `🥗 Nutrition` / `🏃 Training`

**Entrance animation:** Both frames start at `opacity: 0`, `translateY(30px)` + slight 3D `rotateY`. Triggered via `IntersectionObserver` at 10% threshold.

---

## TechBar

```tsx
<div className="bg-bg-white border-b border-subtle p-[18px] flex items-center justify-center gap-10">
  <span className="font-mono text-[11px] text-muted tracking-[0.5px]">Trusted technology from Google</span>
  <span className="w-px h-4 bg-white/10" />
  <span className="font-mono text-[11px] text-muted tracking-[0.5px]">Built for competitive athletes</span>
  <span className="w-px h-4 bg-white/10" />
  <span className="font-mono text-[11px] text-muted tracking-[0.5px]">Built in public · Follow the journey</span>
</div>
```

---

## Problem / Solution Section

**Headline:** `"Sound familiar?"` — right-to-left feeling, no section number.

**Layout:** `grid-cols-2` with `gap-10 lg:gap-12`.

**Left column — "The old way":**
- Header: `font-mono text-[10px] uppercase tracking-[1.5px] text-muted` + `border-b border-subtle`
- Items: `text-[15px] text-muted leading-[1.6] pl-[18px] border-l-2 border-subtle mb-4`

**Right column — "With Athlete AI":**
- Header: same mono style as left
- Items: `text-[15px] text-fg leading-[1.6] pl-[18px] border-l-2 border-green mb-4`

---

## How It Works Section

**Headline:** `"Simple for you. Powerful behind the scenes."` — right-aligned (`text-right`).

**Layout:** `grid-cols-1 md:grid-cols-3 gap-0`.

**Step columns:**
- Ghost number: `text-[48px] lg:text-[64px] font-bold text-subtle tracking-[-2px]` (uses CSS var `--subtle` as color = very dim white)
- Title: `text-[18px] lg:text-[20px] font-bold text-fg`
- Description: `text-sm text-muted leading-[1.7]`

**Step connector (desktop only):** Dashed vertical `border-l border-dashed border-subtle` with `›` arrow centered, positioned `absolute -right-7`.

**Steps:**
1. "Talk to your coach" — text your coach casually
2. "Your coaches sync automatically" — A2A in real time
3. "Get advice that makes sense" — context-aware answer

---

## Features Grid Section

**Headline:** `"Everything a serious athlete needs."`

**Layout:** `grid-cols-1 md:grid-cols-2 gap-5`

**Card style:**
```css
border: 1px solid var(--subtle);
border-radius: 16px;
padding: 32px 36px;
background: var(--bg)/20;
/* hover: */ background: var(--bg)/40; box-shadow: var(--shadow-card); translateY(-4px);
```

**Features (icons are emoji):**
| Icon | Title |
|---|---|
| 🤝 | Two coaches, zero gaps |
| 🧠 | It remembers everything |
| ⚡ | Instant answers, any time |
| 🌍 | Global athletic support |

Card title turns `text-green-text` on hover.

---

## Final CTA Section

**ID:** `#cta`  
**Background:** `var(--bg-white)` + radial green glow + bottom gradient line
```css
background: radial-gradient(circle at 50% 50%, var(--green-bg), transparent 70%);
opacity: 0.4;
```

**Eyebrow:** `"First 20 Athletes"` — `rounded-full`, `bg-green/10 border-green/20`, `animate-pulse` dot

**H2:**
```
"You're early."
"That's the whole advantage." (text-muted, opacity-80)
```
Font: `36px` → `48px` → `64px`, weight 700, `tracking-tight`.

**Subtitle:** `16px` → `18px`, `text-muted`, `max-w-[600px]`

**Email form:** Inline flex row, `p-1.5 rounded-2xl bg-bg border border-subtle shadow-card`
- Input: `flex-1 bg-transparent`, `text-fg`, `placeholder:text-muted/50`
- Submit: `ShimmerButton` with `background="var(--fg)"`, text `"Lock Access"`

**Success state:** `p-8 rounded-2xl bg-green/5 border border-green/20`

**Footer of form:**
- Footnote: `"* All premium features included for the first 20 members."` — `12px text-green-text/80 italic`
- `<AvatarCircles>` + label `"Mark and 9 others already on the list"` — `13px text-muted font-medium`

---

## Footer

**Layout:** `flex-col gap-16`  
**Top section:** `flex-row justify-between items-center gap-10`

**Brand:**
- Logo: `20px font-bold text-fg` + `36×36px bg-fg rounded-xl` icon (same diamond SVG)
- Tagline (mono): `"Built by a decathlete who got tired of coaches that didn't talk to each other."`

**Socials:** Instagram, X, YouTube — `text-muted hover:text-fg hover:scale-110`, SVG icons 20×20px

**Bottom:** `border-t border-subtle pt-8`
- Copyright: `text-[13px] text-muted font-mono` — `"© athlete-ai.tech 2026 · Currently in development"`

> **Note:** Current footer is minimal — no 4-column link grid. The old Design.md described a future state.

---

## Shadows

| Usage | Value |
|---|---|
| Card hover / shadow-card | `0 16px 40px rgba(0,0,0,0.35)` |
| Shadow soft | `0 8px 24px rgba(0,0,0,0.25)` |
| MacFrame | `0 20px 60px rgba(0,0,0,0.25)` |
| IPhoneFrame | `filter: drop-shadow(0 20px 40px rgba(0,0,0,0.45))` |
| CTA form | `var(--shadow-card)` |

---

## Animations

### Framer Motion (page-wide)

All sections use `motion.div` with:
```tsx
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: true }}
transition={{ duration: 0.4 }}
```

Some sections (demo, hero) use `y: 20` offset on `initial`.

### shimmer-spin

Used internally in `ShimmerButton`. Paused on mobile and `prefers-reduced-motion`.

```css
@keyframes shimmer-spin {
  0% { transform: rotate(0deg) scale(2); }
  100% { transform: rotate(360deg) scale(2); }
}
```

### Pulse

```css
@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
}
```

Used for status dots in the eyebrow/CTA badge.

### Demo Entrance

MacFrame: `perspective(1200px) rotateY(-3deg) translateY(30px)` → neutral  
IPhoneFrame: `perspective(1200px) rotateY(3deg) translateY(30px)` → neutral, `200ms` delay  
Easing: `ease-out`, duration `0.8s`

### LightRays (Hero)

Custom component in `app/components/magicui/light-rays.tsx`:
- `color="rgba(34, 197, 94, 0.35)"`, `count={8}`, `speed={10}`
- Disabled/static on mobile and `prefers-reduced-motion`

---

## Light / Dark Theme

Toggled via `data-theme="light"` on `<html>`. Controlled by `ThemeToggle` client component.

Light theme overrides all `--bg`, `--bg-white`, `--fg`, `--muted`, `--subtle`, and demo surface variables.

Nav: `bg-transparent` → `rgba(248,250,252,0.97)` on mobile in light mode (no blur on mobile for performance).

---

## Responsive Breakpoints

| Breakpoint | Pad | Notes |
|---|---|---|
| `≥1025px` | `80px` | Full desktop layout |
| `769–1024px` | `48px` | MacFrame hidden, iPhone centered |
| `≤768px` | `24px` | All grids collapse to 1 col, nav links hidden, tech bar stacks |

### Key Responsive Behaviors

- **Demo:** MacFrame hidden (`display: none`) at `≤1024px`; IPhoneFrame centered
- **Hero:** Full-width single column on mobile
- **How It Works:** Step connectors hidden; steps stack with `border-b` separators
- **Backdrop blur:** Removed on mobile nav (`backdrop-filter: none`, replaced with opaque bg) for GPU performance
- **Carousel backdrop-blur layers:** Stripped on mobile
- **Tech bar:** Stacks vertically with horizontal dividers becoming horizontal lines

---

## Copy Guidelines

- **Headlines:** Short, declarative, personal. Max 6–8 words. No adjectives stacking.
- **Subtitles:** One clear sentence of benefit, written for the athlete.
- **CTA copy:** Action verbs. "Join the Waitlist", "Lock Access" — not "Get started" or "Sign up".
- **Badge/label copy:** All-caps or sentence-case mono, max 5 words.
- **Problem copy:** Write the athlete's internal monologue. Vivid and specific.
- **Avoid:** AI/tech jargon, passive voice, "powerful", "seamless", "cutting-edge".
- **Brand note:** The platform is described as "AI coaches", never "a chatbot". Two distinct agents: Nutrition Coach and Training Coach.

---

## Magic UI Components

Located in `app/components/magicui/`.

| File | Component | Used in |
|---|---|---|
| `shimmer-button.tsx` | `ShimmerButton` | Nav, Hero, FinalCTA |
| `light-rays.tsx` | `LightRays` | Hero background |
| `iphone.tsx` | `Iphone` | DemoSection (IPhoneFrame) |
| `text-animate.tsx` | Text animations | (available, not currently used in main page) |
| `terminal.tsx` | Terminal | (available, not currently used in main page) |

---

*Last updated: April 2026 — reflects actual implementation*
