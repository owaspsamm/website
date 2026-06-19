---
title: "Design System"
description: "Internal reference for the OWASP SAMM website design system: tokens, components, patterns, and conventions."
layout: "single"
type: "internal"
weight: 1
sitemap:
  disable: true
robots: "noindex, nofollow"
---

Internal reference for design decisions, tokens, and patterns used to build the SAMM website. Not linked from navigation or sitemap.

## In this section

**[Foundations](/internal/design-system/foundations/):** color system, typography, spacing, and surfaces. Start here to understand the visual language.

**[Components](/internal/design-system/components/):** buttons, cards, icons, and hover patterns. The building blocks used across every template.

**[Patterns](/internal/design-system/patterns/):** link patterns, the `.prose` system, BF-colored links, and navigation links. How elements interact in context.

**[Conventions](/internal/design-system/conventions/):** CSS architecture, Hugo Pipes, BEM naming, JS conventions, and external link rules. How we build and maintain the codebase.

**[Accessibility](/internal/design-system/accessibility/):** WCAG compliance table, contrast ratios, tap targets, and testing checklist.

---

## Design principles

Five principles guide every decision in this design system.

**Golden ratio harmony.** Every spacing and type value derives from the golden ratio (φ = 1.618). Developers pick from a fixed scale instead of inventing arbitrary values. The result is a layout that feels proportionally balanced without manual tuning.

**One color family.** The entire UI is built from a single teal hue at different lightness levels. Navbar, links, buttons, and active states all come from the same family. Semantic colors (the business function palette) are the deliberate exception; they carry meaning, not decoration.

**Accessibility by default.** Every color combination passes WCAG AA. Every interactive element meets minimum touch target sizes (44px, Apple HIG / WCAG 2.5.5). Accessibility is checked during design, not retrofitted.

**Content-first hierarchy.** The interface guides the eye to content, not chrome. One primary action per context. Titles anchor the view; metadata recedes; navigation waits at the edge. Components earn their visual weight.

**Reuse over invention.** Before creating a new pattern, find how the same problem was already solved. If a chevron, button, or layout already exists, reuse it exactly. Consistency is more valuable than novelty.
