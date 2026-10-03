---
title: "User Day how-to"
description: "Step-by-step for standing up a new SAMM User Day (SUD) agenda and archiving it afterward."
layout: "single"
type: "internal"
sitemap:
  disable: true
robots: "noindex, nofollow"
---

How to build the agenda for a new SAMM User Day (SUD), and what changes once the event is over. Written from the San Francisco 2026 build-out; check it against the current codebase before trusting the details.

---

## How it fits together

Two independent pieces, linked only by filename convention (no explicit cross-reference field):

- **`data/sud<slug>/*.yaml`** - one file per agenda row (talk, round table, break, welcome, dinner). Feeds the agenda listing via the `user-day-agenda` shortcode.
- **`content/en/user-day/<slug>/*.md`** - one page per talk with a confirmed speaker/abstract. Optional - a yaml row with no matching page just shows as plain text in the agenda list.

Always use the generic shortcode:

```
{{< user-day-agenda data="sud<slug>" mode="archive" >}}
```

Don't create a bespoke per-event shortcode (there's a legacy one-off for Vienna, `user_day_agenda_2026_vienna.html` - it's unmigrated debt, not a pattern to copy).

### `mode="archive"` vs `mode="live"`

- **`archive`** (used by every event page today, including while the event is still upcoming): never renders `.time`, hides `type: "Break"` rows, hides any row with `archive: false`. This is why you don't need to assign times for a tentative agenda - just omit `time` entirely.
- **`live`**: renders `.time` and shows breaks, ignores the `archive` flag. Defined and styled but not currently used anywhere - switch to it only if a fully timed, presentation-style schedule view is wanted later.

---

## Building a new tentative agenda

1. **Pick a consistent slug** for both folders, e.g. `2026sf`. (Past events were inconsistent - `data/sud2024sanfran/` vs `content/en/user-day/2024sf/` - don't repeat that.)

2. **Create `data/sud<slug>/`** with one numbered YAML file per row (`01_welcome.yaml`, `02_<talk-slug>.yaml`, …). The number is cosmetic - actual order comes from `weight:` inside the file, so keep them in sync.

3. **Fill each YAML:**
   ```yaml
   weight: 2
   name: "Talk title"
   type: "Presentation"   # or "Round table" / "Break" / "" for filler rows
   presenter: "Speaker Name"
   url: "talk-slug"        # bare slug, no year prefix - omit if no page yet
   archive: false           # only to hide filler rows (Welcome/Wrap-up/Dinner) from the listing
   ```
   Leave `time` out until a real schedule exists - `mode="archive"` never reads it (precedent: `data/sud2021a/*.yaml` omits it everywhere).

4. **Create talk pages** at `content/en/user-day/<slug>/<talk-slug>.md` for confirmed talks, using the `archetypes/user-day.md` schema:
   ```yaml
   type: user-day
   title: User day
   name: "Talk title"       # must match the yaml `name`
   speaker: "Speaker Name"
   image: "/img/people/Firstname_Lastname.webp"   # optional - falls back to a placeholder
   affiliation: ""
   role: ""
   abstract: |

   bio: |
   ```
   For repeat speakers, reuse their existing photo under `static/img/people/` rather than re-uploading - check past years' pages for the exact filename already in use.

5. **Create `content/en/user-day/<slug>/_index.md`** with an `### Agenda` section calling the shortcode from step above.

6. **Embed the agenda on the top-level page too** - `content/en/user-day/_index.md` - with an `### Agenda` section calling the same shortcode, but pass `base="<slug>"` this time: `{{< user-day-agenda data="sud<slug>" mode="archive" base="<slug>" >}}`. The `base` param prefixes each talk link, which is needed because the shortcode builds links relative to wherever it's invoked from, and step 3's `url:` values are bare slugs meant to resolve correctly from `content/en/user-day/<slug>/_index.md` - calling the shortcode from the top-level page instead needs that prefix restored. (This `base` param was added specifically to avoid the old approach of hardcoding prefixed `url:` values just for the top-level embed, the way Vienna's `data/sud2026vienna/*.yaml` still does via its legacy bespoke shortcode - don't copy that pattern; use `base` instead.)

---

## Gotchas

- `url` in the yaml is a **bare slug only**, no year prefix - the generic shortcode builds a relative link off the page it's invoked from, and the `base` param (step 6) handles the one case where that page isn't the event's own. (Opposite of the legacy Vienna shortcode's convention, which hard-codes a `/user-day/<year>/` prefix - don't mix the two up.)
- A row only becomes a link once **both** `url` is set in the yaml **and** a matching content page exists at that exact slug in the same folder.
- `archive: false` must be set explicitly to hide non-talk rows (Welcome/Wrap-up/Dinner) - it's not implied by a missing `url`.
- yaml field is `presenter`; content page frontmatter field is `speaker` - same concept, different key, easy to conflate.
- Speaker images are optional; naming isn't strictly enforced (`ClemensHubner.webp`, `Sunny_Sharma.png` both exist) - just keep it under `static/img/people/`.

---

## After the event: archiving

Once the event has happened (see commit `86b16356`, "Resolves #409", and the SF 2026 scaffolding for precedent):

1. Set `archive: true` on every real talk/round-table row in `data/sud<slug>/*.yaml` (filler rows like Welcome/Dinner stay `archive: false`).
2. Add `videoUrl` / `downloadUrl` to rows as recordings/slides become available - shown automatically as icons in archive mode.
3. When the next event becomes "current," remove the outgoing event's `### Agenda` embed (and any other event-specific content) from `content/en/user-day/_index.md`, replacing it with the new event's. If the outgoing event's own page (`content/en/user-day/<slug>/_index.md`) doesn't already carry everything that was only on the top-level page (e.g. a one-off note like a co-located training announcement), move that content there first so nothing is lost - the outgoing event's own page is what the archive list will link to from here on.
4. Add an entry for it to `content/en/user-day/previous-editions/_index.md`'s `editions:` front matter list (title + `url`, newest first) - this page renders a card grid (the `org-card`/`org-grid` pattern, via `layouts/user-day-previous-editions/list.html`), not a markdown bullet list or `{{< buttons >}}` row. Don't edit the page body to add entries; only the front matter list.
