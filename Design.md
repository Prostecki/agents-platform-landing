# Athlete AI — Design System

> Design documentation for the Athlete AI landing page. Use this as a reference for any new pages, components, or UI extensions.

---

## Brand

**Product name:** Athlete AI  
**Domain:** athletic-management.ai  
**Tagline:** "Your coaches talk to each other."  
**Voice:** Direct, performance-oriented, human. No jargon, no fluff. Write like a smart coach, not a SaaS company.

---

## Color Palette

### Core Tokens

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#13151f` | Page background (deep slate-navy) |
| `--bg-white` | `#1c1f2e` | Elevated surface (cards, panels, sections) |
| `--fg` | `#e8e6f0` | Primary text, headings |
| `--muted` | `#6b6f82` | Secondary text, labels, captions |
| `--subtle` | `rgba(255,255,255,0.07)` | Borders, dividers |

### Accent — Green (Nutrition Agent)

| Token | Value | Usage |
|---|---|---|
| `--green` | `#22c55e` | Primary accent, CTAs, active states |
| `--green-bg` | `rgba(34,197,94,0.10)` | Tinted backgrounds |
| `--green-border` | `rgba(34,197,94,0.22)` | Tinted borders |
| `--green-text` | `#4ade80` | Green text on dark backgrounds |

### Accent — Indigo (Training Agent)

| Color | Value | Usage |
|---|---|---|
| Indigo base | `#6366f1` | Training agent accent |
| Indigo light | `#818cf8` | Status dots, text on dark |
| Indigo subtle | `rgba(99,102,241,0.12)` | Chat bubbles, tinted backgrounds |
| Indigo text | `#a5b4fc` / `#c7d2fe` | Text in indigo containers |

### Semantic

| Color | Value | Usage |
|---|---|---|
| Orange | `#f97316` | Warning, "above target" states |
| Red | `#ef4444` | Heart rate, alerts |
| Purple graph | `rgba(150,120,220,0.8)` | Body composition graph lines |

---

## Typography

### Fonts

| Role | Family | Fallback |
|---|---|---|
| **Primary (UI)** | SF Pro Display / SF Pro Text | `-apple-system, BlinkMacSystemFont, sans-serif` |
| **Monospace** | Space Mono | `monospace` |

### Scale

| Name | Size | Weight | Usage |
|---|---|---|---|
| Hero H1 | `66px` | 700 | Page hero headline |
| Section H2 | `42px` | 700 | Section headings |
| Showcase H2 | `46px` | 700 | Product showcase headline |
| Final CTA H2 | `56px` | 700 | CTA block headline |
| Step title | `20px` | 700 | How-it-works step names |
| Feature title | `18px` | 700 | Feature card titles |
| Body large | `17–18px` | 400 | Hero subtitle, main body |
| Body | `15px` | 400 | Demo copy, pain/gain items |
| Body small | `13–14px` | 400 | Card descriptions, links |
| Label / Mono | `10–11px` | 400 | Section numbers, tags, badges |
| Micro | `9–10px` | 400 | Captions, status text |

### Letter Spacing

- Hero headlines: `-2.5px` to `-3px`
- Section headings: `-1.5px`
- Mono labels: `+0.5px` to `+1.5px` (uppercase)
- Default body: `0`

---

## Spacing & Layout

### Grid

- **Max content width:** `1200px`
- **Page padding (horizontal):** `80px`
- **Section vertical padding:** `96px` top/bottom
- **Reduced section padding (print):** `72px`

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `8px` | Buttons, small badges |
| `--radius-md` | `12px` | Buttons (primary CTA), panels |
| `--radius-lg` | `16px` | Feature cards, floating cards |
| `20px` | — | Agent UI window, network icons |
| `24px` | — | Carousel cards |
| `50%` | — | Circular icons, status dots |

### Common Gaps

- Nav link gap: `36px`
- Hero grid gap: `0` (split by border)
- Two-column section gap: `48–80px`
- Three-column step gap: `56px` margin + border
- Feature card grid gap: `20px`
- Agent chat gap: `7px`

---

## Borders & Surfaces

All borders use `rgba(255,255,255, ...)` on dark backgrounds — never solid opaque borders.

