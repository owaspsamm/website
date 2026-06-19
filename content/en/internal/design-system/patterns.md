---
title: "Patterns"
description: "Link patterns, the .prose system, BF-colored links, and navigation links."
layout: "single"
type: "internal"
weight: 30
sitemap:
  disable: true
robots: "noindex, nofollow"
---

<style>
.ds-rationale {
  background: rgba(var(--color-primary-rgb), 0.06);
  border-left: 3px solid var(--color-primary);
  border-radius: 0 0.25rem 0.25rem 0;
  padding: 0.75rem 1rem;
  font-size: var(--text-sm);
  margin: 1rem 0;
}
.ds-demo {
  background: var(--color-offwhite);
  border: 1px solid var(--color-border);
  border-radius: 0.375rem;
  padding: 1.25rem 1.5rem;
  margin: 1rem 0;
  font-size: var(--text-base);
  line-height: var(--line-height);
}
.ds-link-example {
  color: var(--color-mid);
  text-decoration: underline;
  text-decoration-color: rgba(var(--color-primary-rgb), 0.35);
  text-underline-offset: 0.15em;
  text-decoration-thickness: 1.5px;
  transition: color var(--duration) var(--ease), text-decoration-color var(--duration) var(--ease);
}
.ds-link-example:hover {
  color: var(--color-primary);
  text-decoration-color: currentColor;
  text-decoration-thickness: 2px;
}
.ds-bf-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1rem 0;
}
.ds-bf-link {
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: var(--text-sm);
  font-weight: 500;
  transition: background var(--duration) var(--ease);
}
/* .prose a (0-3-1) overrides text-decoration: none at 0-1-0.
   Match its specificity here — page <style> comes later in cascade and wins the tie. */
.content.prose a.ds-bf-link {
  text-decoration: none;
}
.ds-bf-link:hover { opacity: 0.8; }
</style>

## Prose links

Inline links inside flowing text are styled through the `.prose` class on the container element. This approach scopes the link style to reading contexts only; card layouts, nav elements, and list templates are deliberately excluded.

**Visual appearance:**

<div class="ds-demo prose">
  The SAMM model provides <a class="ds-link-example" href="#">five business functions</a> that organize security practices. Each function contains three <a class="ds-link-example" href="#">security practices</a>, each with two streams of activity at increasing maturity levels.
</div>

| State | Colour | Underline |
|---|---|---|
| Default | `--color-mid` (#366867) | Teal tint, 1.5px, offset 0.15em |
| Hover | `--color-primary` (#71b8b8) | Solid, 2px |
| Mobile | `--color-mid` | Always underlined (reinforced via `responsive.css`) |

**The rule in `docs.css`:**
```css
.prose a:not(.btn):not(.agenda-program__link) { ... }
.prose a:not(.btn):not(.agenda-program__link):hover { ... }
```

### Where `.prose` is applied

Add `.prose` only to containers that render flowing markdown. **Card and list templates omit it intentionally;** their `<a>` elements are structural, not inline text links.

| Template | Element |
|---|---|
| `layouts/docs/single.html` | `<article class="docs__body content prose">` |
| `layouts/blog/single.html` | `<article class="content prose">` |
| `layouts/_default/single.html` | `<article class="content prose">` |
| `layouts/contact/single.html` | `<article class="content prose">` |
| `layouts/user-day/single.html` | `<article class="content prose">` |
| `layouts/stream/single.html` | `<article class="content stream-content prose">` |
| `layouts/samm-identity/single.html` | `<article class="docs__body content prose">` |
| `layouts/internal/single.html` | `<article class="docs__body content prose">` |
| `layouts/practice/single.html` | `<div class="practice-description prose">` — scoped to description only |

**Do not add `.prose` to:** `docs/list.html`, `business-function/single.html`, or any template whose `<article>` contains card-style `<a>` elements.

<div class="ds-rationale">
<strong>Why not <code>.content a</code>?</strong> The old pattern used <code>.content a:not(… 8 exclusions …)</code>. Every new card component required a new exclusion. The <code>.prose</code> approach inverts the logic: opt in at the container level rather than opt out per component. Adding a new card layout inside a prose container is now the exceptional case, handled by adding to the <code>:not()</code> list.
</div>

### Adding a new exclusion

If a new card-style link appears inside a `.prose` container and picks up unwanted underlines, add it to both the base rule and the `:hover` variant in `docs.css`:

```css
.prose a:not(.btn):not(.agenda-program__link):not(.your-new-class) { ... }
.prose a:not(.btn):not(.agenda-program__link):not(.your-new-class):hover { ... }
```

---

## BF-colored links

Links on model pages inherit their color from the business function context rather than from `.prose`.

<div class="ds-bf-demo">
  <a class="ds-bf-link" href="#" style="color:#435b70; background:rgba(67,91,112,0.08);">Governance link</a>
  <a class="ds-bf-link" href="#" style="color:#ad4b00; background:rgba(173,75,0,0.08);">Design link</a>
  <a class="ds-bf-link" href="#" style="color:#3a5f26; background:rgba(58,95,38,0.08);">Implementation link</a>
  <a class="ds-bf-link" href="#" style="color:#754858; background:rgba(117,72,88,0.08);">Verification link</a>
  <a class="ds-bf-link" href="#" style="color:#5b5b62; background:rgba(91,91,98,0.08);">Operations link</a>
</div>

**How it works:**
1. A wrapper element has `--bf-color` and `--bf-color-light` set (via a `.model-bf--*` or `.skills-bf-group--*` class).
2. Links inside inherit: `color: var(--bf-color)`.
3. Hover shifts to: `color: var(--bf-color-light)`.

**Override rules** use deep descendant selectors (specificity 0-7-2+) to win over `.prose a` without `!important` or hacks:

```css
/* Practice stream heading links — high specificity to beat .prose a */
.docs .docs__content .docs__body.content .practice-content
  .practice-streams .practice-stream h3 a { ... }
```

<div class="ds-rationale">
<strong>Never fight with <code>!important</code>.</strong> When a BF-coloured link needs to override the prose rule, increase specificity by adding more ancestor selectors that already exist in the DOM. This makes the override traceable and reversible. A comment in the CSS should explain which component triggered the override.
</div>

---

## Navigation links

Links in navigational contexts — header, footer, sidebar, pager — follow different rules than prose links.

| Context | Underline | Colour | Notes |
|---|---|---|---|
| Header nav | None | Offwhite / mid-teal on hover | Nav links are self-evidently interactive |
| Footer | None | Muted; mid-teal on hover | Navigation context sufficient |
| Docs sidebar | None (is-active: bold + teal) | `--color-text-light`; primary on hover | Active state uses font-weight + color |
| Pager cards | None | Dark; teal on hover | Card border + chevron = affordance |
| Practice stream `h3 a` | None on desktop; underline on mobile | BF color | Mobile rule in `responsive.css` for tap affordance |

**Mobile underline rule for stream h3:**

```css
@media (max-width: 48rem) {
  .docs.model-docs .docs__content .content.practice-content
    .practice-streams .practice-stream h3 a {
    text-decoration: underline;
    text-decoration-color: currentColor;
    text-underline-offset: 0.15em;
  }
}
```

This is a mobile-only override; desktop stream headings rely on their BF color and position as headings to signal interactivity. Mobile adds underlines because hover states don't exist and the heading color alone may not be sufficient affordance on a small screen.
