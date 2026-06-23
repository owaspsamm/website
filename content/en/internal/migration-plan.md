---
title: "Migration plan: v1 → v2"
description: "How we replace the current production website with the v2 codebase."
layout: "single"
type: "internal"
sitemap:
  disable: true
robots: "noindex, nofollow"
---

Goal: replace the content of the `owaspsamm/website` repo (which currently serves v1) with the `website-v2` codebase, preserving the public URL (`owaspsamm.org`), the repo identity, and GitHub Pages config. No broken links.

## Context for execution

Everything a fresh session needs to start executing this plan without questions.

- **Plan status**: updated 2026-04-22. Previously assumed a `github.com/owaspsamm/website-v2` repo existed and that cut-over would be a repo rename — neither was true. Check this date against the current state before trusting details.
- **Single repo on GitHub**: `github.com/owaspsamm/website`. Currently serves v1. Cut-over replaces its content with v2 in a single branch swap; the repo identity (stars, issues, Pages config, custom domain) is preserved. Local path of v1 clone: `c:/Users/Pat/Documents/work/OWASPSAMM/website`.
- **v2 codebase**: lives only at `c:/Users/Pat/Documents/work/OWASPSAMM/website-v2` and is **not yet under git**. Prerequisite #0 below is `git init` + push to a branch on `owaspsamm/website`.
- **Production domain**: `owaspsamm.org` (custom domain on GitHub Pages, served from `owaspsamm/website` `gh-pages` branch).
- **v2 staging**: Netlify, configured to serve the pre-built `gh-pages-v2` branch (no build step — output is produced by GitHub Actions). Every push to `v2-preview` triggers the Actions pipeline, deploys to `gh-pages-v2`, and Netlify serves the result automatically. See the "v2 staging pipeline" section below and [/internal/website-updates-process/](/internal/website-updates-process/) for staging environment details.
- **SAMM model content**: lives in `github.com/owaspsamm/core`, pulled as a Hugo Module by both v1 and v2. See v2's [go.mod](../../../go.mod).
- **Analytics / trackers on v2**: Both enabled and gated on `hugo.IsProduction`. Google Analytics ID `G-44N5RHDT94` is configured in [config.toml](../../../config.toml) and injected by [layouts/partials/cookie-consent.html](../../../layouts/partials/cookie-consent.html) (consent-gated, default-denied). Scarf pixel (`x-pxid=6e76dfd3-e2e4-4864-a63b-0b361639db63`) fires on the four model-page layouts via [layouts/partials/scarf.html](../../../layouts/partials/scarf.html), gated inside the partial so Netlify previews don't pollute production metrics.
- **Hugo version**: v1 pipeline pins `0.157.0`. v2 should match at migration time. See [/internal/archive/actions-upgrade/](/internal/archive/actions-upgrade/) for the workflow we're inheriting.

## Invocation

When ready to execute this plan in a new session: open this page, point me at it, and say "run the migration plan". I'll work through the prerequisites before cut-over and stop for confirmation at each gate.

## Guiding principles

- **URL stability** — any existing public URL that exists in v1 should continue to resolve in v2. Where structure has changed, use permanent redirects (Hugo `aliases:` frontmatter for meta-refresh on GitHub Pages).
- **Single cut-over** — no dual-run period. One clean switch minimises confusion and SEO churn.
- **Reversible for 7 days** — v1 is preserved on a permanent `v1-archive` branch (and a `v1-final` tag). Emergency rollback = rename `v1-archive` back to `main` in GitHub Settings. Pages rebuilds from v1; DNS untouched. Rollback is only for genuine breakage, not routine use.
- **Production freeze** during cut-over — no v1 content changes in the 24h window around the switch.

## Prerequisites (before the cut-over)

Each prerequisite is something that needs to be true *before* cut-over day, so the cut-over itself is a 5-minute branch swap rather than several hours of unexpected debugging. In rough order.

