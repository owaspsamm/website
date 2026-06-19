---
title: "Foundations"
description: "Colour system, typography, spacing, and surfaces for the OWASP SAMM website."
layout: "single"
type: "internal"
weight: 10
sitemap:
  disable: true
robots: "noindex, nofollow"
---

<style>
/* Design system examples — scoped to this page only */
.ds-swatch-row { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 1rem 0; }
.ds-swatch {
  width: 5rem; height: 5rem; border-radius: 0.375rem;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  font-size: 0.7rem; font-family: var(--font-mono); line-height: 1.4; text-align: center;
  border: 1px solid rgba(0,0,0,0.08);
}
.ds-bf-row { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 1rem 0; }
.ds-bf-swatch {
  padding: 0.5rem 1rem; border-radius: 0.375rem;
  font-size: var(--text-sm); font-weight: 600; color: #fff;
}
.ds-surface-row { display: flex; flex-wrap: wrap; gap: 0.75rem; margin: 1rem 0; }
.ds-surface {
  flex: 1 1 10rem; min-height: 4rem; border-radius: 0.375rem;
  border: 1px solid var(--color-border);
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: 0.5rem; font-size: var(--text-sm); font-family: var(--font-mono);
}
.ds-type-scale { border: 1px solid var(--color-border); border-radius: 0.375rem; overflow: hidden; margin: 1rem 0; }
.ds-type-row {
  display: grid; grid-template-columns: 7rem 5rem 1fr 6rem;
  align-items: center; gap: 1rem; padding: 0.625rem 1rem;
  border-bottom: 1px solid var(--color-border);
}
.ds-type-row:last-child { border-bottom: none; }
.ds-type-row:nth-child(4) { background: rgba(var(--color-primary-rgb), 0.05); }
.ds-token { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-text-muted); }
.ds-px { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-text-muted); }
.ds-use { font-size: var(--text-xs); color: var(--color-text-muted); text-align: right; }
.ds-spacing-demo { display: flex; align-items: flex-end; gap: 0.75rem; margin: 1rem 0; flex-wrap: wrap; }
.ds-space-bar {
  background: var(--color-primary); opacity: 0.5; border-radius: 2px; width: 2rem;
  display: flex; flex-direction: column; justify-content: flex-end;
  padding-bottom: 0.25rem; align-items: center;
}
.ds-space-label { font-size: 0.6rem; font-family: var(--font-mono); color: var(--color-offwhite); line-height: 1; }
.ds-rationale {
  background: rgba(var(--color-primary-rgb), 0.06);
  border-left: 3px solid var(--color-primary);
  border-radius: 0 0.25rem 0.25rem 0;
  padding: 0.75rem 1rem;
  font-size: var(--text-sm);
  margin: 1rem 0;
}
</style>

## Colour system

### Core palette

Five named tokens. Light to dark:

<div class="ds-swatch-row">
  <div class="ds-swatch" style="background:#f9f6f6; color:#2c3030;">offwhite<br>#f9f6f6</div>
  <div class="ds-swatch" style="background:#e8e3e3; color:#2c3030;">border<br>#e8e3e3</div>
  <div class="ds-swatch" style="background:#71b8b8; color:#2c3030;">primary<br>#71b8b8</div>
  <div class="ds-swatch" style="background:#366867; color:#f9f6f6;">mid<br>#366867</div>
  <div class="ds-swatch" style="background:#2c3030; color:#f9f6f6;">dark<br>#2c3030</div>
</div>

<div class="ds-rationale">
<strong>Why teal?</strong> SAMM's context is software security: technical, serious, trustworthy. Teal sits between blue (technical authority) and green (progress, validation), which suits a maturity model. It also gives the business function palette room to breathe: the five BF colors use distinct hues that don't compete with the UI chrome.
</div>

| Token | Value | Contrast on offwhite | Usage |
|---|---|---|---|
| `--color-offwhite` | #f9f6f6 | — | Page background. No plain white on the site. |
| `--color-bg` | → offwhite | — | Semantic alias for page background |
| `--color-border` | #e8e3e3 | — | Borders and dividers |
| `--color-primary` | #71b8b8 | 2.11:1 | Decoration only: backgrounds, accents, tints. **Never text or links.** |
| `--color-primary-rgb` | 113, 184, 184 | — | For `rgba()` usage |
| `--color-mid` | #366867 | 5.86:1 AA ✓ | The only teal safe for text or links |
| `--color-dark` | #2c3030 | 12.43:1 AAA ✓ | Primary text and the site header background. Near-black with a slight cool cast, not a teal. |

