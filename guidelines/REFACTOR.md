# Workflowez — Refactoring Plan

**Scope:** `website/` — Vite + React landing page · **Updated:** Feb 2026

`[ ]` pending · `[x]` done

---

## 1. Pending

### Phase 4 — Tests

| Phase | Status | Tasks |
|-------|--------|-------|
| **4.6** chatApi (optional) | [x] | 4.6.1 extract output, 4.6.2 nested `data.output`/`json.output`, 4.6.3 NDJSON parsing |
| **4.7** E2E (Playwright) | [ ] | 4.7.1 Landing, 4.7.2 Products, 4.7.3 Demo chat |
| **4.8** Coverage (≥80%) | [x] | 4.8.1 config tests · 4.8.2 chatApi error branches · 4.8.3 page smoke (skipped) |
| **4.9** CI unit test | [x] | Thêm `npm run test:run` vào deploy.yml |

### Phase 4.8 — Coverage tasks (optional, PRODUCT_POLICY: ≥80% new code)

| # | Task | File(s) | Notes |
|---|------|---------|-------|
| 4.8.1 | Config tests | `config/blog.ts`, `products.ts`, `chat.ts`, `navigation.ts` | Pure functions, easy to test |
| 4.8.2 | chatApi error paths | `services/chatApi.ts` | Mock fetch: 4xx/5xx, timeout, parse error, NDJSON error |
| 4.8.3 | Page smoke (optional) | `pages/*.tsx` | Shallow render with providers; low ROI vs 4.8.1–2 |

### Phase 5 — Mobile & Design (optional)

| # | Task | File(s) |
|---|------|---------|
| 11 | ChatBox height responsive | `chat/ChatBox.tsx` |
| 13 | Staggered reveal / scroll animation | Hero, Features, Testimonials |
| 15 | Color palette accent | `theme.css` |
| 16 | Background grain texture | `theme.css` |
| 17 | Hover states | CTA, ProductCard |

**Skipped (CLAUDE.md):** Footer touch targets, Social tab labels (aria-label done).

---

## 2. Completed

**Phase 4 — Tests:** 4.1 setup · 4.2 useReducedMotion · 4.3 LanguageContext · 4.4 useChat mock · 4.5 useChat real API · 4.6 chatApi extractOutput · 4.8 config + chatApi error paths · 4.9 CI unit test

**Phase 5 (earlier):** Items 1–9 (Pricing, typography, responsive, buttons, spacing)

**Phase 3:** Lazy-load, layout restructure, vendor chunks

**Phase 2:** Testimonials/Pricing, Hero CTA href

---

## 3. Reference

**Structure:** `layout/` Header, Footer · `landing/` Hero, Features, Benefits, Testimonials, Pricing, CTA · `shared/` Section, buttons, ImageWithFallback · `catalog/` ProductCard, CustomerStoryCard · `chat/` ChatBox, MessageList, ChatInput · `ui/` shadcn

**Risk:** Manual/E2E after refactors · i18n key-by-key · `npx depcheck` before dep removal

---

## 4. CI/CD (GitHub Actions)

| Pipeline | Unit test | E2E Playwright |
|----------|-----------|-----------------|
| `.github/workflows/deploy.yml` | ✅ `npm run test:run` | ❌ Không |

**Hiện tại:** Install → Unit test → Build → Deploy. Pre-commit (Husky) chạy `test:run` locally.

**Gợi ý:** Thêm job `test` vào deploy hoặc workflow riêng `ci.yml` để chạy `npm run test:run -- --coverage` trước build. E2E Playwright cần thêm step cài Playwright browsers.
