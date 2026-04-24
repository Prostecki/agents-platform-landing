# Design System Inspired by Apple Fitness+

## 1. Visual Theme & Atmosphere

Apple Fitness+ embodies a minimalist, energetic design philosophy grounded in precision and motion. The system prioritizes clarity and accessibility, using abundant whitespace and a carefully curated color palette that balances neutral professionalism with vibrant accents. The aesthetic is contemporary yet approachable, reflecting both the premium Apple ecosystem and the inclusive, motivational nature of fitness. Typography is clean and modern, with generous spacing that invites engagement. Visual hierarchies are established through weight and scale rather than decoration, creating an interface that feels effortless and focused on the user's fitness journey.

**Key Characteristics:**
- Minimalist, whitespace-driven layouts with generous breathing room
- High-contrast typography for legibility and emphasis
- Accent colors used sparingly for call-to-action and motivation
- Neutral tones dominate with selective use of vibrant lime-green for energy
- Responsive, motion-friendly component patterns
- Premium, modern aesthetic aligned with Apple's design language
- Dark and light mode compatibility through a versatile color system

## 2. Color Palette & Roles

### Primary

- **Primary Blue** (`#0071E3`): Core interactive element, primary links, and system actions. Primary call-to-action color used across all major UI interactions.
- **Primary Blue Hover** (`#006EDB`): Darker variant for hover and active states on primary blue elements.
- **Primary Blue Focus** (`#0076DF`): Alternative shade used for focus states and secondary primary interactions.
- **Primary Blue Darker** (`#0077ED`): Enhanced contrast variant for accessibility in low-light contexts.

### Accent Colors

- **Energy Lime** (`#9EF200`): High-energy accent for prominent call-to-action buttons, badges, and motivational elements. Used to convey vitality and action.
- **Energy Lime Alt** (`#AAFF00`): Brighter variant of the lime accent for hover states and emphasized elements requiring maximum visibility.

### Neutral Scale

- **Text Dark** (`#1D1D1F`): Primary text color for body content, headings, and interactive elements. High contrast against light backgrounds.
- **Text Darkest** (`#000000`): Maximum contrast black used for primary headings and critical text.
- **Text Medium** (`#333336`): Secondary text for supporting information and descriptive content.
- **Text Light** (`#6E6E73`): Tertiary text for captions, metadata, and disabled states.
- **Surface Dark** (`#272729`): Dark surface background for cards and containers in dark mode contexts.

### Surface & Borders

- **Surface Light** (`#FAFAFC`): Subtle light background used for content separation and card backgrounds in light mode.
- **Surface White** (`#FFFFFF`): Pure white for primary light-mode backgrounds and high-contrast containers.
- **Border Subtle** (`#E8E8ED`): Minimal border color used for subtle dividers and container edges where definition is needed without visual weight.

## 3. Typography Rules

### Font Family

**Primary Font:** SF Pro Text (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`) — used for body text, navigation, buttons, and UI labels.

**Secondary Font:** SF Pro Display (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`) — used for display headings, large titles, and prominent visual hierarchy elements.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|-----------------|-------|
| Display / Hero | SF Pro Display | 28px | 700 | 32px | 0px | Large display headings, campaign titles |
| Heading 1 | SF Pro Text | 34px | 600 | 50px | 0px | Page titles, main section headings |
| Heading 2 | SF Pro Text | 24px | 600 | 28px | 0px | Card titles, subsection headings |
| Heading 3 | SF Pro Text | 18px | 600 | 24px | 0px | Module titles, smaller headings |
| Label / Input | SF Pro Display | 24px | 600 | 24px | 0px | Form inputs, data entry fields |
| Body Large | SF Pro Text | 17px | 400 | 25px | 0px | Primary body text, descriptions |
| Body Standard | SF Pro Text | 14px | 400 | 20px | 0px | Standard body copy, UI labels |
| Caption | SF Pro Text | 12px | 400 | 16px | 0px | Metadata, timestamps, secondary information |
| Button | SF Pro Text | 18px | 300 | 18px | 0px | Primary button labels, high emphasis action |
| Button Small | SF Pro Text | 14px | 400 | 18px | 0px | Secondary button labels |

### Principles