<div class="ds-rationale">
<strong>Why <code>--color-mid</code> exists.</strong> The brand teal (#71b8b8) fails WCAG AA contrast on the offwhite background (2.11:1 vs. the required 4.5:1). Rather than darken the brand color globally, we keep the brand teal for decorative use and introduce <code>--color-mid</code> (#366867, 5.86:1) for any text or interactive element that needs accessible contrast.
</div>

### Teal tints

The brand teal is also used at reduced opacity for backgrounds. These are not named tokens; they are computed with `rgba(var(--color-primary-rgb), alpha)`.

<div class="ds-swatch-row">
  <div class="ds-swatch" style="background:rgba(113,184,184,0.06); color:#2c3030;">0.06<br>callout</div>
  <div class="ds-swatch" style="background:rgba(113,184,184,0.07); color:#2c3030;">0.07<br>nav hover</div>
  <div class="ds-swatch" style="background:rgba(113,184,184,0.08); color:#2c3030;">0.08<br>tags / rows</div>
  <div class="ds-swatch" style="background:rgba(113,184,184,0.10); color:#2c3030;">0.10<br>headers</div>
</div>

| Alpha | Usage |
|---|---|
| 0.06 | Rationale callout boxes |
| 0.07 | Sidebar nav hover, docs active items |
| 0.08 | Blog tag pills, mobile nav items, table row hover |
| 0.10 | Table section headers, docs section header backgrounds |
| 0.15 | Focus rings and tinted borders on interactive elements |

All tints are decoration-only. Never use them as a background behind text that relies on contrast with the offwhite page background.

---

### Text colors

| Token | Value | Contrast on offwhite | Usage |
|---|---|---|---|
| `--color-text` | → dark | 12.43:1 AAA ✓ | Primary text (alias for `--color-dark`) |
| `--color-text-light` | #464646 | 8.78:1 AA ✓ | Secondary text |
| `--color-text-muted` | #6b6b6b | 4.96:1 AA ✓ | Metadata, captions, de-emphasised labels |

### Business function colors

Each business function has a dedicated color used consistently across the model, sidebar navigation, and practice pages.

<div class="ds-bf-row">
  <span class="ds-bf-swatch" style="background:#435b70;">Governance #435b70</span>
  <span class="ds-bf-swatch" style="background:#ad4b00;">Design #ad4b00</span>
  <span class="ds-bf-swatch" style="background:#3a5f26;">Implementation #3a5f26</span>
  <span class="ds-bf-swatch" style="background:#754858;">Verification #754858</span>
  <span class="ds-bf-swatch" style="background:#5b5b62;">Operations #5b5b62</span>
</div>

Each has a `-light` variant for hover states and cell accents. These colors carry meaning; they are not decorative tints. Never use a BF color outside its business function context.

---

## Surfaces

Three surface levels create depth without heavy shadows. Cards lift from the page background through color, not box-shadow.

<div class="ds-surface-row">
  <div class="ds-surface" style="background:var(--color-offwhite);">
    <span style="color:var(--color-text-muted);">Page background</span>
    <span style="font-size:var(--text-xs);color:var(--color-text-muted);">#f9f6f6 — offwhite</span>
  </div>
  <div class="ds-surface" style="background:#ffffff; border-color:#e8e3e3;">
    <span style="color:var(--color-text-muted);">Card / content area</span>
    <span style="font-size:var(--text-xs);color:var(--color-text-muted);">#ffffff — no token yet</span>
  </div>
  <div class="ds-surface" style="background:var(--color-border);">
    <span style="color:var(--color-text-muted);">Border / divider</span>
    <span style="font-size:var(--text-xs);color:var(--color-text-muted);">#e8e3e3 — color-border</span>
  </div>
  <div class="ds-surface" style="background:var(--color-dark);">
    <span style="color:var(--color-offwhite);">Dark surface</span>
    <span style="font-size:var(--text-xs);color:rgba(249,246,246,0.6);">#2c3030 — color-dark</span>
  </div>
</div>

<div class="ds-rationale">
<strong>Warm neutrals.</strong> Offwhite (#f9f6f6) gives the page a warm, natural quality that is easier on the eyes than pure white during extended reading sessions. The slight warm tint (red channel slightly higher than blue) is subtle but measurable.
</div>

---

## Typography scale

Based on the golden ratio with half-power steps (√φ ≈ 1.272). The base is 1rem (typically 16px). Each step multiplies or divides by 1.272.

<div class="ds-type-scale">
  <div class="ds-type-row">
    <span class="ds-token">--text-3xl</span>
    <span class="ds-px">≈ 67.8px</span>
    <span style="font-size:var(--text-3xl); font-weight:700; font-family:var(--font-brand); line-height:1.1;">SAMM</span>
    <span class="ds-use">Hero display</span>
  </div>
  <div class="ds-type-row">
    <span class="ds-token">--text-2xl</span>
    <span class="ds-px">≈ 41.9px</span>
    <span style="font-size:var(--text-2xl); font-weight:700; font-family:var(--font-brand); line-height:1.1;">Page title</span>
    <span class="ds-use">h1 hero</span>
  </div>
  <div class="ds-type-row">
    <span class="ds-token">--text-xl</span>
    <span class="ds-px">≈ 25.9px</span>
    <span style="font-size:var(--text-xl); font-weight:600; line-height:1.2;">Section heading</span>
    <span class="ds-use">h2</span>
  </div>
  <div class="ds-type-row">
    <span class="ds-token">--text-lg</span>
    <span class="ds-px">≈ 19.8px</span>
    <span style="font-size:var(--text-lg); font-weight:600;">Sub-heading</span>
    <span class="ds-use">h3, card title</span>
  </div>
  <div class="ds-type-row">
    <span class="ds-token">--text-base</span>
    <span class="ds-px">16px (base)</span>
    <span style="font-size:var(--text-base);">Body text, nav items, button labels</span>
    <span class="ds-use">Body — φ⁰</span>
  </div>
  <div class="ds-type-row">
    <span class="ds-token">--text-sm</span>
    <span class="ds-px">≈ 14px</span>
    <span style="font-size:var(--text-sm);">Metadata, captions, sidebar nav, tags</span>
    <span class="ds-use">Small text</span>
  </div>
  <div class="ds-type-row">
    <span class="ds-token">--text-xs</span>
    <span class="ds-px">≈ 9.9px</span>
    <span style="font-size:var(--text-xs);">Fine print, overlays on dark surfaces only</span>
    <span class="ds-use">Minimum</span>
  </div>
</div>

<div class="ds-rationale">
<strong>Why √φ steps?</strong> Full φ steps (×1.618) jump from 16px straight to 25.9px with nothing between. Half-power steps (×1.272) give intermediate sizes that are still mathematically related but usable in real UI. The result: seven steps covering fine print to hero headings, all proportionally consistent.
</div>

### Font stacks

| Token | Stack | Usage |
|---|---|---|
| `--font-brand` | "Days One", sans-serif | Headings, logo, hero text |
| `--font-sans` | system-ui, -apple-system, "Segoe UI", sans-serif | All body text |
| `--font-mono` | ui-monospace, "SF Mono", "Fira Code", monospace | Code blocks, tokens |
| `--line-height` | 1.618 (φ) | Body line height |

Days One is loaded from Google Fonts and scoped strictly to headings and the logo. Body text uses system fonts for performance: no flash of unstyled text, no network dependency for readability.

---

## Spacing scale

Pure golden ratio, base 1rem (16px). Each step multiplies by φ (1.618) going up or divides going down.

<div class="ds-spacing-demo">
  <div class="ds-space-bar" style="height:0.382rem;"><span class="ds-space-label">xs</span></div>
  <div class="ds-space-bar" style="height:0.618rem;"><span class="ds-space-label">sm</span></div>
  <div class="ds-space-bar" style="height:1rem;"><span class="ds-space-label">md</span></div>
  <div class="ds-space-bar" style="height:1.618rem;"><span class="ds-space-label">lg</span></div>
  <div class="ds-space-bar" style="height:2.618rem;"><span class="ds-space-label">xl</span></div>
  <div class="ds-space-bar" style="height:4.236rem;"><span class="ds-space-label">2xl</span></div>
  <div class="ds-space-bar" style="height:6.854rem;"><span class="ds-space-label">3xl</span></div>
</div>

| Token | Value | Ratio | Usage |
|---|---|---|---|
| `--space-xs` | 0.382rem (≈6px) | φ⁻² | Icon-to-text gaps, tight inline spacing |
| `--space-sm` | 0.618rem (≈10px) | φ⁻¹ | Button padding (vertical), badge padding |
| `--space-md` | 1rem (16px) | φ⁰ | Base unit — body gaps, card padding |
| `--space-lg` | 1.618rem (≈26px) | φ¹ | Section gaps, nav item padding, content padding |
| `--space-xl` | 2.618rem (≈42px) | φ² | Large section margins, hero padding |
| `--space-2xl` | 4.236rem (≈68px) | φ³ | Hero spacing, page-level gaps |
| `--space-3xl` | 6.854rem (≈110px) | φ⁴ | Logo sizes, large image containers |

<div class="ds-rationale">
<strong>Why golden ratio for spacing?</strong> Unlike typography (where readability at specific pixel sizes matters), spacing is about proportional relationships between elements. Golden ratio spacing creates naturally harmonious layouts. Developers pick from a fixed scale instead of inventing arbitrary px values; the result looks intentional without manual tuning.
</div>
