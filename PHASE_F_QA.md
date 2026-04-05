# Phase F — QA & polish (runbook)

Use this checklist before a release or major demo. Reference screenshots, if you add them later, can live under `assets/` (see `IMPLEMENTATION_IMPROVEMENTS.md`).

---

## Automation log

| Check | Result | Date / notes |
|--------|--------|----------------|
| `npm run build` | Pass | 2026-04-06 |
| `npm run lint` | Not run | `eslint` not on PATH in this environment; repo has no `eslint.config.*` — add ESLint + flat config when you want CI lint. |
| Typecheck | Skipped by Next | Build output: “Skipping validation of types” — run `npx tsc --noEmit` if you enable strict checks. |

---

## F.1 — Cross-browser quick pass

**How:** `npm run dev`, open `/`, test at **top of page** (hero, transparent nav).

- [ ] **Chrome** — Floating tab: hover expand/leave collapse; hamburger opens/closes panel; nav text readable on video.
- [ ] **Edge or Safari** — Same as above (pick at least one WebKit engine if you target Safari).
- [ ] **Firefox** — Same interactions; no layout clip on the right-edge tab.

**Pass criteria:** No console errors from these interactions; menu panel sits below the fixed bar (`z-40` bar vs `z-[35]` panel).

---

## F.2 — Breakpoints

Resize the viewport or use devtools device mode.

| Viewport | Focus |
|----------|--------|
| ~390×844 | Hamburger only; drawer lists all primary links + **Par mums** + language; no clipped text on long labels (e.g. Kokmateriālu tirdzniecība). |
| 768px (md) | Centered primary row appears; utilities: **Par mums** · **Lv** · menu icon. |
| 1280px+ | Primary row centered; utilities right; floating tab not overlapping critical content. |

- [ ] Mobile
- [ ] Tablet (`md`)
- [ ] Desktop wide

---

## F.3 — Reference images

If you have design references (floating tab collapsed/expanded, header hierarchy):

- [ ] Side-by-side: green tab collapsed = white **i** only, flush to right edge.
- [ ] Expanded: phrase **Uzzini savu mežu vērtību** visible, animation smooth.
- [ ] Header: single primary row + top-right cluster matches intent.

---

## F.4 — Copy & diacritics

### Static audit (source) — done 2026-04-06

**Desktop primary row** (`components/navbar.tsx` → `navItems` top-level labels):

- Mežu apsaimniekošana, Iepērkam, Transports / Loģistika, Kokmateriālu tirdzniecība, Kontakti

**Utility (desktop):** Par mums (separate from **Kontakti** — intentional).

**Removed strings** (grep across `.tsx`): no `Vakances`, `Lemontdarbnīca`, old `Iepirkam` / `Sthidora` / `Transports / Logistika` in nav/footer.

**Duplicate label check:** Only one **Kontakti** in the primary row; **Par mums** appears in the utility link and again inside the slide-down menu footer for small screens — not a duplicate in the same bar.

### Visual (manual)

- [ ] In the browser, confirm **ē**, **ģ**, **ā**, **ū**, **š**, **ķ** render correctly in **Geist** (body font from `layout.tsx`).

---

## Sign-off

| Role | Name | Date |
|------|------|------|
| Tester | | |

When all applicable boxes above are checked, you can mark Phase F complete for your release process.
