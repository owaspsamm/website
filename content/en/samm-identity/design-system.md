---
title: "Design System"
description: "Internal design system reference for the OWASP SAMM website."
layout: "single"
type: "samm-identity"
weight: 20
sitemap:
  disable: true
robots: "noindex, nofollow"
---

Internal reference for design decisions, tokens, and patterns. Not linked from navigation or sitemap.

## Design Tokens

### Spacing (Golden Ratio)

| Token | Value |
|---|---|
| `--space-xs` | 0.382rem |
| `--space-sm` | 0.618rem |
| `--space-md` | 1rem |
| `--space-lg` | 1.618rem |
| `--space-xl` | 2.618rem |
| `--space-2xl` | 4.236rem |
| `--space-3xl` | 6.854rem |

### Typography

| Token | Value | Usage |
|---|---|---|
| `--text-xs` | 0.618rem | Captions, fine print |
| `--text-sm` | 0.875rem | Small labels, metadata |
| `--text-base` | 1rem | Body text |
| `--text-lg` | 1.236rem | Section subheadings |
| `--text-xl` | 1.618rem | Page subheadings (h2) |
| `--text-2xl` | 2.618rem | Page titles |
| `--text-3xl` | 4.236rem | Hero headings |

### Font stacks

| Token | Usage |
|---|---|
| `--font-brand` | "Days One": headings, logo, hero text |
| `--font-sans` | system-ui stack: all body text |
| `--font-mono` | ui-monospace stack: code blocks |
| `--line-height` | 1.618 (φ): body line height |

### Colors

| Token | Value | Contrast on offwhite | Usage |
|---|---|---|---|
| `--color-primary` | #71b8b8 | 2.11:1 (decoration only) | Brand teal: backgrounds, accents, hover tints. **Never use for text or links** (fails WCAG AA). |
| `--color-primary-rgb` | 113, 184, 184 | — | For `rgba()` usage |
| `--color-mid` | #366867 | 5.86:1 PASS AA | Accessible teal: the only teal safe for text or links. Added because `--color-primary` fails contrast. Used for link default and hover states on dark buttons. |
| `--color-dark` | #2c3030 | 12.43:1 PASS | Primary text, dark surfaces, near-black |
| `--color-offwhite` | #f9f6f6 | — | Page background, card fills. No plain white anywhere, this is the lightest surface. |
| `--color-bg` | → offwhite | — | Semantic alias for page background |
| `--color-border` | #e8e3e3 | — | Borders, dividers (derived from offwhite) |

### Text colors

| Token | Value | Contrast on offwhite | Usage |
|---|---|---|---|
| `--color-text` | → dark | 12.43:1 PASS | Primary text (alias for `--color-dark`) |
| `--color-text-light` | #464646 | 8.78:1 PASS | Secondary text |
| `--color-text-muted` | #6b6b6b | 4.96:1 PASS | Metadata, captions, de-emphasised labels |

### Business Function Colors

| Token | Value | BF |
|---|---|---|
| `--color-governance` | #435b70 | Governance |
| `--color-design` | #ad4b00 | Design |
| `--color-implementation` | #3a5f26 | Implementation |
| `--color-verification` | #754858 | Verification |
| `--color-operations` | #5b5b62 | Operations |

Each has a `-light` variant for hover states and cell accents.

### Layout

| Token | Value | Usage |
|---|---|---|
| `--max-width` | 72rem | Container max-width |
| `--header-height` | 4rem | Site header height |
| `--tap-target-min` | 2.75rem | Minimum touch-target size (44px, Apple HIG / WCAG 2.5.5 AAA) |
| `--hero-height-min` | 24rem | Hero floor, prevents collapse at normal viewports |
| `--hero-height-max` | 40rem | Hero ceiling, prevents runaway growth on 4K+ |

### Timing

| Token | Usage |
|---|---|
| `--duration` | Transition duration |
| `--ease` | Easing function |

## Rules

### Never hardcode
No raw px, em, rem, or hex values. Always use tokens.

### Minimal variation
Each component uses at most **2 font sizes** and **2 font weights**. Differentiate by color, case, or background instead of multiplying sizes and weights.

### Reuse first
Before creating a new pattern, search the codebase for how the same problem was already solved. If a chevron, icon, button, or layout exists, reuse it exactly.

