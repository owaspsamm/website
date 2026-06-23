---
title: "Backlog"
description: "Post-launch optimizations and improvements that aren't blockers."
layout: "single"
type: "internal"
sitemap:
  disable: true
robots: "noindex, nofollow"
---

Things that would improve the v2 site but aren't blocking the launch. Revisit after v2 is stable in production.

Rough sequencing once v2 is stable:

1. **Restore SAMM Users testimonial quotes** — quotes are preserved in `data/users/*.yaml` (`testimonial` field) but hidden in the layout (`layouts/samm-users/list.html`) pending a content review. Re-enable the `<blockquote>` block and audit each entry for accuracy and tone before restoring.

2. **Remove `v2-preview` from the build workflow** — `gh-pages.yaml` has a temporary `v2-preview` branch trigger and a three-way `publish_branch` expression kept for pre-cutover compatibility. After the cutover, `v2-preview` no longer exists; remove the branch entry and simplify `publish_branch` back to `github.ref_name == 'staging' && 'gh-pages-staging' || 'gh-pages'`. Good candidate for the first post-cutover PR to smoke-test the staging integration workflow.

3. **Multilingual model pages** — content already published by `owaspsamm/core`; pure site-side wiring.
4. **Core module generator fixes** — two upstream cleanups (`url:` `/./` band-aid, `stream-a/` → `a/`). Both live in the same generator, so batch them.
5. **Stream guidance redesign** — full rebuild per summit decision; replaces the v1 Google Doc port.
6. **Monthly external link check (CI layer 2)** — scheduled job that reports dead external links in old blog posts.
7. **Remove presentations from the repo** — move to GitHub Releases, Google Drive, or Git LFS; repo-size optimisation, not user-visible. Decision needed before acting.
8. **OG preview validation** — verify Open Graph and Twitter Card previews are rendering correctly post-launch using LinkedIn Post Inspector (`linkedin.com/post-inspector`), Twitter/X Card Validator (`cards-dev.twitter.com/validator`), and opengraph.xyz.
9. **Playwright visual regression tests** — screenshot-based regression suite to catch CSS regressions silently introduced across sessions. High-value pages: docs single, model overview, business-function, practice, stream, blog post, user-day talk, homepage. Run on PR via GitHub Actions; baseline screenshots committed to repo. Prevents the class of bug where link underlines, nav tints, or pager styles break without any failing test.
10. **Review `booxmedialtd/ws-action-parse-semver@v1` in the CI pipeline** — unmaintained third-party action used in the `updateHugoMod` job to parse the SAMM core release tag on `repository_dispatch` events. Not on the critical path for normal pushes. Assess whether it still works reliably; if not, replace with a maintained alternative or an inline `bash` semver parse. Low urgency; only bites when a new core release fires.

## Multilingual model pages

**What:** Surface the already-translated SAMM model pages on v2. `owaspsamm/core` already publishes translated content (French, Spanish) — v1 generated those pages and simply hid the language selector. The rest of the site stays English only; scope is `/model/**`.

**Why defer:** v2 was built without language config, and the model overview template ([layouts/model/list.html](../../../layouts/model/list.html)) has hardcoded English URLs that need to become language-aware before the selector is visible. Better to ship v2 and add this cleanly post-launch than to rush it.

**When to revisit:** right after v2 is stable — the content is already there, this is purely site-side wiring.

