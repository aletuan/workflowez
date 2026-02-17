# Workflowez Project — Refactoring Analysis & Plan

**Date:** February 2026  
**Scope:** `website/` — Vite + React landing page  
**Focus:** Reusability, Complexity, Scalability, Resilience, React Best Practices  
**Last updated:** February 2026 (Phase 2 completed)

---

## 0. Progress Summary

### Phase 1: Quick Wins — Completed

| Task | Status |
|------|--------|
| Use ImageWithFallback for Hero and Benefits images | Done |
| Add ErrorBoundary around App with fallback UI | Done |
| Fix `key` props — stable keys (item.id, feature string) | Done |
| Memoize LanguageContext value with useMemo + useCallback | Done |
| Remove unused deps (MUI, emotion, react-dnd, react-slick, masonry, popper) | Done |
| Add `prefers-reduced-motion` handling (useReducedMotion hook) | Done |

### Phase 2 Completed

1. [x] **Shared components** — `Section`, `PrimaryButton`, `SecondaryButton` in `components/shared/`.
2. [x] **Extract translations** — `locales/vi.json`, `locales/en.json` with LanguageContext loading.
3. [x] **Type-safe i18n** — `TranslationKeys` from `types/translations.ts`.
4. [x] **Nav config** — `config/navigation.ts`.
5. [x] **Design tokens** — `--brand`, `--brand-light`, `--section-radius`, `--blur-*`.

### Phase 2 Remaining (Optional Cleanup)

- Migrate CTA, Footer, Pricing, Testimonials from violet/fuchsia to `var(--brand)`
- Use `PrimaryButton` / `SecondaryButton` in CTA and Pricing
- Optionally use `Section` in Testimonials, Pricing where layout allows

### Suggested Next Tasks (Phase 3)

1. **Introduce routing** with react-router.
2. **Lazy-load sections** (Hero, Features, Pricing) with Suspense.
3. **Folder restructure** — `layout/`, `landing/`, move shared components.
4. **Vite manual chunks** for vendor splitting.

---

## 1. Executive Summary

The Workflowez landing page is a Vite + React app with 7 section components, i18n (vi/en), and 40+ shadcn/ui components. The analysis identifies **dead code**, **inconsistent patterns**, **missing resilience**, and **scalability bottlenecks**. This document provides a prioritized refactoring plan aligned with React best practices.

---

## 2. Current Architecture Overview

```
website/
├── src/
│   ├── app/
│   │   ├── App.tsx                 # Root: ErrorBoundary, LanguageProvider, sections
│   │   ├── components/
│   │   │   ├── Header.tsx          # Uses NAV_ITEMS, design tokens
│   │   │   ├── Hero.tsx            # PrimaryButton, SecondaryButton, ImageWithFallback
│   │   │   ├── Features.tsx        # Section, design tokens
│   │   │   ├── Benefits.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── CTA.tsx
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── shared/             # Phase 2
│   │   │   │   ├── Section.tsx
│   │   │   │   ├── PrimaryButton.tsx
│   │   │   │   └── SecondaryButton.tsx
│   │   │   ├── figma/
│   │   │   │   └── ImageWithFallback.tsx
│   │   │   └── ui/                 # 40+ shadcn (mostly unused by landing)
│   │   └── context/
│   │       └── LanguageContext.tsx # Slim: loads from locales/, TranslationKeys
│   ├── config/
│   │   └── navigation.ts           # NAV_ITEMS — single source
│   ├── hooks/
│   │   └── useReducedMotion.ts
│   ├── locales/
│   │   ├── vi.json
│   │   └── en.json
│   ├── types/
│   │   └── translations.ts         # TranslationKeys
│   ├── styles/
│   └── main.tsx
├── package.json
└── vite.config.ts
```

---

## 3. Analysis by Dimension

### 3.1 Reusability

