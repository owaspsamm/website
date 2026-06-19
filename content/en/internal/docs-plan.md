---
title: "Docs section implementation plan"
description: "Phased plan for the docs section: shell, content migration, stream import, search, model integration."
layout: "single"
type: "internal"
sitemap:
  disable: true
robots: "noindex, nofollow"
---

## Context

The SAMM website's guidance section currently consists of 2 flat pages (agile guidance, quick-start guide) and a dropdown menu pointing to scattered locations. Meanwhile, 11 blog posts contain prescriptive how-to content that belongs in documentation, and 30 streams of implementation guidance live in external Google Docs. The goal is to build a ReadTheDocs-style documentation experience in website-v2: collapsible sidebar, on-this-page TOC, card-based landing pages, prev/next navigation, and client-side search. This transforms SAMM's most valuable content into a proper, navigable knowledge base.

**Hugo version:** v0.157.0 (extended, via `C:\Users\Pat\go\bin\hugo.exe`). Note: the old v0.92.1 from Chocolatey sits earlier in PATH. Use the full path or fix PATH ordering.

---

## Phase 1: Docs Shell -- DONE

**Goal:** A working three-column docs layout (sidebar | content | TOC) with placeholder content.

### Content structure

```
content/en/docs/
  _index.md                              # Docs landing (card grid of sections)
  getting-started/_index.md              # weight: 10
  assessment/_index.md                   # weight: 20
  implementation-planning/_index.md      # weight: 30
  frameworks/_index.md                   # weight: 40
  best-practices/_index.md              # weight: 50
  roles/_index.md                        # weight: 60
  compliance/_index.md                   # weight: 70
  guides/_index.md                       # weight: 80
```

Each `_index.md` uses this frontmatter:
```yaml
---
title: "Getting Started"
description: "Learn how to scope and begin a SAMM assessment."
weight: 10
---
```

Leaf pages add `toc: true` and `author:` fields.

### Files created

| File | Purpose |
|---|---|
| `layouts/docs/list.html` | Section index: sidebar + card grid of child pages |
| `layouts/docs/single.html` | Article page: sidebar + content + TOC + scroll spy |
| `layouts/partials/docs/sidebar.html` | Sidebar driver: walks `/docs/` sections via `.Sections.ByWeight` |
| `layouts/partials/docs/sidebar-tree.html` | Recursive tree node (expand/collapse, active state, `.IsAncestor` for auto-expand) |
| `layouts/partials/docs/breadcrumb.html` | Breadcrumb nav (Hugo 0.92.1 compatible, `.Parent` walk instead of `.Ancestors`) |
| `layouts/partials/docs/prev-next.html` | Prev/Next sequential links using `.RegularPagesRecursive.ByWeight` |
| `content/en/docs/_index.md` | Docs landing page |
| `content/en/docs/{section}/_index.md` | 8 section index pages (getting-started, assessment, etc.) |

### Files modified

| File | Change |
|---|---|
| `config.toml` | Replaced "Guidance" dropdown with "Docs" link (weight 3), Resources bumped to 4. Added `[markup.tableOfContents]` with `startLevel = 2`, `endLevel = 3` |
| `assets/css/main.css` | Added ~250 lines: `.docs` three-column grid (16rem / 1fr / 14rem), `.docs-nav__*` sidebar tree, `.docs-breadcrumb`, `.docs__card-grid`, `.docs-pager` prev/next, `.docs__sidebar-toggle` mobile FAB, `.docs__overlay` backdrop. Responsive: TOC hides at 64rem, sidebar becomes drawer at 48rem. Touch: disabled hover transforms on cards and pager. |

### Key decisions

- **Sidebar is section-driven**, not menu-driven. Hugo's `.Sections` and `.Pages.ByWeight` auto-populate the nav when content is added.
- **Three-column grid**: `grid-template-columns: 16rem 1fr 14rem`. At 64rem, TOC hides. At 48rem, sidebar becomes a fixed drawer.
- **TOC uses Hugo's `.TableOfContents`** (h2-h3 depth). JS scroll spy highlights the active heading.
- **JS isolated** in `{{ block "scripts" }}` override, not in global baseof.html script block.
- **All CSS** in `assets/css/main.css` (single Hugo Pipes pipeline). BEM classes: `docs__*` and `docs-nav__*`.
- **Hugo 0.156.0**: uses modern APIs: `.Ancestors.Reverse` for breadcrumbs, `.IsDescendant` for sidebar active state.

---

## Phase 2: Content Migration

**Goal:** Migrate guidance pages and selected blog posts into docs. Update migrated blog posts to point to the canonical docs version.

### Migration pattern

