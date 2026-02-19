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
| 1 | Pricing Pro card: `scale-105` → `md:scale-105` | `src/app/components/Pricing.tsx` | ✓ [Chi tiết](#1-pricing-scale-105--mdscale-105--chi-tiết) |
| 2 | Typography: font display + body | `src/styles/fonts.css`, `theme.css` | ✓ [Chi tiết](#2-typography-font-display--body--chi-tiết) |
| 3 | Hero/Product h1 responsive | `Hero.tsx`, `ProductCatalogPage.tsx` | ✓ [Chi tiết](#3-heroproduct-h1-responsive--chi-tiết) |
| 4 | Section h2: responsive | `Section.tsx`, `Benefits.tsx` | ✓ [Chi tiết](#4-section-h2-responsive--chi-tiết--done) |
| 5 | Chuẩn hóa buttons | `Header.tsx`, `ProductCard.tsx`, `DemoPage`, `SocialAgentPage` | ✓ [xem chi tiết](#5-chuẩn-hóa-buttons) |

### 1. Pricing scale-105 → md:scale-105 — Chi tiết

**Vấn đề:** Pro Plan card có `scale-105` (phóng to 105%) áp dụng **mọi viewport**. Trên mobile, grid là single column (`grid-cols-1`), mỗi card full-width. Khi card bị scale 105%, nó vượt ra ngoài container → **horizontal overflow**, có thể gây scroll ngang hoặc cắt nội dung.

**Ví dụ:** Viewport 375px, container ~343px. Card scale 105% → 343 × 1.05 ≈ 360px → vượt ~17px.

**Giải pháp:** Thêm prefix `md:` — chỉ scale trên desktop (≥768px), khi grid là 3 cột và mỗi card có đủ không gian.

```tsx
// Trước (Pricing.tsx line 44)
className="... scale-105 z-10 ..."

// Sau
className="... md:scale-105 z-10 ..."
```

---

### 2. Typography: font display + body — Chi tiết

**Vấn đề:** `fonts.css` rỗng → site dùng **system font stack** (Arial, Helvetica, sans-serif trên nhiều OS). Theo frontend-design skill: tránh generic fonts (Inter, Roboto, Arial) để giao diện không giống "AI slop".

**Mục tiêu:** Thêm cặp font có tính phân biệt:
- **Display font** (heading): nét đặc trưng, dùng cho h1, h2
- **Body font** (paragraph): dễ đọc, dùng cho body, button, label

**Cách làm:** Trong `fonts.css` thêm `@font-face` (Google Fonts hoặc self-host), rồi khai báo trong `theme.css` hoặc `tailwind.css`:

```css
/* fonts.css */
@font-face {
  font-family: 'DisplayFont';
  src: url(...) or local(...);
}
@font-face {
  font-family: 'BodyFont';
  src: url(...) or local(...);
}
```

Và áp dụng qua `--font-display`, `--font-body` trong theme, hoặc `font-display` / `font-sans` trong Tailwind config.

**Gợi ý cặp font:** Clash Display + General Sans; Syne + Satoshi; Instrument Serif + DM Sans (chọn 1 cặp phù hợp brand).

---

### 3. Hero/Product h1 responsive — Chi tiết

**Vấn đề:** 
- **Hero:** `text-4xl sm:text-5xl lg:text-7xl` — trên mobile nhỏ (≤375px), `text-4xl` (36px) có thể vẫn lớn, chiếm nhiều dòng.
- **ProductCatalogPage:** `text-4xl md:text-5xl lg:text-6xl` — không có breakpoint nhỏ hơn, mobile luôn 36px.

**Mục tiêu:** Giảm kích thước h1 trên màn rất nhỏ để:
- Tiết kiệm chiều dọc
- Tránh line-break kỳ lạ
- Cân đối với padding

**Giải pháp:**

| File | Hiện tại | Đề xuất |
|------|----------|---------|
| `Hero.tsx` | `text-4xl sm:text-5xl lg:text-7xl` | `text-3xl sm:text-4xl md:text-5xl lg:text-7xl` — thêm step nhỏ cho mobile |
| `ProductCatalogPage.tsx` | `text-4xl md:text-5xl lg:text-6xl` | `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` |

→ Mobile nhỏ: 30px (text-3xl); sm: 36px; md: 48px; lg: 60–72px.

---

### 4. Section h2 responsive — Chi tiết ✓ Done

**Vấn đề:** 
- **Section.tsx** (dùng bởi Features): `text-4xl md:text-5xl` — mobile luôn 36px, không có breakpoint nhỏ hơn.
- **Benefits.tsx**: `text-4xl` cố định — không responsive, luôn 36px mọi viewport.

**Mục tiêu:** H2 section (Features, Benefits, v.v.) cần scale nhỏ hơn trên mobile để cân đối với h1 và tiết kiệm chiều dọc.

**Giải pháp đã áp dụng:** `text-3xl sm:text-4xl md:text-5xl`

| Breakpoint | Size | px |
|------------|------|-----|
| Mobile | text-3xl | 30px |
| sm (≥640px) | text-4xl | 36px |
| md (≥768px) | text-5xl | 48px |

---

### Medium Priority

| # | Task | File(s) | Notes |
|---|------|---------|-------|
| 6 | ProductCard padding mobile | `catalog/ProductCard.tsx` | `p-5 sm:p-6 lg:p-8` ✓ |
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
| 14 | Header "Get Started" → PrimaryButton | `Header.tsx` | ✓ (đã gộp vào task 5) |
| 15 | Color palette: cân nhắc đổi accent | `src/styles/theme.css` | Nếu muốn tránh "purple on white" cliché |
| 16 | Background: grain texture | `theme.css` hoặc global | `opacity: 0.03` |
| 17 | Hover states: tăng cường | CTA, ProductCard | Surprise micro-interactions |

### 5. Chuẩn hóa buttons — Chi tiết ✓ Done

**Chuẩn shared (PrimaryButton / SecondaryButton):**
- Padding: `px-8 py-4` (default), `px-5 py-2` (size=sm)
- Radius: `rounded-2xl`
- Font: `font-bold`
- Variants: `default` | `light` | `brand` | `cyan`

**Đã thực hiện:**

| Vị trí | File | Hiện tại | Đề xuất |
|--------|------|----------|---------|
| **Header "Get Started"** (desktop) | `Header.tsx` | ✓ `PrimaryButton variant="brand" size="sm" href="/#pricing"` |
| **Header "Get Started"** (mobile menu) | `Header.tsx` | ✓ `PrimaryButton variant="brand" href="/#pricing" className="w-full"` + onClick đóng menu |
| **ProductCard CTA** | `ProductCard.tsx` | ✓ Align styling: `px-5 py-2 rounded-2xl font-bold shadow-xl` (giữ trong Link) |
| **Demo CTA strip** | `DemoPage.tsx` | ✓ `PrimaryButton variant="brand" size="sm" to="/#pricing"` |
| **Social CTA strip** | `SocialAgentPage.tsx` | ✓ `PrimaryButton variant="cyan" size="sm" to="/#pricing"` |

**Giữ nguyên:** ChatInput send button (form submit trong input bar) — context khác.

---

### Checklist Format (copy để track)

```
[x] 1. Pricing scale-105 → md:scale-105
[x] 2. Typography: font display + body
[x] 3. Hero/Product h1 responsive
[x] 4. Section h2 responsive
[x] 5. Chuẩn hóa buttons
[x] 6. ProductCard padding mobile
[x] 7. CustomerStoryCard padding mobile
[x] 8. Testimonials padding mobile
[ ] 9. Section spacing
[ ] 10. Footer touch targets
[ ] 11. ChatBox height responsive
[ ] 12. Social tab labels
[ ] 13. Staggered reveal
[x] 14. Header Get Started → PrimaryButton
[ ] 15. Color palette (optional)
[ ] 16. Grain texture (optional)
[ ] 17. Hover states (optional)
```

---

*Doc v1.6 — added Phase 5 tasks from mobile & design audits*
