# Website Upgrade Implementation Plan

This document defines the frontend-only implementation plan for aligning the website with the provided visual references and interaction direction.

## Scope and constraints

- Frontend only (no backend/API integration required).
- Visual/UI implementation prioritized over data completeness.
- Placeholder content is allowed where final copy is not yet provided.
- All provided screenshots are design references and should guide spacing, layout, motion, and hierarchy.
- Refine current implementation, do not redesign from scratch.

## Delivery goals

- Cleaner forestry-company presentation with premium spacing and fewer placeholder-style visuals.
- Header/hero behavior and composition closer to `laskana.lv`.
- Smooth, slower, high-quality motion for widget and carousels.
- Correct Latvian text/diacritics in specified sections.
- Service and testimonial structures updated to required item counts and layouts.
- Newsletter block inserted in required position between FAQ and footer.

## Implementation order (required priority)

1. Hero/Header/Navbar restructure + right-side green widget.
2. Partner logo carousel upgrades.
3. Services section restructure and copy fixes.
4. Testimonials section expansion and carousel behavior matching logos.
5. Newsletter section insertion between FAQ and footer.

---

## Phase 0 - Baseline and safeguards

- [ ] Create a quick UI baseline capture (desktop + mobile screenshots for header, partners, services, testimonials, FAQ/footer area).
- [ ] Identify current components and style files used by:
  - header/navbar/hero
  - floating right widget
  - partner logos carousel
  - services grid/cards
  - testimonials carousel
  - FAQ, footer, and page section order
- [ ] Confirm any reused slider utility (if both partner and testimonial carousels can share one motion config).
- [ ] Ensure existing responsive behavior remains intact while restructuring desktop layouts.

Definition of done:
- A clear component map exists before edits start.

---

## Phase 1 - Hero, header, navbar, and right-side green widget (Priority 1)

### 1.1 Navbar content and structure

- [ ] Rebuild desktop header composition so nav block sits visually on the right side of hero.
- [ ] Replace flat single-line distribution with staggered two-layer structure.
- [ ] Implement required top-right utility row composition:
  - [ ] `Par mums` on upper layer
  - [ ] desktop hamburger icon between upper utilities
  - [ ] language selector/value (`Lv`) on upper layer
- [ ] Ensure required relationship on lower/main layer:
  - [ ] `Kontakti` appears under language selector side
  - [ ] `Kokmateriālu tirdzniecība` appears under `Par mums` side
- [ ] Keep remaining main nav items in coherent row/layer below the utility row.

### 1.2 Navbar alignment and visual behavior

- [ ] Align full nav composition toward the right, not globally centered.
- [ ] Keep left hero area visually open for heading.
- [ ] Navbar top state: transparent over hero media.
- [ ] On scroll: transition to white background smoothly.
- [ ] Ensure text/icon contrast in both states (transparent and scrolled white).

### 1.3 Desktop hamburger behavior

- [ ] Keep hamburger visible on desktop (not mobile-only).
- [ ] Click toggles full-page menu from top.
- [ ] Second click closes menu.
- [ ] Opening/closing uses smooth top-down vertical slide animation.
- [ ] Preserve accessibility (keyboard focus, aria labels, escape to close).

### 1.4 Right-side green widget

- [ ] Position fixed widget lower and closer to viewport right edge.
- [ ] Collapsed state:
  - [ ] show narrow tab only
  - [ ] show white `i` icon only
  - [ ] appear partially hidden/attached to right edge
- [ ] Hover state:
  - [ ] expand slowly and smoothly toward the left
  - [ ] icon moves with expanded panel content (not fixed in place)
- [ ] Expanded text must be exactly:
  - [ ] `Uzzini savu meža vērtību`
- [ ] Styling:
  - [ ] bright green background
  - [ ] white icon/text
  - [ ] clean rectangular look
  - [ ] no heavy borders

Definition of done:
- Header layout matches staggered right-side logic from reference.
- Desktop hamburger behaves as specified.
- Green widget interaction and motion visually match screenshot intent.

---

## Phase 2 - Partner logo carousel improvements (Priority 2)

### 2.1 Data/content cleanup

- [ ] Replace empty slot with provided logo so no visible blank positions remain.
- [ ] Validate logo list count and ordering for seamless loop behavior.

### 2.2 Controls and layout

- [ ] Move left arrow to far left edge of carousel container.
- [ ] Move right arrow to far right edge of carousel container.
- [ ] Remove clustered arrow placement in upper-right corner.

### 2.3 Motion system

- [ ] Implement one-logo-per-step sliding.
- [ ] Set transition duration to at least 2 seconds per movement.
- [ ] Add short pause between slides.
- [ ] Ensure motion is true translate-slide (not instant swap).
- [ ] Implement infinite seamless loop (duplicate array technique if required).
- [ ] Eliminate snapping/jumps/harsh velocity changes.

### 2.4 Visual polish

- [ ] Keep section background white.
- [ ] Keep logos clean without unnecessary framing.
- [ ] Ensure no visible gaps during loop boundaries.

Definition of done:
- Logos continuously slide one step at a time with slow, premium motion and no empty slot.

---

## Phase 3 - Services section restructure (Priority 3)

### 3.1 Heading and subheading text corrections

- [ ] Update heading to:
  - [ ] `Iepērkam mežus, cirsmas un kokmateriālus`
- [ ] Update subheading to:
  - [ ] `Piedāvājam izdevīgus nosacījumus, konkurētspējīgas cenas un godīgu attieksmi!`

### 3.2 Service title corrections and reordering

