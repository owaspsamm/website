---
title: "Components"
description: "Buttons, cards, icons, and hover patterns for the OWASP SAMM website."
layout: "single"
type: "internal"
weight: 20
sitemap:
  disable: true
robots: "noindex, nofollow"
---

<style>
.ds-demo {
  background: var(--color-offwhite);
  border: 1px solid var(--color-border);
  border-radius: 0.375rem;
  padding: 1.5rem;
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}
.ds-demo--dark { background: var(--color-dark); }
.ds-rationale {
  background: rgba(var(--color-primary-rgb), 0.06);
  border-left: 3px solid var(--color-primary);
  border-radius: 0 0.25rem 0.25rem 0;
  padding: 0.75rem 1rem;
  font-size: var(--text-sm);
  margin: 1rem 0;
}
.ds-card-preview {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}
.ds-card-bordered {
  padding: 1.25rem;
  border: 2px solid var(--color-border);
  border-radius: 0.5rem;
  text-decoration: none;
  color: inherit;
  display: block;
  transition: border-color var(--duration) var(--ease), box-shadow var(--duration) var(--ease), transform var(--duration) var(--ease);
  cursor: pointer;
}
.ds-card-bordered:hover {
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(44,48,48,0.1);
  text-decoration: none;
}
.ds-card-feature {
  padding: 1.5rem 1.25rem;
  text-align: center;
  background-image: linear-gradient(90deg, transparent, var(--color-primary), transparent);
  background-size: 0% 2px;
  background-repeat: no-repeat;
  background-position: center bottom;
  transition: background-size var(--duration) var(--ease);
  cursor: pointer;
  border: 1px solid var(--color-border);
  border-radius: 0.375rem;
}
.ds-card-feature:hover { background-size: 100% 2px; }
.ds-card-title { font-size: var(--text-lg); font-weight: 600; color: var(--color-dark); margin-bottom: 0.5rem; }
.ds-card-body { font-size: var(--text-sm); color: var(--color-text-light); line-height: var(--line-height); margin: 0; }
.ds-icon-row { display: flex; flex-wrap: wrap; gap: 2rem; margin: 1rem 0; align-items: center; }
.ds-icon-item { display: flex; align-items: center; gap: 0.5rem; font-size: var(--text-sm); color: var(--color-text-light); }
</style>

## Buttons

Three variants share a single base class (`.btn`) and the same hover transformation: teal background fill. The text color on hover differs, not arbitrarily, but because each variant inverts its default text color.

**The flip rule:** `.btn--primary` starts with offwhite text on a dark background; on hover it flips to dark text on teal. `.btn--outline` and `.btn--white` start with dark text on a light base; on hover they flip to offwhite text on teal. Every button's foreground and background both change on hover, making the state change unmistakable regardless of ambient color.

<div class="ds-demo">
  <a class="btn btn--primary" href="#">Primary</a>
  <a class="btn btn--outline" href="#">Outline</a>
</div>

<div class="ds-demo ds-demo--dark">
  <a class="btn btn--outline" href="#" style="border-color:rgba(249,246,246,0.5); color:var(--color-offwhite);">Outline on dark</a>
  <a class="btn btn--white" href="#">White</a>
</div>

| Class | Default | Hover |
|---|---|---|
| `.btn--primary` | Dark bg, offwhite text, dark border | Teal bg, dark text, teal border |
| `.btn--outline` | Transparent bg, dark text, dark border | Teal bg, **offwhite** text, teal border |
| `.btn--white` | Offwhite bg, dark text, invisible border | Teal bg, **offwhite** text, teal border + teal glow shadow |

All three also inherit from `.btn:hover`: `translateY(-2px)` lift and a dark drop shadow. `.btn--white` overrides the shadow with a teal-tinted glow (`rgba(--color-primary-rgb, 0.4)`).

<div class="ds-rationale">
<strong>One primary per context.</strong> Using more than one <code>.btn--primary</code> in a single view dilutes hierarchy: the user's eye has no obvious anchor. Secondary actions use <code>.btn--outline</code>. Never override button colors per-context.
</div>

### Button spec

| Property | Value | Token |
|---|---|---|
| Font size | 1rem | `--text-base` |
| Padding | 0.618rem 1.618rem | `--space-sm` / `--space-lg` |
| Font weight | 600 | — |
| Border | 2px solid | — |
| Border radius | 0.375rem | — |
| Hover lift | `translateY(-2px)` | — |
| Hover shadow | `0 6px 16px rgba(0,0,0,0.12)` | — |

