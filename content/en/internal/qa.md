---
title: "QA checklist"
description: "Pre-commit and pre-launch quality checks for the SAMM website."
layout: "single"
type: "internal"
sitemap:
  disable: true
robots: "noindex, nofollow"
---

Run these checks before any significant commit and before every release. They catch the classes of problem most likely to slip through review.

## Code checks

Run from the repo root (`website-v2/`).

### Inline styles in templates

```
grep -rn 'style="' layouts/ --include="*.html"
```

Acceptable exceptions: `contact/single.html` honeypot field (`display:none` must be inline to evade bot detection). Everything else is a violation of the no-hardcode rule and must be moved to a CSS class.

### Hardcoded values in templates

```
grep -rn -E '[0-9]+(px|rem|em)|#[0-9a-fA-F]{3,6}' layouts/ --include="*.html"
```

No raw units or hex values in templates. All sizing and colour must come from tokens via CSS classes.

### Inline scripts in templates

```
grep -rn '<script' layouts/ --include="*.html"
```

Scripts must load via Hugo Pipes in `baseof.html` (global) or a `{{ define "scripts" }}` block (page-specific). No inline `<script>` blocks in templates.

### New card-style links getting unexpected underlines

`assets/css/components/docs.css` has a `.prose a:not(.btn):not(.agenda-program__link)` rule that adds underline + teal color to inline prose links. The `.prose` class is added only to containers that render flowing markdown (`docs/single.html`, `blog/single.html`, `_default/single.html`, `user-day/single.html`, `stream/single.html`, `samm-identity/single.html`, and `.practice-description` in `practice/single.html`). Card and list templates (`docs/list.html`, `business-function/single.html`) deliberately do not get `.prose`.

If a new card-style `<a>` appears inside a `.prose` container and gets unwanted underlines, add it to the `:not()` exclusion list (both the base rule and `:hover` variant). If the new component is never inside a `.prose` container, no change is needed. Never fight the rule with a high-specificity override elsewhere — that approach will silently lose when the prose rule appears later in the CSS bundle.

### Practice table headers showing teal

If a model practice page shows teal in the "Maturity 1/2/3" header cells, a generic `.content th` rule in `table.css` is winning over the practice-specific rules in `docs.css`. The fix is to prefix practice table selectors with `.content` to raise specificity from 0-1-1 to 0-2-1. Check any new component that styles `th` inside `.content` for the same conflict.

### New CSS files not added to the bundle

```
grep -c "resources.Get" layouts/_default/baseof.html
```

Cross-check against the number of files in `assets/css/`. Every new CSS file must be added to the `$cssFiles` slice in `baseof.html` — Hugo Pipes does not auto-discover files.

---

## CSS checks

- All values use tokens (`var(--...)`), not raw px, rem, or hex.
- New components follow BEM: `.block__element--modifier`.
- Media queries live in `responsive.css`, not in component files.
- Contrast: any new colour used for text must be checked. Minimum: 4.5:1 on `--color-offwhite` for body text (WCAG AA). Use `--color-mid` for teal text, never `--color-primary`.

---

## Content checks

### Internal pages excluded from sitemap and search

All pages under `/internal/` and `/samm-identity/` must have:

```yaml
sitemap:
  disable: true
robots: "noindex, nofollow"
```

### Meta descriptions

Every public page must have a `description` in front matter. Check listing pages and section roots especially.

### Broken internal links

Hugo does not validate internal links by default. Before release, spot-check any recently added `[text](/path/)` links manually, especially in internal docs.

---

## Visual checks (mobile first)

Check on an actual phone or a narrow browser viewport (375px). Desktop is secondary.

### Pages to check on every release

- Homepage: hero layout, feature cards (must read as tappable cards), announcement banner
- Model overview: table layout, BF colours
- Assessment page
- Quick start / getting started
- Any page changed in this release

### Things to verify

- Feature cards have visible border, radius, and shadow on mobile
- Announcement and banner titles have tight line-height when wrapping
- Hero left text sits near the top with the pattern visible below
- Hero right subtitle is not orphaned; button is close to the text
- Sponsor rows in user-day pages fit without excessive vertical spacing
- Navigation works: hamburger opens, dropdowns close on outside click
- Tap targets are at least `44px` (`--tap-target-min`)

---

## Pre-launch sign-off

- [ ] GitHub Actions green on `v2-preview`
- [ ] Netlify staging reviewed by at least two team members
- [ ] Branch protection enabled on `main` in `owaspsamm/website`
- [ ] All known content differences from v1 resolved or explicitly deferred
- [ ] Minded Security sponsorship status confirmed
- [ ] Cutover steps in [migration plan](/internal/migration-plan/) reviewed