- **Hierarchy through weight:** Distinction is created primarily via font-weight (300, 400, 600, 700) rather than size alone.
- **Generous line height:** 1.4–1.5x multipliers of font size ensure readability and breathing room in body text.
- **Minimal letter spacing:** Type is set tight except where display sizes benefit from slight negative spacing.
- **System font stack:** SF Pro family provides optimal rendering across Apple and non-Apple platforms with fallback to system fonts.
- **Weight contrast:** Light (300) weights used for prominent headings, regular (400) for body, and semibold (600–700) for emphasis.

## 4. Component Stylings

### Buttons

#### Primary Button (Solid Dark)

- **Background:** `rgb(29, 29, 31)` (`#1D1D1F`)
- **Text Color:** `rgb(255, 255, 255)` (`#FFFFFF`)
- **Font Size:** `14px`
- **Font Weight:** `400`
- **Font Family:** SF Pro Text
- **Padding:** `8px 15px`
- **Border Radius:** `8px`
- **Border:** None
- **Height:** `36px`
- **Line Height:** `18px`
- **Hover State:** `background-color: rgba(0, 0, 0, 0.9)`
- **Active State:** `background-color: rgb(0, 0, 0)`
- **Disabled State:** `opacity: 0.5`, `cursor: not-allowed`

#### Secondary Button (Ghost)

- **Background:** `rgba(0, 0, 0, 0)` (transparent)
- **Text Color:** `rgba(0, 0, 0, 0.8)` (`#333336` with 80% opacity)
- **Font Size:** `17px`
- **Font Weight:** `400`
- **Font Family:** SF Pro Text
- **Padding:** `0px`
- **Border Radius:** `0px`
- **Border:** None
- **Height:** `18px`
- **Line Height:** `18px`
- **Hover State:** `color: rgba(0, 0, 0, 1)`
- **Active State:** `color: rgb(29, 29, 31)`
- **Disabled State:** `opacity: 0.4`

#### Icon Button (Minimal)

- **Background:** `rgba(0, 0, 0, 0)` (transparent)
- **Text Color:** `rgba(0, 0, 0, 0.8)`
- **Font Size:** `18px`
- **Font Weight:** `400`
- **Padding:** `0px`
- **Border Radius:** `0px`
- **Border:** None
- **Width / Height:** `18px`
- **Hover State:** `color: rgb(0, 0, 0)`, `opacity: 1`
- **Active State:** `color: rgb(29, 29, 31)`

#### Call-to-Action Button (Lime Accent)

- **Background:** `#9EF200` (Energy Lime)
- **Text Color:** `rgb(29, 29, 31)` (`#1D1D1F`)
- **Font Size:** `18px`
- **Font Weight:** `400`
- **Font Family:** SF Pro Text
- **Padding:** `12px 24px`
- **Border Radius:** `36px`
- **Border:** None
- **Height:** `44px`
- **Line Height:** `18px`
- **Hover State:** `background-color: #AAFF00`
- **Active State:** `background-color: #9EF200`, `opacity: 0.9`
- **Disabled State:** `opacity: 0.5`, `cursor: not-allowed`

### Cards & Containers

#### Content Card

- **Background:** `rgb(255, 255, 255)` (`#FFFFFF`)
- **Text Color:** `rgb(29, 29, 31)` (`#1D1D1F`)
- **Padding:** `60px`
- **Border Radius:** `0px`
- **Border:** None
- **Box Shadow:** None
- **Font Size:** `17px`
- **Font Weight:** `400`
- **Line Height:** `25px`

#### Dark Surface Card

- **Background:** `rgb(40, 40, 42)` (inferred dark container)
- **Text Color:** `rgb(255, 255, 255)`
- **Padding:** `60px`
- **Border Radius:** `0px`
- **Border:** None
- **Box Shadow:** None

#### Subtle Border Card

- **Background:** `rgb(250, 250, 252)` (`#FAFAFC`)
- **Text Color:** `rgb(29, 29, 31)`
- **Padding:** `20px`
- **Border Radius:** `8px`
- **Border:** `1px solid #E8E8ED`
- **Box Shadow:** None

### Inputs & Forms

#### Text Input Field

