---
title: "Staging site & PR previews"
description: "How we give team leaders a clickable preview of every PR without running Hugo locally."
layout: "single"
type: "page"
sitemap:
  disable: true
robots: "noindex, nofollow"
---

## Context for execution

- **Plan status**: draft as of 2026-04-15.
- **Host**: Netlify, connected to `owaspsamm/website-v2` via Pat's personal Netlify account (manually set up; there is no `netlify.toml` in the repo).
- **Affected files** if we later gate Scarf / add `netlify.toml` / add redirects: repo root `netlify.toml`, [layouts/partials/scarf.html](../../../layouts/partials/scarf.html), the four model-page layouts listed in [/internal/migration-plan/](/internal/migration-plan/#pending-re-enables-at-cut-over).
- **Alternative considered**: Cloudflare Pages. Notes preserved in the "Out of scope" section in case we ever migrate.

## Invocation

When ready to tidy this up: open this page and say "run the staging tidy-up". I'll create the `netlify.toml`, add the Scarf production gate (if not already done as part of migration), and draft the ownership doc.

## Current state

v2 is already deployed on **Netlify**. Team leaders can use the Netlify-provided staging URL and automatic per-PR deploy previews without running Hugo locally.

What we *don't* have yet (at time of writing) is a `netlify.toml` in the repo — Netlify build settings live only in the Netlify dashboard. That's fine operationally but means build config isn't version-controlled, which is worth fixing (see below).

## History

v1 originally had Netlify deploy previews too. They worked until we split the SAMM model content out of the website repo into `github.com/owaspsamm/core`. After that split, Hugo built the site by pulling `core` as a Hugo Module (Go modules under the hood), and Netlify's build image at the time didn't include the Go toolchain. Previews silently broke, nobody reconnected the service, and v1 has been without staging since.

v2's Netlify setup evidently *does* resolve `core` correctly, so either Netlify's default image now includes Go, or whoever connected v2 configured Go explicitly. Worth documenting whichever it is so the knowledge doesn't get lost again.

## Recommended tidy-ups

### 1. Add a `netlify.toml` to the repo

Pin build configuration in version control so it's reviewable, reproducible, and doesn't quietly drift in the Netlify dashboard. Example:

```toml
[build]
  command = "hugo --gc --minify --environment production"
  publish = "public"

[build.environment]
  HUGO_VERSION = "0.157.0"
  GO_VERSION = "1.25"

[context.deploy-preview.environment]
  HUGO_ENVIRONMENT = "preview"

[context.branch-deploy.environment]
  HUGO_ENVIRONMENT = "preview"
```

Values to confirm against what the Netlify dashboard currently has set — whoever owns the Netlify account should check and reconcile. If they differ, the dashboard wins at build time; the goal is to make the toml authoritative.

### 2. Keep analytics and trackers out of previews

Neither Google Analytics nor Scarf should fire on preview / staging builds. Today:

- **Google Analytics** is already correctly gated on `hugo.IsProduction` in [layouts/partials/cookie-consent.html](../../../layouts/partials/cookie-consent.html).
- **Scarf** is *not* gated — the partial in [layouts/partials/scarf.html](../../../layouts/partials/scarf.html) is included on every model page regardless of environment. This means staging traffic is currently polluting Scarf's dashboard.

Fix: wrap each `{{ partial "scarf.html" . }}` call in `{{ if hugo.IsProduction }}…{{ end }}`, or wrap the body of `scarf.html` itself with the same guard. The latter is better — one place to maintain, same behaviour everywhere.

### 3. Document ownership

We lost v1 previews partly because nobody owned the Netlify account. For v2, document:

- Which Netlify org/team the site belongs to.
- Who has admin access (at least two people on the SAMM team).
- How to add a new admin if one leaves.

Add this to an internal runbook (this page, the team page, or a separate ops page — whichever fits).

## If previews break

First diagnostic: check the Netlify build log. Two common failure modes:

1. **`hugo mod get` fails** — Go toolchain missing or wrong version in Netlify's build image. Fix via `GO_VERSION` in `netlify.toml` or Netlify dashboard env vars.
2. **Core module version drift** — `go.sum` has a hash that doesn't match what `github.com/owaspsamm/core` serves. Fix with `hugo mod tidy` locally and commit the refreshed `go.mod` / `go.sum`.

Fallback if we can't get Netlify to build: run `hugo mod vendor` locally, commit the resulting `_vendor/` directory, and Netlify no longer needs Go at all. Tradeoff is the vendored tree has to be refreshed on every `core` update.

## What's in scope for "staging"

- Automatic deploy previews per PR (Netlify provides this).
- Persistent staging URL reflecting `main` (Netlify provides this at `<site>.netlify.app`).
- Reviewers can click a link and see the rendered site before merging.

## Out of scope

- Password-protecting the staging URL. Netlify supports this on paid plans; for now, the URL is public but not discoverable.
- Branch-level staging environments beyond `main` and per-PR. Per-PR covers the need.
- Moving off Netlify. Cloudflare Pages was the leading alternative if we ever need to; notes preserved in earlier drafts of this page if that conversation comes back.