- [x] **0. v2 under git and pushed as a branch (2026-06-08).** Committed and pushed to `v2-preview` on `owaspsamm/website`.
- [x] **v2 workflow actions-upgraded (2026-06-08).** `.github/workflows/gh-pages.yaml` in the v2 codebase has all five actions bumped to Node 24-compatible versions and the `add-and-commit` v10 input format corrected. See [/internal/archive/actions-upgrade/](/internal/archive/actions-upgrade/) for the version table. v1's in-flight upgrade is independent and does not block v2 launch.
- [x] **v2 pipeline smoke-tested on `v2-preview` (2026-06-08).** Workflow ran green; `gh-pages-v2` branch populated successfully.
- [x] **Content parity audit.** Done 2026-05-12. All major sections covered. Two aliases added: `/resources/news/` → `community/newsletter.md`, `/resources/youtube-channel/` → `community/youtube.md`. `referencespoc/poc.md` confirmed ignorable.
- [x] **URL parity audit.** Done 2026-05-12. 21 aliases already in place from the `/resources/` dissolution. Two gaps closed (see above). No redirect map needed — all cases handled via page-level `aliases:`.
- [x] **Hugo version pinned.** Both v1 and v2 workflows pin `0.157.0`. No action needed (verified 2026-05-12).
- [x] **Scarf, analytics, cookie consent** all wired up on v2 (2026-04-22). Still verify on cut-over day that the pixel fires in the production build and GA is reporting.
- [ ] **Branch protection** on `main` of `owaspsamm/website` requiring passing CI before merge. (Lesson from the 2026-04-14 incident.) Put this in place before cut-over so the swap itself is gated.
- [ ] **Final v2 build reviewed.** Share the Netlify staging URL (served from `gh-pages-v2`, updated automatically on every push to `v2-preview`). Two team members click through end-to-end. No manual builds needed.

## v2 staging pipeline

Goal: run the upgraded Actions workflow on real GitHub infrastructure and give reviewers a live URL — without touching v1 production at `owaspsamm.org`.

**Architecture:**

- Push to `v2-preview` → GitHub Actions runs (upgraded action versions) → Hugo builds → output deployed to `gh-pages-v2` branch.
- Netlify is configured to serve `gh-pages-v2` with no build step (the site is already built). The staging URL updates automatically on every push.
- v1 at `owaspsamm.org` is never touched: the `peaceiris/actions-gh-pages` step uses a conditional `publish_branch` that routes `v2-preview` pushes to `gh-pages-v2` and all other pushes (i.e. `main` after cut-over) to `gh-pages`.

**Why this design:**
Netlify building from source would give a visual preview but wouldn't exercise the GitHub Actions pipeline. Serving the pre-built `gh-pages-v2` output means what reviewers see is exactly what Actions produced — the pipeline and the preview are the same artifact.

**Workflow changes applied (2026-06-08):**

Two edits to `.github/workflows/gh-pages.yaml` in v2:

1. ✓ Added `v2-preview` to `on.push.branches`.
2. ✓ Added conditional `publish_branch` to the Deploy step — routes `v2-preview` pushes to `gh-pages-v2`, everything else to `gh-pages`.

**Netlify configuration:**

Point Netlify at the `gh-pages-v2` branch of `owaspsamm/website` with:
- Build command: *(empty — no build)*
- Publish directory: `.`

See [/internal/website-updates-process/](/internal/website-updates-process/) for staging environment details.

**What happens at cut-over:**

The branch rename (`v2-preview` → `main`) means `github.ref_name` is `main` on all future workflow runs. The conditional `publish_branch` evaluates to `gh-pages` automatically — no workflow edits needed on cut-over day. The `v2-preview` entry in the push trigger becomes dead after the rename; remove it in a post-launch cleanup commit.

---

## Cut-over — branch rename on `owaspsamm/website`

One repo, two independent histories. v2 was built from scratch, not forked from v1, so they don't share ancestry. The cut-over is two branch renames in the GitHub UI.

