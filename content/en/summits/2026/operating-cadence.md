---
title: "Operating Cadence & Ownership — 2026 Core Team Summit"
description: "Consolidated notes and action items from the 'What needs to be done' session at the 2026 SAMM core team summit (Barcelona). Non-discoverable — internal use."
layout: "single"
type: "page"
sitemap:
  disable: true
robots: "noindex, nofollow"
---

**Barcelona · April 2026**
*Consolidated from the session's Notion AI summary, the recorded transcript, and the "What needs to be done" scratch notes.*

## TL;DR

A lot of the project's recurring work — newsletter, podcast, sponsor engagement, community calls, user-day organisation, training, budgeting — is happening organically, undertracked, and concentrated on Pat. The session's job was to make that work visible, give each activity an owner and a realistic cadence, and be honest about which activities are actually earning the time we put into them.

**Agreed direction:**

1. **List the recurring activities, then assign an owner to each.** If nobody wants to own something, that is the signal that it is not important enough to keep doing.
2. **Owner decides the cadence.** Default to *less frequent than we think*: quarterly before monthly, to avoid setting the team up for failure.
3. **Owners commit for ~one year**, then hand over (or re-up). Not forever.
4. **Be smarter, not busier.** Challenge every recurring activity against the impact it actually produces — stop the ones that aren't earning their cost.
5. **Finalise owners tonight.** Team members pick what they want to own during the day; we close the list at the evening retrospective.
6. **Ship the website**, but not before we have the communication plan (newsletter + LinkedIn + Slack) ready to go with it.

Guiding quote from the room: *"If it's owned by everyone, it's owned by nobody."*

## The underlying problem

Bart opened with a structural complaint: recurring work is happening (Pat doing community-call logistics, Aram running the podcast, Seba posting on LinkedIn) but none of it is in the backlog, none of it has a named owner, and none of it has a committed cadence. The consequence is threefold:

- **No visibility.** Team members can't offer to help because they don't know what needs doing. "The reason I don't do it is because I don't know what needs to be done."
- **No backstop.** When one person is busy, the activity slips; there is no handoff protocol because there was no primary owner to begin with.
- **No honest retrospection.** Without a list, we can't ask the real question — *is this activity worth the time we're putting into it?*

Daniel put the devil's-advocate line bluntly: *"Aren't we doing artificial pressure on ourselves?"* The room agreed the answer is sometimes yes — and the fix is not to grit our teeth and do more, but to **list, own, and challenge.**

## The recurring-activity list

Captured in the scratch notes and confirmed in-session. These are the activities that need a named owner and a committed (even if low) cadence:

- **Newsletter** — currently no regular cadence. Tie to releases: summarise changelog + recent articles after each release. Quarterly to start; monthly is a trap.
- **Podcast** — already running (Aram); formalise ownership and post-event promotion.
- **Sponsor planning & engagement** — identifying, onboarding, and retaining sponsors.
- **Budgeting** — tracking spend, making the case to the OWASP mothership for summit funding.
- **Community call planning** — content, scheduling, post-event engagement (YouTube upload, newsletter entry, LinkedIn/Slack posts).
- **Project manager (?)** — the coordinating-and-chasing role. Currently falls on Pat by default. Open whether this is a distinct role or a responsibility distributed across activity owners.
- **Event organisation** — SAMM User Day (currently annual; Vienna 2026 / San Francisco 2026) and the annual core-team summit.
- **Training** — coordinate submissions to OWASP events (Global AppSec, regional); run independent online classes (schedule, instructors, registrations).

## Community calls — the worked example

The session used community calls as the concrete case because the pattern was so clean:

- **Attendance is collapsing.** Several recent calls had more core-team members than external attendees; one had zero external attendees.
- **Preparation is last-minute.** Topics often confirmed the week of, making advance promotion impossible. Seba's point: "you can only communicate around it if you prepare it up front."
- **The monthly cadence isn't sustainable** at this attendance level.
- **But the output has a second life.** YouTube has 900+ subscribers; the first activity recording has 137 views; recordings are where the value actually compounds.

Direction: **reduce the cadence** (bi-monthly or quarterly), **increase the preparation runway** (confirm topics 2+ weeks out), and **stop measuring success by live attendance alone** — the YouTube back-catalogue is the real asset.

A related thread: the team's **dependency on Meetup** for community-call registration is a risk. We should migrate to first-party mechanisms (website events section + email) where feasible.

## Website release & communication plan

The new website is ready, with material improvements over the current site:

