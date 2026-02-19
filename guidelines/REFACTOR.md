# Workflowez — Refactoring Plan

**Scope:** `website/` — Vite + React landing page  
**Last updated:** February 2026

`[ ]` = pending · `[x]` = done

---

## 1. Pending

### Phase 4 — Tests

#### 4.1 Test setup
- [x] **4.1.1** Add Vitest + React Testing Library — `npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom`
- [x] **4.1.2** Configure Vitest — `vitest.config.ts`, `setupTests.ts` with `@testing-library/jest-dom`
- [x] **4.1.3** Add test script — `package.json`: `"test": "vitest"`, `"test:run": "vitest run"`

#### 4.2 useReducedMotion
- [x] **4.2.1** Returns `false` when `prefers-reduced-motion` is not set
- [x] **4.2.2** Returns `true` when `prefers-reduced-motion: reduce` (mock `matchMedia`)
- [x] **4.2.3** Updates when media query `change` fires

#### 4.3 LanguageContext
- [ ] **4.3.1** `useLanguage` returns `t`, `language`, `setLanguage` when inside provider
- [ ] **4.3.2** `setLanguage("en")` updates `t` to English translations
- [ ] **4.3.3** `useLanguage` throws when used outside `LanguageProvider`

#### 4.4 useChat (mock mode — `useRealApi` false)
- [ ] **4.4.1** Initial state: welcome message when `initialMessage` provided
- [ ] **4.4.2** Initial state: empty messages when no `initialMessage`
- [ ] **4.4.3** `sendMessage` adds user message to list
- [ ] **4.4.4** `sendMessage` with `reset: true` resets to welcome + user message
- [ ] **4.4.5** `sendMessage` sets `isLoading` true during mock delay
- [ ] **4.4.6** Mock mode: adds assistant message from `mockResponses` pool after delay
- [ ] **4.4.7** `sendMessage` with empty/whitespace content does nothing
- [ ] **4.4.8** Welcome message updates when `initialMessage` changes (language switch)

#### 4.5 useChat (real API mode — mock `chatApi.sendMessage`)
- [ ] **4.5.1** Success: adds assistant message with API output
- [ ] **4.5.2** Error: adds error fallback message
- [ ] **4.5.3** Error: uses custom `errorFallback` when provided

#### 4.6 chatApi (optional — extractOutput)
- [ ] **4.6.1** Extracts `output` from n8n response shape
- [ ] **4.6.2** Extracts from nested `data.output`, `json.output`
- [ ] **4.6.3** Parses NDJSON streaming format

#### 4.7 E2E tests (Playwright)
- [ ] **4.7.1** Landing page loads, hero visible
- [ ] **4.7.2** Products catalog loads, cards clickable
- [ ] **4.7.3** Demo chat: send message, receive response (mock or real)

**Order:** 4.1 → 4.2–4.6 (parallel) → 4.7

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
