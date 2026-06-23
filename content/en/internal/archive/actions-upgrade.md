---
title: "Workflow actions upgrade plan"
description: "Node-24 readiness and reliability bumps for the deploy pipeline."
layout: "single"
type: "internal"
sitemap:
  disable: true
robots: "noindex, nofollow"
---

Targets the deploy workflow at `.github/workflows/gh-pages.yaml` (currently lives in the v1 repo — will be inherited by v2 at migration time, so doing this upgrade now means v2 launches on a clean pipeline).

## Context for execution

Everything a fresh session needs to start executing this plan without questions.

- **Plan status**: draft as of 2026-04-15. Check against the actual workflow file and action release dates before assuming these versions are still the right targets.
- **Repo to edit**: `github.com/owaspsamm/website` (v1). Local path: `c:/Users/Pat/Documents/work/OWASPSAMM/website`.
- **File to edit**: [`.github/workflows/gh-pages.yaml`](https://github.com/owaspsamm/website/blob/main/.github/workflows/gh-pages.yaml) in the v1 repo.
- **Current Hugo pin**: `0.157.0` (do not change as part of this upgrade — Hugo bump is a separate plan).
- **Production deploy target**: `gh-pages` branch of `owaspsamm/website`. **Do not deploy to this branch during testing** — see test strategy.
- **Deadline**: before **2026-06-02** (Node 24 forced at runtime). Hard deadline **2026-09-16** (Node 20 removed).

## Invocation

When ready to execute: open this page, point me at it, and say "run the actions upgrade plan". I'll create the feature branch, edit the workflow, walk you through the test run on `gh-pages-test`, and stop for confirmation before we merge to `main`.

## Why this is needed

The workflow uses five third-party actions still running on Node.js 20. GitHub has announced:

- **2026-06-02** — runners default to Node.js 24; Node 20 actions are forced to Node 24 at runtime (may break).
- **2026-09-16** — Node.js 20 removed from runners entirely.

Without action, the deploy pipeline will start producing runtime errors in June and will be hard-broken in September.

Secondary motivator: `peaceiris/actions-gh-pages@v3` is the action that hung for 6 hours during the Vienna deploy on 2026-04-14. `@v4` is the recommended upgrade path and is reported to be more reliable with the Pages deployment polling step.

## Scope

Update `.github/workflows/gh-pages.yaml` with the following action versions:

| Action                         | Current | Target  | Risk   |
| ------------------------------ | ------- | ------- | ------ |
| `actions/checkout`             | v3      | v4      | low    |
| `actions/cache`                | v3      | v4      | low    |
| `peaceiris/actions-hugo`       | v2      | v3      | medium |
| `peaceiris/actions-gh-pages`   | v3      | v4      | medium |
| `EndBug/add-and-commit`        | v9      | v10     | medium |

Targets are one major above current to minimise risk. Latest-latest (checkout v6, cache v5) is fine too, but the above covers the Node 24 requirement without over-reaching.

## Why not just bump to "latest"

The three medium-risk actions have breaking changes across major versions — input names, default behaviours, or token handling have shifted. Bumping one major per action and verifying is safer than jumping several.

## Test strategy

Do not test on `main`. Use a feature branch with a throwaway publish target.

1. Create branch `upgrade/actions-node24`.
2. In the workflow on that branch only, change `peaceiris/actions-gh-pages` `publish_branch: gh-pages` → `publish_branch: gh-pages-test`.
3. Trigger via **Actions → github pages → Run workflow** against the branch (uses `workflow_dispatch`).
4. Confirm the run reaches `deploy` job success.
5. Inspect `gh-pages-test` branch contents — should mirror a normal build (`public/` tree).
6. Revert `publish_branch` back to `gh-pages` in the branch.
7. Open PR, merge, confirm the next production deploy is green.
8. Delete `gh-pages-test` branch afterwards.

If step 4 fails, we know which action broke and can roll that one back individually while keeping the safe ones.

## Migration decision point

When v2 migration happens, we can either copy the upgraded peaceiris-based workflow as-is, or replace it with GitHub's first-party Pages actions (`actions/configure-pages` + `actions/upload-pages-artifact` + `actions/deploy-pages`). The first-party option is less code, officially maintained, and avoids the peaceiris polling issue entirely. Either way, doing this upgrade first gives us a working baseline.

## Out of scope (follow-up)

- Bumping Hugo beyond 0.157.0 (currently 0.160.1 is upstream latest). Keep as a separate PR — Hugo minor upgrades have historically required template fixes (see v1 commit `ae4f205`).
- Adopting branch protection on `main` to require passing CI before merge. Worth a separate conversation after the 2026-04-14 incident where a cancelled workflow's commit later deployed on a teammate's unrelated fix.

## Open questions (resolve before execution)

- **Are the target action versions still current and stable?** The version table reflects what was latest on 2026-04-15. Before executing, re-run the version check — some actions may have released new majors since.
- **Do we have permission to create branches and trigger `workflow_dispatch` on the v1 repo?** Assume yes (this is the standard contributor flow), but worth confirming if admin controls have tightened.
- **Is there anyone currently iterating on the v1 workflow?** If yes, coordinate so we don't collide.

## Done checklist

- [ ] `upgrade/actions-node24` branch created
- [ ] Workflow edited with the five action bumps
- [ ] `publish_branch` temporarily set to `gh-pages-test`
- [ ] `workflow_dispatch` run completed with green deploy job
- [ ] `gh-pages-test` inspected — looks correct
- [ ] `publish_branch` reverted to `gh-pages`
- [ ] PR opened, reviewed, merged
- [ ] First post-merge production run green
- [ ] `gh-pages-test` branch deleted
