# Workflowez Project — Refactoring Analysis & Plan

**Date:** February 2026  
**Scope:** `website/` — Vite + React landing page  
**Focus:** Reusability, Complexity, Scalability, Resilience, React Best Practices

---

## 1. Executive Summary

The Workflowez landing page is a Vite + React app with 7 section components, i18n (vi/en), and 40+ shadcn/ui components. The analysis identifies **dead code**, **inconsistent patterns**, **missing resilience**, and **scalability bottlenecks**. This document provides a prioritized refactoring plan aligned with React best practices.

---

## 2. Current Architecture Overview

```
website/
├── src/
│   ├── app/
│   │   ├── App.tsx                 # Root: composes all sections
│   │   ├── components/             # Section components (7)
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Benefits.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── CTA.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── figma/
│   │   │   │   └── ImageWithFallback.tsx  # UNUSED
│   │   │   └── ui/                 # 40+ shadcn components (mostly unused by landing)
│   │   └── context/
│   │       └── LanguageContext.tsx # 200+ lines inline i18n
│   ├── styles/
│   └── main.tsx
├── package.json                    # MUI, react-router present but unused
└── vite.config.ts
```

---

## 3. Analysis by Dimension

### 3.1 Reusability

| Issue | Location | Impact |
|-------|----------|--------|
| **ImageWithFallback never used** | `figma/ImageWithFallback.tsx` | Hero, Benefits use raw `<img>` with external URLs; no error fallback |
| **shadcn/ui components unused** | `components/ui/*` | Button, Card, Badge exist but sections use raw `<button>`, inline styles |
| **Duplicate section patterns** | Features, Benefits, Pricing, Testimonials | Same motion + card layout repeated; no shared `Section`, `FeatureCard`, `PricingCard` |
| **Hardcoded content** | Testimonials, Footer | `avatars`, `authors` in Testimonials; Footer links (Features, Integrations) not in i18n |
| **Inconsistent styling** | All sections | Mix of `theme.css` vars and inline Tailwind (violet-*, fuchsia-*); no single design token source |

**Recommendations:**

- Use `ImageWithFallback` for all external images.
- Introduce shared `Section`, `SectionCard`, `PrimaryButton`, `SecondaryButton` that wrap shadcn or custom primitives.
- Extract Footer links and Testimonials author data into translations.
- Create a design token layer (CSS vars or Tailwind config) and migrate inline colors.

---

### 3.2 Complexity

| Issue | Location | Impact |
|-------|----------|--------|
| **Monolithic LanguageContext** | `LanguageContext.tsx` | 200+ lines of inline translations; hard to maintain and extend |
| **Weak typing** | `t: any` in context | No autocomplete or type safety for `t.hero.*`, `t.features.*` |
| **Repeated motion boilerplate** | Hero, Features, Benefits, etc. | `initial/animate/transition` repeated; no `AnimatedSection` or `FadeIn` wrapper |
| **Duplicate nav config** | Header.tsx | Nav items defined twice (desktop + mobile); single source needed |
| **Scattered magic values** | Multiple | `rounded-[2.5rem]`, `blur-[100px]`, etc.; should be design tokens |

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
| **No ErrorBoundary** | `App.tsx` | Uncaught errors crash entire app |
| **External images without fallback** | Hero, Benefits | Broken Unsplash URLs show broken image icon |
| **No loading states** | — | No skeleton or spinner for async content (future APIs) |
| **Animation without reduced-motion** | All motion components | Fails accessibility for `prefers-reduced-motion` users |
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
| **`key={index}` in lists** | Features, Benefits, Pricing, Testimonials | Unstable keys; reordering can cause bugs |
| **Buttons without handlers** | Hero, CTA, Pricing | Non-interactive; need `onClick` or `href` |
| **Hardcoded copy** | Hero line 31 | "Customer Value First" hardcoded; inconsistent with `t.hero.title_line2` |
| **State in context without memo** | LanguageContext | `value` object recreated each render; may cause unnecessary re-renders |
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
| `@mui/material`, `@emotion/*` | Unused | Remove |
| `react-router` | Unused | Keep for planned routing or remove |
| `react-dnd`, `react-dnd-html5-backend` | Unused | Remove |
| `recharts` | Unused (chart.tsx only) | Remove or lazy-load if chart needed |
| `react-slick` | Unused | Remove |
| `react-responsive-masonry` | Unused | Remove |
| `embla-carousel-react` | Used by carousel | Keep |
| `motion` | Used widely | Keep |
| `lucide-react` | Used | Keep |
| `@radix-ui/*` | Used by shadcn | Keep |

---

## 5. Refactoring Plan

### Phase 1: Quick Wins (1–2 days)

1. **Use ImageWithFallback** for Hero and Benefits images.
2. **Add ErrorBoundary** around `App` and provide fallback UI.
3. **Fix `key` props** — use `item.id` or generate slugs for lists.
4. **Memoize LanguageContext value** with `useMemo`.
5. **Remove unused deps** — MUI, react-dnd, react-slick, masonry, recharts (if unused).
6. **Add `prefers-reduced-motion`** handling for motion components.

### Phase 2: Structure & Reusability (3–5 days)

1. **Shared components:**
   - `Section` (title, subtitle, container)
   - `SectionCard` / `FeatureCard`
   - `PrimaryButton`, `SecondaryButton` (wrap shadcn `Button` or custom)
2. **Extract translations** to `locales/vi.json`, `locales/en.json`.
3. **Type-safe i18n:** `TranslationKeys`, `useTypedLanguage()`.
4. **Design tokens** — migrate violet/fuchsia to CSS variables.
5. **Nav config** — single array for desktop + mobile.

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

- [ ] No unused dependencies in `package.json`
- [ ] All external images use `ImageWithFallback`
- [ ] ErrorBoundary in place with user-facing fallback
- [ ] Type-safe i18n with `TranslationKeys`
- [ ] Shared `Section`, `SectionCard`, `PrimaryButton` used across sections
- [ ] Lazy loading for at least Hero, Features, Pricing
- [ ] `prefers-reduced-motion` respected
- [ ] Stable `key` props in all list renders
- [ ] CTAs wired to navigation or handlers

---

*Document version: 1.0*