- **Background:** `rgb(255, 255, 255)` (`#FFFFFF`)
- **Text Color:** `rgb(29, 29, 31)` (`#1D1D1F`)
- **Font Size:** `24px`
- **Font Weight:** `600`
- **Font Family:** SF Pro Display
- **Padding:** `16px 20px`
- **Border Radius:** `8px`
- **Border:** `1px solid #E8E8ED`
- **Height:** `24px`
- **Line Height:** `24px`
- **Focus State:** `border-color: #0071E3`, `outline: none`
- **Disabled State:** `background-color: #FAFAFC`, `opacity: 0.6`
- **Placeholder Color:** `rgba(0, 0, 0, 0.4)`

#### Form Label

- **Font Size:** `12px`
- **Font Weight:** `400`
- **Color:** `rgb(110, 110, 115)` (`#6E6E73`)
- **Margin Bottom:** `8px`
- **Font Family:** SF Pro Text
- **Text Transform:** Uppercase (optional)
- **Letter Spacing:** `0.5px`

### Navigation

#### Primary Navigation Bar

- **Background:** `rgb(255, 255, 255)` (`#FFFFFF`) or `rgba(255, 255, 255, 0.98)` with backdrop blur
- **Text Color:** `rgb(29, 29, 31)` (`#1D1D1F`)
- **Height:** `44px`
- **Padding:** `0px 24px`
- **Border Bottom:** `1px solid #E8E8ED` (optional)
- **Font Size:** `17px`
- **Font Weight:** `400`
- **Position:** Sticky at top
- **Box Shadow:** `0 2px 8px rgba(0, 0, 0, 0.08)` (subtle elevation)

#### Navigation Link

- **Background:** `transparent`
- **Text Color:** `rgba(0, 0, 0, 0.8)` (`#333336`)
- **Font Size:** `17px`
- **Font Weight:** `600`
- **Padding:** `0px 8px`
- **Height:** `44px`
- **Line Height:** `25px`
- **Hover State:** `color: rgb(0, 0, 0)`
- **Active State:** `color: #0071E3`, `border-bottom: 2px solid #0071E3`

### Badges

#### Primary Badge (Solid)

- **Background:** `#9EF200` (Energy Lime)
- **Text Color:** `rgb(29, 29, 31)` (`#1D1D1F`)
- **Font Size:** `12px`
- **Font Weight:** `600`
- **Padding:** `4px 12px`
- **Border Radius:** `20px`
- **Display:** `inline-block`

#### Secondary Badge (Outline)

- **Background:** `transparent`
- **Text Color:** `rgb(29, 29, 31)`
- **Border:** `1px solid rgb(29, 29, 31)`
- **Font Size:** `12px`
- **Font Weight:** `400`
- **Padding:** `4px 12px`
- **Border Radius:** `6px`

## 5. Layout Principles

### Spacing System

**Base Unit:** `4px`

**Spacing Scale:**
- `4px` (xs) — Minimal micro-spacing between inline elements
- `8px` (sm) — Small padding in compact components, button groups
- `12px` (md) — Standard margin between related elements
- `16px` (lg) — Padding in cards, component internal spacing
- `20px` (xl) — Padding in larger containers, section gutters
- `24px` (2xl) — Standard padding in padded sections
- `28px` (3xl) — Larger section spacing
- `32px` (4xl) — Major content padding
- `36px` (5xl) — Extra spacing between major sections
- `40px` (6xl) — Large section padding
- `60px` (hero) — Hero sections, full-width padded containers
- `76px` (jumbo) — Margin between major page sections

**Usage Context:**
- `8px–16px`: Button padding, input fields, small containers
- `12px–24px`: Card padding, section gutters, margins between modules
- `32px–60px`: Full-width section padding, hero sections
- `60px–76px`: Major vertical rhythms between page sections

### Grid & Container

**Max Width:** `1440px` (full width constraint for wide screens)

**Column Strategy:** 12-column grid system with flexible sizing:
- **Mobile (320px–768px):** Single column, full-width minus gutters (`16px` gutters)
- **Tablet (768px–1024px):** 2–4 columns with `20px` gutters
- **Desktop (1024px+):** 12-column grid with `24px–32px` gutters

