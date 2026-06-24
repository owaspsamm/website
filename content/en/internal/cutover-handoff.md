---
title: "Cutover handoff"
description: "Step-by-step instructions for the admin who will set branch protection and execute the v1→v2 branch swap on owaspsamm/website."
layout: "single"
type: "internal"
sitemap:
  disable: true
robots: "noindex, nofollow"
---

This page is for the person with admin access to `github.com/owaspsamm/website`. It covers two things: setting up branch protection (do this now, before cut-over day) and executing the cut-over itself (do this when Pat gives the go-ahead).

The staging site is at **https://owaspsamm.netlify.app/**

---

## Part 1 — Branch protection (do now)

This protects `main` from direct pushes and accidental force-pushes once v2 is live.

1. Go to `github.com/owaspsamm/website` → **Settings → Branches → Add branch protection rule**
2. **Branch name pattern:** `main`
3. Enable the following:
   - ✅ **Require a pull request before merging** — set required approvals to **1**, enable **"Require approval of the most recent reviewable push"** (GitHub prevents self-approval by default — no extra setting needed)
   - ✅ **Require status checks to pass before merging** — search for and add **`deploy`**
   - ✅ **Require branches to be up to date before merging**
   - ✅ **Do not allow force pushes**
   - ✅ **Do not allow deletions**
4. Under **Bypass list**, add the admin role or your account so the branch renames below are not blocked.
5. Save.

---

## Part 2 — Cut-over (when Pat gives the go-ahead)

### What is happening

`owaspsamm/website` currently has two branches:
- `main` — v1, currently live at `owaspsamm.org`
- `v2-preview` — v2, reviewed and ready

The cut-over is two branch renames. No DNS changes. No hosting changes. GitHub Pages keeps serving from the same repo — the content just switches.

### Before you start

Confirm with Pat:
- [ ] The v2 staging site looks correct (served from the `gh-pages-v2` branch via Netlify)
- [ ] The Actions workflow on `v2-preview` is green (all recent runs pass)
- [ ] A 24-hour content freeze on v1 `main` has been announced

### Steps (order matters — do not skip or reorder)

**Step 1 — Tag v1**

Pat runs this locally on her v1 clone to permanently preserve the v1 state:

```bash
git fetch origin
git tag v1-final origin/main
git push origin v1-final
```

Confirm the tag `v1-final` is visible at `github.com/owaspsamm/website/tags` before continuing.

**Step 2 — Rename `main` → `v1-archive`**

GitHub UI: **Settings → Branches** → find `main` → click the rename (pencil) icon → rename to `v1-archive` → confirm.

GitHub will automatically add a redirect so existing links to `main` keep working for a grace period.

**Step 3 — Rename `v2-preview` → `main`**

Same flow: **Settings → Branches** → find `v2-preview` → rename to `main`.

**Step 4 — Set `main` as the default branch**

**Settings → Branches → Default branch** → switch to `main`.

**Step 5 — Watch the deployment**

Go to the **Actions** tab. A new `github pages` workflow run should have started automatically on the new `main`. Wait for it to go green (~1 minute). It will deploy v2 to the `gh-pages` branch, which GitHub Pages serves as `owaspsamm.org`.

**Step 6 — Smoke-test**

Open the following URLs and confirm they load v2 (new design, no errors):

| URL | What to check |
|-----|---------------|
| `owaspsamm.org/` | Homepage loads, SAMM logo, nav present |
| `owaspsamm.org/model/` | Model overview with 5 business functions |
| `owaspsamm.org/model/governance/strategy-and-metrics/` | Stream page loads |
| `owaspsamm.org/assessment/` | Quick start loads |
| `owaspsamm.org/blog/` | Blog list loads |
| `owaspsamm.org/user-day/` | User day page loads |
| `owaspsamm.org/faq/` | Should redirect to `/docs/reference/faq/` |
| `owaspsamm.org/resources/pdf/` | Should redirect to `/docs/tools/pdf/` |

**Step 7 — Notify Pat**

Let Pat know it's live. She will handle the post-launch steps (Search Console, analytics verification, team announcement).

---

## Part 3 — Staging branch setup (right after cut-over)

This sets up a permanent `staging` branch so there is a place to review changes before they go to `main`. The workflow already builds `staging` → `gh-pages-staging` automatically.

**Team member with admin access:**

1. Create the `staging` branch: **Code tab** → branch dropdown → type `staging` → **Create branch: staging from main**. Creating the branch triggers a build automatically — watch the **Actions tab** for the `github pages` workflow to go green. This creates the `gh-pages-staging` branch that Netlify will serve.

2. Restrict pushes to `staging` to automation only: **Settings → Branches → Add branch protection rule** → pattern `staging` → enable **"Restrict who can push to matching branches"** → search for `github-actions` and add **GitHub Actions** → Save. This prevents accidental human pushes; the integration workflow pushes as `github-actions[bot]` and is unaffected.

**Pat:**

3. Netlify dashboard → site → **Site configuration → Build & deploy → Branches and deploy contexts** → change the deploy branch from `gh-pages-v2` to `gh-pages-staging` → Save.
4. Confirm the Netlify URL still loads the site correctly.

---

## Rollback (emergency only)

If something is badly broken within the first 7 days:

1. **Settings → Branches** → rename `main` → `v2-failed`
2. **Settings → Branches** → rename `v1-archive` → `main`
3. **Settings → Branches → Default branch** → set to `main`

GitHub Pages will rebuild from v1 automatically. Takes about a minute. DNS is untouched throughout.

Do not use rollback for minor issues — those are fixed forward with a PR to `main`. Rollback is for genuine breakage that cannot be patched quickly.
