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

## 7. Phase 5 — Mobile & Design Consistency

*From audits: performance (scroll/profile), frontend-design skill, full-site mobile review (/, /products, /products/advisor, /products/social).*

### High Priority

| # | Task | File(s) | Notes |
|---|------|---------|-------|
| 1 | Pricing Pro card: `scale-105` → `md:scale-105` | `src/app/components/Pricing.tsx` | Tránh horizontal overflow trên mobile |
| 2 | Typography: thêm cặp font display + body | `src/styles/fonts.css`, `theme.css` | Tránh system font generic (Inter/Roboto) |
| 3 | Hero/Product h1: responsive text | `Hero.tsx`, `ProductCatalogPage.tsx` | Thêm `text-3xl sm:text-4xl` cho mobile |
| 4 | Section h2: responsive | `Section.tsx`, `Benefits.tsx` | `text-3xl sm:text-4xl md:text-5xl` |
| 5 | Chuẩn hóa buttons | `Header.tsx`, `ProductCard.tsx`, `DemoPage`, `SocialAgentPage` | Dùng PrimaryButton/SecondaryButton hoặc variant thống nhất |

### Medium Priority

| # | Task | File(s) | Notes |
|---|------|---------|-------|
| 6 | ProductCard padding mobile | `catalog/ProductCard.tsx` | `p-5 sm:p-6 lg:p-8` |
| 7 | CustomerStoryCard padding mobile | `catalog/CustomerStoryCard.tsx` | `px-4 py-8 sm:px-6 sm:py-10` ✓ |
| 8 | Testimonials card padding | `Testimonials.tsx` | `p-6 sm:p-8 lg:p-10` ✓ |
| 9 | Section spacing chuẩn hóa | `ProductCatalogPage`, `DemoPage`, `SocialAgentPage` | `py-10 md:py-16`; `mb-10 md:mb-12` |
| 10 | Footer link touch targets | `Footer.tsx` | `min-h-[44px]` hoặc `py-3` cho links |
| 11 | ChatBox height responsive | `chat/ChatBox.tsx` | `min-h-[320px] h-[50vh] max-h-[480px]` |
| 12 | Social tab labels trên mobile | `SocialAgentPage.tsx` | Tooltip/aria-label hoặc label dưới icon |
| 13 | Staggered reveal / scroll animation | Hero, Features, Testimonials | Motion nhẹ (fade-in, slide) khi scroll |

### Low Priority

| # | Task | File(s) | Notes |
|---|------|---------|-------|
| 14 | Header "Get Started" → PrimaryButton | `Header.tsx` | Dùng shared component thay custom style |
| 15 | Color palette: cân nhắc đổi accent | `src/styles/theme.css` | Nếu muốn tránh "purple on white" cliché |
| 16 | Background: grain texture | `theme.css` hoặc global | `opacity: 0.03` |
| 17 | Hover states: tăng cường | CTA, ProductCard | Surprise micro-interactions |

### Checklist Format (copy để track)

```
[ ] 1. Pricing scale-105 → md:scale-105
[ ] 2. Typography: font display + body
[ ] 3. Hero/Product h1 responsive
[ ] 4. Section h2 responsive
[ ] 5. Chuẩn hóa buttons
[ ] 6. ProductCard padding mobile
[x] 7. CustomerStoryCard padding mobile
[x] 8. Testimonials padding mobile
[ ] 9. Section spacing
[ ] 10. Footer touch targets
[ ] 11. ChatBox height responsive
[ ] 12. Social tab labels
[ ] 13. Staggered reveal
[ ] 14. Header Get Started → PrimaryButton
[ ] 15. Color palette (optional)
[ ] 16. Grain texture (optional)
[ ] 17. Hover states (optional)
```

---

*Doc v1.6 — added Phase 5 tasks from mobile & design audits*