- Centralised **Docs section** (pairs with the stream-guidance session's decision to move guidance off Google Docs into MD/HTML).
- Better information architecture: a model browser with left-side navigation; clearer paths for newcomers.
- **Aliases** for every old URL so existing bookmarks (blog posts, model pages) continue to work.
- Migrated content: everything from the current site carries over.

**Decision:** don't push the button until a short communication package is ready — a newsletter announcing the release *and* summarising summit outcomes, plus LinkedIn and Slack posts. Treat the launch itself as the first newsletter.

**Open follow-on (raised by Adam):** the homepage should carry an **events section / calendar** — community calls, user days, training — rather than a one-off banner pinned to whichever event is closest. Defer the design; don't block launch on it.

**Further out:** the team sketched a lightweight in-browser assessment tool ("answer the model → download CycloneDX") as a future addition. Not in scope for launch.

## Releases and "flagship" status

Maxim flagged that SAMM risks being **demoted from flagship status** by the OWASP project committee because the formal release cadence has lapsed — last formal release was v2.1. The flagship minimum is one release per year.

The room's direction:

- **Redefine what counts as a release.** Guidance updates, significant case studies, and major site/content reworks are releases worth announcing. Make them more granular.
- **Make releases visible.** Tie them to newsletters and communication so the committee, sponsors, and community can see the cadence.
- **Don't invent release theatre.** Redefining a release is legitimate; inventing ceremonies just to hit the minimum is not.

## Scope discipline — "be smarter"

Bart kept pulling the room back to the same point: *we should be smarter in what we're doing.* Specific commitments the room agreed on:

- **Lower the bar before raising the cadence.** Quarterly newsletter that actually ships beats a monthly newsletter that doesn't.
- **Stop activities that aren't earning their cost.** Explicit examples cited: the year-long experiment running **double community calls** (twice the time, no commensurate uplift); the current **translations** approach (a lot of effort, unclear return).
- **Favour the few high-impact channels.** The website with the online model is used by *hundreds of thousands* of people yearly. That is where time spent compounds — more than it does on most other activities we currently run.
- **"Don't boil the ocean."** Start with the shortest viable list, then grow.

## Action items

{{% note %}}
**Operating principle:** make the recurring work visible, give every item an owner, and default to lower cadences until the activity earns a higher one. Stop the activities that nobody wants to own.
{{% /note %}}

| # | Category | Action | Owner(s) | Notes |
|---|---|---|---|---|
| 1 | Ownership | Team members review the recurring-activity list during the day and decide which they want to own. | All | By the evening retrospective. If no one owns it, drop it. |
| 2 | Ownership | Finalise owners and cadences at the **evening retrospective**. | Pat (facilitate) | Owners commit ~1 year, then hand over or re-up. |
| 3 | Process | Get the recurring activities **into the GitHub project** as tracked parent issues with an owner and a cadence field. | Pat | Fixes the "no visibility → nobody can help" failure mode. |
| 4 | Newsletter | Define the newsletter format, owner, and cadence. **Quarterly** to start. Tie to releases and summit outcomes. | TBD (picked tonight) | First issue: website launch + 2026 summit summary. |
| 5 | Community calls | Reduce cadence to **bi-monthly or quarterly**; confirm topics ≥2 weeks in advance; keep promoting the YouTube back-catalogue as the durable output. | TBD (picked tonight) | Content owner may rotate per call. |
| 6 | Community calls | **Reduce Meetup dependency.** Migrate registration to first-party (website events + email) where feasible. | — | External-dependency reduction more generally. |
| 7 | Website | **Prepare the launch communication package** (newsletter + LinkedIn + Slack posts) before pushing the button. | Seba + Pat | Launch is the first newsletter. |
| 8 | Website | Ship the new site. | Pat | Gated on (7). |
| 9 | Website | Add an **events section / calendar** to the homepage (community calls, user days, training). | Adam (design), Pat (impl.) | Deferred until post-launch; not a blocker. |
| 10 | Website | Explore the **lightweight in-browser assessment** (answer the model → CycloneDX download) as a future feature. | — | Parking-lot; not scoped for launch. |
| 11 | Releases | Propose a **redefinition of "release"** (guidance drops, case studies, significant site updates all count) and publish a 2026 release calendar. | Maxim | Protects flagship status; makes cadence visible. |
| 12 | Sponsors | Define the **sponsor engagement** activity: pipeline, cadence of outreach, onboarding. | TBD (picked tonight) | |
| 13 | Budgeting | Define the **budgeting** activity: tracking, forecasting, summit-funding asks to OWASP. | TBD (picked tonight) | |
| 14 | Training | Define the **training** activity: OWASP event submissions + independent online classes (schedule, instructors, registrations). | TBD (picked tonight) | Pairs with Aram's existing material. |
| 15 | User day / summit | Define owners for **SAMM User Day** and the annual **core-team summit**. | TBD (picked tonight) | Currently de facto Pat + Aram. |
| 16 | Project management | Decide whether a dedicated **project-manager / coordinator** role exists, or whether the responsibility distributes across activity owners. | — | Reference: ISO working group has a dedicated PM; SAMM currently doesn't. |
| 17 | Discipline | Retire or restructure activities that are not earning their cost. Explicitly named: **double community calls**, current **translations** approach. | Activity owners | Review at the next retrospective. |

## Sources

- Notion session summary (AI-generated, from the recorded session): *What needs to be done — Notion*.
- Full session transcript (recorded).
- In-room scratch notes: *What needs to be done.docx* — high-level activity list (newsletter, podcast, sponsors, budgeting, community call planning, project manager, event organisation, training).
- Cross-references: [stream guidance](../stream-guidance/) (Docs section, prompts/skills pipeline, no live agent on the site) and the [summit index](../) for the other sessions feeding the evening retrospective.
