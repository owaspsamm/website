---
title: "Staging site & previews"
description: "How the v2 staging pipeline works and how to get a live preview of changes."
layout: "single"
type: "internal"
sitemap:
  disable: true
robots: "noindex, nofollow"
---

## Current state (pre-cutover)

v2 staging uses a **build-less Netlify setup**: GitHub Actions builds the site and deploys the output to a branch; Netlify serves that branch with no build step of its own. There is no `netlify.toml` in the repo.

**How it works:**

1. Push to `v2-preview` on `owaspsamm/website`.
2. GitHub Actions runs `.github/workflows/gh-pages.yaml` — Hugo builds the site, output deployed to the `gh-pages-v2` branch.
3. Netlify is configured to serve `gh-pages-v2` directly.
4. The staging URL updates automatically. No Netlify build step; no Go toolchain on Netlify.

**Netlify dashboard settings:**

| Setting | Value |
|---|---|
| Repository | `owaspsamm/website` |
| Branch to deploy | `gh-pages-v2` |
| Build command | *(empty — no build)* |
| Publish directory | `.` |

What reviewers see on the staging URL is exactly the artifact that Actions produced — not a separate Netlify build.

## Ownership

The Netlify site is under **Pat's personal Netlify account** (m.patricia.duarte@gmail.com). There is currently one admin.

Before cutover, document and add a second admin so the staging setup survives a change of hands.

## Post-cutover plan

After the branch rename (`v2-preview` → `main`) the staging setup should be reconfigured to build from source. This enables persistent staging that always reflects `main` and unlocks Netlify's automatic per-PR deploy previews.

Reconfigure Netlify to:

| Setting | Value |
|---|---|
| Branch to deploy | `main` |
| Build command | `hugo --gc --minify --environment production` |
| Publish directory | `public` |
| `HUGO_VERSION` env var | `0.157.0` (match the Actions workflow) |
| `GO_VERSION` env var | match the version in the Actions workflow |

Add a `netlify.toml` to the repo to version-control the build config rather than leaving it only in the Netlify dashboard.

See backlog item 6 in [/internal/backlog/](/internal/backlog/) — this is the right post-cutover moment.

## If the staging URL stops updating

Since the staging URL is served from the `gh-pages-v2` branch, stale content means the GitHub Actions workflow didn't run or didn't deploy. Check in order:

1. **Actions tab** on `owaspsamm/website` — did the workflow run on the last push to `v2-preview`? Did it pass?
2. **`gh-pages-v2` branch** — does it have a recent commit matching the push?
3. **Netlify dashboard** — is the site still pointing at `gh-pages-v2`? Did any Netlify config change?

There is no Hugo build happening on Netlify, so Netlify build logs will not show errors from the site build.