- [ ] Apply exact title updates:
  - [ ] `lepērkam mežus` -> `Iepērkam mežus`
  - [ ] `lepērkam zarus šķeldai` -> `Iepērkam cirsmas`
  - [ ] `lepērkam cirsmas` -> `Iepērkam zarus šķeldai`
  - [ ] `lepērkam kokmaterials pie ceja` -> `Iepērkam kokmateriālus pie ceļa`
  - [ ] `lepirkumi ostās` -> `Mežu apsaimniekošana`
- [ ] Add sixth service:
  - [ ] `Kokmateriālu tirdzniecība`

### 3.3 Layout and style

- [ ] Convert to 2-row grid:
  - [ ] row 1: 3 services
  - [ ] row 2: 3 services
- [ ] Ensure each service item uses structure:
  - [ ] image area on top
  - [ ] title below image
  - [ ] `Uzzināt vairāk` button below title
- [ ] Remove boxed/bordered placeholder card framing.
- [ ] Preserve open editorial/gallery-style presentation.

### 3.4 Buttons and interaction

- [ ] Update `Uzzināt vairāk` hover:
  - [ ] button turns green
  - [ ] smooth transition
  - [ ] no excessive effects

### 3.5 Background and spacing

- [ ] Keep services section on white background under green header strip.
- [ ] Improve vertical rhythm and container spacing.

Definition of done:
- Services display six corrected items in 3x2 layout with clean unboxed style and corrected Latvian text.

---

## Phase 4 - Testimonials section upgrade (Priority 4)

### 4.1 Content structure

- [ ] Build exactly 9 testimonial items.
- [ ] Use simple content structure per item:
  - [ ] company logo
  - [ ] testimonial text
  - [ ] person name
  - [ ] job title/position
- [ ] Do not include profile photos.

### 4.2 Responsive visibility

- [ ] Desktop: show 2 testimonials at a time.
- [ ] Mobile: show 1 testimonial at a time.

### 4.3 Carousel behavior (mirror partner logic)

- [ ] Use same arrow placement logic as partner carousel.
- [ ] Use same one-step progression.
- [ ] Use same slow/smooth sliding feel.
- [ ] Use same infinite loop concept.
- [ ] Remove jumps/speed spikes/snapping.

### 4.4 Visual style

- [ ] Keep white section background.
- [ ] Remove prominent card borders/highlight blocks.
- [ ] Keep layout minimal and clean.

Definition of done:
- Testimonials behave like a polished companion carousel to partner logos, with 9 items and proper responsive visibility.

---

## Phase 5 - Newsletter section insertion (Priority 5)

### 5.1 Placement in page flow

- [ ] Insert newsletter window between FAQ and footer.
- [ ] Ensure final order:
  - [ ] FAQ
  - [ ] Newsletter
  - [ ] Footer

### 5.2 Layout and styling

- [ ] Implement reference-aligned structure:
  - [ ] large background image area
  - [ ] centered heading
  - [ ] email input
  - [ ] subscribe button
- [ ] Keep dark/green footer separate below newsletter block.
- [ ] Maintain spacious premium proportions.

### 5.3 Functionality scope

- [ ] Frontend-only visual form.
- [ ] No real submit handling required at this stage.

Definition of done:
- Newsletter visually bridges FAQ and footer and matches screenshot structure.

---

## Phase 6 - Global cleanup and consistency pass

### 6.1 Background and visual noise

- [ ] Ensure normal content sections use white backgrounds.
- [ ] Restrict image/video backgrounds to intentional hero/feature areas only.
- [ ] Remove unnecessary borders/placeholder framing site-wide.

### 6.2 Motion polish

- [ ] Normalize animation easing/timing for widget and both carousels.
- [ ] Remove abrupt transitions and snap-like movement.
- [ ] Prefer slower controlled transitions consistent with references.

### 6.3 Typography and language correctness

- [ ] Verify all specified Latvian diacritics and corrected phrases are exact.
- [ ] Keep heading hierarchy and weight consistent across sections.

### 6.4 Spacing and layout rhythm

- [ ] Standardize section top/bottom padding.
- [ ] Ensure consistent container widths and gap scales.
- [ ] Remove cramped areas, especially near section boundaries.

Definition of done:
- Site appears visually cohesive and premium, with consistent motion and typography.

---

## QA checklist (final verification)

### Desktop checks

- [ ] Header is right-aligned/staggered and matches required utility composition.
- [ ] Navbar transitions transparent -> white smoothly on scroll.
- [ ] Desktop hamburger opens/closes full-page menu with top slide.
- [ ] Green widget stays fixed, edge-attached, and expands left smoothly with icon moving together.
- [ ] Partner carousel shows no empty slot; arrows at container extremes; slides slowly one-by-one.
- [ ] Services show 6 items in two rows with corrected text and hover behavior.
- [ ] Testimonials show 2 at once and slide like partner carousel.
- [ ] Newsletter appears between FAQ and footer and matches reference structure.

### Mobile checks

- [ ] Header remains readable and usable.
- [ ] Testimonials show 1 at a time.
- [ ] Carousels remain smooth without overflow glitches.
- [ ] Newsletter input/button alignment remains clean.

### Regression checks

- [ ] No console errors introduced by carousel/menu/widget logic.
- [ ] No section order regressions outside targeted updates.
- [ ] No backend endpoints required for this upgrade.

---

## Suggested technical approach notes

- Prefer reusing a shared carousel motion configuration/hook for partner and testimonial sections to keep timing and behavior identical.
- Use transform-based animations (`translateX`) with easing for smooth sliding.
- For infinite loops, use cloned boundary items or duplicated arrays with index reset after transition-end to avoid visible jump.
- Keep all improvements additive and incremental within existing component structure.

---

## Change log tracker

- [ ] Phase 1 completed
- [ ] Phase 2 completed
- [ ] Phase 3 completed
- [ ] Phase 4 completed
- [ ] Phase 5 completed
- [ ] Phase 6 completed
- [ ] Final QA completed
