# Social Agent — Product Plan

**Branch:** `feature/social-agent`  
**Date:** February 2026  
**Scope:** AI-powered Social Intelligence — Listening, Analyzing, Trending, Publishing  
**Status:** Phase 0 done; Phase 1 placeholder done

---

## 0. Product Catalog (Prerequisite)

Vì Workflowez có **nhiều sản phẩm** (Advisor Agent, Social Intelligent, ...), cần tạo **Product Catalog** trước khi thêm trang giới thiệu từng sản phẩm.

### Navigation Flow

```
Trang chủ "Xem demo" → Product Catalog (/products) → Chọn sản phẩm → Trang sản phẩm cụ thể
```

| Route | Trang | Mô tả |
|-------|-------|-------|
| `/products` | Product Catalog | Danh sách sản phẩm; user click vào từng product card |
| `/products/advisor` | Advisor Agent | Demo AI Advisor (chat) — đã có từ feature/ai-advisor |
| `/products/social` | Social Intelligent | Giới thiệu + demo Social Agent |

### Thứ tự triển khai

1. **Product Catalog** (`/products`) — trang catalog liệt kê các sản phẩm
2. **Cập nhật flow** — Hero "Xem demo" → `/products` (thay vì `/demo`)
3. **Social Agent page** (`/products/social`) — trang giới thiệu Social Intelligent

---

## 1. Feature Summary (Social Agent)

| Item | Detail |
|------|--------|
| **Feature** | Social Agent — bộ công cụ AI cho Social Intelligence |
| **Goal** | Giới thiệu sản phẩm mới: nghe, phân tích, theo dõi xu hướng và xuất bản nội dung trên social |
| **Target users** | Người bán hàng, doanh nghiệp, KOL (Key Opinion Leaders) |
| **Value** | Lắng nghe, phân tích feedback từ người dùng/fans về chất lượng sản phẩm, nội dung — nhanh chóng và chính xác |

---

## 2. Core Capabilities

| Capability | Mô tả |
|------------|--------|
| **Listening** | Thu thập, lắng nghe phản hồi từ người dùng, fans trên các kênh social |
| **Analyzing** | Phân tích sentiment, chủ đề, insight từ feedback — chất lượng sản phẩm, nội dung |
| **Trending** | Theo dõi xu hướng, hot topics, viral content liên quan đến brand/sản phẩm |
| **Publishing** | Hỗ trợ tạo và đăng tải nội dung tối ưu dựa trên insight |

---

## 3. Use Cases

| User segment | Use case |
|--------------|----------|
| **Người bán hàng** | Theo dõi đánh giá sản phẩm, phản hồi khách hàng; tối ưu mô tả, hình ảnh |
| **Doanh nghiệp** | Lắng nghe brand sentiment, phân tích feedback từ campaigns; điều chỉnh chiến lược |
| **KOL** | Phân tích phản ứng fans với nội dung; tối ưu content calendar, thời điểm đăng |

---

## 4. Suggested Frontend Tasks

### Phase 0: Product Catalog (làm trước)

| # | Task | Status | Notes |
|---|------|--------|-------|
| 0.1 | Tạo Product Catalog page | Done | `/products` — grid product cards |
| 0.2 | Product cards | Done | Advisor Agent, Social Intelligent; link đến `/products/advisor`, `/products/social` |
| 0.3 | Cập nhật Hero "Xem demo" | Done | `to="/products"` |
| 0.4 | Redirect `/demo` | Done | `<Navigate to="/products/advisor" replace />` |

### Phase 1: Introduce Social Agent

| # | Task | Status | Notes |
|---|------|--------|-------|
| 1 | Social Agent page | Done | `/products/social` — placeholder với Listen/Analyze, Trend/Publish; "Coming soon" |
| 2 | i18n | Done | catalog.* trong en/vi; Social Agent dùng catalog.social, catalog.socialDesc |
| 3 | Product card trong catalog | Done | Card "Social Intelligent" link đến `/products/social` |

### Phase 2: Demo / Interaction

| # | Task | Status | Notes |
|---|------|--------|-------|
| 4 | Demo UI | Pending | Mock dashboard, sample insights, sentiment visualization |
| 5 | Integration | Pending | Kết nối API thực khi có backend |

---

## 5. Suggested File Structure

```
src/
├── app/pages/
│   ├── ProductCatalogPage.tsx   # /products — catalog
│   ├── AdvisorDemoPage.tsx       # /products/advisor (rename từ DemoPage)
│   └── SocialAgentPage.tsx      # /products/social — Social Intelligent
├── components/
│   ├── catalog/                 # Product cards, catalog layout
│   └── social-agent/            # Các component cho Social Agent
├── config/
│   └── products.ts              # Danh sách products: slug, title, desc, route
├── locales/
│   ├── en.json                  # + catalog.*, socialAgent.*
│   └── vi.json
```

---

## 6. Key Messages (Draft)

| Pillar | EN | VI |
|--------|-----|-----|
| Listen | Listen to what your audience says | Lắng nghe phản hồi từ khán giả |
| Analyze | Analyze sentiment and product feedback | Phân tích sentiment và feedback sản phẩm |
| Trend | Track trends and viral content | Theo dõi xu hướng và nội dung viral |
| Publish | Publish content that resonates | Xuất bản nội dung đúng insight |

---

## 7. Next Steps

1. **Phase 0:** Tạo Product Catalog (`/products`), product cards (Advisor Agent, Social Intelligent)
2. Cập nhật Hero "Xem demo" → `/products`
3. **Phase 1:** Tạo trang Social Agent (`/products/social`)
4. Thiết kế UI: 4 pillars, use cases theo user segment
5. Thêm i18n và nội dung copy

---

*Document version: 1.2*