For blog posts whose content belongs in docs:
1. Create a proper docs page — update, expand, and rewrite as needed (not a copy-paste)
2. Update the original blog post with a callout: "This content has been updated and expanded in our documentation" + link to the docs page
3. Do NOT delete the blog post — it stays as a historical record and entry point

For blog posts that are editorial/opinion (case studies, community announcements, etc.) — leave them in the blog entirely. No docs counterpart needed.

### Guidance pages to migrate

| v1 source | Docs target | Notes |
|---|---|---|
| `website/content/en/guidance/quick-start-guide.md` | `docs/getting-started/quick-start-guide.md` | Needs significant rewrite — current version is outdated and not very useful. Migrate only after revamping. |
| `website/content/en/guidance/agile.md` | `docs/guides/agile-guidance.md` | Migrate as-is, light cleanup |

### Blog posts to migrate to docs

Team to decide per post which qualify. Starting candidates (prescriptive how-to content):

| Blog post | Docs target | Section |
|---|---|---|
| `determining-scope-when-implementing-samm.md` | `docs/getting-started/determining-scope.md` | Getting Started |
| `the-not-applicable-question.md` | `docs/assessment/not-applicable-question.md` | Assessment |
| `samm-relative-scoring.md` | `docs/assessment/scoring-metrics.md` | Assessment |
| `how-iso-and-samm-complement-each-other.md` | `docs/frameworks/iso-and-samm.md` | Frameworks |
| `comparing-bsimm-and-samm.md` | `docs/frameworks/bsimm-vs-samm.md` | Frameworks |
| `comparing-microsoft-sdl-and-samm.md` | `docs/frameworks/microsoft-sdl-mapping.md` | Frameworks |
| `owasp-samm-roadmap.md` | `docs/implementation-planning/samm-roadmap.md` | Implementation Planning |
| `owasp-samm-skills-framework.md` | `docs/roles/skills-framework.md` | Roles |

Posts that are primarily editorial (CRA article, AI article, log4j case study) — leave in blog only.

### Migration process per post

1. Create docs page with updated frontmatter (`title`, `description`, `weight`, `toc: true`, `author`)
2. Rewrite and update content — remove blog framing, fix anything outdated, expand where useful
3. Update original blog post: add a top-of-post callout pointing to the docs version
4. Do NOT delete the original blog post

**Ships independently:** Yes, one post at a time.

---

## Phase 3: Stream Guidance Import

**Goal:** Bring Google Docs guidance content into the site as first-class docs pages.

### Current state

- 30 YAML files in `website/data/streamguidance/` map streams to Google Doc IDs
- Team guidance exists for all 30 streams; community guidance for ~16
- Content covers 5 business functions x 3 practices x 2 streams (A/B)

### Approach: Script-assisted one-time export

Create `scripts/import-stream-guidance.py`:

1. Read the existing YAML mapping files to get Google Doc IDs
2. Authenticate with Google Drive API (service account or OAuth)
3. Export each doc as HTML via Drive export API
4. Convert HTML to Markdown (using `markdownify` or `pypandoc`)
5. Inject frontmatter with business function, practice, stream metadata
6. Write to `content/en/docs/stream-guidance/{bf}/{practice}/stream-{a|b}.md`
7. Download inline images to `static/img/docs/stream-guidance/`

### Docs structure for stream guidance

```
content/en/docs/stream-guidance/        # weight: 90
  _index.md
  governance/
    _index.md
    strategy-and-metrics/
      _index.md
      stream-a.md
      stream-b.md
    policy-and-compliance/
      ...
    education-and-guidance/
      ...
  design/
    _index.md
    ...
  implementation/
  verification/
  operations/
```

### Alternative if Google API auth is impractical

Export each doc manually via Google Docs > File > Download > Web Page (.html), batch-convert with pandoc: `pandoc -f html -t markdown --wrap=none input.html -o output.md`. For 30 docs this takes ~1 hour.

### Cross-references

Each stream guidance page links back to its model stream page:
```markdown
> Related model page: [Strategy & Metrics: Stream A](/model/governance/strategy-and-metrics/stream-a/)
```

**Ships independently:** Yes. Can add streams incrementally.

---

## Phase 4: Client-Side Search

**Goal:** Fuzzy search across all docs pages using Hugo-generated JSON index + Fuse.js.

### Implementation

1. **Config**: Add custom output format `SearchIndex` in `config.toml`
2. **Index template**: `layouts/docs/list.searchindex.json` generates JSON array of `{title, url, section, description, content}` for all docs pages
3. **Docs landing frontmatter**: Add `outputs: [HTML, SearchIndex]` to `content/en/docs/_index.md`
4. **Search UI**: `layouts/partials/docs/search.html` with input + dropdown results, placed above sidebar nav
5. **JS**: Lazy-load Fuse.js + index on first input focus. Show top 8 results. Close on outside click.
6. **CSS**: `.docs-search__*` classes (~50 lines)