---

## Cards

Two distinct card patterns. Both navigate; the difference is density and visual context, not function.

### Bordered cards

Used for: blog cards, docs section cards, resource cards, and docs pager links. All share the same hover behavior: border turns teal, slight lift.

<div class="ds-card-preview">
  <div class="ds-card-bordered">
    <div class="ds-card-title">Bordered card</div>
    <p class="ds-card-body">Border shifts from neutral to teal on hover. Lifts 2–3px. Used for navigational cards.</p>
  </div>
  <div class="ds-card-bordered">
    <div class="ds-card-title">Another card</div>
    <p class="ds-card-body">Hover both to compare the consistent lift and border treatment.</p>
  </div>
</div>

| Component | Border | Hover |
|---|---|---|
| `.blog-card` | 2px solid `--color-border` | Teal border + `translateY(-3px)` + shadow |
| `.docs__card` | 2px solid `--color-border` | Teal border + `translateY(-2px)` + shadow |
| `.resource-card` | 1.5px solid `--color-border` | Teal border + `translateY(-2px)` + shadow |

### Feature cards

Used on the homepage. No border. Hover triggers three simultaneous transitions: the title shifts from dark to primary teal, the icon scales up and deepens to mid-teal, and the bottom gradient underline grows from center. The paragraph text also darkens slightly.

<div class="ds-card-preview">
  <div class="ds-card-feature">
    <div class="ds-card-title">Feature card</div>
    <p class="ds-card-body">Hover to see the title go teal and the underline grow from center.</p>
  </div>
  <div class="ds-card-feature">
    <div class="ds-card-title">Another feature</div>
    <p class="ds-card-body">No border at rest. The full hover suite signals interactivity without chrome.</p>
  </div>
</div>

| Element | Default | Hover |
|---|---|---|
| Card | No border | Gradient underline (center → full width) |
| `h3` | `--color-dark` | `--color-primary` |
| Icon | `--color-primary`, 1× | `--color-mid`, `scale(1.15)` |
| `p` | `--color-text-light` | `--color-text` |

The gradient underline matches the section title accent, tying the cards into the page structure. Icon placement is intentionally below the title (unconventional) to read icon as punctuation rather than label.

```css
/* Bottom underline */
background-image: linear-gradient(90deg, transparent, var(--color-primary), transparent);
background-size: 0% 2px;   /* rest */
background-size: 100% 2px; /* hover */

/* Title */
.feature-card h3 { transition: color var(--duration) var(--ease); }
.feature-card:hover h3 { color: var(--color-primary); }

/* Icon */
.feature-card:hover .feature-card__icon { color: var(--color-mid); transform: scale(1.15); }
```

<div class="ds-rationale">
<strong>Why no border?</strong> Feature cards appear in sparse homepage sections with three items in open space. A border would add visual noise with nothing to separate. The multi-element hover suite (title, icon, underline) provides ample interactivity signal without chrome. Bordered cards are for information-dense grids where the border makes each card read as a discrete item. Both patterns navigate; the choice is about density and visual weight.
</div>

---

## Pager links

Docs pages use prev/next pager links at the bottom of the content. Bordered card shape; hover lifts and shifts border to teal. No underline.

<div style="display:flex; justify-content:space-between; gap:1rem; margin: 1rem 0;">
  <a href="#" style="display:inline-flex;align-items:flex-end;gap:0.5rem;padding:0.618rem 1rem;border:2px solid var(--color-border);border-radius:0.375rem;color:var(--color-dark);text-decoration:none;">
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" stroke="var(--color-primary)" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M7.5 0.5 L3.5 4 Q0.5 6 3.5 8 L7.5 11.5"/></svg>
    <span><small style="display:block;font-size:var(--text-sm);color:var(--color-text-muted);">Previous</small>Step 1: Prepare</span>
  </a>
  <a href="#" style="display:inline-flex;align-items:flex-end;gap:0.5rem;padding:0.618rem 1rem;border:2px solid var(--color-primary);border-radius:0.375rem;color:var(--color-dark);text-decoration:none;text-align:right;transform:translateY(-2px);box-shadow:0 8px 28px rgba(44,48,48,0.1);">
    <span><small style="display:block;font-size:var(--text-sm);color:var(--color-text-muted);">Next</small>Step 3: Set the Target</span>
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" stroke="var(--color-primary)" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M0.5 0.5 L4.5 4 Q7.5 6 4.5 8 L0.5 11.5"/></svg>
  </a>