| Issue | Location | Impact |
|-------|----------|--------|
| ~~ImageWithFallback never used~~ | ~~figma/ImageWithFallback.tsx~~ | **Resolved** — Now used by Hero and Benefits |
| **shadcn/ui components unused** | `components/ui/*` | Button, Card, Badge exist but sections use raw `<button>`, inline styles |
| ~~Duplicate section patterns~~ | ~~Features~~ | **Partial** — Section, PrimaryButton, SecondaryButton added; FeatureCard not yet |
| **Hardcoded content** | Testimonials, Footer | `avatars`, `authors`; Footer links not in i18n |
| ~~Inconsistent styling~~ | ~~theme.css~~ | **Partial** — Design tokens added; some violet/fuchsia remain in CTA, Footer, Pricing |

**Recommendations:**

- Use `ImageWithFallback` for all external images.
- Introduce shared `Section`, `SectionCard`, `PrimaryButton`, `SecondaryButton` that wrap shadcn or custom primitives.
- Extract Footer links and Testimonials author data into translations.
- Create a design token layer (CSS vars or Tailwind config) and migrate inline colors.

---

### 3.2 Complexity

| Issue | Location | Impact |
|-------|----------|--------|
| ~~Monolithic LanguageContext~~ | ~~LanguageContext.tsx~~ | **Resolved** — Loads from locales/*.json |
| ~~Weak typing~~ | ~~t: any~~ | **Resolved** — TranslationKeys type |
| **Repeated motion boilerplate** | Hero, Features, Benefits | AnimatedSection/FadeInCard not yet extracted |
| ~~Duplicate nav config~~ | ~~Header.tsx~~ | **Resolved** — config/navigation.ts |
| ~~Scattered magic values~~ | ~~Multiple~~ | **Partial** — Design tokens in theme.css; some components not migrated |

**Recommendations:**

- Split translations into `locales/vi.json`, `locales/en.json` and load dynamically.
- Define `TranslationKeys` type and `useTypedLanguage()` for type-safe access.
- Create `AnimatedSection`, `FadeInCard` with sensible defaults.
- Extract nav items to a config array/object.
- Document and centralize spacing, radius, and blur tokens.

---

### 3.3 Scalability

| Issue | Location | Impact |
|-------|----------|--------|
| **No routing** | `App.tsx` | Single page; `react-router` installed but unused; future auth, dashboard, docs will need routes |
| **No code splitting** | `main.tsx`, `App.tsx` | All sections loaded upfront; larger bundle, slower TTI |
| **Flat component structure** | `app/components/` | Sections, layout, and primitives mixed; hard to scale |
| **No feature-based organization** | — | No `features/landing/`, `features/auth/` for future modules |
| **Bundle bloat** | `package.json` | MUI (@mui/material, @emotion) + react-router + recharts, react-dnd, etc. not used by landing |

**Recommendations:**

- Introduce `react-router` and route structure: `/`, `/demo`, `/pricing`, etc.
- Lazy-load sections: `const Hero = lazy(() => import('./Hero'))` with `Suspense` and fallback.
- Restructure folders: `components/layout/`, `components/landing/`, `components/ui/`, `features/`.
- Remove unused dependencies (MUI, react-router if not planned, recharts, react-dnd, etc.) or move to optional imports.
- Use Vite’s manual chunks for vendor splitting.

---

### 3.4 Resilience

| Issue | Location | Impact |
|-------|----------|--------|
| ~~No ErrorBoundary~~ | ~~App.tsx~~ | **Resolved** — ErrorBoundary added |
| ~~External images without fallback~~ | ~~Hero, Benefits~~ | **Resolved** — ImageWithFallback used |
| **No loading states** | — | No skeleton or spinner for async content (future APIs) |
| ~~Animation without reduced-motion~~ | ~~All motion components~~ | **Resolved** — useReducedMotion hook |
| **Scroll listener without cleanup guard** | Header (useEffect) | Cleanup exists; verify no memory leaks |

**Recommendations:**

- Add `ErrorBoundary` wrapping `App` or router outlet; log to monitoring.
- Use `ImageWithFallback` everywhere external images are used.
- Add `Suspense` with skeleton fallback for lazy sections.
- Wrap motion in `prefersReducedMotion` check or use `motion`’s `useReducedMotion()`.
- Add integration/E2E tests for critical flows.

---

### 3.5 React Best Practices

| Issue | Location | Impact |
|-------|----------|--------|
| ~~`key={index}` in lists~~ | ~~Features, Benefits, Pricing, Testimonials~~ | **Resolved** — stable keys (item.id) |
| **Buttons without handlers** | Hero, CTA, Pricing | Non-interactive; need `onClick` or `href` |
| ~~Hardcoded copy~~ | ~~Hero~~ | **Resolved** — uses t.hero.title_line2 |
| ~~State in context without memo~~ | ~~LanguageContext~~ | **Resolved** — useMemo + useCallback |
| **Missing `aria-*` on interactive** | Various | Buttons, links need `aria-label` where text is icon-only |

**Recommendations:**

- Use stable keys: `key={item.id}` or `key={feature.slug}`.
- Wire CTAs to `href` or `onClick` (analytics, navigation, modals).
- Move all copy into translations; remove hardcoded strings.
- Memoize context value: `useMemo(() => ({ language, setLanguage, t }), [language])`.
- Add `aria-label` to icon buttons and links where needed.

---

## 4. Dependency Audit

| Package | Status | Action |
|---------|--------|--------|
| ~~@mui/material~~, ~~@emotion/*~~ | Removed | Done |
| `react-router` | Unused | Keep for Phase 3 routing |
| ~~react-dnd~~, ~~react-dnd-html5-backend~~ | Removed | Done |
| `recharts` | Used by chart.tsx | Keep |
| ~~react-slick~~ | Removed | Done |
| ~~react-responsive-masonry~~ | Removed | Done |
| `embla-carousel-react` | Used by carousel | Keep |
| `motion` | Used widely | Keep |
| `lucide-react` | Used | Keep |
| `@radix-ui/*` | Used by shadcn | Keep |

---

## 5. Refactoring Plan

### Phase 1: Quick Wins (1–2 days) — Done

1. [x] **Use ImageWithFallback** for Hero and Benefits images.
2. [x] **Add ErrorBoundary** around `App` and provide fallback UI.
3. [x] **Fix `key` props** — use `item.id` or generate slugs for lists.
4. [x] **Memoize LanguageContext value** with `useMemo` + `useCallback`.
5. [x] **Remove unused deps** — MUI, emotion, react-dnd, react-slick, masonry, popper.
6. [x] **Add `prefers-reduced-motion`** handling for motion components (useReducedMotion hook).

### Phase 2: Structure & Reusability (3–5 days) — Done

1. [x] **Shared components:**
   - `Section` (title, subtitle, container) — used by Features
   - `PrimaryButton`, `SecondaryButton` — used by Hero
2. [x] **Extract translations** to `locales/vi.json`, `locales/en.json`.
3. [x] **Type-safe i18n:** `TranslationKeys` type inferred from vi.json.
4. [x] **Design tokens** — `--brand`, `--brand-light`, `--brand-dark`, `--section-radius`, `--blur-*` in theme.css.
5. [x] **Nav config** — `config/navigation.ts` single source for desktop + mobile.

### Phase 3: Scalability (5–7 days)

1. **Introduce routing** with `react-router` (or similar).
2. **Lazy-load sections** and wrap in `Suspense`.
3. **Folder restructure:**
   ```
   src/
   ├── app/App.tsx
   ├── components/
   │   ├── layout/     # Header, Footer
   │   ├── landing/    # Hero, Features, etc.
   │   └── ui/        # shadcn primitives
   ├── features/
   │   └── landing/
   ├── locales/
   └── hooks/
   ```
4. **Vite config** — manual chunks for vendors.

### Phase 4: Polish (2–3 days)

1. **Wire CTAs** — href or handlers.
2. **i18n Footer** — move links to translations.
3. **A11y audit** — `aria-label`, focus states, contrast.
4. **Tests** — unit for hooks/context, E2E for main flows.

---

## 6. Suggested File Structure (Post-Refactor)

```
src/
├── app/
│   ├── App.tsx
│   └── providers.tsx           # LanguageProvider, ErrorBoundary, etc.
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Section.tsx
│   ├── landing/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Benefits.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   └── CTA.tsx
│   ├── ui/                     # shadcn (pruned)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   └── shared/
│       ├── ImageWithFallback.tsx
│       ├── AnimatedSection.tsx
│       └── PrimaryButton.tsx
├── context/
│   └── LanguageContext.tsx     # Slim, loads from locales/
├── locales/
│   ├── vi.json
│   └── en.json
├── hooks/
│   ├── useLanguage.ts
│   └── useReducedMotion.ts
├── config/
│   └── navigation.ts
└── styles/
```

---

## 7. Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Breaking existing behavior | Phase in refactors; run manual/E2E after each phase |
| i18n regression | Keep both systems temporarily; migrate key-by-key |
| Performance regression | Measure bundle size and LCP before/after lazy loading |
| Dependency removal | Use dep analysis (e.g. `npx depcheck`) before removal |

---

## 8. Success Criteria

- [x] No unused dependencies in `package.json`
- [x] All external images use `ImageWithFallback`
- [x] ErrorBoundary in place with user-facing fallback
- [x] Type-safe i18n with `TranslationKeys`
- [x] Shared `Section`, `PrimaryButton`, `SecondaryButton` used across sections
- [ ] Lazy loading for at least Hero, Features, Pricing
- [x] `prefers-reduced-motion` respected
- [x] Stable `key` props in all list renders
- [ ] CTAs wired to navigation or handlers

---

## 9. Next Phase Roadmap

| Priority | Task | Phase | Status |
|----------|------|-------|--------|
| 1 | Shared `Section`, `PrimaryButton`, `SecondaryButton` | 2 | Done |
| 2 | Extract translations to `locales/*.json` | 2 | Done |
| 3 | Type-safe i18n (`TranslationKeys`) | 2 | Done |
| 4 | Nav config — single source | 2 | Done |
| 5 | Design tokens in theme.css | 2 | Done |
| 6 | Introduce react-router | 3 | Next |
| 7 | Lazy-load Hero, Features, Pricing | 3 | Next |
| 8 | Wire CTAs to href or onClick | 4 | Next |
| 9 | A11y audit — aria-label, focus states | 4 | Pending |
| 10 | Finish design token migration (CTA, Footer, Pricing) | 2 | Remaining |

---

## 10. Review Summary & Suggested Next Move

### Completed (Phases 1 & 2)

- **Resilience:** ErrorBoundary, ImageWithFallback, useReducedMotion
- **Data & i18n:** Translations in JSON, type-safe `TranslationKeys`
- **Structure:** Nav config, shared Section/buttons
- **Performance:** Context memoization, stable keys, unused deps removed

### Remaining Gaps

1. **Design tokens** — CTA, Footer, Pricing, Testimonials still use `violet-*`, `fuchsia-*` in places.
2. **Section usage** — Only Features uses `Section`; Benefits, Testimonials, Pricing could adopt it.
3. **PrimaryButton / SecondaryButton** — Only Hero uses them; CTA and Pricing still use raw buttons.

### Recommended Next Move

**Option A: Phase 3 — Scalability**
- Add react-router with routes `/`, `/demo`, `/pricing`
- Lazy-load sections with `React.lazy` + `Suspense`
- Improves TTI and prepares for multi-page app

**Option B: Phase 2 Cleanup — Finish What We Started**
- Migrate remaining violet/fuchsia to `var(--brand)` in CTA, Footer, Pricing, Testimonials
- Use `Section` in Testimonials and Pricing where layout fits
- Use `PrimaryButton` / `SecondaryButton` in CTA and Pricing
- Wire CTAs to `href="#pricing"` or placeholder handlers

**Recommendation:** Option B first (0.5–1 day). Clean up Phase 2 before scaling. Then proceed to Phase 3.

---

*Document version: 1.3*