### Tap targets
Any interactive element that can be tapped on touch devices must have a tap target of at least `var(--tap-target-min)` in both dimensions. Apply to the `<a>` / `<button>` itself, not the inner icon; the inner SVG can be smaller. Existing patterns: `.team-card__overlay a` (touch only), `.docs__sidebar-close` (touch only).

## Button System

| Class | Default | Hover |
|---|---|---|
| `.btn--primary` | Dark bg, white text | Teal bg, dark text |
| `.btn--outline` | Transparent, dark border | Teal bg, dark text |
| `.btn--white` | White bg, dark border | Teal bg, dark text |

All buttons share the same hover target (teal). Never override button colors per-context.

## Icon System

Stroke-based SVGs with `fill="none" stroke="currentColor" stroke-linecap="round"`.

**Rounded chevron (right)**
```
viewBox="0 0 8 12"
M0.5 0.5 L4.5 4 Q7.5 6 4.5 8 L0.5 11.5
```

**Caret (down)**
```
viewBox="0 0 12 9"
M0.5 0.5 L4 4.5 Q6 8 8 4.5 L11.5 0.5
```

All use quadratic bezier (`Q`) for rounded tips.

## Hover Vocabulary

| Pattern | Effect | When |
|---|---|---|
| Lift | `translateY(-2px)` + box-shadow | Clickable cards |
| Teal tint | `rgba(113, 184, 184, 0.07)` bg | Row hover |
| Underline | `text-decoration: underline` | Links on hover (desktop), always (mobile) |
| Color shift | `--bf-color` → `--bf-color-light` | BF-colored links |

## Link Patterns

### Content links
- Default: `--color-mid`, underline with teal tint
- Hover: `--color-primary`, solid underline
- Mobile: always underlined

### BF-colored links (model pages, skills framework)
- Set `--bf-color` on parent wrapper (`.model-bf--*` or `.skills-bf-group--*`)
- Links inherit via `color: var(--bf-color)`
- Hover shifts to `--bf-color-light`
- Beat generic `.content a:not(...)` with deep descendant selectors (specificity 0-6-2+), not `:not()` hacks

### Navigation links
- No underline in footer or nav (navigational context is sufficient)
- Pager cards: no underline (card border + chevron = affordance)

## CSS Conventions

- **BEM naming**: `.block__element--modifier`
- **No Bootstrap**: fully custom
- **Hugo Pipes**: all CSS files are bundled via `resources.Concat` (in layer order, defined in `baseof.html`), then minified and fingerprinted. Adding a new CSS file requires adding it to the concat list in `baseof.html`; it will not be picked up automatically.
- **Specificity**: match existing selector depth. Use deep descendant chains when needed. Never pad specificity with fake `:not(.x)` selectors.
- **Breakpoints**: `48rem` (primary mobile), `600px` (contact form)
- **Source order**: mobile overrides go in `@media (max-width: 48rem)`. Desktop-only rules use `@media (min-width: 48rem)`.

## JS Conventions

- **Page-specific behaviour** lives in `assets/js/<name>.js`. Loaded by the template's `{{ define "scripts" }}` block via Hugo Pipes: `resources.Get | minify | fingerprint`, with `defer` and `integrity`. Mirror the CSS pattern in `baseof.html`.
- **Shared behaviour** loaded by multiple templates lives in its own file (e.g. `docs-sidebar.js` is loaded by every docs/model template). Don't duplicate logic across page-specific files: extract to a shared file and include it.
- **Global interactions** live in `assets/js/global.js`, loaded by `baseof.html` via Hugo Pipes with `defer`: site nav, dropdowns, banner icons, model nav persistence.
- **Cookie-consent** is a hand-managed `static/js/cookie-consent.js` because of its specific load timing; not part of the Hugo Pipes flow.
- Each external script wraps its body in `document.addEventListener('DOMContentLoaded', function () { ... })` for safety, even though `defer` makes it nearly redundant.
- No bundler, no transpiler, no framework. Plain ES5-compatible JS. Each file is self-contained: no `import`/`export`.

## External Links

Links to external sites use `target="_blank" rel="noopener noreferrer"` with an inline SVG icon (`.external-link-icon`).

