---
title: "Performance check plan"
description: "Baseline, audit, and improve page-load performance on the v2 site. Includes a mobile visualization pass."
layout: "single"
type: "internal"
sitemap:
  disable: true
robots: "noindex, nofollow"
---

Goal: measure current page-load performance on the v2 site, fix what's cheap, and confirm we're shipping a fast, professional-feeling site. Includes a separate mobile visualization pass for polish (audience is primarily desktop, but mobile presentation matters for credibility).

## Context for execution

- **Plan status**: drafted 2026-05-21. Pre-launch phases (1â€“4 below) run on a local production build or Netlify drag-and-drop preview before cut-over. Phase 5 is post-launch.
- **Hosting**: GitHub Pages, custom domain `owaspsamm.org`. Limited control over headers, no edge Brotli, no per-route cache rules. Performance wins must come from what is *delivered* — image weight, JS payload, font strategy — not from infrastructure.
- **Third-party scripts**: Google Analytics (`G-44N5RHDT94`) and Scarf pixel are consent-gated and default-denied. They don't fire until a user accepts cookies. The consent banner itself runs on every page and is in the critical path — measure with consent both accepted and declined.
- **Build command for measurements**: `hugo --minify --environment production`. Same command CI uses. Don't measure against `hugo server` — its livereload script and unminified output will skew everything.
- **Hugo image processing**: Hugo's `resources.Image` pipeline (`.Resize`, `.Process`, format conversion to WebP/AVIF, `srcset` generation) is available. Whether it's used today is part of the audit.

## Invocation

When ready to run this plan, open this page and say "run the performance plan". I'll start with phase 1 (baseline measurements) and stop for confirmation before applying any fixes.

## Pages to test

Picked to match real traffic (per GA) plus shape coverage of the site.

**Tier 1 — high traffic, must be fast:**
- `/` — homepage
- `/model/` — model overview
- `/model/governance/strategy-and-metrics/` — practice page (representative deep model page)
- `/model/governance/strategy-and-metrics/stream-a/` — stream page (includes the stream-guidance partial, the heaviest model template)

**Tier 2 — secondary traffic per GA:**
- `/assessment/` — assessment landing
- `/docs/getting-started/` — quick start guide

**Tier 3 — shape coverage:**
- `/blog/` — blog index (cards + thumbnails)
- `/blog/<a-recent-post>/` — a representative blog post with images
- `/user-day/2025dc/` — user-day page (lots of session cards, image-heavy)

## Phases

### Phase 1 — Baseline (~1h)

Run Lighthouse on each tier-1 and tier-2 page. Throttling profile: Slow 4G + 4× CPU (standard mobile preset, also fine as a pessimistic desktop proxy).

Capture for each page:
- Lighthouse scores (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals: LCP, INP, CLS
- TTFB
- Total transferred bytes
- Number of requests

Also note any Lighthouse opportunities it surfaces (unused CSS, unoptimized images, render-blocking resources). These feed phase 2.

Capture twice per page: with cookie consent **accepted** and **declined**. The delta is the cost of GA + Scarf.

### Phase 2 — Asset audit (~2h)

Per tier-1 page:
- **Images**: list largest by transferred bytes. Note format (png/jpg/webp/avif), intrinsic dimensions vs. rendered dimensions, presence of `loading="lazy"`, presence of `width`/`height` attributes (for CLS).
- **CSS**: total bundle size. Use Chrome DevTools → Coverage → record a page load + interaction → percentage of CSS unused. Identify the biggest unused blocks.
- **JS**: what's loaded, when, deferred or not. Check the cookie-consent banner script in particular — it's the only universal JS payload.
- **Fonts**: count, format (woff2 ideally), loading strategy (`font-display`), whether any are preloaded, whether any are loaded but unused.
- **Build-time view**: run `hugo --templateMetrics --templateMetricsHints` to surface slow templates. Not a runtime concern but useful if Hugo build time is climbing.

Output of phase 2: a short list of fixes ranked by expected impact Ã· effort.

### Phase 3 — Quick-win fixes (variable)

Likely candidates (apply what's cheap, defer what isn't):
- **Image optimization** via Hugo's `resources.Image` pipeline: resize source images to the displayed dimensions, output WebP/AVIF with JPG fallback, emit `srcset` for responsive sizing.
- **Lazy loading**: add `loading="lazy"` to below-fold `<img>` tags.
- **Fix CLS** by adding `width` / `height` attributes everywhere images don't currently have them.
- **Font loading**: ensure `font-display: swap`, preload the critical font(s), remove any unused weights/styles.
- **CSS pruning**: drop unused selectors found in phase 2. Consider splitting layout-specific CSS so it loads only where needed.
- **Defer non-critical JS**: anything that doesn't need to run before paint should be `defer`/`async` or moved to end-of-body.
- **Cookie-consent banner**: confirm it doesn't block render unnecessarily. If it does, consider inlining a minimal CSS skeleton.

Hard / out of scope without strong justification:
- Critical CSS inlining (high complexity for marginal wins on a static site).
- Service workers (overkill for the audience and adds debug surface).
- Switching off GitHub Pages.

### Phase 4 — Re-measure & validate (~1h)

Re-run Lighthouse on the same pages, same conditions, same time of day if possible. Document deltas. If a target is missed, decide: fix more, or accept and document why.

**Targets:**
- Lighthouse Performance â‰¥ 90 on all tier-1 and tier-2 pages (desktop preset).
- Lighthouse Performance â‰¥ 75 on the same pages with mobile preset (Slow 4G + 4× CPU).
- LCP < 2.5s on tier-1.
- INP < 200ms on tier-1.
- CLS < 0.1 on all tested pages.
- Total transferred per page < 500 KB (excluding any user-initiated PDF downloads).

### Phase 5 — Lighthouse CI (post-launch)

Once the layer-1 link-check Action is in place and stable, add a separate GitHub Action that runs Lighthouse CI against built pages on PRs. Set perf budgets matching the targets above; fail the build if a budget regresses by more than a tolerance (e.g. -5 points or +10% transferred bytes).

Don't combine this with the link-check Action — keep them as separate workflow files so a failure in one is diagnosable without reading through the other.

## Mobile visualization pass (parallel track)

Audience is mostly desktop, so this is **not** the primary perf optimization. It's a polish / professionalism check: the site should look clean and feel right on a phone for credibility reasons (people will share links from Slack, LinkedIn, etc., and open them on mobile).

Run alongside phase 2, separate from perf:

- Open the tier-1 + tier-2 pages on a real phone (or DevTools device emulation at iPhone 14 / Pixel 7 sizes).
- Check: nothing overflows horizontally, tap targets are â‰¥ 44 px, line lengths are readable, images don't squash to unrecognisable sizes, the model navigation sidebar is usable, the assessment table doesn't break.
- Cross-reference with the [Mobile link audit](/roadmap/#mobile-link-audit) roadmap item — that work is about hover-only link affordances, which is part of this same pass.
- Output: a short list of mobile-specific fixes folded into phase 3 alongside the perf work.

## Open questions

- Which specific blog post should be in tier 3? Pick one with images that's representative of how blog posts actually look.
- Acceptable target deltas: are the suggested targets above tight enough? Too tight?
- Does the team want to set a transferred-bytes budget per template family (e.g. all model pages must be under X KB), or just per-page in phase 4?

## Out of scope

- Server-side / CDN-level optimisations (we're on GitHub Pages).
- Backend / database performance (no backend).
- Accessibility audit beyond Lighthouse's a11y score — that's a separate review.
- SEO beyond Lighthouse's SEO score — also separate.
