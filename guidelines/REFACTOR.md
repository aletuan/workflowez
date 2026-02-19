# Workflowez — Refactoring Plan

**Scope:** `website/` — Vite + React landing page  
**Last updated:** February 2026

`[ ]` = pending · `[x]` = done

---

## 1. Pending

### Phase 4 — Tests

- [ ] **Unit tests** — hooks (useChat, useReducedMotion), context (LanguageContext)
- [ ] **E2E tests** — main flows (landing, products, demo chat)

### Phase 5 — Mobile & Design (optional)

| # | Task | File(s) | Notes |
|---|------|---------|-------|
| 11 | ChatBox height responsive | `chat/ChatBox.tsx` | `min-h-[320px] h-[50vh] max-h-[480px]` |
| 13 | Staggered reveal / scroll animation | Hero, Features, Testimonials | Motion nhẹ (fade-in, slide) khi scroll |
| 15 | Color palette: cân nhắc đổi accent | `theme.css` | Optional |
| 16 | Background: grain texture | `theme.css` | `opacity: 0.03` — optional |
| 17 | Hover states: tăng cường | CTA, ProductCard | Optional |

**Skipped (see CLAUDE.md):** Item 10 Footer touch targets. Item 12 Social tab labels — done via aria-label in Phase 4.

---

## 2. Completed (reference)

- Phase 2 Optional: Section in Testimonials/Pricing, Hero CTA href
- Phase 3: Lazy-load, layout/landing restructure, vendor chunks
- Phase 4: i18n Footer (brand, social), A11y (aria-label, focus-visible)
- Phase 5: Items 1–9 (Pricing, typography revert, h1/h2 responsive, buttons, padding, section spacing)

---

## 3. Reference

### File Structure

```
src/app/components/
├── layout/    # Header, Footer
├── landing/   # Hero, Features, Benefits, Testimonials, Pricing, CTA
├── shared/    # Section, PrimaryButton, SecondaryButton, ImageWithFallback
├── catalog/   # ProductCard, CustomerStoryCard
├── chat/      # ChatBox, MessageList, ChatInput
└── ui/        # shadcn
```

### Risk Mitigation

- **Breaking changes:** Manual/E2E after refactors
- **i18n regression:** Migrate key-by-key
- **Deps:** Use `npx depcheck` before removal