**State at start of cut-over day:**
- `main` branch: v1 content (currently deployed, served by Pages).
- `v2-preview` branch: v2 content (pushed during prerequisite #0, reviewed).
- Pages settings, custom domain, DNS, repo identity: unchanged throughout.

**Steps (order matters):**

1. **Tag v1.** Locally on the v1 clone: `git fetch origin && git tag v1-final origin/main && git push origin v1-final`. v1 is now permanently addressable by tag, independent of any branch.
2. **Rename `main` → `v1-archive`.** Done by the team via GitHub: Settings → Branches → rename button next to `main`. GitHub automatically updates PR base refs and adds a redirect on the old `main` name. `v1-archive` is now the repo's default branch (temporarily).
3. **Rename `v2-preview` → `main`.** Same flow: Settings → Branches → rename `v2-preview` to `main`.
4. **Set `main` as default branch.** Settings → Branches → switch default from `v1-archive` back to `main`.
5. **Workflow deploys v2.** Pushing the rename triggers the Actions workflow on the new `main` (which contains v2 + its own copy of the workflow file). Workflow builds Hugo, deploys to `gh-pages`. Pages serves v2.
6. **Verify `owaspsamm.org`** serves v2.

**End state:**
- `main` = v2 (default, deployed).
- `v1-archive` = v1 (permanent, browsable at `github.com/owaspsamm/website/tree/v1-archive`, never updated).
- `v1-final` tag = belt-and-suspenders pointer to v1's tip.

**Rollback (emergency only, within 7 days):** rename `main` → `v2-failed`, rename `v1-archive` → `main`, set default. Pages rebuilds v1. Takes a minute.

## Day-of checklist

- [ ] Announce freeze on v1 `main` in #samm (24h before).
- [ ] Final v1 deploy if anything is outstanding.
- [ ] Verify v2 branch passes all checks (workflow green on `v2-preview`, link checker, accessibility scan if we have one).
- [ ] Tag v1 (`v1-final`) and push the tag.
- [ ] Rename `main` → `v1-archive` (GitHub Settings).
- [ ] Rename `v2-preview` → `main` (GitHub Settings).
- [ ] Set `main` as the repo's default branch.
- [ ] Watch the Actions workflow fire on the new `main` and deploy to `gh-pages`.
- [ ] Smoke-test high-traffic URLs on production: `/`, `/model/`, `/model/governance/strategy-and-metrics/`, `/assessment/`, `/benchmark/`, `/docs/`, `/blog/`, `/user-day/`, `/sponsorship/`. Also verify the `/resources/*` → `/docs/*` and `/community/*` meta-refresh aliases resolve (see 2026-04-21 dissolution).
- [ ] Spot-check a few URLs from the redirect map.
- [ ] Run Lighthouse on `/`, `/model/`, and one blog post.
- [ ] Confirm Google Analytics is reporting.
- [ ] Confirm Scarf pixel is firing on a model page (view-source for `scarf.sh`).
- [ ] Post to #samm that the new site is live.

## Post-cut-over (within 7 days)

- [ ] Submit updated sitemap to Google Search Console.
- [ ] Monitor Search Console for 404 spikes; add redirects as needed.
- [ ] Monitor analytics for traffic regression.
- [ ] Confirm `v1-archive` branch and `v1-final` tag are both visible on GitHub, so anyone can browse or restore v1.

## Out of scope

- Changing hosting (e.g. away from GitHub Pages). Stay on Pages.
- Content rewrites. Migrate content as-is; any rewrites happen after stabilisation.
- SEO schema expansion. Nice-to-have for later.

## Open questions (resolve before execution)

Things I will ask about if you invoke this plan as-is.

- **Does Pat (or the team members running cut-over) have push access and Settings → Branches access on `owaspsamm/website`?** Needed for the prereq #0 push and for the two branch renames on cut-over day. If not, coordinate with someone who does.
- **Does v2's `go.mod` still pull `github.com/owaspsamm/i18n-FR@markdown`?** If not, remove that step when copying the v1 workflow into v2. Check before prereq #0.
- **Is there a redirect map yet?** Most v1→v2 URL changes will be handled via page-level `aliases:` frontmatter. Only residual cases need a `data/redirects.yaml`. Build by crawling v1's sitemap and diffing against v2's content tree.
- **Freeze window timing.** What day/time works for the team to freeze v1 `main` for 24h around the cut-over?

## Risks

- **Pushing `v2-preview` accidentally triggers a deploy.** The v1 workflow only runs on pushes to `main` (verified — see [v1 workflow](../../../../website/.github/workflows/gh-pages.yaml)), so `v2-preview` is safe. Re-verify by reading the workflow's `on:` block right before the first push.
- **Workflow file missing on new `main`.** If v2 doesn't contain its own `.github/workflows/gh-pages.yaml`, nothing builds after cut-over. Mitigation: prereq #0 explicitly copies the workflow file into v2 before the first commit.
- **Redirect coverage incomplete.** A URL that exists in v1 but not in v2 and has no `aliases:` entry will 404 after cut-over. Mitigation: URL parity audit pre-cut-over; fail the cut-over if unresolved entries remain.
- **Workflow difference.** v2's actions were upgraded on 2026-06-08 but have not yet run on real GitHub infrastructure. The v2 staging pipeline (see section above) is the mitigation: the workflow runs on every push to `v2-preview` and must go green before cut-over day. Do not skip this.
- **Rename order mistake.** Renaming `v2-preview` → `main` before renaming the v1 `main` → `v1-archive` fails because `main` already exists. Follow the day-of checklist strictly: tag, archive-rename, preview-rename, set-default.
- **Analytics / Scarf site-ID continuity.** v1 already uses the same pxid and GA property; v2 inherits the same config. Verify during smoke test.
- **Local disk is the only copy of v2 until prerequisite #0 runs.** Any disk failure between now and the first push loses everything. Prioritise #0.
