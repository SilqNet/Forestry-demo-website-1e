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

- [x] **A.1** Locate all navbar / header markup and styles (e.g. `components/navbar.tsx`, layout wrappers, any mobile-only menu).
- [x] **A.2** Locate hero section (e.g. `components/hero.tsx`) and list every child: heading, subheading, CTAs, overlays.
- [x] **A.3** Audit existing floating / fixed controls (e.g. `components/floating-button.tsx`) for overlap with the new green tab spec.
- [x] **A.4** Map each current nav label to its route (`href`) so renames and removals do not break links.
- [x] **A.5** **Label vs structure:** Section 1 renames the existing **“Par mums”** entry to **“Kontakti”**. Section 2 also requires a top-right link labeled **“Par mums”**. Confirm product intent: typically **“Kontakti”** → contact, **“Par mums”** → about (or equivalent). If the codebase has a single “Par mums” link, split into two entries with correct URLs before shipping.

#### Phase A findings (recorded 2026-04-06)

| ID | Summary |
|----|---------|
| **A.1** | **Header source of truth:** `components/navbar.tsx` — fixed `nav`, desktop link row (`hidden md:flex`), language `<select>` (desktop), hamburger **mobile-only** (`md:hidden`), fullscreen slide-down menu for `md:hidden` (same `navItems`). Scroll state toggles `bg-transparent` vs `bg-white/95`. **Layout:** `app/layout.tsx` has no navbar. **Home composition:** `app/page.tsx` renders `<Navbar />` then `<Hero />`. **`components/ui/navigation-menu.tsx`** is a Radix/shadcn primitive and is **not** imported by the live navbar (available if you refactor). |
| **A.2** | **`components/hero.tsx`:** (1) Desktop `<video>` full-bleed background. (2) Mobile `<Image>` background. (3) Overlay `div` with `bg-black/40`. (4) Content wrapper: single **`h1`** (“GR GRUPA - Your Trusted Forestry Partner”) — **no subheading, no hero CTAs.** Section uses `pt-16` for fixed nav clearance; content is `items-start` / `text-left`. |
| **A.3** | **`components/floating-button.tsx`:** `fixed` with `right-6 md:right-8`, `top-32`, `z-30` (below navbar `z-40`). Uses `bg-primary` + white; collapsed width `40px`; **hover + click** toggle expand; expanded shows **“Uzzini savu mežu vērtību”** (matches intended copy). **Gaps vs Phase D spec:** not flush to **viewport right edge**; **vertical** position is upper third, not centered; collapsed state uses a **rounded pill** and **“i” inside a white inner box**, not a narrow green tab with only a white “i” on green. **No other** fixed promo control on the home page. |
| **A.4** | **Routes:** Only **`/`** exists (`app/page.tsx`). **Logo** → `href="/"`. Every item in `navItems` and all submenu entries use **`href: '#'`** — renames/removals in Phase B **will not break real routes** until you introduce pages (e.g. `/kontakti`, `/par-mums`) and wire `href`s. |
| **A.5** | **Confirmed:** There is a **single** top-level **“Par mums”** in `navItems` (`navbar.tsx`). **Intent for later phases:** that slot becomes **“Kontakti”** (contact); add a **separate** top-right **“Par mums”** (about) in the utility cluster (Phase C). Assign distinct `href`s when routes exist. **`footer.tsx`** also contains **“Lemontdarbnīca”** — note for Phase B cleanup outside the nav list. **B.6 verification:** Repo has **“Lemontdarbnīca”** in navbar and footer; **no** string **“Remontdarbnīca”** found. |

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
