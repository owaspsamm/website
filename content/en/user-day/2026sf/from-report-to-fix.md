---
type: user-day
title: User day
name: "From Report to Fix: Applying SAMM to AI Products"
speaker: Arshi Chadha
role: Senior PSIRT Engineer
abstract: |
  Vulnerability reporting gives organizations another way to discover security problems. This talk addresses a practical challenge: collecting enough information to reproduce a reported problem with an AI feature and check the fix.

  Here, an AI product means an application that uses a language model to work with data or tools. I'll follow a hypothetical report about an assistant exposing a private document. Reproducing the problem means looking beyond the application version to the researcher's request, the documents retrieved, the instructions given to the assistant and its permissions. I'll show how the team collects those details, assigns responsibility and records what was tested before closing the report.

  SAMM v2 includes an incident contact point at maturity level 1 and guidance on researcher reporting, while deliberately leaving implementation details to organizations. I'll build on that guidance with a checklist that pairs each step with evidence an assessor can examine: a report reaching its assigned owner, responses against published timeframes and a record explaining how the report was closed.

  I'll also map these steps to DSOMM's Consolidation and Patch Management. For OWASP AI Maturity Assessment (AIMA), a SAMM-based model for assessing AI practices, I'll discuss the checklist as a possible contribution to an LLM-security extension identified in its roadmap.

  EchoLeak and the Amazon Q Developer extension compromise offer a useful contrast: a server-side fix requiring no customer action, and identifiable affected and fixed extension versions. We'll separate what their public records establish from what a researcher would need to verify a fix.

  Attendees will leave with the checklist, sample evidence and three questions:

  Is there a published contact point for reporting a security issue in this AI product, and does reaching it put the report in front of someone who can triage it?

  Is the expected handling process, including response timeframes, published where a finder would look before deciding whether to report?

  When a fix for this product ships without changing any version a customer can see, what does the organization publish, and how does a finder confirm the issue is closed?

bio: |
  Arshi Chadha is a Senior PSIRT Engineer at a Cloud Security Firm, where she works on vulnerability triage and coordinated disclosure for AI- and LLM-facing products. She co-led the OWASP Top 10 for Large Language Model Applications and wrote the 2026 edition's chapter on vector and embedding weaknesses.

  Her day-to-day sits where a security researcher's report meets a product whose defect is in a model, a system prompt or a tool boundary rather than in a build artifact. That is what this talk draws on: not what AI systems get wrong, but what an assessor can ask an organization about how it responds when someone reports one.

  She presented "After the Jailbreak: A PSIRT Playbook for LLM Applications" at BSides Las Vegas 2026 and is a co-inventor on a US patent. She holds an MS in Information Security from Carnegie Mellon University and was an RSA Conference Security Scholar. She organizes Breaking Models, a Bay Area AI security meetup.
---
