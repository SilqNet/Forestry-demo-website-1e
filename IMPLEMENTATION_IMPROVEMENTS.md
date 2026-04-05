# Frontend improvements — implementation plan

This document tracks **hero / header / navbar** work only. No code lives here; use the checklists below while implementing.

**Reference assets (workspace):**

- Floating button (expanded / collapsed): see saved screenshots under `assets/` (paths from Cursor workspace storage).
- Navbar / hero: same folder, latest header reference.

---

## Goals (summary)

| Area | Intent |
|------|--------|
| Desktop navbar | Exact label updates, removals, single main row + top-right utilities, transparent over hero |
| Floating control | Fixed right-edge green tab; hover expands left with label |
| Hero | Transparent nav, left-aligned title only, no subheading or hero CTAs |
| Visual | Match references: white type on dark hero, clean spacing |

---

## Progress tracker

Use `[ ]` / `[x]` as you complete items.

### Phase A — Discovery & routing

- [ ] **A.1** Locate all navbar / header markup and styles (e.g. `components/navbar.tsx`, layout wrappers, any mobile-only menu).
- [ ] **A.2** Locate hero section (e.g. `components/hero.tsx`) and list every child: heading, subheading, CTAs, overlays.
- [ ] **A.3** Audit existing floating / fixed controls (e.g. `components/floating-button.tsx`) for overlap with the new green tab spec.
- [ ] **A.4** Map each current nav label to its route (`href`) so renames and removals do not break links.
- [ ] **A.5** **Label vs structure:** Section 1 renames the existing **“Par mums”** entry to **“Kontakti”**. Section 2 also requires a top-right link labeled **“Par mums”**. Confirm product intent: typically **“Kontakti”** → contact, **“Par mums”** → about (or equivalent). If the codebase has a single “Par mums” link, split into two entries with correct URLs before shipping.

### Phase B — Desktop navbar: copy (exact strings)

- [ ] **B.1** **“Iepirkam”** → **“Iepērkam”** (macron on ē).
- [ ] **B.2** **“Sthidora pakalpojumi”** → **“Transports / Loģistika”**.
- [ ] **B.3** **“Transports / Logistika”** → **“Kokmateriālu tirdzniecība”** (match spelling / diacritics as specified).
- [ ] **B.4** **“Par mums”** (the nav entry covered by the text-change list) → **“Kontakti”**.
- [ ] **B.5** Remove **“Vakances”** entirely (link + any mobile mirror).
- [ ] **B.6** Remove **“Lemontdarbnīca”** entirely — *verify in repo for **“Remontdarbnīca”** (likely typo in requirements) and remove that item if present instead.*

### Phase C — Desktop navbar: structure & behavior

- [ ] **C.1** **Single main row** of primary links over the hero (horizontal, readable on large breakpoints).
- [ ] **C.2** **Top-right utility cluster** (same header, desktop): **“Par mums”** · language **“Lv”** · **hamburger** control.
- [ ] **C.3** **Desktop hamburger** is visible on web (not only `<md` / mobile); wire it to the same or equivalent panel/drawer as mobile, per existing patterns.
- [ ] **C.4** Hamburger **visual**: simple white icon, **transparent** background (no filled pill unless reference changes).
- [ ] **C.5** **Navbar remains transparent** at the top over hero image/video (no accidental solid bar on desktop hero).
- [ ] **C.6** **Layout feel:** main items centered or evenly spread across the hero width; utilities anchored top-right (match reference spacing and hierarchy).
- [ ] **C.7** Regression: keyboard focus, `aria` labels for menu button, and z-index so utilities sit above hero media but below any modal layer if applicable.

### Phase D — Floating green side button (right)

- [ ] **D.1** **Position:** `fixed` to **viewport right edge**; **vertical:** centered or slightly above center (tune to reference).
- [ ] **D.2** **Collapsed:** narrow green tab; **only** white **“i”** (info) — no label text.
- [ ] **D.3** **Expanded:** tab grows **to the left**; shows **icon +** exact copy **“Uzzini savu mežu vērtību”** (white).
- [ ] **D.4** **Styling:** bright green background, white text/icon, rectangular, clean corners, modern padding (match screenshots).
- [ ] **D.5** **Motion:** smooth, quick horizontal slide; **desktop: expand on hover**, **collapse on mouse leave**.
- [ ] **D.6** **Scroll:** remains fixed while page scrolls.
- [ ] **D.7** **Touch / reduced-hover:** decide behavior (e.g. tap toggles, or first tap expands) so the control is not dead on tablets; document chosen rule in PR if non-hover fallback is added.
- [ ] **D.8** **Link/action:** wire `href` or click handler (e.g. valuation landing, modal, or `#` placeholder) per product — placeholder acceptable until URL is confirmed.

### Phase E — Hero header cleanup

- [ ] **E.1** Keep **transparent navbar** over hero (no new opaque header band on first screen).
- [ ] **E.2** Hero contains **only the main heading** (no secondary headline).
- [ ] **E.3** Remove **hero subheading** if present.
- [ ] **E.4** Remove **hero CTA buttons** (any primary/secondary actions in the hero block).
- [ ] **E.5** **Heading aligned left** (LTR); check responsive: stays left-aligned where appropriate on smaller breakpoints unless design says otherwise.

### Phase F — QA & polish

- [ ] **F.1** Cross-browser quick pass (Chrome, Safari/Edge, Firefox): hover tab, hamburger, transparent nav on hero.
- [ ] **F.2** Breakpoints: desktop layout matches spec; mobile/tablet still usable (hamburger, no clipped utility text).
- [ ] **F.3** Compare side-by-side with **reference images** (green tab collapsed/expanded, header hierarchy).
- [ ] **F.4** No accidental duplicate nav labels; Latvian diacritics render correctly in fonts in use.

---

## Requirements checklist (verbatim coverage)

Quick audit list against the original brief:

- [ ] Desktop labels: Iepērkam; Transports / Loģistika; Kokmateriālu tirdzniecība; Kontakti (from rename rules).
- [ ] Removed: Vakances; Lemontdarbnīca / Remontdarbnīca (verified).
- [ ] Main nav: one horizontal row over hero.
- [ ] Top-right: Par mums, Lv, hamburger (desktop).
- [ ] Desktop hamburger present; white icon on transparent background.
- [ ] Navbar transparent over hero.
- [ ] Floating green right tab: collapsed = icon only; hover expand left with full phrase; fixed on scroll; smooth animation.
- [ ] Hero: title only, left-aligned; no subheading; no hero CTAs.
- [ ] Overall: white text on dark hero, premium spacing, no full hero redesign.

---

## Suggested implementation order

1. **Hero cleanup (E)** — reduces noise while tuning header layout.  
2. **Navbar copy + removals (B)** — low risk if routes are unchanged.  
3. **Navbar structure (C)** — layout/CSS grid or flex refactor.  
4. **Floating tab (D)** — new or replace existing floating component.  
5. **QA (F)** — references and regressions.

---

## Notes for implementers

- **Do not** redesign the hero visual (imagery, video, overall composition); **structure and labels only**.
- Prefer **CSS transitions** or **motion** already used in the project for the tab slide.
- If an existing **floating button** conflicts with this spec, **replace or consolidate** so only one fixed right-edge promotional control matches the reference.

---

*Last updated: implementation plan only — no code changes in this file.*
