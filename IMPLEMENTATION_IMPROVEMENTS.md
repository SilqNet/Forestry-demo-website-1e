# Implementation Plan - Website Upgrades (March 2026 Round)

This plan focuses on improving the visual presentation of the Service page and restructuring the Hero/Navbar layout to match a premium, editorial design.

## Scope for this round

- **Service Page**: Vertical images, removed "standout" hover, cleaner 3x2 grid.
- **Hero/Navbar**: Staggered right-aligned layout, transparency over hero, white on scroll.

## Implementation Details

### Priority 1: Service Section Refinement

**Goal**: Calm, premium, image-led services section with portrait orientation.

1.  **Image Proportions**:
    -   Modify `components/services.tsx` to use a vertical container for images.
    -   Change the height class from `h-56` (landscape) to a portrait ratio like `aspect-[3/4]` or `h-[450px]`.
    -   Use `object-cover` to ensure images fill the vertical space naturally.
2.  **Remove current "stand out" behavior**:
    -   Remove `group-hover:scale-110`.
    -   Remove any heavy shadows or highlights that emphasize one card over others.
3.  **Subtle Hover Interaction**:
    -   Implement a small, elegant transition (e.g., slight opacity change or a very subtle `scale-[1.02]`).
4.  **Visual order for each service**:
    -   Vertical Photo
    -   Service Title (minimal spacing)
    -   "Uzzināt vairāk" button (subtle hover state)
5.  **Data Mapping**:
    -   Map the 5 provided forestry photos to the services.
    -   Keep the 6th service as a placeholder for now as requested.

### Priority 2: Hero / Navbar Layout

**Goal**: Custom, structured navbar that matches the staggered right-side reference.

1.  **Restructure Navbar Grouping**:
    -   Divide the desktop menu into distinct layers on the right side.
    -   **Upper Row**: `Par mums`, Desktop Hamburger icon, Language selector (`Lv`).
    -   **Lower Rows**: Arrange remaining main navigation items below the utility row in a staggered arrangement.
2.  **Alignment & Composition**:
    -   Keep the whole nav composition aligned toward the right side.
    -   Ensure the left side of the hero remains open for the main heading.
    -   Ensure the navbar is transparent at the top but transitions to white background smoothly after scroll (scrollY > 50).
3.  **Refine Hero Heading**:
    -   Retain left-aligned heading with no subheading or buttons.

## Progress Tracking

- [ ] (Priority 1) Service Page Image Proportion (Vertical)
- [ ] (Priority 1) Service Section Hover/Standout Removal
- [ ] (Priority 1) Service Section Visual Order (Photo -> Title -> Button)
- [ ] (Priority 2) Navbar Restructuring (Staggered/Layered)
- [ ] (Priority 2) Navbar Right-Alignment & Spacing
- [ ] (Priority 2) Verify Transparency & Scroll Behavior

---

## Technical approach notes

-   Updating `components/services.tsx` grid and article structure.
-   Refactoring `components/navbar.tsx` desktop nav div (`md:flex flex-1 min-w-0 justify-end items-center px-2`) into a more structured set of layers.
-   Using `object-cover` for images to handle the transition from landscape sources to portrait displays.