| Surface | Border | Background |
|---|---|---|
| Page default | — | `--bg` (#13151f) |
| Elevated card | `1px solid rgba(255,255,255,0.07)` | `--bg-white` (#1c1f2e) |
| Agent panel | `1px solid rgba(255,255,255,0.07)` | `rgba(255,255,255,0.03)` |
| Agent header | `1px solid rgba(255,255,255,0.05)` | — |
| Chat bubble (user) | `1px solid rgba(255,255,255,0.06)` | `rgba(255,255,255,0.07)` |
| Chat bubble (N) | `1px solid rgba(34,197,94,0.15)` | `rgba(34,197,94,0.12)` |
| Chat bubble (T) | `1px solid rgba(99,102,241,0.15)` | `rgba(99,102,241,0.12)` |
| Floating card | `1px solid rgba(255,255,255,0.08)` | `rgba(28,31,46,0.96)` |
| Demo interface | `1px solid rgba(255,255,255,0.05)` | `#0f0f0f` |

---

## Components

### Navigation

- Height: `64px`
- `position: sticky`, `backdrop-filter: blur(12px)`
- Background: `rgba(19,21,31,0.88)` (semi-transparent)
- Logo: 15px, weight 700
- Links: 13px, `--muted` color
- CTA button: `--fg` background, `--bg` text, `--radius-sm`

---

### Buttons

**Primary**
```css
background: var(--fg);        /* #e8e6f0 */
color: var(--bg);             /* #13151f */
font-size: 14px; font-weight: 700;
padding: 14px 30px;
border-radius: var(--radius-md);  /* 12px */
```

**Ghost**
```css
border: 1px solid rgba(255,255,255,0.14);
color: var(--muted);
font-size: 14px;
padding: 14px 30px;
border-radius: var(--radius-md);
```

**Green CTA (final)**
```css
background: var(--green);    /* #22c55e */
color: #0f0f0f;
font-size: 16px; font-weight: 700;
padding: 17px 44px;
border-radius: var(--radius-md);
```

---

### Eyebrow / Badge

```css
display: inline-flex; align-items: center; gap: 7px;
background: var(--green-bg);
border: 1px solid var(--green-border);
border-radius: 20px;
padding: 5px 14px;
font-family: var(--mono); font-size: 10px;
color: var(--green-text); letter-spacing: 0.5px;
```
Preceded by a `7px` green dot (`border-radius: 50%`).

---

### Section Number

```css
font-family: var(--mono);
font-size: 11px;
color: var(--muted);
letter-spacing: 1px;
margin-bottom: 8px;
```
Pattern: `01`, `02`, `03` ... placed above section headings.

---

### Agent UI Panel

A window-chrome card containing two agent sub-panels with a beam connector between them.

**Window frame**
- `border-radius: 20px`
- `border: 1px solid rgba(255,255,255,0.09)`
- `background: --bg-white`
- `box-shadow: 0 24px 64px rgba(0,0,0,0.35), 0 1px 0 rgba(255,255,255,0.06) inset`

**Titlebar**
- macOS-style traffic lights: `#ff5f57` / `#febc2e` / `#28c840`
- Label in mono 10px, `--muted`

**Agent sub-panel**
- Avatar: `22×22px`, `border-radius: 6px`
- N avatar: green tint; T avatar: indigo tint
- Status dot: `5px` circle

**A2A Connector**
- Dashed gradient line: `linear-gradient(to right, transparent, rgba(34,197,94,0.3), transparent)`
- Badge: green tint pill, mono 9px
- Animated beam SVG overlay (JS-driven `stroke-dashoffset`)

---

### Animated Beam

Used in two places: Agent UI (hero) and Network diagram.

- SVG path drawn via JS using `getBoundingClientRect()`
- Quadratic bezier: `M x1,y1 Q cpx,cpy x2,y2`
- Base path: `stroke: rgba(255,255,255,0.05)`, `stroke-width: 1`
- Beam path: animated gradient stroke, `stroke-width: 1.5–2`
- Animation: `stroke-dashoffset` from `pathLength → 0`
- Duration: `2.4–2.8s`, `cubic-bezier(0.16, 1, 0.3, 1)` (easeOutExpo)
- Bidirectional: forward + reverse with `1.2s` delay offset

**Green gradient (Nutrition):** `#22c55e → #4ade80`  
**Indigo gradient (Training):** `#818cf8 → #a5b4fc`  
**Slate gradient (inputs):** `#94a3b8 → #cbd5e1`

---

### Network / Hub Diagram

Hub-and-spoke layout with 6 nodes:

| Position | Node | Color |
|---|---|---|
| Left × 3 | You, Training Log, Health Data | Neutral (`--bg-white`) |
| Center | Athlete AI (hub) | Green glow ring |
| Right top | Nutrition Agent | Green tint |
| Right bottom | Training Agent | Indigo tint |

Node icons: `52px` circles (hub `72px`), emoji icons, `border-radius: 50%`  
Hub glow: `box-shadow: 0 0 0 8px rgba(34,197,94,0.06), 0 0 40px rgba(34,197,94,0.15)`

---

### Feature Cards

```css
border: 1px solid var(--subtle);
border-radius: var(--radius-lg);  /* 16px */
padding: 32px 36px;
background: transparent;  /* inherits section bg */
```

---

### Floating Cards (Showcase)

```css
background: rgba(28,31,46,0.96);
border: 1px solid rgba(255,255,255,0.08);
border-radius: 16px;
box-shadow: 0 8px 32px rgba(0,0,0,0.45);
padding: 14px 16px;
```

---

### Demo Interface

Dark terminal-style UI card:
- Background: `#0f0f0f`
- Titlebar: `#1a1a1a`, three `#333` dots
- User bubble: `#1e1e1e`, text `#ccc`
- System message: `#0f2a1f` bg, `#4ade80` text (mono)
- AI bubble: `#0f1f17` bg, `#86efac` text, green border

---

## Shadows

| Usage | Value |
|---|---|
| Agent UI (hero) | `0 24px 64px rgba(0,0,0,0.35)` |
| Demo interface | `0 24px 60px rgba(0,0,0,0.18)` |
| Floating cards | `0 8px 32px rgba(0,0,0,0.45)` |
| Workout panel | `0 8px 32px rgba(0,0,0,0.50)` |
| Network hub glow | `0 0 40px rgba(34,197,94,0.15)` |
| Metric badge | `0 4px 20px rgba(0,0,0,0.45)` |

---

## Section Structure

| # | Section | Background | Notes |
|---|---|---|---|
| — | Nav | `rgba(19,21,31,0.88)` | Sticky, blur |
| Hero | Train smarter / Eat right | `--bg` | Split grid, agents UI right |
| — | Social proof bar | `--bg-white` | Mono text, centered |
| — | Agent Network | `--bg` | Hub-and-spoke + beams |
| — | Product Showcase | `--bg-white` | Phone mockup + floating cards |
| 02 | Sound familiar? | `--bg` | 2-col pain/gain |
| 03 | Watch it happen | `--bg-white` | Demo interface |
| 04 | Simple for you | `--bg` | 3-col steps |
| — | Built for Performance | `--bg-white` | 3-card carousel |
| 05 | Everything a serious athlete needs | `--bg-white` | 2×2 feature grid |
| — | Your coaches are ready | `--bg-white` | CTA + radial green glow |
| — | Footer | `--bg` | 2-col: logo+social / 4 link columns |

---

## Gradients & Backgrounds

**Radial green glow (CTA)**
```css
radial-gradient(ellipse 80% 60% at 50% 100%, rgba(34,197,94,0.07) 0%, transparent 70%)
```

**Hero right panel ambient**
```css
radial-gradient(ellipse 70% 60% at 80% 40%, rgba(34,197,94,0.05) 0%, transparent 70%)
```

**Carousel card backgrounds**
```css
/* Card 1 — Blue-grey (Cardio) */
linear-gradient(160deg, #bfcfdf 0%, #8faabf 40%, #6a8ea8 100%)

/* Card 2 — Purple (Strength) */
linear-gradient(160deg, #c0bfd8 0%, #8a89b8 40%, #5c5a90 100%)

/* Card 3 — Warm grey (Body) */
linear-gradient(160deg, #c5c0b8 0%, #a09890 40%, #7a706a 100%)
```

---

## Copy Guidelines

- **Headlines:** Short, declarative, personal. Max 6 words. No adjectives.
- **Subtitles:** One clear sentence of benefit. Written for the athlete, not the technology.
- **Section numbers:** Always 2-digit (`01`, `02`...). Mono font. Used as structural anchors.
- **CTA copy:** Action verbs. "Start for free", "Start training smarter" — not "Get started" or "Sign up".
- **Problem copy:** Write the athlete's internal monologue. Vivid and specific.
- **Avoid:** AI/tech jargon, passive voice, adjective stacking, generic claims.

---

## Footer

Structure: `1fr 1fr` grid  
Left: Logo + copyright + social icons (Instagram, X, Reddit, YouTube, Facebook)  
Right: 4 columns — Company / Product / Resources / Legal  
Background: `--bg`, border-top `1px solid var(--subtle)`

---

*Last updated: April 2026*
