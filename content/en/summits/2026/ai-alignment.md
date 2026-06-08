---
title: "AI Alignment — 2026 Core Team Summit"
description: "Consolidated notes and action items from the AI Alignment session at the 2026 SAMM core team summit (Barcelona). Non-discoverable — internal use."
layout: "single"
type: "page"
sitemap:
  disable: true
robots: "noindex, nofollow"
---

**Barcelona · April 2026**
*Consolidated from the session's Notion AI summary, the in-room scratch notes, and the per-activity worksheet "SAMM for AI generated code".*

## TL;DR

The shift isn't *what* gets built — it's *who* builds it. Code is increasingly written by agents, and standards documents are increasingly read by agents too. SAMM has to be useful in that world, which means two parallel jobs: (a) make SAMM legible and operational for the humans guiding AI-generated code, and (b) make SAMM legible and operational for the AI itself.

**Agreed direction:**

1. **Write guidance for AI-generated code first.** A "How to leverage SAMM when your code is written by AI" piece, before any model surgery. Establish the framing, then let the model follow.
2. **Walk every activity.** For each of the ~90 activities, decide: *more important / same / less relevant* under Gen AI, and *how AI can aid the activity*. The "SAMM for AI generated code" spreadsheet is the working artefact. *Aram has a first pass already.*
3. **Make SAMM consumable by agents.** Tighten the model so objectives are clear and *what* is separated from *how*. Package the model as a skill an agent can load and apply.
4. **Audit human-implicit language.** Many activities assume a human performs them. Decide, per activity, whether to keep the human framing, generalise it, or call out the AI variant explicitly.
5. **Talk to the community.** Demonstrate the new framing on a community call / podcast, and survey practitioners on where AI is already changing how they apply SAMM.

Guiding quote from the room: *"SAMM is about the process. AI is about the product."*

## What's actually changing

Aram framed it bluntly: *what's changing is who's doing it*. The activity catalogue doesn't need to be torn up — defining policies, threat modelling, hardening, incident response are all still the right things to do. What changes is who (or *what*) executes them, who reads the artefacts, and how fast bad practice can compound.

Two concrete consequences came up repeatedly:

- **Standards documents have a new primary reader.** A policy or hardening baseline is no longer a PDF nobody opens; it's *context an agent loads*. The value of writing a clean, machine-consumable policy went up sharply.
- **Architecture decays faster.** AI codes fast and is eager to ship. Without a strong architectural spine and an enforced tech list, "vibe coding" pulls in arbitrary dependencies and erodes design patterns within a sprint, not a year.

## The OWASP AI gap

The room's read on the broader OWASP AI work: it's largely scoped to organisations that *build* LLMs and AI products. That leaves the much larger population — orgs that *use* AI to write their normal applications — without a clear OWASP home. SAMM is well-positioned to fill that gap, because the question for those orgs isn't "how do I secure an LLM," it's "how do I run a secure SDLC when my SDLC has agents in it."

That framing — SAMM as the assurance model for *AI-assisted software development*, not for AI products — is what justifies the work.

## SAMM as a skill an agent can load

A recurring thread, raised most strongly when discussing assessments: rather than treating SAMM as a static document a consultant interprets, package it as a **skill** that an agent can pick up and apply. The use cases sketched in the room:

- **Score from an interview transcript.** Agent reads a recorded assessment interview, contrasts it with the SAMM activities, and proposes a maturity score per activity with citations back to the transcript.
- **Facilitate the interview itself.** Context-aware (on-prem vs. SaaS, regulated vs. not, org size, supply-chain role) so the questions match the situation rather than reading the same script to everyone.
- **Draft the report.** From transcripts + scoring → a first-pass assessment report a human can edit.
- **Suggest a roadmap.** Given current scores and the org's risk appetite, propose the next maturity moves.

The room did not commit to building these — but agreed that for them to work *at all*, the model itself has to be expressed in a way an agent can reason over: clear objectives, *what* not *how*, minimal implicit assumptions about a human performing the work.

## Walking the model: where AI changes the picture

Aram's pre-work spreadsheet ("SAMM for AI generated code") tags each activity with a relevance verdict and a note on how AI can help. Highlights from the first pass:

- **More important under AI:**
    - **Policy & Standards (G-PC-A).** Policies finally have a hungry reader — the agent — and can be injected as context at code-generation time. Test procedures and compliance checks derived from those policies become cheap.
    - **Architecture Design (D-SA-A-1).** AI degrades architecture faster than humans do; a solid set of secure design patterns and reference architectures is *more* load-bearing, not less.
    - **Technology Management (D-SA-B-1).** "Identify tools and technologies" becomes a control: pin the agent to an approved tech list or it will pull in whatever it likes.
