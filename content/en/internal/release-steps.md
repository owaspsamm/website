---
title: "Release steps"
description: "Precise, hands-on instructions for completing the remaining v1→v2 prerequisites and executing cut-over."
layout: "single"
type: "internal"
sitemap:
  disable: true
robots: "noindex, nofollow"
---

Companion to the [migration plan](/internal/migration-plan/). That doc covers strategy, context, and rollback. This page covers what to actually run and click.

**Plan status**: updated 2026-05-12. Prerequisites listed in order of priority.

## 1. Complete the initial push (prerequisite #0)

`git init` is done and all files are staged. Run these commands in `c:/Users/Pat/Documents/work/OWASPSAMM/website-v2`:

```bash
git commit -m "Initial v2 codebase"
git remote add origin https://github.com/owaspsamm/website.git
git push -u origin v2-preview
```

The Actions workflow only fires on `main`, so pushing `v2-preview` is safe — nothing deploys.

## 2. Actions workflow upgrade — deadline 2026-06-02

Full plan at [/internal/actions-upgrade/](/internal/actions-upgrade/). Invocation: open that page and say "run the actions upgrade plan".

Do the upgrade on v1 first, then apply the same five version bumps to `.github/workflows/gh-pages.yaml` in v2. v2's copy is already i18n-FR-free — only the version numbers need changing:

| Action | Current | Target |
|---|---|---|
| `actions/checkout` | v3 | v4 |
| `actions/cache` | v3 | v4 |
| `peaceiris/actions-hugo` | v2 | v3 |
| `peaceiris/actions-gh-pages` | v3 | v4 |
| `EndBug/add-and-commit` | v9 | v10 |

## 3. Branch protection on `owaspsamm/website`

GitHub UI: **Settings → Branches → Add branch protection rule**

- Branch name pattern: `main`
- Enable: **Require status checks to pass before merging**
- Search for and select the `deploy` status check
- Save

## 4. Final v2 build reviewed

Two team members click through end-to-end. Use either:
- `hugo server` locally and share the URL, or
- `hugo --gc --minify --environment production` → drag-and-drop `public/` to Netlify

Smoke-test URLs to cover: `/`, `/model/`, one model stream page (e.g. `/model/governance/strategy-and-metrics/`), `/assessment/`, `/benchmark/`, `/docs/`, `/blog/`, `/user-day/`, `/sponsorship/`, `/contact/`.

Spot-check at least two redirects, e.g.:
- `/faq/` → `/docs/reference/faq/`
- `/resources/pdf/` → `/docs/tools/pdf/`

Also verify on a model page that the language switcher appears and that the Scarf pixel fires (view-source for `scarf.sh`).

## Cut-over

When all four steps above are done, follow the [day-of checklist in the migration plan](/internal/migration-plan/#day-of-checklist).

## Post-launch: multilingual model pages

Not a launch blocker. `owaspsamm/core` already publishes translated content — v1 generated those pages with the language selector hidden. Full work breakdown is in the [backlog](/internal/backlog/#multilingual-model-pages).
