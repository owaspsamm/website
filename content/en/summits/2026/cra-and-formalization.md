---
title: "CRA & Formalization — 2026 Core Team Summit"
description: "Consolidated notes and action items from the CRA & Formalization session at the 2026 SAMM core team summit (Barcelona). Non-discoverable — internal use."
layout: "single"
type: "page"
sitemap:
  disable: true
robots: "noindex, nofollow"
---

**Barcelona · April 2026**
*Consolidated from the session's Notion summary and the CRA & Formalization scratch notes.*

## TL;DR

Two linked discussions surfaced the same underlying issue: SAMM's language and implicit persona ("a team that builds *and* operates its own SaaS") are too narrow for product-security use cases driven by the Cyber Resilience Act (CRA) and for the realities of manufacturer/consumer/vendor supply chains.

**Agreed direction (pragmatic, guidance-first):**

1. Ship **CRA-specific guidance** first — use it to surface where the base model creaks.
2. In parallel, **clean up model language** (remove deployment-type assumptions, replace "application" with "software" where appropriate, flag the rest).
3. Formalize a **glossary** and an **explicit shared-responsibility / persona layer**, most likely in the Quick Start guide rather than in the core model.
4. Keep **evidence/artifact prescriptions in guidance**, not in the model. The model says *what*; guidance says *what good looks like for this context*.

Guiding quote from the room: *"The maturity model is the north star. Guidance is how to use it."*

## CRA discussion

### The gap

- SAMM, as written, assumes the assessed org builds *and* runs the software. CRA forces us to also reason about **enabling the customer** (secure defaults, config guidance, logs, SIEM integration, patch distribution, documentation, support period, EoL).
- Coverage analysis vs CRA surfaced weak/missing areas: customer communication, support lifecycle, end-of-life, vulnerability notification/reporting, technical/user/product documentation.
- Operations business function is the worst offender — activities like incident detection, hardening, and patching are written from the operator's perspective, not the manufacturer's.
- Practitioners currently do "mental gymnastics" to map SAMM activities onto CRA obligations.

### Key tensions

- **Application vs product security.** SAMM was never *only* app-sec, but the wording betrays an implicit persona. The word "application" appears ~63 times in the model.
- **Who's the doer?** The model doesn't explicitly separate manufacturer / consumer / vendor / managed-service-provider. Responsibility depends on the shared-responsibility model of each system; one org can play several roles across its portfolio.
- **Model vs guidance.** Rewrite the base model to be voice-neutral, and push scenarios/personas/evidence into guidance — rather than bloating the model with every variant.
- **Benchmark impact.** Higher maturity levels are already interpretation-heavy; adding personas complicates scoring. SAMM benchmark is approximate by design (consistent with BSIMM), but guidance needs to explain how to document role-specific justifications.

### Strategy agreed

- Guidance-first, model-changes-later. Write CRA guidance, *then* contrast with the model and identify what must change in v3+.
- Frame the guidance as "product security, anchored in CRA" — immediately useful to teams facing CRA deadlines, but reusable beyond CRA.
- Tooling: mirror the YAML file structure, branch the repo, extend. Target a consumable artifact (e.g. Excel-generated assessment) so CRA users don't need deep SAMM fluency.

### Concepts to carry forward

- "Software you build vs software you consume vs a combination."
- "Security-driven compliance vs compliance-driven security."
- "The map is not the territory."
- QC items may need a tag or associated persona/scenario.

## Formalization discussion

### Scope statement

- SAMM should **not** tell people how to pass a specific audit; we can't be accountable for audit outcomes. What belongs in SAMM is *what to do*; what belongs in guidance is *what evidence looks "good"* in a given context (CRA, NIS2, ISO 27001, …).
- Formalization naturally increases with maturity (higher levels → more systematic processes → more durable artifacts), but the specific artifacts required are context-dependent.

### Software vs application (working definitions to formalize)

- **Software** — umbrella term: any code-based system the org builds or maintains (libraries, services, APIs, embedded firmware, backend components, IaC, end-user products).
- **Application** — a subset of software: deployable, user- or system-facing units delivering cohesive functionality (web/mobile apps, SaaS platforms, independently-deployed microservices).
- Practical framing: **software = scope boundary; applications = assessment unit.**
- Rule of thumb: "Make it software security, not application security." Replace deployment-type language (SaaS / on-prem / implied) with neutral vocabulary.

### Terms needing glossary entries

product security · software · application · component · system · manufacturer · vendor · consumer · customer · provider · shared-responsibility model.

Consider capitalizing defined terms, as other standards do.

### Where the responsibility/persona layer lives

Consensus: not in the core model's activity text, but surfaced explicitly in the Quick Start guide and tagged on QC items where relevant.

## Action items

{{% note %}}
**Operating principle:** write the guidance **first**, then contrast against the base model to pinpoint inconsistencies before proposing model changes.
{{% /note %}}

| # | Category | Action | Owner(s) | Notes |
|---|---|---|---|---|
| 1 | Guidance | **CRA-specific guidance** — start CRA-specific, then broaden toward generic product security once lessons land. | Maxim (lead), John E. | Mirror the YAML format / branch the repo / extend. Target an Excel-generated assessment deliverable. |
| 2 | Guidance | **"What product security means for SAMM"** positioning doc. | Maxim to seed | Follow-up to the CRA guidance. |
| 3 | Guidance | Add a **shared-responsibility model** section to the Quick Start guide. | — | Currently missing from the model. |
| 4 | Model clean-up | Audit the ~63 occurrences of **"application"** — broaden to "software" where appropriate, flag where not. | Core team review pass | v3 candidate — don't ship until guidance surfaces the pain. |
| 5 | Model clean-up | Remove deployment-type assumptions (SaaS / on-prem / implied) from activity text; push scenarios into guidance. | — | v3 candidate. |
| 6 | Model clean-up | Walk QC items and decide which need a persona/scenario tag. | — | v3 candidate. |
| 7 | Model clean-up | Assess benchmark impact of persona-aware scoring. | — | v3 candidate. |
| 8 | Definitions | Agree core definitions: **product · software · application**, plus the supply-chain persona set (manufacturer, vendor, consumer, managed service provider). | — | Feeds 1–7. |
| 9 | Definitions | Create a glossary / terms-of-reference section; consider capitalization convention for defined terms. | — | |
| 10 | CRA coverage | Customer communication, support period, end-of-life. | — | Fold into CRA guidance; flag for model review. |
| 11 | CRA coverage | Vulnerability handling → CRA notification/reporting. | — | Fold into CRA guidance; flag for model review. |
| 12 | CRA coverage | Documentation types (technical / user / product). | Flagged by Lara | Fold into CRA guidance. |
| 13 | CRA coverage | Rewrite Operations BF activities from a *manufacturer-enabling-the-customer* angle. | — | Incident detection → "does the product produce relevant logs / integrate with SIEM?"; patching → distribution mechanisms; hardening → secure-by-default + config guidance. |
| 14 | CRA coverage | "Getting started on your maturity path" doc. | Raised by John D. | |

## Sources

- Notion session summary (AI-generated, from the recorded session).
- CRA 2026 scratch notes (raw).
- Formalization scratch notes (raw — includes reference text on software vs application).
- Prior year's CRA discussion doc (2025) and the formalization working doc — both linked from the CRA scratch notes.
