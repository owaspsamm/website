---
title: "Conventions"
description: "CSS architecture, Hugo Pipes, BEM naming, JS conventions, and external link rules."
layout: "single"
type: "internal"
weight: 40
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
.ds-file-tree {
  background: var(--color-dark);
  color: var(--color-offwhite);
  border-radius: 0.375rem;
  padding: 1rem 1.25rem;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: 2;
  margin: 1rem 0;
  overflow-x: auto;
}
.ds-file-tree .comment { color: rgba(249,246,246,0.4); }
</style>

## CSS architecture

### File structure

All CSS lives in `assets/css/`. The entry point is `main.css`: it contains no rules, only a list of `@import` statements in load order. Adding a new file requires adding it to `main.css` and to the `resources.Concat` call in `layouts/_default/baseof.html`.

<div class="ds-file-tree">
assets/css/<br>
├── main.css &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment"># entry point: imports only, no rules</span><br>
├── tokens.css &nbsp;&nbsp;&nbsp;&nbsp;<span class="comment"># all custom properties (:root)</span><br>
├── base.css &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment"># reset, typography, global elements</span><br>
├── components/ &nbsp;&nbsp;&nbsp;<span class="comment"># one file per BEM block</span><br>
│ &nbsp;&nbsp;├── docs.css<br>
│ &nbsp;&nbsp;├── buttons.css<br>
│ &nbsp;&nbsp;├── hero.css<br>
│ &nbsp;&nbsp;└── … (24 more)<br>
└── responsive.css &nbsp;<span class="comment"># ALL @media queries, grouped by breakpoint</span>
</div>

**Key rules:**
- `tokens.css` is the only file allowed to define custom properties
- `responsive.css` is the only file allowed to contain `@media` queries
- Each file in `components/` covers one BEM block; no cross-block rules
- `main.css` contains no rules: only imports in layer order

<div class="ds-rationale">
<strong>Why centralize media queries?</strong> When queries are scattered across component files, it's impossible to audit mobile behavior without reading every file. A single <code>responsive.css</code> means one place to check, one place to add breakpoints, and one obvious location to spot mobile regressions.
</div>

### Hugo Pipes bundle

All CSS is concatenated and fingerprinted in `baseof.html`:

```html
{{ $css := slice
    "css/tokens.css"
    "css/base.css"
    "css/components/buttons.css"
    ...
    "css/responsive.css"
  | resources.Concat "css/main.css"
  | minify | fingerprint }}
<link rel="stylesheet" href="{{ $css.RelPermalink }}"
      integrity="{{ $css.Data.Integrity }}">
```

**Adding a new CSS file:**
1. Create `assets/css/components/your-block.css`
2. Add it to the `slice` in `baseof.html` in the correct position (before `responsive.css`)
3. The file is not auto-discovered — it will be silently ignored if omitted from the slice

### BEM naming

```
.block { }
.block__element { }
.block--modifier { }
.block__element--modifier { }
```

- Block = one CSS file (e.g. `docs.css` → `.docs`, `.docs__sidebar`, `.docs__content`)
- Element separator: `__` (double underscore)
- Modifier separator: `--` (double dash)
- No nesting in CSS (even with SCSS-style nesting); flat selectors only
- JavaScript hooks: `js-` prefix on classes used only in JS; never style `js-` classes

### Specificity rules

- Match the existing selector depth for the context you're working in
- Use deep descendant chains when you need to win a specificity battle; the chain should reflect real DOM ancestry
- Never pad specificity with fake `:not(.x)` selectors or repeated class names
- Never use `!important`; if you feel you need it, the problem is architecture, not specificity

### Tokens only: no raw values

No raw `px`, `em`, `rem`, or hex color values in component files. All values come from `tokens.css`. If a needed value has no token, add the token first.

The only exceptions: border-radius values (`0.25rem`, `0.375rem`, `0.5rem`) and `stroke-width` on SVGs; these are structural and don't benefit from tokenization.

---

## JS conventions

### File locations

| Location | Purpose | Loaded by |
|---|---|---|
| `assets/js/global.js` | Site-wide: nav toggle, dropdowns, banner icons, model nav persistence | `baseof.html` via Hugo Pipes, `defer` |
| `assets/js/<name>.js` | Page-specific behavior | Template's `{{ define "scripts" }}` block |
| `static/js/cookie-consent.js` | Cookie consent (hand-managed, specific load timing) | `baseof.html` directly; not Hugo Pipes |

### Hugo Pipes loading (page-specific)

```html
{{ define "scripts" }}
{{ $js := resources.Get "js/docs-sidebar.js" | minify | fingerprint }}
<script src="{{ $js.RelPermalink }}"
        integrity="{{ $js.Data.Integrity }}" defer></script>
{{ end }}
```

Shared scripts used by multiple templates (e.g. `docs-sidebar.js`) live in their own file and are included by each template that needs them; not duplicated.

### Style rules

- No bundler, no transpiler, no framework: plain ES5-compatible JS
- Each file wraps its body in `document.addEventListener('DOMContentLoaded', …)` for safety (even though `defer` makes it nearly redundant)
- No `import`/`export`; each file is self-contained
- No jQuery; native DOM APIs only

<div class="ds-rationale">
<strong>Why ES5?</strong> The site serves a broad audience including enterprise users who may be on managed machines with locked browsers. ES5 avoids transpilation complexity and is universally supported. If a modern JS feature would meaningfully simplify a component (e.g. optional chaining in a complex lookup), it can be introduced with a polyfill discussion, not silently.
</div>

---

## External links

Links to external sites use `target="_blank" rel="noopener noreferrer"` and an inline SVG icon with class `.external-link-icon`. This pattern should be applied consistently in templates; not in content markdown.

```html
<a href="https://example.com"
   target="_blank"
   rel="noopener noreferrer">
  Link text
  <svg class="external-link-icon" …>…</svg>
</a>
```

`rel="noopener noreferrer"` is required for all `target="_blank"` links: `noopener` prevents the opened page from accessing `window.opener`; `noreferrer` additionally suppresses the `Referer` header for privacy.

---

## Content authoring conventions

### Markdown in content files

- Use `**bold**` for UI labels, field names, and key terms; not for general emphasis
- Use `_italic_` for genuine emphasis or book/article titles
- Use backtick code spans for: file paths, class names, token names, terminal commands, and any literal string a reader would type or copy
- Shortcodes for reusable content blocks (sponsor rows, agenda tables); never duplicate the HTML in markdown directly
- Raw HTML in markdown is allowed (`unsafe = true` in config) but use sparingly and document why

### Frontmatter conventions

Every content file needs:
```yaml
---
title: "Page title"
description: "One sentence, no period, for meta tags and card excerpts."
layout: "single"         # or section-specific layout
type: "page"             # or section type (internal, samm-identity, etc.)
---
```

Internal pages additionally require:
```yaml
sitemap:
  disable: true
robots: "noindex, nofollow"
```
