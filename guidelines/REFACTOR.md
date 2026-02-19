# Workflowez — Refactoring Plan

**Scope:** `website/` — Vite + React landing page  
**Last updated:** February 2026

`[ ]` = pending

---

## 1. Pending Items

### Phase 2 Optional

- [x] Use `Section` in Testimonials, Pricing (Features already uses it)
- [x] Hero PrimaryButton — add `href="/#pricing"` for consistency

### Phase 3

- [x] **Lazy-load** — Page-level `React.lazy` + Suspense (Landing, ProductCatalog, Demo, SocialAgent)
- [x] **Folder restructure** — `layout/` (Header, Footer), `landing/` (Hero, Features, Benefits, Testimonials, Pricing, CTA)
- [x] **Vite manual chunks** — vendor-react, vendor-router, vendor-radix

### Phase 4 — Polish

- [x] i18n Footer links — brand, social aria-labels
- [x] A11y audit — aria-label (Header menu/lang, Footer social, SocialAgent tabs), focus-visible states
- [ ] Tests — unit (hooks/context), E2E (main flows)

### Phase 5 — Mobile & Design (remaining)

| # | Task | File(s) | Notes |
|---|------|---------|-------|
| 10 | Footer link touch targets | `Footer.tsx` | **Skip** — per CLAUDE.md Avoid section |
| 11 | ChatBox height responsive | `chat/ChatBox.tsx` | `min-h-[320px] h-[50vh] max-h-[480px]` |
| 12 | Social tab labels trên mobile | `SocialAgentPage.tsx` | Tooltip/aria-label hoặc label dưới icon |
| 13 | Staggered reveal / scroll animation | Hero, Features, Testimonials | Motion nhẹ (fade-in, slide) khi scroll |
| 15 | Color palette: cân nhắc đổi accent | `src/styles/theme.css` | Optional |
| 16 | Background: grain texture | `theme.css` hoặc global | `opacity: 0.03` — optional |
| 17 | Hover states: tăng cường | CTA, ProductCard | Optional |

---

## 2. Footer Touch Targets (item 10) — Deprecated

**Status:** Reverted. Do **not** implement — see `CLAUDE.md` → Avoid / Known Issues.  
Footer links: keep `hover:text-[var(--brand)]` only. Adding `min-h-[44px]` was reverted due to spacing concerns.

---

## 3. Remaining Issues (by dimension)

| Dimension | Issue | Action |
|-----------|-------|--------|
| **Reusability** | shadcn/ui mostly unused; Testimonials/Footer hardcoded | Extract to i18n; consider Section for more sections |
| **Scalability** | — | ✓ Lazy-load + vendor chunks done |
| **Resilience** | No loading states for future APIs | Add Suspense fallback when lazy-loading |
| **A11y** | — | ✓ aria-label + focus-visible done |

---

## 4. Reference

### Target File Structure (current)

```
src/
├── app/App.tsx
├── components/
│   ├── layout/       # Header, Footer
│   ├── landing/      # Hero, Features, Benefits, Testimonials, Pricing, CTA
│   ├── shared/       # Section, PrimaryButton, SecondaryButton, ImageWithFallback
│   ├── catalog/      # ProductCard, CustomerStoryCard
│   ├── chat/         # ChatBox, MessageList, ChatInput, etc.
│   ├── figma/        # ImageWithFallback
│   └── ui/           # shadcn (pruned)
├── context/LanguageContext.tsx
├── locales/vi.json, en.json
├── hooks/useReducedMotion.ts
├── config/navigation.ts
└── styles/
```

### Risk Mitigation

- **Breaking changes:** Phase refactors; manual/E2E after each phase
- **i18n regression:** Migrate key-by-key
- **Performance:** Measure bundle size and LCP before/after lazy loading
- **Deps:** Use `npx depcheck` before removal
