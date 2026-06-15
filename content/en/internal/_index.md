---
title: "Internal"
description: "Index of internal, non-discoverable pages on the SAMM site."
layout: "single"
type: "page"
sitemap:
  disable: true
robots: "noindex, nofollow"
---

Internal reference pages. These are not linked from navigation, excluded from the sitemap, and set to `noindex, nofollow`. Reachable only by direct URL.

## How to use these with Claude

Each plan page has a **Context for execution** section at the top (local paths, accounts, deadlines) and an **Invocation** line — a short phrase to paste back into a new Claude session to resume that plan. Pages also list **Open questions** that will need answers before execution so Claude doesn't stall mid-run.

Plans carry a date stamp; check it against the current codebase before trusting the details.

## Plans and roadmaps

- [Roadmap](/roadmap/) — pending items and feature flags.
- [Information architecture](/internal/ia/) — site-wide IA: nav structure and Docs IA.
- [Docs section implementation plan](/internal/docs-plan/) — phased plan for the docs section: shell, content migration, stream import, search, model integration.
- [Migration plan (v1 → v2)](/internal/migration-plan/) — how we replace the current production site with this v2 codebase.
- [Release steps](/internal/release-steps/) — precise, hands-on instructions for the remaining prerequisites and cut-over.
- [Workflow actions upgrade plan](/internal/actions-upgrade/) — Node-24 readiness and reliability bumps for the deploy pipeline.
- [Performance check plan](/internal/performance-plan/) — baseline + audit + fixes; includes a mobile visualization pass.
- [Staging site & PR previews](/internal/staging-previews/) — giving reviewers a clickable preview of every PR without running Hugo locally.
- [Time log](/internal/time-log/) — ongoing time tracking for the v2 project.
- [Backlog](/internal/backlog/) — post-launch optimizations and improvements.

## Design and identity

- [SAMM identity & voice](/samm-identity/) — brand voice, content standards, writing guidelines, and design system. Shareable with contributors and designers.