**Container Padding:**
- Mobile: `16px` left/right
- Tablet: `20px` left/right
- Desktop: `24px–32px` left/right, max-width centering

### Whitespace Philosophy

Whitespace is intentional and generous, creating visual breathing room that emphasizes content hierarchy and reduces cognitive load. Vertical rhythm is maintained through consistent spacing multipliers (typically 1.5x or 2x the base unit). Horizontal whitespace separates functional zones and guides visual scanning. Padding inside containers is typically larger than margin between elements, creating clear content boundaries. The design avoids visual clutter through strategic use of color, typography weight, and whitespace rather than decorative elements.

### Border Radius Scale

- `0px` — Cards, containers, large sections (sharp, modern aesthetic)
- `6px` — Small badges, subtle UI components
- `8px` — Buttons, input fields, small rounded elements
- `18px` — Modal dialogs, rounded containers
- `20px` — Large badges, pill-shaped UI elements
- `36px` — Large call-to-action buttons (full pill-shaped)
- `980px` — Fully rounded elements (circles in modals, ring indicators)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Base (0) | No shadow, flat surface | Default state for all components |
| Raised (1) | `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08)` | Navigation bars, subtle floating elements |
| Floating (2) | `box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12)` | Dropdowns, tooltips, hover card states |
| Modal (3) | `box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16)` | Modal overlays, expanded components |
| Deep (4) | `box-shadow: 0 12px 48px rgba(0, 0, 0, 0.20)` | Deep modals, highest-priority overlays |

**Shadow Philosophy:** Shadows are minimal and use low-opacity black to maintain visual hierarchy without introducing visual noise. Elevation is communicated primarily through layering and z-index rather than aggressive shadows. Shadows increase subtly with depth to create a gentle sense of lift. The system uses consistent shadow blur and spread values to create a cohesive, recognizable shadow family across all elevations.

## 7. Do's and Don'ts

### Do

- **Use the Energy Lime accent sparingly** for primary call-to-action buttons to maintain visual impact and guide user focus.
- **Maintain generous whitespace** around text and components to reduce visual fatigue and improve scanability.
- **Apply consistent font weights** from the SF Pro family to create clear hierarchy without relying on size changes alone.
- **Use Primary Blue (`#0071E3`) for all interactive and linked elements** to maintain a coherent interactive language.
- **Stack elements vertically with `60px–76px` spacing** between major sections to establish clear content zones.
- **Apply subtle shadows (`0 2px 8px rgba(0,0,0,0.08)`)** only to elevated interactive states or floating components.
- **Maintain minimum touch targets of `44px × 44px`** for all interactive elements on mobile and desktop.
- **Use the Neutral Scale (`#1D1D1F`, `#333336`, `#6E6E73`)** for text to ensure proper contrast and readability.

### Don't

- **Don't overuse bold or extra-heavy weights** for body text; reserve weight emphasis for headings and primary actions only.
- **Don't add unnecessary borders** to cards and containers; rely on padding, background color, and subtle shadows instead.
- **Don't use multiple accent colors** in the same view; restrict to one primary accent (lime green) per interface section.
- **Don't reduce whitespace below base spacing values (`8px`)** for major content areas; maintain breathing room for accessibility.
- **Don't apply box shadows to every component**; reserve shadows for elements that require explicit depth and layering.
- **Don't stack components without clear vertical spacing**; use the established spacing scale to separate related sections.
- **Don't use colors outside the defined palette** without explicit accessibility review and contrast testing.
- **Don't create text smaller than `12px`** for body content; captions and metadata are the minimum readable size.

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | 320px–767px | Single column, `16px` gutters, `20px–32px` section padding, touch-optimized `44px` targets, stacked navigation |
| Tablet | 768px–1023px | 2–4 columns, `20px` gutters, `32px–40px` section padding, grid-based layout begins |
| Desktop | 1024px–1439px | 6–12 columns, `24px–32px` gutters, `40px–60px` section padding, multi-column content, full navigation bar |
| Large Desktop | 1440px+ | Max-width `1440px` centered container, `32px` gutters, `60px–76px` section padding, optimized whitespace |

### Touch Targets

