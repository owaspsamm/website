---
title: "Stream Guidance — 2026 Core Team Summit"
description: "Consolidated notes and action items from the Stream Guidance session at the 2026 SAMM core team summit (Barcelona). Non-discoverable — internal use."
layout: "single"
type: "page"
sitemap:
  disable: true
robots: "noindex, nofollow"
---

**Barcelona · April 2026**
*Consolidated from the session's Notion AI summary, the recorded transcript, and the in-room scratch notes.*

## TL;DR

Current stream guidance is inconsistent and often unhelpful — good enough to frustrate trainers, not good enough to trust. The session debated whether to invest in authoritative SAMM guidance at all, given that practitioners will increasingly ask AI directly.

**Agreed direction:**

1. **Keep guidance, but restructure it.** Merge *community guidance* and *supporting guidance* into one unified structure.
2. **Migrate off Google Docs.** Guidance lives in the repo as Markdown, rendered to HTML in the website's Docs section, with cross-links from streams/activities.
3. **Two owners.** A **technical owner** drives the Google Docs → MD/HTML migration; a **content owner** facilitates and oversees that guidance is written and kept fresh. *Pat — technical. Aram — content.*
4. **Be smart, not exhaustive.** Don't force ourselves to write 20 pages per stream. Favour useful snippets, links, mappings, and **case studies** over long-form prose.
5. **Co-create with AI, then curate.** AI drafts, humans review. Persist prompts and skills so we can rerun them as the model evolves. Our differentiator is the human-in-the-loop, not the word count.
6. **Assessment guidance with personas.** On each activity, surface "how you assess this as a *producer / consumer / operator*" — pairs with the morning's decision to make activity narratives more generic.

Guiding quote from the room: *"The maturity model is the north star. Guidance is how to use it."*

## The core debate: authority vs. efficiency

Bart opened a devil's-advocate line: given that users will go to AI regardless, how much better will hand-crafted SAMM guidance realistically be — and is producing it the best use of the team's scarce cycles? Translations were raised as the precedent: we used to hand-curate them, now we rely on a "translate" button and it is good enough.

The counter-position (Maxime, John, others) held that SAMM's role is to be the **authoritative, human-reviewed source**. End users can't tell whether AI output is correct; a curated SAMM page gives them a trustable starting point, and — crucially — becomes the source that LLMs themselves crawl and cite. SEO/GEO follow from authority.

Resolution: we keep guidance, but we are clear-eyed that **maintenance will be a real cost** and that any guidance produced now may need to be redone in 3–12 months as AI capabilities shift. The answer is to build a **system** for producing and refreshing guidance (reusable prompts, skills, spreadsheet-driven generation), not to grind out static pages.

## What "guidance" actually means

Daniel flagged a recurring source of confusion: we use "guidance" for several different things. The session landed on the following distinctions:

- **Stream guidance** — the per-stream supporting text currently living in Google Docs. Generic, links-and-pointers, mappings.
- **Activity assessment guidance** — per-activity, persona-aware: "how do I answer this if I'm a *producer / consumer / operator*?" Sits on the activity page.
- **Playbooks** — use-case-driven walkthroughs (e.g. *product security*, *CRA compliance*). "How do I apply SAMM to solve *this* problem?"
- **Mappings** — cross-references to ASVS, MASVS, AI controls, Open CRE, etc. Encourages ecosystem integration.
- **Case studies** — fixed-in-time worked examples of a specific org/tech stack with scoring and a roadmap. Low maintenance because explicitly version-dated.

## Where it lives on the website

- Stream guidance and playbooks live in the **Docs** section of the website (the one Maxime argued for in an earlier session).
- Activity assessment guidance lives **on the activity page**, as a structured block that can carry multiple persona perspectives.
- Case studies cross-link into activities so a reader can traverse the model through the lens of a specific case.
- Format: **Markdown in the repo → rendered as HTML**. PDF/other outputs are an open question — tolerable to derive them from MD if needed, but not a blocker.

## Assessment guidance and personas

A substantial thread, carried over from the morning's CRA/formalization discussion: activity text should become more **generic / voice-neutral**, with the role-specific detail moving into an **assessment guidance block on the activity page**. The block should accommodate multiple perspectives (e.g. *producer of software*, *consumer of software*, *operator*) so a single activity can be scored coherently across a portfolio where one org plays different roles for different apps.

This is the same problem surfaced in the CRA discussion: SAMM's implicit persona is "team that builds and operates its own SaaS," and that doesn't hold for manufacturer/consumer/vendor supply chains.

## Case studies

