---
title: "Website updates process"
description: "How to make changes to owaspsamm.org — local setup, branch model, and PR workflow."
layout: "single"
type: "internal"
sitemap:
  disable: true
robots: "noindex, nofollow"
---

How changes to owaspsamm.org are made, from local setup to going live.

---

## Branches

| Branch | Purpose | Deploys to |
|--------|---------|------------|
| `main` | Production | `owaspsamm.org` via GitHub Pages |
| `staging` | Integration / QA preview | `owaspsamm.netlify.app` via Netlify |
| Feature branches | Work in progress | not deployed |

---

## Local setup

Requires Hugo extended 0.157.0 and Go (version in `go.mod`).

```bash
git clone https://github.com/owaspsamm/website
cd website
git checkout staging
hugo server
```

---

## Contribution workflow

1. Create a feature branch from `main`:
   ```bash
   git checkout main && git pull
   git checkout -b feature/my-change
   ```
2. Make changes and preview locally with `hugo server`.
3. Open a Pull Request targeting `main`.
4. Opening the PR (or pushing new commits to it) automatically rebuilds staging to include your changes. A **staging / integration** status check on the PR confirms it merged cleanly. Review at **https://owaspsamm.netlify.app/** — updates within ~2 minutes.
5. A team member (not the author) reviews on staging and merges the PR to `main`.
6. `main` deploys to `owaspsamm.org` automatically. Staging rebuilds from the new `main` plus any other open PRs.

The `staging` branch is managed exclusively by automation. Do not push to it directly.

---

## Hotfixes

For urgent fixes that cannot wait: push directly to `main` (requires bypass permissions). Staging will not reflect the fix until the next PR event. Use sparingly.

---

## Staging environment

- GitHub Actions builds Hugo on every push to `staging` and deploys the output to the `gh-pages-staging` branch.
- Netlify serves `gh-pages-staging` directly — there is no Netlify build step.
- The Netlify site is under the **info@owaspsamm.org** account.
- If the staging URL stops updating, check the **Actions tab** on `owaspsamm/website` — the workflow must have run and passed on the last push to `staging`.