- **Same, with caveats:**
    - **Strategy & Metrics (G-SM).** Risk appetite, security strategy, KPIs — AI doesn't change the substance. Possibly assists with metric collection, but the practice itself is unchanged.
    - **Training & Awareness (G-EG-A).** Arguably *more* needed (people are over-delegating to AI), but the activity itself can also be undermined ("why train me, I'll just ask the model"). Net: same, watch carefully.
- **New attack surface inside existing activities:**
    - **Secret Management (I-SD-B-1).** Largely the same activity, but agents with access to secrets multiply the blast radius of a leak. The control hasn't changed; the threat profile has.

Most other activities (risk profiling, threat modelling, requirements, build/deploy, defect tracking, verification, operations) were left at "same" in the first pass, with a separate column for *how* AI can aid them. The next step is a full pass with the broader team rather than a single author.

## Process vs. product

Bart's framing, which the room kept returning to: **"SAMM is about the process. AI is about the product."** That's the load-bearing distinction.

- The *product* changes (more code, generated faster, by agents) — that's not SAMM's lane.
- The *process* of producing the product — requirements, design, build, verification, operations — is exactly SAMM's lane, and that process now contains agents as participants.

So the work isn't "rewrite SAMM for AI." It's: identify where the process changes when an agent joins, and make sure SAMM still gives clear assurance objectives in that setting.

## Scope discipline

Two guardrails the room agreed on, mirroring the stream-guidance session:

- **Guidance first, model surgery second.** Resist the temptation to start renaming activities or restructuring practices. Write the guidance, see what breaks, *then* propose model changes for v3.
- **No agent on the SAMM site.** Same line as the stream-guidance session: SAMM should be the authoritative source agents *consume*, not host an agent itself.

## Action items

{{% note %}}
**Operating principle:** make SAMM useful in a world where agents both *write* the code and *read* the standards. Start from guidance, then a per-activity walk-through, then package the model as something an agent can load.
{{% /note %}}

| # | Category | Action | Owner(s) | Notes |
|---|---|---|---|---|
| 1 | Content | Write a **"Leveraging SAMM for AI-generated code"** guidance piece. Lead with framing (process vs. product, where the SDLC actually changes), not with model edits. | Aram (lead) | This is the first deliverable; everything else lands more cleanly once it exists. Pairs with the stream-guidance Docs section. |
| 2 | Content | **Walk every activity** in the "SAMM for AI generated code" spreadsheet. For each: *more important / same / less relevant* under Gen AI, plus a one-liner on how AI aids it. | Aram (first pass done) + stream leads (review) | Spreadsheet is the working artefact; first-pass column already drafted. Distribute to stream leads for completion. |
| 3 | Model | **Audit human-implicit language** across the activity catalogue. Decide per activity whether to keep, generalise, or split into "human" vs. "AI-assisted" framings. | Stream leads (per stream) | Feeds v3. Don't edit yet — collect findings against the spreadsheet first. |
| 4 | Model | Tighten the model so each activity expresses **what** to achieve, not **how**. Make objectives explicit and assurance-shaped. | Core team (v3 work) | Prerequisite for any agent being able to reason over SAMM. |
| 5 | Tooling | Package SAMM as a **skill** an agent can load (objectives, activities, scoring rubric, persona prompts). | Pat (technical, prototype) | Sketch only at this stage — gated on (3) and (4). Reuse the prompts/skills pipeline from the stream-guidance session. |
| 6 | Tooling | Prototype the **interview → score → report → roadmap** agent flow against a recorded assessment, end-to-end. | Pat + Aram | Prove the skill is usable; output is a worked example, not a product. |
| 7 | Community | Demo the new framing on a **community call / podcast**: walk one activity end-to-end, showing how to apply SAMM with agents in the loop. | Aram | Pick a single high-impact activity (Architecture Design or Policy & Standards is the obvious candidate). |
| 8 | Community | Run a **short survey** to elicit how practitioners are already using AI inside their SAMM-aligned SDLC, and where SAMM is helping or getting in the way. | — | Feeds the per-activity walk in (2) with real data, not just core-team intuition. |
| 9 | Policy | **No live agent on the SAMM site** (mirrors the stream-guidance decision). SAMM is the source agents read, not a hosted agent. | — | Document as an explicit non-goal. |
| 10 | Positioning | Note SAMM's positioning relative to OWASP AI work: SAMM covers **AI-assisted SDLC**, not **AI products**. Surface this in the guidance from (1). | Aram | Avoids overlap/confusion with OWASP AI Exchange and friends. |

## Sources

- Notion session summary (AI-generated, from the recorded session).
- In-room scratch notes (bullets captured live).
- Per-activity worksheet: *SAMM for AI generated code* (Aram, first-pass relevance + AI-aid notes for ~90 activities).
- Aram's intro presentation (referenced in the notes; not reproduced here).
- Cross-references: see [stream guidance](../stream-guidance/) for the parallel decision on prompts/skills as a guidance pipeline.