**Site-side work required:**
- Add `[languages.fr]` and `[languages.es]` blocks to [config.toml](../../../config.toml).
- Add module mounts per language (matching v1's pattern — one mount per language, scoped via `sites.matrix.languages`).
- Decide `defaultContentLanguageInSubdir`: does English stay at `/model/` or move to `/en/model/`? One-way door for existing links/SEO — choose before enabling.
- Translate [content/en/model/_index.md](../../model/_index.md) for each language (authored here, not in core).
- Fix hardcoded English paths in [layouts/model/list.html](../../../layouts/model/list.html) — replace with `relLangURL` calls or page `.RelPermalink` lookups so the overview renders correctly in each language.
- Build and add a language switcher partial scoped to `/model/**` pages, iterating `.Translations`. Wire into the model page layouts only.
- Add a fallback block in the business-function and practice layouts for missing translations — otherwise Hugo 404s when translators fall behind a new core release.

## Core module `url:` frontmatter fix (drops the `/./` band-aid)

**Background:** every business-function / practice / stream file in `github.com/owaspsamm/core` has frontmatter like `url: ./model/governance/` with a leading `./`. Hugo emits that verbatim, so:

- Rendered `<a href>` links become `/./model/...`. Browsers normalise `/./` to `/`, so navigation works, but `htmltest` flagged these as broken during the 2026-04-21 link-check session (40 broken internal links surfaced, most from this pattern).
- Canonical URLs and alias-redirect targets come out as `https://owaspsamm.org/./model/...` — wrong for SEO and for the meta-refresh in [layouts/alias.html](../../../layouts/alias.html).

**Current v2 band-aid:** five templates pipe `RelPermalink`/`Permalink` through `replaceRE "^/?\\./" "/"` (or `"/\\./"` for full URLs): [alias.html](../../../layouts/alias.html), [business-function/single.html](../../../layouts/business-function/single.html), [partials/docs/model-nav.html](../../../layouts/partials/docs/model-nav.html), [partials/header.html](../../../layouts/partials/header.html), [_default/list.html](../../../layouts/_default/list.html). With the band-aid in place, htmltest passes on a production build.

**Why this lives in the generator, not the files:** the model `.md` files in `owaspsamm/core` are *generated*, not hand-edited. Editing the rendered output would be overwritten on the next regeneration. The leading `./` is being emitted by whatever script/template produces those frontmatter blocks — that generator is where the fix has to land.

**Why defer:** the band-aid works, the fix needs investigating which generator produces the model `.md` files in `owaspsamm/core`, changing it, regenerating, releasing core, and bumping the module ref here.

**When to revisit:** any time after launch — independent of all other backlog work.

**Plan:**
- Locate the generator in/around `owaspsamm/core` that produces the model `.md` files with `url: ./model/...` frontmatter.
- Change it to emit `url: /model/...` (no leading `./`).
- Regenerate the model `.md` files; commit; cut a release on `owaspsamm/core`.
- Bump the module ref in [go.mod](../../../go.mod).
- Remove the `replaceRE` pipes from all five templates listed above.
- Rebuild and run `htmltest` to confirm no `/./` paths remain.

## Model page URL cleanup — drop "stream" from URLs

**What:** the markdown generator in `owaspsamm/core` emits URLs like `/model/governance/strategy-and-metrics/stream-a/`. We want to drop the `stream-` prefix so they become `/model/governance/strategy-and-metrics/a/`. Friendly short-ID aliases (`/model/G-SM-A`) already work and should be used for any new internal links in the meantime.

**Why defer:** lives in the same `owaspsamm/core` generator as the `/./` fix, so batch them. Renaming live URLs also requires `aliases:` entries (or generator-emitted ones) so existing inbound links keep working.

**When to revisit:** alongside the `/./` fix.

**Plan:**
- Same generator change as the `/./` fix — adjust the URL-emitting logic to drop the `stream-` prefix.
- Add per-page `aliases:` (or have the generator emit them) so the old `stream-a/`-style URLs still resolve.
- Regenerate, release core, bump `go.mod` in v2.

## Stream guidance redesign

**What:** The stream guidance section rendered on model stream pages (data in [data/streamguidance/](../../../data/streamguidance/), partial at [layouts/partials/stream_guidance.html](../../../layouts/partials/stream_guidance.html)) is a like-for-like port from v1, including the Google Form contribution flow. It was shipped as-is to unblock launch.

Per the 2026 Barcelona summit decision, this section will be **fully redesigned** — not extended — once v2 is stable. Treat the current data files and partial as throwaway.

**When to revisit:** once v2 is stable. The summit produced the direction; specifics (data shape, contribution flow, where guidance lives, whether practice pages also surface guidance) will be worked out as part of the rebuild.

**Open design questions for the rebuild:**
- Where does contribution happen? Stay on a Google Form, move to GitHub issues/PRs, or build something else?
- Does guidance live alongside core model content (in `owaspsamm/core`) or remain in this repo's `data/`?
- One guidance entry per stream or a richer structure (examples, tools, references)?
- Does guidance also appear on practice pages (roll-up of stream-level entries), or stay stream-scoped?
- Moderation / review flow for community contributions.

**Rough plan once design lands:**
- Decide content home (core module vs. `data/`) and migrate accordingly.
- Replace the partial with a layout that matches the new data shape.
- Retire or rebuild the Google Form contribution flow.

## Monthly external link check (CI layer 2)

**What:** scheduled GitHub Action that runs `hugo --minify` then `htmltest` with `CheckExternal: true`. Output posted as an issue (or to a tracking page) — does **not** block merges.

**Why defer:** content updates are infrequent, so monthly cadence is plenty. The pre-launch CI link check (layer 1) handles internal links on every PR; this is the bigger, slower companion for external rot, which mostly bites old blog posts where vendors / talks / articles have moved or 404'd.

**When to revisit:** once layer 1 is running stably and the team has appetite to act on the report.

**Plan:**
- Add a second GitHub Actions workflow file (e.g. `.github/workflows/external-links.yml`) with a monthly cron (`0 6 1 * *` — 06:00 UTC on the 1st of each month).
- Run `hugo --minify --environment production`, then `htmltest -c .htmltest.external.yml` (a second config file with `CheckExternal: true`, longer timeouts, and a curated `IgnoreURLs` allowlist for hosts that aggressively block bots).
- On failure, open or update a tracking issue with the broken-link list — don't fail the job in a way that pages anyone.
- Triage cadence: a maintainer skims the report each month and decides update / replace / remove.

## Presentations: remove large files from the repo

**What:** 186 MB of .pptx and .pdf files in [static/presentations/](../../../static/presentations/) — user-day slides and guidance PDFs. Actively served (linked from user-day pages), but they change rarely and bloat every clone and every GitHub Actions deploy run.

**Why defer:** works fine today; committing them as-is matches v1's long-standing approach. Not something to do during a cutover.

**When to revisit:** once v2 is stable (maybe 2â€“4 weeks post-launch), or sooner if the repo size causes a concrete problem (slow Actions runs, GitHub warnings).

**Options — decide before acting:**

1. **GitHub Releases** (recommended): attach presentation files to a release per user-day event (e.g. `user-day-2024-san-francisco`). URLs are stable, public, tied to the repo, free. No dependency on external services. Links in content pages update to `github.com/owaspsamm/website/releases/download/...`. Manual upload per event — same effort as Drive.

2. **Google Drive**: move files to the SAMM public Drive folder and link from content pages. Simpler to set up if the team already uses Drive. Risk: links break silently if someone reorganises the folder, changes permissions, or the org Google Workspace account changes.

3. **Git LFS**: keep files in the repo but store them in LFS. Reduces clone size; deploy runs still download them but via LFS bandwidth. GitHub's free LFS tier is 1 GB storage + 1 GB/month bandwidth — 186 MB fits in storage but bandwidth may need a data pack (~$5/month) depending on download volume. Migration rewrites history: `git lfs migrate import --include="static/presentations/**" --everything`.

**Regardless of option chosen:**
- Update all links in content pages to point to the new location.
- Add `static/presentations/` to `.gitignore` once files are removed from the repo.
- Delete the files from git history (or accept they remain in old commits — only matters for clone size of full history).