Strong support. The proposal: pick a fictional-but-realistic org (tech stack, size, vertical), score it across the model, show *what good looks like* for that context, and sketch a roadmap to a higher maturity. Anchor them in the training material Aram already has.

Benefits:
- **Fixed in time** — no maintenance treadmill; each case study is explicitly a snapshot of SAMM vX.
- **Teachability** — most practitioners Aram/Brian train never read the model itself; they read the questions + QC, and learn by example.
- **Cross-links into activities** — traversing the model in the context of a case study shows how each activity scores and why.

## Maintainability and the "system to create guidance"

Raised most strongly by Maxim and Daniel: whatever we write, we must also design **how it gets rewritten**. Concretely:

- Keep the **spreadsheet** as the authoritative source for stream guidance content; the website rendering is generated from it.
- Persist the **prompts and skills** used to draft guidance so they can be rerun against future model versions.
- Don't treat guidance creation as one-shot prose; treat it as a small pipeline.

## Scope discipline

Two explicit guardrails the room agreed on:

- **We will not write guidance for the sake of filling pages.** If a stream has nothing useful to add beyond a couple of links and a mapping, that is the guidance.
- **We will not put a live agent on the website.** Users can (and will) ask AI on their own; SAMM's job is to be the authoritative source AI draws from, not to host an agent whose outputs we cannot control.

## Action items

{{% note %}}
**Operating principle:** focus on a **system** to produce and refresh guidance, not a backlog of static pages. Start from the spreadsheet, render through MD → HTML, review with humans.
{{% /note %}}

| # | Category | Action | Owner(s) | Notes |
|---|---|---|---|---|
| 1 | Ownership | **Technical owner** for the Google Docs → Markdown → HTML migration and website rendering pipeline. | Pat | Also owns the "where does this live on the site / in the repo" question, incl. optional PDF output. |
| 2 | Ownership | **Content owner** to facilitate and oversee that guidance is written, reviewed, and refreshed. | Aram | Not the sole writer — dispatches work across the team and external experts. |
| 3 | Content | Update the authoritative **spreadsheet** with valid, current content for existing stream guidance. | Aram | The spreadsheet becomes the source of truth; website content is generated from it. |
| 4 | Content | Review the existing **Google Doc** guidance; decide what to retain, migrate, rewrite, or drop. | Content owner + stream leads | Expect a lot of "drop." Don't migrate "half-baked" content for the sake of it. |
| 5 | Structure | **Merge** community guidance and supporting/core-team guidance into a single unified structure. | Content owner | Community submissions are ~all spam today; no real loss. |
| 6 | Structure | Migrate guidance off Google Docs into **MD files in the repo**, rendered as HTML in the website's **Docs** section, with cross-links from streams and activities. | Technical owner | Branch the repo; mirror any existing YAML/spreadsheet structure. |
| 7 | Structure | Add an **assessment guidance** block to the activity page template, capable of carrying multiple persona perspectives (producer / consumer / operator / …). | — | Pairs with the morning's decision to generify activity narratives. |
| 8 | Content | Define and publish a short "**what guidance is**" page distinguishing stream guidance, activity assessment guidance, playbooks, mappings, and case studies. | Content owner | Otherwise we will keep talking past each other. |
| 9 | Content | Produce the first **case study** end-to-end (org profile, scoring across the model, roadmap), wired so readers can traverse the model in its context. | Aram (draft from training material) | Fixed-in-time; no ongoing maintenance expected. |
| 10 | Content | Produce the **product-security playbook** (and, follow-on, the CRA playbook from the other session). | Maxim (lead, from CRA session) | Links to the CRA work from the other session. |
| 11 | Tooling | Persist **reusable prompts and skills** used to draft/refresh guidance, so they can be rerun against future SAMM versions. | Technical owner | This is the "system to create guidance" the room asked for. Avoid one-shot AI drafting. |
| 12 | Content | Add **mappings** (ASVS, MASVS, AI controls, Open CRE, …) as first-class elements of each stream's guidance, not buried in prose. | Content owner | Ecosystem integration + low-maintenance value. |
| 13 | Policy | **No live agent on the website.** Document this as an explicit non-goal. | — | Users can use their own AI; we won't host one we can't control. |
| 14 | Scope | When a stream has little to add, publish a short page (links + mappings + a paragraph) rather than padding it. | Content owner | Snippets-not-chapters as default posture. |

## Sources

- Notion session summary (AI-generated, from the recorded session).
- Full session transcript (recorded).
- In-room scratch notes (bullets captured live).
- Prior decisions from the morning sessions on CRA and formalization — see [the summit index](./) for cross-references.
