---
title: "Accessibility"
description: "WCAG compliance, contrast ratios, tap targets, and testing checklist for the OWASP SAMM website."
layout: "single"
type: "internal"
weight: 50
sitemap:
  disable: true
robots: "noindex, nofollow"
---

<style>
.ds-pass { color: #3a5f26; font-weight: 600; }
.ds-warn { color: #ad4b00; font-weight: 600; }
.ds-rationale {
  background: rgba(var(--color-primary-rgb), 0.06);
  border-left: 3px solid var(--color-primary);
  border-radius: 0 0.25rem 0.25rem 0;
  padding: 0.75rem 1rem;
  font-size: var(--text-sm);
  margin: 1rem 0;
}
.ds-swatch-inline {
  display: inline-block;
  width: 0.85rem; height: 0.85rem;
  border-radius: 2px;
  vertical-align: middle;
  margin-right: 0.25rem;
  border: 1px solid rgba(0,0,0,0.12);
}
</style>

## WCAG compliance overview

The site targets **WCAG 2.1 Level AA** throughout. The table below records the status of each criterion as of the last audit.

| Criterion | Requirement | Status | Notes |
|---|---|---|---|
| 1.4.3 Contrast (Minimum) | Text ≥ 4.5:1, large text ≥ 3:1 | <span class="ds-pass">✓ Pass</span> | All text tokens pass on offwhite background. See contrast table below. |
| 1.4.4 Resize Text | Text resizable to 200% without loss | <span class="ds-pass">✓ Pass</span> | All font sizes use `rem`; no `px` on text. |
| 1.4.10 Reflow | No horizontal scroll at 320px | <span class="ds-pass">✓ Pass</span> | Verified on model table (scrollable container) and docs sidebar (drawer on mobile). |
| 1.4.11 Non-text Contrast | UI components ≥ 3:1 | <span class="ds-pass">✓ Pass</span> | Buttons and form borders checked. |
| 2.1.1 Keyboard | All functionality via keyboard | <span class="ds-pass">✓ Pass</span> | Nav dropdown, sidebar toggle, cookie consent all keyboard-accessible. |
| 2.4.3 Focus Order | Focus order matches visual order | <span class="ds-pass">✓ Pass</span> | No `tabindex` values > 0 in the codebase. |
| 2.4.7 Focus Visible | Focus indicator visible | <span class="ds-pass">✓ Pass</span> | Browser default `:focus` outline retained; not suppressed. |
| 2.5.5 Target Size | Interactive targets ≥ 44×44px | <span class="ds-pass">✓ Pass</span> | `--tap-target-min: 2.75rem` (44px). Applied to team card overlay links, sidebar close button. |
| 2.5.8 Target Size (Enhanced) | Targets ≥ 24×24px | <span class="ds-pass">✓ Pass</span> | Exceeds minimum; all targets ≥ 44px. |
| 4.1.2 Name, Role, Value | All UI components have accessible names | <span class="ds-pass">✓ Pass</span> | `aria-label` on icon buttons; `aria-hidden` on decorative SVGs; `aria-expanded` on nav toggle. |

---

## Contrast ratios

Background reference: **offwhite (#f9f6f6)** for light surfaces, **dark (#2c3030)** for dark surfaces.

### Text colors on light background

| Token | Value | Contrast on offwhite | Level |
|---|---|---|---|
| `--color-text` / `--color-dark` | <span class="ds-swatch-inline" style="background:#2c3030;"></span> #2c3030 | 12.43:1 | <span class="ds-pass">AAA</span> |
| `--color-text-light` | <span class="ds-swatch-inline" style="background:#464646;"></span> #464646 | 8.78:1 | <span class="ds-pass">AAA</span> |
| `--color-text-muted` | <span class="ds-swatch-inline" style="background:#6b6b6b;"></span> #6b6b6b | 4.96:1 | <span class="ds-pass">AA</span> |
| `--color-mid` | <span class="ds-swatch-inline" style="background:#366867;"></span> #366867 | 5.86:1 | <span class="ds-pass">AA</span> |
| `--color-primary` | <span class="ds-swatch-inline" style="background:#71b8b8;"></span> #71b8b8 | 2.11:1 | <span class="ds-warn">FAIL: decoration only</span> |

<div class="ds-rationale">
<strong><code>--color-primary</code> fails contrast.</strong> The brand teal (#71b8b8) has a 2.11:1 contrast ratio on offwhite, well below the 4.5:1 required for text or links. It is used <em>only</em> for decorative purposes: hover backgrounds, tinted underlines, accent borders. Any text or interactive element that needs teal uses <code>--color-mid</code> (#366867, 5.86:1) instead.
</div>

### Business function colors on light background

| Function | Token | Value | Contrast | Level |
|---|---|---|---|---|
| Governance | `--color-governance` | <span class="ds-swatch-inline" style="background:#435b70;"></span> #435b70 | 6.5:1 | <span class="ds-pass">AA</span> |
| Design | `--color-design` | <span class="ds-swatch-inline" style="background:#ad4b00;"></span> #ad4b00 | 5.2:1 | <span class="ds-pass">AA</span> |
| Implementation | `--color-implementation` | <span class="ds-swatch-inline" style="background:#3a5f26;"></span> #3a5f26 | 7.1:1 | <span class="ds-pass">AAA</span> |
| Verification | `--color-verification` | <span class="ds-swatch-inline" style="background:#754858;"></span> #754858 | 5.8:1 | <span class="ds-pass">AA</span> |
| Operations | `--color-operations` | <span class="ds-swatch-inline" style="background:#5b5b62;"></span> #5b5b62 | 5.4:1 | <span class="ds-pass">AA</span> |

The `-light` variants of BF colors are used for hover states and tinted backgrounds; not for text. Do not use `-light` variants for any text.

### White text on dark background

| Usage | Background | Contrast | Level |
|---|---|---|---|
| Header nav text (offwhite) | <span class="ds-swatch-inline" style="background:#2c3030;"></span> #2c3030 | 12.43:1 | <span class="ds-pass">AAA</span> |
| Primary button (white on dark) | <span class="ds-swatch-inline" style="background:#2c3030;"></span> #2c3030 | 12.43:1 | <span class="ds-pass">AAA</span> |

---

## Touch targets

**Rule:** any element that can be tapped on touch devices must have a tap target of at least `var(--tap-target-min)` (2.75rem = 44px) in both dimensions.

Apply the rule to the `<a>` or `<button>` element, not the inner icon. The inner SVG can be smaller for visual reasons; the clickable area must be 44px.

| Component | Implementation |
|---|---|
| Team card social links (touch) | `@media (hover: none)` — `.team-card__overlay a`: width + height = `var(--tap-target-min)` |
| Docs sidebar close button | `.docs__sidebar-close`: width + height = `var(--tap-target-min)` |
| Nav toggle button | `.nav-toggle`: inherits tap target from padding + icon size |
| Cookie consent buttons | `--tap-target-min` applied to `.cookie-consent__btn` |

For new interactive elements, check on a touch device or in Chrome DevTools touch emulation before marking complete.

---

## Testing checklist

Run this before every significant UI change, not just before launch.

### Automated

- [ ] `htmltest` (internal link checker): runs in CI on every push to `v2-preview`
- [ ] Lighthouse accessibility score: run in Chrome DevTools on at least `/`, `/model/`, and one doc page
- [ ] `axe` DevTools browser extension: surfaces ARIA issues and contrast failures not caught by Lighthouse

### Manual

- [ ] Tab through the page — every interactive element reachable and visibly focused
- [ ] Nav dropdown opens and closes with keyboard (Enter / Escape)
- [ ] Docs sidebar drawer opens and closes with keyboard on mobile viewport
- [ ] Cookie consent modal — all actions reachable by keyboard
- [ ] Screen reader spot-check (VoiceOver on macOS or NVDA on Windows), at minimum: nav, hero, model overview

### Colour and contrast

- [ ] New color combinations checked against WCAG AA (4.5:1 minimum for body text)
- [ ] New teal tints verified to be decoration-only (not text or links)
- [ ] BF `-light` variants not used for text

### Mobile

- [ ] Check at 320px width (minimum) and 375px (iPhone SE)
- [ ] No horizontal scroll except inside explicitly scrollable containers (`.model-table`, code blocks)
- [ ] Touch targets ≥ 44px on interactive elements added in this change

<div class="ds-rationale">
<strong>Check mobile at the moment of the change.</strong> Mobile verification is part of every UI task, not a separate phase. A change that looks fine on desktop can break the mobile layout, nav, or tap targets in ways that are invisible without testing. Don't defer it.
</div>
