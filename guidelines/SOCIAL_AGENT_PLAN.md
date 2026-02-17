# Social Agent — Product Plan

**Branch:** `feature/social-agent`  
**Date:** February 2026  
**Scope:** AI-powered Social Intelligence — Listening, Analyzing, Trending, Publishing  
**Status:** Planning

---

## 0. Feature Summary

| Item | Detail |
|------|--------|
| **Feature** | Social Agent — bộ công cụ AI cho Social Intelligence |
| **Goal** | Giới thiệu sản phẩm mới: nghe, phân tích, theo dõi xu hướng và xuất bản nội dung trên social |
| **Target users** | Người bán hàng, doanh nghiệp, KOL (Key Opinion Leaders) |
| **Value** | Lắng nghe, phân tích feedback từ người dùng/fans về chất lượng sản phẩm, nội dung — nhanh chóng và chính xác |

---

## 1. Core Capabilities

| Capability | Mô tả |
|------------|--------|
| **Listening** | Thu thập, lắng nghe phản hồi từ người dùng, fans trên các kênh social |
| **Analyzing** | Phân tích sentiment, chủ đề, insight từ feedback — chất lượng sản phẩm, nội dung |
| **Trending** | Theo dõi xu hướng, hot topics, viral content liên quan đến brand/sản phẩm |
| **Publishing** | Hỗ trợ tạo và đăng tải nội dung tối ưu dựa trên insight |

---

## 2. Use Cases

| User segment | Use case |
|--------------|----------|
| **Người bán hàng** | Theo dõi đánh giá sản phẩm, phản hồi khách hàng; tối ưu mô tả, hình ảnh |
| **Doanh nghiệp** | Lắng nghe brand sentiment, phân tích feedback từ campaigns; điều chỉnh chiến lược |
| **KOL** | Phân tích phản ứng fans với nội dung; tối ưu content calendar, thời điểm đăng |

---

## 3. Suggested Frontend Tasks

### Phase 1: Introduce product

| # | Task | Status | Notes |
|---|------|--------|-------|
| 1 | Landing section hoặc page mới | Pending | Giới thiệu Social Agent: value prop, 4 pillars (Listen, Analyze, Trend, Publish) |
| 2 | i18n | Pending | Thêm bản dịch vi/en cho nội dung Social Agent |
| 3 | Routing / nav | Pending | Link từ landing hoặc nav đến trang/section Social Agent |

### Phase 2: Demo / Interaction

| # | Task | Status | Notes |
|---|------|--------|-------|
| 4 | Demo UI | Pending | Mock dashboard, sample insights, sentiment visualization |
| 5 | Integration | Pending | Kết nối API thực khi có backend |

---

## 4. Suggested File Structure

```
src/
├── app/pages/
│   └── SocialAgentPage.tsx    # /social-agent — landing + demo
├── components/
│   └── social-agent/          # Các component cho Social Agent
├── locales/
│   ├── en.json               # + socialAgent.*
│   └── vi.json
```

---

## 5. Key Messages (Draft)

| Pillar | EN | VI |
|--------|-----|-----|
| Listen | Listen to what your audience says | Lắng nghe phản hồi từ khán giả |
| Analyze | Analyze sentiment and product feedback | Phân tích sentiment và feedback sản phẩm |
| Trend | Track trends and viral content | Theo dõi xu hướng và nội dung viral |
| Publish | Publish content that resonates | Xuất bản nội dung đúng insight |

---

## 6. Next Steps

1. Xác định vị trí giới thiệu: section trong landing, hay trang riêng `/social-agent`
2. Thiết kế UI: 4 pillars, use cases theo user segment
3. Thêm i18n và nội dung copy
4. Implement Phase 1

---

*Document version: 1.0*
