---
title: "Time log"
description: "Ongoing time tracking for the v2 website project."
layout: "single"
type: "internal"
sitemap:
  disable: true
robots: "noindex, nofollow"
---

Single source of truth for hours spent on v2. Keep entries short — date, work done, hours, optional note. Pre-tracking entries were logged without specific dates; summarised entries cover periods not itemised at the time.

## Total to date

**~66 hours** (as of 2026-04-21)

## Log

| Date | Hours | Work done |
| ---- | ----- | --------- |
| Pre-tracking | 3 | Home page (hero, sections, announcement banner, sponsor grid) |
| Pre-tracking | 3 | About pages (What is SAMM, The Team), community landing page |
| Pre-tracking | 3 | Sponsors, Practitioners, SAMM Users pages |
| Pre-tracking | 3 | Blog migration, blog card grid, category/tag pills |
| Pre-tracking | 2 | Model landing page (5x3 grid, bf colors) |
| Pre-tracking | 3 | Model page layouts (practice, stream, maturity tabs) |
| Pre-tracking | 3 | Resources section (later dissolved into docs + community) |
| Pre-tracking | 3 | Docs section (sidebar, layout, TOC, breadcrumbs, card grid) |
| Pre-tracking | 3 | Docs content (quick start steps, assessment, reference, tools, contributing, guides) |
| Pre-tracking | 3 | Contact page, mobile responsiveness, button system |
| Pre-tracking | 2 | Community internal pages (YouTube, Calls, Newsletter, Slack, GitHub Discussions), content reviews |
| Pre-tracking | 1 | Footer |
| Pre-tracking | 2 | SAMM identity and voice definition |
| 2026-03-26 | 3 | Model mobile fix, pager nav, skills framework (3 pages), IA restructure, SAMM to Assignments styling, DS/identity/roadmap pages |
| 2026-03-27 → 2026-04-13 | 15 | Docs IA expansion, resources section dissolution into docs + community, community section restructure. Estimated — not itemised at the time. |
| 2026-04-14 | 3 | User day pages: Vienna content & talks ported, agenda shortcode/data, announcement banner, blog post styling, placeholder avatar, Scarf commented out in v2 layouts. |
| 2026-04-16 | 2 | Internal docs (migration plan, actions upgrade plan, staging previews, time log), Netlify/deploy discussion, small iterations. |
| 2026-04-21 | 6 | v1→v2 migration plan drafting and parity audit. Dissolved `/resources/` section: added meta-refresh aliases on 11 destination pages (docs + community), deleted content dir and custom layout, updated migration plan smoke-test list and IA doc. Moved IA and docs plan into `/internal/` with proper frontmatter. |
| 2026-06-04 | 1 | Hero section refinements: tightened line-height to `1`, equalised padding, responsive `min-height` with `clamp()` for wide viewports, fixed right-panel SVG background position (`top center`) for high-resolution monitors, asymmetric flex alignment (title `flex-start` / subtitle `flex-end`). CSS tokens and property-ordering cleanup. |
| 2026-06-04 | 1.5 | CSS architecture: split 4352-line `main.css` into 27 layered files (`tokens.css`, `base.css`, `utilities.css`, `components/*`, `responsive.css`) with CSS `@layer`. BEM block = one file. All media queries consolidated into `responsive.css`. |
| 2026-06-08 | 1 | OG image (`static/img/og.png`, 1200×630) and full Open Graph / Twitter Card meta tags in `baseof.html`. |
| 2026-06-08 | 1 | CI: bump checkout to v6 and cache to v5 for Node.js 24. Fix toreon.yaml tab character and stream_guidance `hugo.Data` deprecation. Expand presentations backlog with hosting options. |
| 2026-06-15 | 4 | SAMM Identity section (new section, sidebar, breadcrumb partials, writing guidelines, design system content). Global JS extraction to `global.js`. New practitioners (aph10, code-guardian). User-day talk updates, baseof cleanup. |
| 2026-06-14 → 2026-06-15 | 5 | Model sidebar active state (BF + practice tint), hover teal fix, Hugo cache clear, bf-practice and pager underline fixes, pager caret fake-bold, `.prose` class refactor (replaces `.content a:not(…)` exclusion list), docs and memory updates. |
| 2026-06-22 | 3 | Pre-cutover prep: dinner sponsors, team photo, Asterisk Research sponsor + practitioner. Practitioners list fix (where → inline if), user testimonials hidden, sponsorship links. CSS: org-card meta stacking, prose link underlines scoped to section classes, bf-practice card tint, bf-page-header row height fix. |
| **Total** | **~82.5** | |

## How to use

- Add one row per working session going forward.
- Don't aim for precision — 15-minute increments are fine.
- Update the total when you add entries.
- Lump trivially small sessions (under 15 min) into the next real session.
