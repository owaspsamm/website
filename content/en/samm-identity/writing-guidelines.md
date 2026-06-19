---
title: "Writing guidelines"
description: "Style and tone rules for all OWASP SAMM website content."
layout: "single"
type: "samm-identity"
weight: 10
sitemap:
  disable: true
robots: "noindex, nofollow"
---

Reference for anyone writing or reviewing website content. Applies to all pages, blog posts, and docs.

## Language

**US English.** Use American spellings throughout.

| Use | Not |
|---|---|
| color | colour |
| organization | organisation |
| behavior | behaviour |
| center | centre |
| recognize | recognise |
| analyze | analyse |
| tokenize | tokenise |

Spell-check tools should be set to `en-US`. Copy from external sources often carries British spellings; fix them on import.

## Tone

**Direct and confident.** State things. Don't qualify them.

- No: "SAMM can help organizations potentially improve their security posture."
- Yes: "SAMM helps organizations improve their security posture."

**No hedging language.** Remove: might, could, perhaps, potentially, in some cases, it is worth noting, it should be mentioned.

**Active voice.** The subject does the thing.

- No: "Security practices are organized into five business functions."
- Yes: "SAMM organizes security practices into five business functions."

**No passive voice** unless the actor is genuinely unknown or irrelevant.

## Punctuation

**No em-dashes in running text.** Em-dashes (`—`) are a crutch. Replace them:

- Use a colon when what follows explains or expands: "SAMM has one goal: measurable improvement."
- Use a comma for a brief aside: "The model, like all OWASP projects, is free to use."
- Use a semicolon to join two related independent clauses: "Maturity levels are cumulative; each level builds on the previous one."
- Rewrite the sentence if none of these work.

Em-dashes are acceptable as empty-cell markers (`—`) in tables. Nowhere else.

**Oxford comma.** Always use it: "Governance, Design, and Implementation."

**No exclamation marks** in body copy. They belong in marketing; this is documentation.

## Headings

**Sentence case**, not title case.

- No: "How To Run A SAMM Assessment"
- Yes: "How to run a SAMM assessment"

No trailing punctuation. No clever wordplay — headings are navigation aids, not headlines.

## Links

Link text must describe the destination. Never use "click here", "read more", or "this page."

- No: "For the assessment guide, click here."
- Yes: "See the [assessment guide](/docs/assessment/guide/)."

External links get `target="_blank" rel="noopener noreferrer"` and the external-link SVG icon — the template handles this automatically for `.external-link` elements.

## Lists

Use parallel structure. All items should be the same grammatical form.

Full-sentence items get a closing period. Fragments do not.

## Terminology

| Use | Not |
|---|---|
| OWASP SAMM | "Owasp SAMM", "OWASP Samm", "the SAMM model" (redundant) |
| business function | "domain", "category", "pillar" |
| security practice | "sub-domain", "area" |
| maturity level | "score", "rating" |
| Level 1, Level 2, Level 3 | "level one", "L1", "tier 1" |
| Governance, Design, Implementation, Verification, Operations | lowercase only when used generically ("a governance practice") |
| practitioner | "partner", "vendor", "service provider" |

## Numbers

Spell out zero through nine. Use numerals for 10 and above, and always for: percentages (5%), version numbers (v2.1), maturity levels (Level 3), measurements.

## What to avoid

- Filler openers: "In today's world...", "In this article we will..."
- Meta-commentary: "As mentioned above...", "It is important to note..."
- Redundant pairs: "each and every", "free of charge", "end result"
- Jargon without definition on first use
