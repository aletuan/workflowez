# Workflowez — Refactoring Plan

**Scope:** `website/` — Vite + React landing page  
**Last updated:** February 2026

`[x]` = done · `[ ]` = pending

---

## 1. Status Summary

### Phase 1 & 2 — Completed

| Area | Done |
|------|------|
| **Resilience** | ErrorBoundary, ImageWithFallback, useReducedMotion |
| **i18n** | locales/vi.json, en.json; TranslationKeys; LanguageContext memo |
| **Structure** | Nav config, shared Section, PrimaryButton, SecondaryButton |
| **Design** | Design tokens (--brand, --section-radius, etc.); all components migrated |
| **CTAs** | CTA, Pricing, Footer → `#pricing`, `#features`; Hero SecondaryButton → `/products` |
| **Cleanup** | Unused deps removed; stable keys; ImageWithFallback for Hero/Benefits |

### Phase 2 Optional

- [ ] Use `Section` in Testimonials, Pricing (Features already uses it)
- [ ] Hero PrimaryButton — add `href="#pricing"` for consistency

### Phase 3 — Next

1. [ ] **Routing** — react-router (routes: `/`, `/demo`, `/pricing`)
2. [ ] **Lazy-load** — Hero, Features, Pricing with `React.lazy` + Suspense
3. [ ] **Folder restructure** — `layout/`, `landing/`, shared components
4. [ ] **Vite manual chunks** — vendor splitting

### Phase 4 — Polish

- [ ] i18n Footer links
- [ ] A11y audit — aria-label, focus states
- [ ] Tests — unit (hooks/context), E2E (main flows)

---

## 2. Remaining Issues (by dimension)

| Dimension | Issue | Action |
|-----------|-------|--------|
| **Reusability** | shadcn/ui mostly unused; Testimonials/Footer hardcoded | Extract to i18n; consider Section for more sections |
| **Complexity** | Repeated motion boilerplate | Optional: AnimatedSection, FadeInCard |
| **Scalability** | No routing, no code splitting, flat structure | Phase 3 |
| **Resilience** | No loading states for future APIs | Add Suspense fallback when lazy-loading |
| **A11y** | Missing aria-label on icon-only buttons | Phase 4 audit |

---

## 3. Target File Structure

```
src/
├── app/App.tsx
├── components/
│   ├── layout/       # Header, Footer
│   ├── landing/      # Hero, Features, Benefits, Testimonials, Pricing, CTA
│   ├── shared/       # Section, PrimaryButton, SecondaryButton, ImageWithFallback
│   └── ui/           # shadcn (pruned)
├── context/LanguageContext.tsx
├── locales/vi.json, en.json
├── hooks/useReducedMotion.ts
├── config/navigation.ts
└── styles/
```

---

## 4. Dependency Status

| Package | Status |
|---------|--------|
| react-router | Unused — keep for Phase 3 |
| recharts | Used (chart.tsx) |
| embla-carousel-react | Used |
| motion, lucide-react, @radix-ui/* | Used |

---

## 5. Risk Mitigation

- **Breaking changes:** Phase refactors; manual/E2E after each phase
- **i18n regression:** Migrate key-by-key
- **Performance:** Measure bundle size and LCP before/after lazy loading
- **Deps:** Use `npx depcheck` before removal

---

## 6. Success Criteria

- [x] No unused deps; ImageWithFallback for external images
- [x] ErrorBoundary; type-safe i18n; shared Section/buttons
- [x] prefers-reduced-motion; stable keys; CTAs wired
- [ ] Lazy loading (Hero, Features, Pricing)
- [ ] A11y audit

---

*Doc v1.5 — shortened from 378 to ~120 lines*
