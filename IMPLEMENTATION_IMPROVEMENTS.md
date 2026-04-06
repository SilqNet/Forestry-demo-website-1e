# Implementation Plan - Website Upgrades (March/April 2026 Round)

This plan focuses on improving the visual presentation of the Service section and restructuring the Hero/Navbar layout to match a premium, editorial design.

## Scope for this round

-   **Service Section Upgrade**: Aligning closely with `https://laskana.lv/` style. 
    -   Portrait vertical images, reduced in size.
    -   Removal of ALL photo hover effects (static images).
    -   Interaction remains only on buttons.
    -   Clean 3x2 grid layout.
-   **Hero/Navbar**: Staggered right-aligned layout, transparency over hero, white on scroll.

## Implementation Details

### Priority 1: Service Section Refinement (Laskana.lv Reference)

**Goal**: Match the visual scale and minimal design of `laskana.lv`.

1.  **Image Styles & Proportions**:
    -   Modify `components/services.tsx` to use vertically oriented images.
    -   **Size Reduction**: Ensure images are not oversized; match the balanced scale seen on the reference site.
    -   **Ratio**: Use `aspect-[3/4]` or similar vertical proportions.
    -   **Clean Spacing**: Improve whitespace around each service item for a more breathable layout.
2.  **Remove Interaction from Photos**:
    -   Remove ALL hover animations on images: no `scale`, no `zoom`, no `lift`, no `shadow` changes.
    -   Photos MUST remain completely static on hover.
3.  **Button Hover State**:
    -   "Uzzināt vairāk" buttons will keep their hover behavior (turning green).
4.  **Layout Order**:
    -   Image (top)
    -   Service Title (middle)
    -   "Uzzināt vairāk" Button (bottom)
    -   Remove borders, card boxes, or standout effects.
5.  **Grid consistency**:
    -   Ensure a clean 2-row layout (3 items per row).
    -   Total 6 items, aligned evenly.

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

-   [ ] (Priority 1) Service Section Image Proportions (Vertical & Smaller)
-   [ ] (Priority 1) Remove ALL image hover effects
-   [ ] (Priority 1) Service Section Visual Order (Photo -> Title -> Button)
-   [ ] (Priority 1) Update Service photos with new provided files
-   [ ] (Priority 2) Navbar Restructuring (Staggered/Layered)
-   [ ] (Priority 2) Navbar Right-Alignment & Spacing
-   [ ] (Priority 2) Verify Transparency & Scroll Behavior

---

## Technical approach notes

-   Updating `components/services.tsx` grid and article structure.
-   Refactoring `components/navbar.tsx` desktop nav div into a more structured set of layers.
-   Using `object-cover` for images to handle the transition from landscape sources to portrait displays.
-   Ensuring consistent spacing and typography across all service items.