- **Minimum interactive size:** `44px × 44px` for all buttons, links, and tappable elements across all breakpoints.
- **Button padding:** `8px 15px` (36px height) for primary buttons; adjust to `12px 24px` (44px height) for prominent CTAs.
- **Icon buttons:** `18px–22px` minimum for simple icon buttons; nest within larger `44px` touch zones.
- **Link padding:** `0px 8px` horizontally to expand touch zone without visual change.
- **Form inputs:** Minimum `24px` height (SF Pro Display 24px size), preferably `32px–40px` on mobile for comfortable interaction.

### Collapsing Strategy

- **Navigation:** Full horizontal menu on desktop (`1024px+`) collapses to hamburger icon and drawer on mobile (`< 768px`).
- **Multi-column layouts:** Reflow from 3–4 columns on desktop to 2 columns on tablet, then single column on mobile.
- **Hero sections:** Hero image scales with aspect ratio maintained; text remains centered and readably sized.
- **Padding:** Reduce from `60px` desktop padding to `32px–40px` on tablet and `16px–20px` on mobile.
- **Typography:** Headings scale down by 10–15% on tablet, 20–25% on mobile to maintain readability within smaller viewports.
- **Cards:** Grid items reflow fluidly; no fixed aspect ratios except for embedded media (maintain 16:9 or 4:3 aspect).
- **Spacing:** Use CSS Grid or Flexbox gap values that scale with viewport (e.g., `gap: clamp(16px, 3vw, 32px)`).

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA:** Energy Lime (`#9EF200`) — call-to-action buttons, prominent affordances
- **Interactive Elements:** Primary Blue (`#0071E3`) — links, interactive states, focus indicators
- **Primary Text:** Text Dark (`#1D1D1F`) — body copy, headings, standard UI labels
- **Secondary Text:** Text Medium (`#333336`) — supporting information, captions, metadata
- **Tertiary Text:** Text Light (`#6E6E73`) — disabled states, timestamps, subtle annotations
- **Background:** Surface White (`#FFFFFF`) — primary light-mode backgrounds
- **Subtle Surface:** Surface Light (`#FAFAFC`) — secondary backgrounds, card containers
- **Borders:** Border Subtle (`#E8E8ED`) — minimal dividers, input borders
- **Dark Surface:** Text Darkest (`#000000`) — maximum-contrast text, dark-mode backgrounds

### Iteration Guide

1. **Start with Primary Blue (`#0071E3`) for all interactive elements** (links, buttons, focus states). Hover and active states use darker variants (`#006EDB`, `#0076DF`).

2. **Use Energy Lime (`#9EF200`) exclusively for primary call-to-action buttons** and high-emphasis affordances. Hover variant is `#AAFF00`. Never use lime for body text or secondary UI.

3. **Typography hierarchy is created through weight and size**: Display headings use SF Pro Display `700` at `28px`; body uses SF Pro Text `400` at `14px–17px`. Maintain line-height at 1.4–1.5x font size.

4. **Spacing follows an `8px` base unit scale**: Use `8px`, `16px`, `24px`, `32px`, `60px` for padding/margins. Major sections are separated by `60px–76px` vertical spacing.

5. **Button styles:** Primary buttons are dark solid (`#1D1D1F` bg, white text), secondary buttons are ghost (transparent bg, dark text), CTAs use lime pill-shaped variant with `36px` border-radius.

6. **Card and container design**: Use `0px` border-radius for major containers (modern, sharp aesthetic); `8px` radius for input fields and smaller components; `20px–36px` for pill-shaped badges and accent elements.

7. **Shadows are minimal and reserved for elevation**: Use `0 2px 8px rgba(0,0,0,0.08)` for subtle floating states; reserve deeper shadows for modals. Most components have no shadow (flat).

8. **Touch targets are minimum `44px × 44px`** across all breakpoints. Buttons use `36px` height minimum; increase to `44px` for prominent CTAs.

9. **Responsive strategy**: Desktop uses full 12-column grid with `32px` gutters and `60px` section padding; tablet uses 4 columns with `20px` gutters; mobile is single column with `16px` gutters and `20px` padding.

10. **Accessibility and contrast**: All text meets WCAG AA standards; use Text Dark (`#1D1D1F`) on light backgrounds, white on dark backgrounds. Test all interactive states with focus indicators in Primary Blue.