### Fuse.js config

```js
keys: [
  { name: 'title', weight: 3 },
  { name: 'description', weight: 2 },
  { name: 'content', weight: 1 }
],
threshold: 0.3,
minMatchCharLength: 2
```

**Ships independently:** Yes, once Phase 1 exists. Even with sparse content the search works.

**Model pages in search:** Once Phase 5 is done, extend the index template to also range over `site.GetPage "/business-function" | .RegularPagesRecursive`. Model front matter (activity titles, shortDescription, quality criteria text via `markdownify | plainify`) is rich search content. Add a `"section": "model"` field to the index so results can be visually distinguished.

---

## Phase 5: Model Integration

**Goal:** Give model pages the docs three-column layout (sidebar + content + TOC). Keep all `/model/` URLs unchanged — external links and existing SEO are preserved.

### Approach: Model sidebar + docs-shell wrapper on existing model templates

No proxy pages. No URL changes. No content duplication. Instead:

1. The model templates (`business-function/single.html`, `practice/single.html`, `stream/single.html`, `model/list.html`) get wrapped in a docs-style three-column shell.
2. A new model navigation sidebar replaces the docs sidebar when on model pages.
3. The docs sidebar gets a "Model" link at the bottom pointing to `/model/`, so users can move between the two contexts.

### Content source

The `owaspsamm/core` module mounts content at `content/business-function/` with this hierarchy:
```
content/business-function/
  Governance.md             → renders at /model/governance/
  Design.md                 → renders at /model/design/
  ...
  practice/
    Governance-SM.md        → renders at /model/governance/strategy-and-metrics/
    ...
    stream/
      Governance-SM-A.md    → renders at /model/governance/strategy-and-metrics/stream-a/
      ...
```

Even though page URLs are `/model/*/`, their Hugo content paths are `/business-function/*/`. Templates walk this tree with `site.GetPage "/business-function"`.

### Files to create

**`layouts/partials/docs/model-nav.html`**

A self-contained sidebar that walks the model content tree and renders an expand/collapse BF → Practice → Stream nav. Reuses `.docs-nav__*` CSS classes from Phase 1.

```go-html-template
{{ $root := site.GetPage "/business-function" }}
{{ $current := . }}
<nav class="docs-nav model-nav" aria-label="Model navigation">
  <a href="/model/" class="docs-nav__home">The Model</a>
  <ul class="docs-nav__list">
    {{ range $root.Pages.ByTitle }}
      {{/* Business function level */}}
      {{ $isActive := eq .RelPermalink $current.RelPermalink }}
      {{ $isAncestor := $current.IsDescendant . }}
      <li class="docs-nav__item{{ if or $isActive $isAncestor }} is-open{{ end }}">
        <a href="{{ .RelPermalink }}" class="docs-nav__link{{ if $isActive }} is-active{{ end }}">
          {{ .Title }}
        </a>
        {{ if .Pages }}
        <ul class="docs-nav__children">
          {{ range .Pages.ByTitle }}
            {{/* Practice level */}}
            {{ $pActive := eq .RelPermalink $current.RelPermalink }}
            {{ $pAncestor := $current.IsDescendant . }}
            <li class="docs-nav__item{{ if or $pActive $pAncestor }} is-open{{ end }}">
              <a href="{{ .RelPermalink }}" class="docs-nav__link{{ if $pActive }} is-active{{ end }}">
                {{ .Title }}
              </a>
              {{ if .Pages }}
              <ul class="docs-nav__children">
                {{ range .Pages.ByTitle }}
                  {{/* Stream level */}}
                  <li class="docs-nav__item">
                    <a href="{{ .RelPermalink }}"
                       class="docs-nav__link{{ if eq .RelPermalink $current.RelPermalink }} is-active{{ end }}">
                      {{ .Title }}
                    </a>
                  </li>
                {{ end }}
              </ul>
              {{ end }}
            </li>
          {{ end }}
        </ul>
        {{ end }}
      </li>
    {{ end }}
  </ul>
</nav>
```

**Caution:** `$current.IsDescendant` requires both pages to share a content tree. Because stream pages and BF pages are all under `content/business-function/`, this works. Test this assumption early.

### Files to modify

**`layouts/business-function/single.html`**, **`layouts/practice/single.html`**, **`layouts/stream/single.html`**

Wrap each in the docs three-column grid. Replace the standalone `<article>` with:

```go-html-template
{{ define "main" }}
<div class="docs">
  <aside class="docs__sidebar" id="docs-sidebar">
    {{ partial "docs/model-nav.html" . }}
  </aside>
  <article class="docs__content">
    {{/* existing content here */}}
  </article>
  <aside class="docs__toc">
    {{ .TableOfContents }}
  </aside>
</div>
{{ end }}

{{ define "scripts" }}
{{/* reuse docs sidebar drawer JS + TOC scroll spy from docs/single.html */}}
{{ end }}
```