</div>

| State | Border | Text | Chevron |
|---|---|---|---|
| Default | `--color-border` | `--color-dark` | `--color-primary`, `stroke-width: 1.5` |
| Hover | `--color-primary` | `--color-dark` | `--color-primary`, `stroke-width: 2.5` |

**Specificity note:** the pager `<nav>` is rendered outside `<article class="docs__body content prose">` — a sibling, not a descendant. The `.prose a` rule does not reach it. The only global rule to beat is `a:hover { color: primary; text-decoration: underline }` in `base.css` at 0-1-1. Simple class selectors win:

```css
.docs-pager__link         { ... color: var(--color-dark); text-decoration: none; }  /* 0-1-0 > a 0-0-1 */
.docs-pager__link:hover   { ... color: var(--color-dark); text-decoration: none; }  /* 0-2-0 > a:hover 0-1-1 */
```

Never add `.docs__body.content` to the ancestor chain — the pager is outside the article, so that selector never matches.

---

## Icons

Two stroke-based SVG icons used across the site. Both use `fill="none" stroke="currentColor"`, inheriting color from their parent and working on any background.

<div class="ds-icon-row">
  <div class="ds-icon-item">
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
      <path d="M0.5 0.5 L4.5 4 Q7.5 6 4.5 8 L0.5 11.5"/>
    </svg>
    Rounded chevron: pager, external link indicator
  </div>
  <div class="ds-icon-item">
    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
      <path d="M0.5 0.5 L4 4.5 Q6 8 8 4.5 L11.5 0.5"/>
    </svg>
    Caret: nav dropdowns
  </div>
</div>

**Rounded chevron (right):** copy this into a template:
```html
<svg width="8" height="12" viewBox="0 0 8 12" fill="none"
     stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
  <path d="M0.5 0.5 L4.5 4 Q7.5 6 4.5 8 L0.5 11.5"/>
</svg>
```

**Caret (down):** copy this into a template:
```html
<svg width="12" height="9" viewBox="0 0 12 9" fill="none"
     stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
  <path d="M0.5 0.5 L4 4.5 Q6 8 8 4.5 L11.5 0.5"/>
</svg>
```

Both tips are quadratic bezier curves (`Q`), which gives them the rounded corner.

**Rules:**
- Always include `aria-hidden="true"` on decorative icons
- Set size with `width`/`height` attributes on the `<svg>`, not with CSS font-size
- Never hardcode a color. `stroke="currentColor"` means the parent controls it.
- Focus indicators go on the parent `<a>` or `<button>`, not the SVG

<div class="ds-rationale">
<strong>Icons should be rare.</strong> The site uses two. An icon alongside text rarely adds more than the text already communicates; it adds visual noise instead. Use icons only where they add meaning text alone cannot convey (the chevron implies direction) or where space makes text impractical.
</div>

---

## Hover vocabulary

Four patterns across the site. Pick the one that matches the element's nature; never mix patterns on the same component type.

| Pattern | CSS | Used on |
|---|---|---|
| **Lift** | `translateY(-2–3px)` + drop shadow | All bordered cards, buttons |
| **Teal border** | border-color → `--color-primary` | All bordered cards |
| **Teal tint** | `background: rgba(--color-primary-rgb, 0.07)` | Sidebar nav items, table rows |
| **Gradient underline** | `background-size: 100% 2px` | Feature cards |
| **Color shift** | `color` → `var(--color-primary)` | Header nav, footer nav |
| **Underline** | `text-decoration: underline` | Prose links (always), mobile stream headings |
| **BF color shift** | `--bf-color` → `--bf-color-light` | Business function links on model pages |

**Touch devices (`@media (hover: none)`):** lift, opacity transitions, and grayscale filters are suppressed. Elements that rely on hover for visual interest carry their state in their default appearance: blog cards get the primary border color pre-applied, sponsor logos show at full color and opacity.

All transitions use the shared tokens:
```css
transition: property var(--duration) var(--ease);
```
