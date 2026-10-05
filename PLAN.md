# Website Migration Plan - Master Build Structure

This document outlines the systematic migration of the entire website to the strictly defined "Royal Warm Minimalism" layout and architecture, as dictated by the Master Build Prompt.

## Core Philosophy
- **Aesthetic:** Royal Warm Minimalism. Alabaster (`#FAF6EF`) backgrounds, Linen (`#F2EBDD`) cards, Warm Brass (`#B08D57`) accents.
- **Tone:** Calm, trust, competence. Plain-spoken language.
- **Design Law:** Minimalism. Every element must help a patient book an appointment.
- **SEO-First:** Pages must be fully crawlable and structured to rank. SEO wins over aesthetics.

## Phases

### Phase 1: Architecture & Sitemap
- [x] Migrate `/providers` (Interactive monograph tabs, category filtering, FAQ accordion)
- [x] Migrate `/new-patients` (4-stage intake protocol, tactile checklist cards)
- [x] Migrate `/financing-insurance` (In-network matrix, dual-column dossier)
- [x] Migrate Homepage (`/`)
- [x] Migrate Services Hub (`/services`)
- [x] Migrate Areas Hub (`/areas`)
- [x] Migrate Results Hub (`/results`)

### Phase 2: Design System & Tokens
- [x] Establish Color Palette: Alabaster (Primary), Linen (Secondary), Line (Borders), Espresso (Primary Typo), Umber (Secondary Typo), Warm Brass (Accents).
- [x] Audit all pages for token compliance. Remove generic colors or "AI slop" styles.

### Phase 3: Layout & Components
- [x] Implement strict header structure.
- [x] Implement strict 4-column footer structure.
- [x] Refine image handling (avoid generic placeholders, use high-quality architectural/editorial style).
- [x] Ensure non-AI slop imagery and cards on all pages.

### Phase 4: Motion Language
- [x] Establish Entrance animations: Fade + 16px rise, 600ms ease-out. No springs, no overshoot.
- [x] Respect `prefers-reduced-motion` across all components.
- [x] Implement luxury high-performance custom cursor component (Warm Brass dot and trailing ring with spring physics).
- [x] Implement "page bending" / horizontal scroll animations only on specific horizontal image scroll sections.

### Phase 5: SEO & Compliance
- [x] Ensure every page has correct semantic HTML (H1, H2, etc.).
- [x] Add relevant meta descriptions and canonical tags.
- [x] Ensure 100% crawlability.

### Phase 6: QA & Polish
- [x] Verify production builds pass (`npm run build`).
- [x] Test interactions and animations for performance (60fps, no lag).
- [x] Ensure accessibility standards are met.