**`layouts/partials/docs/sidebar.html`**

Add a "Model" section at the bottom of the docs sidebar nav:

```go-html-template
<div class="docs-nav__section-divider"></div>
<a href="/model/" class="docs-nav__model-link">
  <svg ...></svg> Model Reference
</a>
```

### CSS additions (`assets/css/main.css`)

- `.model-nav` — inherits `.docs-nav` styles; add BF color accents (6 × `--color-bf-*` modifier)
- `.docs-nav__model-link` — bottom-of-sidebar link with external-style arrow
- `.docs-nav__section-divider` — 1px separator line
- Reuse all existing `.docs-nav__*`, `.docs__sidebar`, `.docs__content`, `.docs__toc` classes — no new grid needed

### What does NOT change

- All `/model/` URLs — unchanged, external links continue to work
- `layouts/model/list.html` — the `/model/` landing page with the BF color table stays as-is, with no sidebar. It functions as an overview dashboard / entry point, not a reading page. Cluttering it with a sidebar would reduce its impact.
- The `owaspsamm/core` module and its content — untouched
- Docs pages at `/docs/` — sidebar just gets one new link at the bottom

### BF colors in the docs shell

The colored page headers (`page-header--bf page-header--governance`, etc.) live *inside* the `docs__content` column — they are content-area HTML, not layout. Wrapping the templates in the three-column grid does not affect them. BF identity is preserved.

Optionally, the model nav sidebar items can carry BF color accents via `--color-bf-*` CSS custom properties on each top-level BF item:

```css
.model-nav__bf--governance { --bf-accent: var(--color-bf-governance); }
.model-nav__bf--design     { --bf-accent: var(--color-bf-design); }
/* etc. */

.model-nav__bf > .docs-nav__link { border-left: 3px solid var(--bf-accent); }
```

This is optional polish — defer until the layout is working.

### Page-by-page summary

| URL pattern | Layout change | BF color |
|---|---|---|
| `/model/` | None — overview table, no sidebar | N/A |
| `/model/{bf}/` | Docs shell added, BF header stays | Full colored header |
| `/model/{bf}/{practice}/` | Docs shell added, BF header stays | Full colored header |
| `/model/{bf}/{practice}/stream-{a\|b}/` | Docs shell added, BF header stays | Full colored header |

### On sourcing content directly from YAML

The `owaspsamm/core` module's current main branch has raw, normalized YAML in `model/streams/`, `model/activities/`, etc. with GUID-based cross-references. The pinned commit used by website-v2 (Sept 2024) has pre-built Hugo markdown files with denormalized front matter — the same data, already joined.

Switching to direct YAML sourcing would mean:
- Mounting `model/streams/` etc. as `data/samm/*`
- Writing template loops that resolve GUIDs across 90 activity files, 30 stream files, etc.
- Updating `go.mod` to point to a newer commit

This is feasible but is a separate project. The current module approach is stable and sufficient. Revisit if the core module is updated and the markdown files become stale.

### Implementation order within Phase 5

1. Create `layouts/partials/docs/model-nav.html` and test that `site.GetPage "/business-function"` correctly walks the tree, including `.IsDescendant` active state
2. Modify `stream/single.html` first (deepest page, most used by assessors)
3. Then `practice/single.html`, then `business-function/single.html`
4. Add "Model" link to docs sidebar
5. CSS polish: BF color accents in model nav, mobile drawer behavior

---

## Verification

After each phase, verify by running `hugo server` from the website-v2 directory:

1. **Phase 1**: Navigate to `/docs/`. Confirm three-column layout renders. Click sidebar sections to expand/collapse. Resize browser to verify tablet (TOC hides) and mobile (sidebar drawer) breakpoints. Check breadcrumbs on nested pages. Confirm prev/next links navigate sequentially.
2. **Phase 2**: Confirm migrated content renders with correct formatting, images, and shortcodes. Verify sidebar shows all sections and pages in correct weight order. Check original blog posts show the cross-reference callout.
3. **Phase 3**: Confirm stream guidance pages render with correct metadata and content. Verify cross-links to model pages work.
4. **Phase 4**: Type in search input, verify results appear. Click a result, confirm navigation. Verify search works across all docs sections.
5. **Phase 5**: Confirm model practice data renders within docs layout. Verify cross-references between docs and standalone model pages.

---

## Implementation Order

Start with **Phase 1** (the shell). It's the foundation everything else depends on, and it can ship with just the section `_index.md` placeholder content. Then **Phase 2** (content migration) fills the shell with real content. Phases 3 and 4 can proceed in parallel after that. Phase 5 is deferred.
