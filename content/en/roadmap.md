---
title: "Roadmap"
description: "Internal roadmap of pending items and flags."
layout: "single"
type: "page"
sitemap:
  disable: true
robots: "noindex, nofollow"
---

Internal reference page for pending items. Not linked from navigation or sitemap.

This page tracks **pre-launch open items only**. Post-launch work lives in [/internal/backlog/](/internal/backlog/).

## Open items

### Docs/PDF page image
The image on the docs PDF download page looks bad. Either remove it or find a replacement.

### Model pages → Skills Framework links
Add links from model practice/stream pages to the corresponding Skills Framework page. Recommended approach: modify the practice layout template (`layouts/practice/single.html`) to auto-generate an anchor link to the SAMM to Assignments page using the practice name from front matter.

### CI link check (layer 1 — internal links, every PR)
Prevent broken-link regressions by running `htmltest` against the built site in CI. Config already committed at [.htmltest.yml](https://github.com/owaspsamm/website-v2/blob/main/.htmltest.yml) — internal links fail, externals skipped, `/internal/` dir excluded. Add a GitHub Action on PR and push to `main` that runs `hugo --minify` then `htmltest`. Context: [link-check session 2026-04-21] surfaced 40 broken internal links that three rounds of manual auditing had missed.

Layer 2 (monthly scheduled external-link check) is tracked in [/internal/backlog/#monthly-external-link-check-ci-layer-2](/internal/backlog/) and is post-launch.

## Resolved

- **Blog tag/category filtering** (2026-05-25): filtering itself was already implemented (template, CSS, JS) — the roadmap entry was stale. Found three real gaps and fixed them: filter buttons didn't meet `var(--tap-target-min)` (~34px → 44px via `min-height`); no URL state (added `?cat=X` with `history.replaceState`, `popstate` listener for back/forward, and read-on-load); no `aria-pressed` on the active button (now toggled alongside `is-active`). JS externalised to `assets/js/blog-filter.js` as part of the broader JS refactor.
- **Page-specific JS externalised** (2026-05-25): all six page-specific inline `<script>` blocks (blog/list, business-function/single, practice/single, stream/single, docs/single, docs/list) moved to `assets/js/*.js` files loaded via Hugo Pipes (`minify | fingerprint`, `defer`, integrity). Sidebar+nav-toggle (5 templates) and TOC scroll-spy (2 templates) deduplicated into shared files (`docs-sidebar.js`, `docs-toc.js`). Convention documented in design-system.md.
- **Mobile link audit** (2026-05-25): the critical issue was team card social icons (Slack/LinkedIn/GitHub per team member) hidden by default and only revealed on `:hover` — fully inaccessible on touch. Fixed by repositioning the overlay as a bottom strip inside `@media (hover: none)` so icons stay tappable and faces remain visible. Tap targets sized to 2.75rem (44px) to meet Apple HIG / WCAG 2.5.5 AAA. The docs sidebar close button (mobile-only) was also bumped from 2rem to 2.75rem for the same reason. Other link styles already had touch-appropriate affordances (content links underlined by default, sponsor grid has touch fallback, hover transforms disabled on touch, skills mapping and practice stream titles already had explicit mobile underline rules). BF breadcrumb stays hover-only-underline per the design-system "no underline in nav" rule.
- **Newsletter page Mailchimp logo alignment** (2026-05-25): root cause was `.content img` rule applying a top margin to the `<img>` inside `.content-figure--small`. Fixed by adding `margin: 0` to `.content .content-figure--small img` in `assets/css/main.css` (specificity bumped to beat `.content img`).
- **Skills framework migration**: Created `docs/skills-framework/` section with Overview, SAMM to Assignments, and Assignment Profiles. Cross-linked from Step 1 and Roles & Skills.
- **Reference section**: Training moved to Getting Started as "Fundamentals Course." Getting Ready renamed to "Preparation." Reference holds FAQ + Mappings.
- **Docs prev/next pager**: Changed to `.Parent.RegularPages.ByWeight` — stays within the same section.
- **Guides migration**: Agile guidance migrated to docs.

## Time log

Moved to [/internal/time-log/](/internal/time-log/).
