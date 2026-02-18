# Hướng Dẫn Hỗ Trợ Sản Phẩm & Xử Lý Sự Cố Workflowez

**Phiên bản tài liệu:** 1.0
**Ngày hiệu lực:** 18/02/2026
**Bộ phận soạn thảo:** Customer Success & Kỹ thuật
**Phê duyệt bởi:** Tổng Giám Đốc

---

## Mục Lục

1. [Tổng quan Hỗ trợ](#1-tổng-quan-hỗ-trợ)
2. [Kênh Hỗ trợ & Liên hệ](#2-kênh-hỗ-trợ--liên-hệ)
3. [Cấp độ Hỗ trợ & SLA](#3-cấp-độ-hỗ-trợ--sla)
4. [Quản lý Vòng đời Ticket](#4-quản-lý-vòng-đời-ticket)
5. [Phương pháp Xử lý Sự cố Chung](#5-phương-pháp-xử-lý-sự-cố-chung)
6. [Vấn đề Tài khoản & Xác thực](#6-vấn-đề-tài-khoản--xác-thực)
7. [Xử lý Sự cố Workflow Builder](#7-xử-lý-sự-cố-workflow-builder)
8. [Xử lý Sự cố AI Advisor](#8-xử-lý-sự-cố-ai-advisor)
9. [Xử lý Sự cố Tích hợp & Webhook](#9-xử-lý-sự-cố-tích-hợp--webhook)
10. [Xử lý Sự cố API](#10-xử-lý-sự-cố-api)
11. [Vấn đề Hiệu suất & Độ tin cậy](#11-vấn-đề-hiệu-suất--độ-tin-cậy)
12. [Vấn đề Thanh toán & Đăng ký](#12-vấn-đề-thanh-toán--đăng-ký)
13. [Yêu cầu Dữ liệu & Quyền riêng tư](#13-yêu-cầu-dữ-liệu--quyền-riêng-tư)
14. [Quy trình Leo thang](#14-quy-trình-leo-thang)
15. [Tài nguyên Tự phục vụ](#15-tài-nguyên-tự-phục-vụ)
16. [Giới hạn Đã biết & Cách giải quyết](#16-giới-hạn-đã-biết--cách-giải-quyết)

---

## 1. Tổng quan Hỗ trợ

### 1.1 Mục đích

Hướng dẫn Hỗ trợ Sản phẩm & Xử lý Sự cố này ("Hướng dẫn") là tài liệu tham chiếu toàn diện cho nhóm Customer Success (CS), Kỹ sư Hỗ trợ và Sản phẩm tại Workflowez khi hỗ trợ khách hàng về vấn đề kỹ thuật, câu hỏi thanh toán và thắc mắc về sản phẩm. Đây cũng là tài liệu nguồn được sử dụng để xây dựng và duy trì trung tâm hỗ trợ hướng tới khách hàng.

### 1.2 Triết lý Hỗ trợ

Tại Workflowez, hỗ trợ không phải là trung tâm chi phí — đây là trải nghiệm sản phẩm. Cách khách hàng cảm thấy khi có sự cố quan trọng không kém cách họ cảm thấy khi mọi thứ hoạt động tốt. Chúng tôi được dẫn dắt bởi:

- **Giải quyết Ngay lần Đầu (FCR):** Giải quyết vấn đề hoàn toàn trong lần tương tác đầu tiên bất cứ khi nào có thể
- **Minh bạch:** Nếu không thể giải quyết ngay, chúng tôi thông báo cho khách hàng những gì chúng tôi biết, không biết và đang làm gì về điều đó
- **Trách nhiệm Sở hữu:** Người tiếp nhận ticket sở hữu nó cho đến khi được giải quyết hoặc leo thang chính thức — không khách hàng nào bị chuyển đi mà không có bàn giao rõ ràng
- **Truyền thông Chủ động:** Chúng tôi thông báo cho khách hàng về các vấn đề đã biết và bảo trì theo kế hoạch trước khi họ tự phát hiện vấn đề
- **Tư duy Nguyên nhân Gốc rễ:** Chúng tôi sửa triệu chứng và điều tra nguyên nhân — các vấn đề tái diễn là lỗi cần sửa, không phải ticket cần đóng đi đóng lại

### 1.3 Phạm vi áp dụng

Hướng dẫn này bao gồm tất cả sản phẩm và dịch vụ Workflowez:
- Nền tảng SaaS Workflowez (workflow builder, execution engine, dashboards)
- Sản phẩm AI Advisor
- Sản phẩm Social Intelligent
- API Công khai Workflowez
- Các tích hợp bên thứ ba được Workflowez hỗ trợ

---

## 2. Kênh Hỗ trợ & Liên hệ

### 2.1 Kênh Hướng tới Khách hàng

| Kênh | Địa chỉ / Đường dẫn | Khả dụng | Phù hợp nhất cho |
|------|---------------------|---------|-----------------|
| **Chat trong sản phẩm** | Biểu tượng chat trong dashboard | Giờ làm việc (ICT) | Câu hỏi nhanh, hướng dẫn xử lý |
| **Email hỗ trợ** | support@workflowez.com | 24/7 (phản hồi theo SLA) | Vấn đề chi tiết, đính kèm file, audit trail |
| **Trung tâm Hỗ trợ** | help.workflowez.com | 24/7 (tự phục vụ) | Hướng dẫn, FAQ, release notes |
| **Trang Trạng thái** | status.workflowez.com | 24/7 (tự phục vụ) | Trạng thái nền tảng, lịch sử sự cố |
| **Diễn đàn Cộng đồng** | community.workflowez.com | 24/7 (hỗ trợ cộng đồng) | Thực hành tốt nhất, thảo luận cộng đồng |
| **Slack riêng tư** | Theo lời mời (chỉ Enterprise) | Giờ làm việc (ICT) | Tài khoản Enterprise — cộng tác thời gian thực |
| **Cuộc gọi điện thoại/Video** | Lên lịch qua nhóm CS | Giờ làm việc (ICT) | Enterprise — onboarding phức tạp, vấn đề nghiêm trọng |

### 2.2 Kênh Hỗ trợ Nội bộ

| Kênh | Liên hệ | Mục đích |
|------|---------|---------|
| **#support-triage** (Slack) | Nhóm CS | Phân loại nội bộ và thảo luận về ticket đang hoạt động |
| **#engineering-oncall** (Slack) | Kỹ sư on-call | Leo thang vấn đề kỹ thuật P0/P1 |
| **support@workflowez.com** | Hộp thư CS | Tiếp nhận ticket khách hàng |
| **PagerDuty** | Luân phiên on-call | Cảnh báo sự cố P0 ngoài giờ |

### 2.3 Giờ Làm việc

Giờ làm việc tiêu chuẩn của Workflowez cho hỗ trợ có nhân viên:
- **Thứ Hai–Thứ Sáu, 08:00–18:00 ICT (GMT+7)**
- Ngoại trừ ngày nghỉ lễ công cộng của Việt Nam và các giai đoạn đóng băng thay đổi được chỉ định

Khách hàng Enterprise có SLA bao phủ 24/7 được hỗ trợ ngoài giờ qua luân phiên on-call chuyên biệt.

---

## 3. Cấp độ Hỗ trợ & SLA

### 3.1 Cấp độ Hỗ trợ theo Gói

| Tính năng | Starter | Pro | Business | Enterprise |
|-----------|---------|-----|----------|------------|
| Truy cập Trung tâm Hỗ trợ | ✅ | ✅ | ✅ | ✅ |
| Diễn đàn Cộng đồng | ✅ | ✅ | ✅ | ✅ |
| Hỗ trợ qua Email | ✅ | ✅ | ✅ | ✅ |
| Chat trong sản phẩm | ❌ | ✅ | ✅ | ✅ |
| Hàng đợi ưu tiên | ❌ | ❌ | ✅ | ✅ |
| CS Manager chuyên biệt | ❌ | ❌ | ❌ | ✅ |
| Kênh Slack riêng tư | ❌ | ❌ | ❌ | ✅ |
| Cuộc gọi onboarding theo lịch | ❌ | ❌ | ✅ (1/quý) | ✅ (hàng tháng) |
| Bao phủ on-call 24/7 | ❌ | ❌ | ❌ | ✅ |

### 3.2 SLA Thời gian Phản hồi theo Mức độ & Gói

| Mức độ | Starter | Pro | Business | Enterprise |
|--------|---------|-----|----------|------------|
| **P0 — Nghiêm trọng** | 4 giờ | 2 giờ | 1 giờ | 15 phút |
| **P1 — Cao** | 1 ngày làm việc | 4 giờ | 2 giờ | 1 giờ |
| **P2 — Trung bình** | 3 ngày làm việc | 2 ngày làm việc | 1 ngày làm việc | 4 giờ |
| **P3 — Thấp** | 5 ngày làm việc | 3 ngày làm việc | 2 ngày làm việc | 1 ngày làm việc |

### 3.3 Phân loại Mức độ Nghiêm trọng

**P0 — Nghiêm trọng**
- Hoàn toàn không thể truy cập nền tảng Workflowez
- Mất dữ liệu hoặc hỏng dữ liệu ảnh hưởng đến workflow sản xuất
- Vi phạm bảo mật hoặc truy cập trái phép vào dữ liệu khách hàng
- Tất cả workflow ngừng thực thi mà không có cách giải quyết

**P1 — Cao**
- Workflow builder cốt lõi không tải hoặc không lưu được
- Các lần thực thi workflow thất bại cho > 50% lần chạy
- AI Advisor hoàn toàn không phản hồi
- API trả về lỗi 5xx cho các endpoint quan trọng
- Một tích hợp quan trọng bị hỏng hoàn toàn

**P2 — Trung bình**
- Workflow riêng lẻ thất bại không thường xuyên
- Tích hợp không quan trọng bị hỏng với cách giải quyết một phần có sẵn
- Dashboard không hiển thị dữ liệu chính xác
- Hiệu suất suy giảm đáng kể (> 3× thời gian phản hồi bình thường)
- Lỗi UI ngăn truy cập tính năng phụ

**P3 — Thấp**
- Vấn đề thẩm mỹ (phần tử UI không căn chỉnh, nhãn không chính xác)
- Yêu cầu tính năng hoặc gợi ý cải tiến
- Sai sót tài liệu
- Suy giảm hiệu suất nhỏ (< 50% chậm hơn)
- Câu hỏi về cách hoạt động của tính năng

---

## 4. Quản lý Vòng đời Ticket

### 4.1 Trạng thái Ticket

```
Mới → Đã phân loại → Đang xử lý → Chờ khách hàng → Đã giải quyết → Đóng
```

| Trạng thái | Mô tả | Người sở hữu |
|------------|-------|-------------|
| **Mới** | Ticket đã nhận, chưa được xem xét | Hệ thống |
| **Đã phân loại** | Mức độ được gán, CS agent được gán | CS Agent |
| **Đang xử lý** | Đang được điều tra hoặc xử lý tích cực | CS Agent / Kỹ sư Hỗ trợ |
| **Chờ Khách hàng** | Đang chờ thông tin hoặc xác nhận từ khách hàng | Khách hàng |
| **Chờ Kỹ thuật** | Đã leo thang lên Kỹ thuật; chờ sửa hoặc điều tra | Kỹ thuật |
| **Đã giải quyết** | Vấn đề đã sửa hoặc cung cấp cách giải quyết; khách hàng xác nhận hoặc tự động đóng | CS Agent |
| **Đóng** | Xác nhận giải quyết; ticket được lưu trữ | Hệ thống |

### 4.2 Tiếp nhận & Phân loại Ticket (Quy trình Nhóm CS)

1. **Nhận** — Ticket vào hàng đợi qua email, chat trong sản phẩm hoặc Slack
2. **Xác nhận** — Gửi xác nhận tự động trong vòng 5 phút; xác nhận cá nhân trong SLA
3. **Phân loại** — Gán mức độ (P0–P3) và danh mục (Tài khoản, Workflow, AI, API, Thanh toán, v.v.)
4. **Tái tạo** — Cố gắng tái tạo vấn đề sử dụng mô tả của khách hàng và thông tin môi trường
5. **Điều tra** — Kiểm tra giám sát nội bộ, log và trang trạng thái về các vấn đề đã biết
6. **Phản hồi** — Cung cấp phản hồi thực chất đầu tiên trong SLA: giải pháp, bước tiếp theo hoặc timeline
7. **Leo thang khi cần** — Nếu vấn đề cần Kỹ thuật, leo thang theo Mục 14

### 4.3 Thông tin Cần thu thập Khi Tiếp nhận

Khi khách hàng liên hệ hỗ trợ, thu thập thông tin sau trước khi điều tra sâu:

**Bắt buộc:**
- [ ] Tên và email / ID tài khoản khách hàng
- [ ] Gói đăng ký (Starter / Pro / Business / Enterprise)
- [ ] Mô tả vấn đề theo cách diễn đạt của khách hàng
- [ ] Vấn đề bắt đầu khi nào?
- [ ] Vấn đề ảnh hưởng đến tất cả người dùng trên tài khoản hay người dùng cụ thể?
- [ ] Các bước tái tạo

**Theo tình huống:**
- [ ] Trình duyệt / HĐH / thiết bị (cho vấn đề UI)
- [ ] ID hoặc tên workflow (cho vấn đề thực thi workflow)
- [ ] Endpoint API và payload request/response (cho vấn đề API)
- [ ] Tên và phiên bản tích hợp (cho vấn đề tích hợp)
- [ ] Thông báo lỗi (văn bản chính xác hoặc screenshot)
- [ ] ID lần chạy workflow hoặc timestamp thực thi bị ảnh hưởng

### 4.4 Chính sách Tự động Đóng

Các ticket ở trạng thái **Chờ Khách hàng** được tự động đóng sau:
- **7 ngày** cho ticket P2/P3 (với nhắc nhở gửi vào ngày 5)
- **3 ngày** cho ticket P0/P1 (với nhắc nhở gửi vào ngày 2)

Khách hàng có thể mở lại ticket đã đóng trong vòng 30 ngày bằng cách trả lời email ticket. Sau 30 ngày, cần mở ticket mới.

---

## 5. Phương pháp Xử lý Sự cố Chung

### 5.1 Khung DARC

Hỗ trợ Workflowez sử dụng **khung DARC** cho tất cả xử lý sự cố:

| Bước | Tên | Mô tả |
|------|-----|-------|
| **D** | Define (Xác định) | Xác định rõ vấn đề: điều gì đang thất bại, cho ai, khi nào và trong điều kiện nào |
| **A** | Assess (Đánh giá) | Thu thập thông tin: log, screenshot, các bước tái tạo, chi tiết môi trường |
| **R** | Resolve (Giải quyết) | Áp dụng giải pháp khả năng nhất; kiểm tra để xác nhận giải quyết |
| **C** | Close (Đóng) | Ghi lại giải quyết, cập nhật cơ sở kiến thức và đóng ticket |

### 5.2 Kiểm tra Đầu tiên (Trước Điều tra Sâu)

Trước khi điều tra bất kỳ vấn đề kỹ thuật nào, luôn xác nhận:

1. **Trạng thái nền tảng:** Kiểm tra status.workflowez.com cho các sự cố đang hoạt động
2. **Cache trình duyệt/ứng dụng:** Xóa cache và cookie trình duyệt; thử trong cửa sổ ẩn danh/riêng tư
3. **Mạng:** Thử từ mạng khác (ví dụ: điểm phát wifi di động thay vì VPN công ty)
4. **Trạng thái tài khoản:** Xác nhận đăng ký của khách hàng đang hoạt động và không bị tạm ngưng
5. **Thay đổi gần đây:** Hỏi xem khách hàng có thực hiện thay đổi nào về workflow, tích hợp hoặc cài đặt trong 24 giờ trước khi vấn đề bắt đầu
6. **Quyền hạn:** Xác nhận người dùng có vai trò/quyền cần thiết cho hành động họ đang cố gắng thực hiện

Các kiểm tra này giải quyết khoảng 30% ticket mà không cần sự tham gia của Kỹ thuật.

---

## 6. Vấn đề Tài khoản & Xác thực

### 6.1 Không Thể Đăng nhập

**Triệu chứng:** Trang đăng nhập trả về lỗi, vòng lặp chuyển hướng hoặc trang trắng sau khi nhập thông tin.

**Giải pháp phổ biến:**

| Nguyên nhân | Giải pháp |
|-------------|-----------|
| Sai mật khẩu | Khởi tạo đặt lại mật khẩu qua "Quên Mật khẩu" trên trang đăng nhập |
| Tài khoản bị khóa (5 lần thất bại) | Mở khóa tài khoản trong admin panel; khách hàng nhận email mở khóa |
| Lỗi cấu hình SSO | Kiểm tra cài đặt SSO trong Cài đặt Tổ chức; xác minh metadata IdP hiện tại |
| Trình duyệt chặn cookie | Yêu cầu khách hàng bật cookie cho workflowez.com; thử trong chế độ ẩn danh |
| Tài khoản đã xóa | Nếu trong vòng 30 ngày, khôi phục từ soft-delete; sau 30 ngày, liên hệ Kỹ thuật |

### 6.2 Vấn đề Xác thực Hai Yếu tố (2FA)

**Mất ứng dụng xác thực / Không nhận được mã 2FA:**
1. Khách hàng gửi xác minh danh tính (email từ địa chỉ đã đăng ký + 4 số cuối phương thức thanh toán hoặc ngày tạo tài khoản)
2. CS agent xác minh danh tính trong admin panel
3. CS agent tạm thời vô hiệu hóa 2FA cho tài khoản
4. Khách hàng bật lại 2FA với ứng dụng xác thực mới
5. CS agent ghi lại hành động xác minh danh tính trong ticket

### 6.3 Vấn đề Vai trò & Quyền Người dùng

**Triệu chứng:** Người dùng có thể đăng nhập nhưng không thể truy cập các tính năng họ nên có.

**Các bước giải quyết:**
1. Xác nhận vai trò được gán của người dùng trong Tổ chức → Thành viên
2. Xem xét cấp quyền cần thiết của tính năng (tham chiếu Ma trận Quyền hạn trong Trung tâm Hỗ trợ)
3. Kiểm tra xem gói workspace có bao gồm tính năng người dùng đang cố truy cập không
4. Nếu vai trò có vẻ đúng, yêu cầu người dùng đăng xuất và đăng nhập lại (thay đổi vai trò cần làm mới phiên)

### 6.4 Vấn đề SSO / SAML

**Các lỗi SSO phổ biến và giải pháp:**

| Lỗi | Nguyên nhân có thể | Giải pháp |
|-----|-------------------|-----------|
| "Invalid SAML response" | Metadata IdP lỗi thời | Tải lại và tải lên metadata IdP trong cài đặt SSO |
| "User not found" | Không khớp thuộc tính email | Xác minh ánh xạ thuộc tính SAML: trường email phải khớp thuộc tính mong đợi của Workflowez |
| "SSO not configured" | Domain chưa được xác minh | Hoàn thành xác minh domain trong Cài đặt Tổ chức trước khi bật SSO |
| Vòng lặp chuyển hướng | ACS URL không chính xác trong IdP | Xác nhận ACS URL trong cài đặt SSO Workflowez khớp với cấu hình trong IdP |

---

## 7. Xử lý Sự cố Workflow Builder

### 7.1 Workflow Không Lưu được

**Triệu chứng:** Nút "Lưu" bị mờ, spinner khi lưu, toast lỗi khi thử lưu.

**Giải pháp phổ biến:**

| Nguyên nhân | Giải pháp |
|-------------|-----------|
| Phiên hết hạn | Tải lại trang; đăng nhập lại |
| Lỗi xác thực | Kiểm tra cấu hình node chưa hoàn chỉnh (chỉ báo đỏ trên các node) |
| Xung đột chỉnh sửa đồng thời | Làm mới để lấy phiên bản mới nhất; áp dụng lại thay đổi gần đây |
| Workflow quá lớn | Workflow vượt quá 500 node đạt giới hạn kích thước; chia thành sub-workflow |
| Gián đoạn mạng | Kiểm tra kết nối; thử lại lưu sau khi xác nhận kết nối ổn định |

### 7.2 Thất bại Thực thi Workflow

**Bước 1: Xác định loại lỗi**

| Loại Lỗi | Mô tả | Nơi Tìm |
|----------|-------|---------|
| **Lỗi trigger** | Workflow không bao giờ bắt đầu | Log node trigger; lịch sử giao webhook |
| **Lỗi node hành động** | Bước cụ thể thất bại | Log thực thi → node thất bại → thông báo lỗi |
| **Lỗi thông tin xác thực/auth** | Dịch vụ ngoài từ chối thông tin xác thực | Cấu hình thông tin xác thực; kiểm tra token dịch vụ hết hạn |
| **Lỗi ánh xạ dữ liệu** | Trường mong đợi không tìm thấy trong dữ liệu đầu vào | Kiểm tra dữ liệu từ node trước; xem lại ánh xạ trường |
| **Timeout** | Node mất quá lâu để phản hồi | Kiểm tra trạng thái dịch vụ đích; tăng timeout nếu có thể cấu hình |
| **Rate limit** | Dịch vụ ngoài trả về 429 | Kiểm tra giới hạn rate trên dịch vụ bên thứ ba; triển khai độ trễ |

**Bước 2: Đọc log thực thi**
- Điều hướng đến Workflow → Lịch sử Thực thi → [lần chạy thất bại]
- Mở rộng node thất bại để xem dữ liệu đầu vào, đầu ra và thông báo lỗi
- Thông báo lỗi từ dịch vụ ngoài được truyền trực tiếp — điều này thường chứa nguyên nhân gốc rễ

**Bước 3: Các giải pháp phổ biến theo mã lỗi**

| Mã HTTP | Ý nghĩa | Giải pháp |
|---------|---------|-----------|
| 400 Bad Request | Yêu cầu không hợp lệ / dữ liệu không hợp lệ | Xem lại ánh xạ body request; kiểm tra các trường bắt buộc |
| 401 Unauthorized | Thông tin xác thực không hợp lệ hoặc hết hạn | Kết nối lại tích hợp / làm mới API token |
| 403 Forbidden | Thông tin xác thực hợp lệ nhưng không đủ quyền | Kiểm tra phạm vi quyền trên ứng dụng/tài khoản đã kết nối |
| 404 Not Found | Tài nguyên không tồn tại | Xác minh ID, URL hoặc tham chiếu bản ghi trong ánh xạ |
| 408 / Timeout | Đích không phản hồi kịp thời | Thử lại; kiểm tra tình trạng dịch vụ đích |
| 422 Unprocessable | Cấu trúc dữ liệu không hợp lệ | Xem lại loại và định dạng trường mà API đích mong đợi |
| 429 Too Many Requests | Bị giới hạn rate bởi dịch vụ đích | Thêm node delay; giảm tần suất thực thi |
| 500 / 502 / 503 | Lỗi phía dịch vụ đích | Chờ và thử lại; kiểm tra trang trạng thái dịch vụ đích |

### 7.3 Trigger Không Kích hoạt

**Webhook trigger không nhận sự kiện:**
1. Xác minh URL webhook đã được nhập đúng trong hệ thống bên thứ ba
2. Kiểm tra log giao webhook Workflowez (Cài đặt → Webhooks → Lịch sử Giao)
3. Gửi sự kiện test từ hệ thống bên thứ ba; quan sát xem nó có xuất hiện trong log giao không
4. Nếu sự kiện đến nhưng không kích hoạt thực thi: kiểm tra bộ lọc và điều kiện trigger
5. Nếu không có sự kiện nào đến: vấn đề ở cấu hình bên thứ ba, không phải Workflowez

**Trigger lịch không chạy đúng giờ:**
1. Xác nhận biểu thức lịch là đúng (sử dụng công cụ kiểm tra biểu thức cron trong UI)
2. Kiểm tra cài đặt múi giờ workflow khớp với múi giờ lịch dự định
3. Xem lại lịch sử thực thi xem các lần chạy trước có đúng giờ không
4. Kiểm tra xem tài khoản có trong hạn ngạch thực thi cho kỳ thanh toán không

### 7.4 Lỗi Logic Workflow

**Phân nhánh điều kiện không định tuyến đúng:**
1. Bật "chế độ debug" trên workflow để kiểm tra dữ liệu tại mỗi điểm phân nhánh
2. Xác minh cú pháp biểu thức điều kiện (tham chiếu Hướng dẫn Biểu thức trong Trung tâm Hỗ trợ)
3. Kiểm tra kiểu dữ liệu: so sánh chuỗi `"true"` với boolean `true` sẽ thất bại âm thầm
4. Sử dụng công cụ kiểm tra biểu thức trong cấu hình node để xác nhận điều kiện với dữ liệu mẫu

---

## 8. Xử lý Sự cố AI Advisor

### 8.1 AI Advisor Không Phản hồi

**Triệu chứng:** Đầu vào chat đã gửi, không có phản hồi; chỉ báo tải quay vô thời hạn; thông báo lỗi trong chat.

**Giải pháp phổ biến:**

| Nguyên nhân | Giải pháp |
|-------------|-----------|
| Timeout dịch vụ AI | Tải lại trang; bắt đầu cuộc trò chuyện mới |
| Vượt quá cửa sổ ngữ cảnh | Các cuộc trò chuyện rất dài có thể vượt quá giới hạn mô hình; bắt đầu cuộc trò chuyện mới |
| Proxy mạng chặn | Tường lửa công ty có thể chặn kết nối WebSocket; thêm `*.workflowez.com` vào whitelist |
| Xung đột tiện ích mở rộng trình duyệt | Tắt ad-blocker hoặc tiện ích mở rộng quyền riêng tư; thử trong chế độ ẩn danh |
| Sự cố nhà cung cấp AI | Kiểm tra trang trạng thái của nhà cung cấp AI; chờ giải quyết từ upstream |

### 8.2 Phản hồi AI Không Chính xác hoặc Bịa đặt (Hallucination)

**Mô tả:** AI Advisor tạo ra câu trả lời sai thực tế, lỗi thời hoặc không liên quan.

**Những gì nên nói với khách hàng:**
- Các mô hình ngôn ngữ AI có thể tạo ra đầu ra không chính xác — đây là đặc điểm đã biết của AI tạo sinh
- Phản hồi của AI Advisor nên được coi là điểm khởi đầu, không phải thẩm quyền cuối cùng
- Đối với các quyết định quan trọng, luôn xác minh thông tin do AI tạo ra từ các nguồn có thẩm quyền

**Các hành động cần thực hiện:**
1. Yêu cầu khách hàng cung cấp câu hỏi đã được đặt và phản hồi không chính xác đã nhận
2. Ghi lại ví dụ trong bộ theo dõi phản hồi AI (công cụ nội bộ) để nhóm Sản phẩm xem xét
3. Nếu lỗi có hệ thống (ví dụ: thông tin sai về một chủ đề cụ thể liên tục), leo thang lên Sản phẩm như vấn đề P2

### 8.3 Vấn đề Ngôn ngữ hoặc Giọng điệu AI Advisor

**Triệu chứng:** AI phản hồi bằng ngôn ngữ sai, sử dụng giọng điệu không phù hợp hoặc bỏ qua hướng dẫn hệ thống.

**Giải pháp:**
1. Xác minh cài đặt ngôn ngữ trong sản phẩm (Cài đặt → Ngôn ngữ)
2. Xác minh persona và system prompt đã được cấu hình của AI Advisor (cho triển khai tùy chỉnh)
3. Nếu AI liên tục bỏ qua hướng dẫn hệ thống, thu thập ví dụ và leo thang lên Kỹ thuật
4. Đối với vấn đề ngôn ngữ: đảm bảo cuộc trò chuyện được bắt đầu bằng ngôn ngữ đích

### 8.4 Vấn đề Điểm Cắt Kiến thức AI Advisor

**Triệu chứng:** AI không biết về các sự kiện gần đây, cập nhật sản phẩm hoặc tin tức sau một ngày nhất định.

**Giải thích cho khách hàng:**
- AI Advisor của Workflowez được hỗ trợ bởi các mô hình ngôn ngữ lớn với ngày cắt dữ liệu huấn luyện
- Thông tin về các sự kiện sau ngày cắt sẽ không có sẵn cho mô hình trừ khi được truy xuất qua các nguồn dữ liệu đã kết nối
- Đối với thông tin thời gian thực hoặc gần đây, khách hàng nên sử dụng các tính năng tìm kiếm web hoặc cơ sở kiến thức đã kết nối (nếu có trong gói)

---

## 9. Xử lý Sự cố Tích hợp & Webhook

### 9.1 Lỗi Xác thực Tích hợp

**Triệu chứng:** Tích hợp hiển thị trạng thái "Disconnected" hoặc "Authentication Error"; workflow sử dụng tích hợp thất bại với lỗi 401/403.

**Các bước giải quyết:**
1. Điều hướng đến Cài đặt → Tích hợp → [Tên Tích hợp]
2. Nhấp "Kết nối lại" hoặc "Làm mới Token" để ủy quyền lại
3. Nếu kết nối lại thất bại, thu hồi kết nối hiện có và tạo kết nối mới
4. Kiểm tra xem tài khoản đã kết nối có các quyền/scope cần thiết không
5. Kiểm tra xem API key hoặc OAuth token có bị thu hồi trong nền tảng bên thứ ba không

**Kiểm tra nhanh cho tích hợp cụ thể:**

| Tích hợp | Lỗi Phổ biến | Giải pháp Nhanh |
|----------|-------------|----------------|
| Google Workspace | OAuth token hết hạn | Kết nối lại qua luồng Google OAuth |
| Slack | App bị xóa khỏi workspace | Cài đặt lại Workflowez Slack app trong workspace |
| HubSpot | API key được thay đổi | Cập nhật API key trong cài đặt tích hợp |
| Salesforce | Chặn IP whitelist | Thêm IP Workflowez vào danh sách IP tin cậy Salesforce |
| Notion | Quyền tích hợp thay đổi | Chia sẻ lại các trang/database Notion với tích hợp Workflowez |

### 9.2 Lỗi Giao Webhook

**Workflowez outbound webhook thất bại (từ Workflowez đến hệ thống khách hàng):**
1. Kiểm tra log giao webhook trong Cài đặt → Webhooks
2. Xem xét mã phản hồi HTTP được trả về bởi endpoint của khách hàng
3. Các lỗi phổ biến:
   - **408/504:** Endpoint khách hàng quá chậm; tăng timeout ở phía khách hàng
   - **401/403:** Endpoint khách hàng yêu cầu xác thực không được cấu hình trong cài đặt webhook
   - **Lỗi SSL:** Endpoint khách hàng có chứng chỉ hết hạn hoặc tự ký

### 9.3 Vấn đề Ánh xạ Dữ liệu Giữa các Tích hợp

**Triệu chứng:** Dữ liệu đến từ một hệ thống nhưng không điền đúng vào các trường trong hệ thống đích.

**Các bước giải quyết:**
1. Sử dụng chế độ debug workflow để kiểm tra cấu trúc dữ liệu chính xác tại mỗi bước
2. Xác minh tên trường — tên trường API thường khác với nhãn UI (ví dụ: `firstName` vs `first_name`)
3. Kiểm tra kiểu dữ liệu: đảm bảo trường số không nhận giá trị chuỗi và ngược lại
4. Sử dụng các hàm transform tích hợp (chuỗi, số, ngày) để chuyển đổi dữ liệu trước khi ánh xạ
5. Nếu trường bắt buộc ở đích nhưng đôi khi trống ở nguồn, thêm bước điều kiện hoặc giá trị mặc định

---

## 10. Xử lý Sự cố API

### 10.1 Lỗi Xác thực (401)

**Nguyên nhân:** API key không hợp lệ, hết hạn hoặc thiếu.

**Giải pháp:**
1. Xác minh header `Authorization: Bearer <api_key>` có mặt trong mỗi request
2. Kiểm tra API key chưa hết hạn hoặc bị thu hồi (Cài đặt → API Keys)
3. Xác nhận API key có scope quyền đúng cho endpoint đang được gọi
4. Tạo lại API key nếu bị xâm phạm; cập nhật tất cả hệ thống sử dụng key cũ

### 10.2 Lỗi Giới hạn Rate (429)

**Giải pháp:**
1. Kiểm tra response headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`, `Retry-After`
2. Triển khai **exponential backoff**: retry sau `Retry-After` giây, nhân đôi cho mỗi 429 tiếp theo
3. Phân phối request theo thời gian sử dụng hàng đợi hoặc xử lý batch
4. Xem xét liệu có thể giảm các lời gọi API không cần thiết (caching, webhook thay vì polling)
5. Nếu giới hạn rate gói thực sự không đủ, nâng cấp gói hoặc liên hệ CS về giới hạn Enterprise

### 10.3 Lỗi Server (5xx)

**Giải pháp:**
1. Kiểm tra status.workflowez.com cho các sự cố đang hoạt động
2. Retry request với exponential backoff (lỗi 5xx thường tạm thời)
3. Nếu lỗi 5xx kéo dài > 5 phút, leo thang như P1 qua #engineering-oncall
4. Thu thập request ID từ response headers (`X-Request-ID`) — cần thiết để Kỹ thuật truy tìm lỗi cụ thể trong log

### 10.4 Xác thực Chữ ký Webhook Thất bại

**Giải pháp:**
1. Xác nhận khách hàng đang sử dụng webhook secret từ Cài đặt → Webhooks (không phải API key)
2. Xác minh triển khai HMAC-SHA256:
   - Chữ ký được tính toán trên raw request body (không phải JSON đã phân tích)
   - Header `X-Workflowez-Signature` chứa HMAC được mã hóa hex
   - So sánh sử dụng hàm so sánh thời gian cố định để ngăn timing attack
3. Cung cấp mẫu code trong ngôn ngữ của khách hàng từ Trung tâm Hỗ trợ

---

## 11. Vấn đề Hiệu suất & Độ tin cậy

### 11.1 Tải Trang Chậm / UI Lag

**Giải pháp phổ biến:**

| Nguyên nhân | Giải pháp |
|-------------|-----------|
| Internet chậm | Vấn đề phía client; khuyến nghị kết nối nhanh hơn hoặc giảm tab trình duyệt đồng thời |
| Workflow lớn (500+ node) | Đề xuất tái cấu trúc thành sub-workflow |
| Lịch sử thực thi quá nhiều | Đề xuất lưu trữ/xóa log thực thi cũ (với sự đồng ý của khách hàng) |
| Rò rỉ bộ nhớ trình duyệt | Đóng và mở lại trình duyệt; tắt các tiện ích mở rộng nặng |
| Sự cố hiệu suất Workflowez | Theo dõi trang trạng thái; thông báo cho khách hàng về ETA |

### 11.2 Độ trễ Thực thi Workflow

**Triệu chứng:** Workflow nên chạy ngay lập tức hoặc theo lịch nhưng bị trễ vài phút.

**Giải pháp:**
- Nếu độ sâu hàng đợi cao: Kỹ thuật điều tra năng lực (leo thang P1 nếu > 10 phút trễ)
- Nếu hạn ngạch gần giới hạn: thông báo cho khách hàng; đề xuất nâng cấp gói hoặc tối ưu hóa tần suất workflow
- Nếu spike tải lớn: xem lại các trigger workflow để ngăn các lần thực thi đồng thời không cần thiết

### 11.3 Cửa sổ Bảo trì Theo kế hoạch

Workflowez thực hiện bảo trì theo kế hoạch trong các cửa sổ lưu lượng thấp:
- **Cửa sổ chính:** Chủ nhật, 02:00–06:00 ICT
- Khách hàng được thông báo qua status.workflowez.com và email **ít nhất 48 giờ trước**
- Bảo trì khẩn cấp có thể xảy ra với thông báo ngắn hơn; khách hàng được thông báo ngay khi có quyết định

Trong bảo trì: thực thi workflow có thể bị tạm dừng hoặc trễ; trigger theo lịch sẽ thực thi sau khi bảo trì hoàn thành (không có lần thực thi nào bị mất).

---

## 12. Vấn đề Thanh toán & Đăng ký

### 12.1 Thất bại Thanh toán

**Các bước giải quyết:**
1. Yêu cầu khách hàng cập nhật phương thức thanh toán trong Cài đặt → Thanh toán
2. Xác nhận thông tin thẻ (số, hạn, CVV, địa chỉ thanh toán) hiện tại
3. Nếu thông tin đúng nhưng thanh toán vẫn thất bại:
   - Yêu cầu khách hàng liên hệ ngân hàng (chặn giao dịch quốc tế rất phổ biến)
   - Đề nghị thử lại khoản thanh toán sau khi khách hàng xác nhận với ngân hàng
4. Nếu tài khoản bị tạm ngưng do không thanh toán, CS có thể cấp **7 ngày ân hạn** (cần CS Manager phê duyệt)

### 12.2 Phí Không Mong đợi

**Các nguyên nhân phổ biến:**
- **Nâng cấp gói giữa chu kỳ:** Phí tính theo tỷ lệ cho gói đã nâng cấp
- **Vượt quá sử dụng:** Khách hàng vượt quá giới hạn gói (ghế, lần thực thi)
- **Gia hạn gói năm:** Gói năm tự động gia hạn; khách hàng có thể đã quên
- **Addon được kích hoạt:** Khách hàng hoặc admin đã kích hoạt addon trả phí

Giải thích khoản phí với thông tin cụ thể; cung cấp bảng chi tiết hóa đơn. Nếu phí thực sự là lỗi, cấp tín dụng hoặc hoàn tiền theo Chính sách Hoàn tiền.

### 12.3 Yêu cầu Hoàn tiền

Theo Chính sách Hoàn tiền:
- Gói tháng: Không hoàn tiền cho các tháng một phần
- Gói năm: Hoàn tiền đầy đủ trong 14 ngày; sau đó không hoàn tiền

Ngoại lệ có thể được CS Manager cấp cho:
- Lỗi thanh toán từ phía Workflowez
- Gián đoạn nền tảng kéo dài vượt quá biện pháp khắc phục SLA
- Tranh chấp lần đầu từ khách hàng lâu dài

Tất cả hoàn tiền cần CS Manager phê duyệt và được xử lý trong 5–10 ngày làm việc.

---

## 13. Yêu cầu Dữ liệu & Quyền riêng tư

### 13.1 Yêu cầu Xuất Dữ liệu

**Quy trình:**
1. Xác minh danh tính người yêu cầu (phải là Chủ tài khoản hoặc Admin)
2. Khởi tạo xuất dữ liệu từ admin panel (Cài đặt → Dữ liệu → Xuất)
3. Xuất bao gồm: workflow, lịch sử thực thi (90 ngày gần nhất), cài đặt tài khoản, danh sách người dùng, cấu hình tích hợp
4. Xuất được đóng gói thành file JSON/ZIP và gửi email đến Chủ tài khoản trong **48 giờ**
5. Ghi lại yêu cầu trong hệ thống ticket để theo dõi tuân thủ

### 13.2 Yêu cầu Xóa Dữ liệu (Quyền Xóa)

**Quy trình:**
1. Xác minh danh tính người yêu cầu (chỉ Chủ tài khoản)
2. Thông báo cho khách hàng về những gì sẽ bị xóa: dữ liệu tài khoản, hồ sơ người dùng, cấu hình workflow, lịch sử thực thi, API key
3. Thông báo về những gì có thể được giữ lại: thống kê sử dụng ẩn danh (không có PII), hồ sơ tài chính theo luật
4. Khởi tạo xóa qua admin panel — kích hoạt giai đoạn **soft delete 30 ngày** (dữ liệu không bị xóa ngay)
5. Khách hàng có 30 ngày để hủy yêu cầu xóa
6. Sau 30 ngày, hard delete được thực hiện; PII bị xóa khỏi tất cả hệ thống
7. Gửi xác nhận xóa cho người yêu cầu

**Quan trọng:** Xóa không thể hoàn tác sau giai đoạn 30 ngày. CS phải thông báo rõ ràng điều này cho khách hàng trước khi tiến hành.

### 13.3 Yêu cầu Sửa Dữ liệu Cá nhân

**Quy trình:**
1. Người dùng có thể cập nhật tên, email và thông tin hồ sơ trực tiếp trong Cài đặt → Hồ sơ
2. Đối với dữ liệu không thể tự chỉnh sửa, CS gửi yêu cầu sửa lên Kỹ thuật
3. Sửa được hoàn thành trong 10 ngày làm việc
4. Khách hàng nhận xác nhận khi sửa được áp dụng

---

## 14. Quy trình Leo thang

### 14.1 Khi nào Leo thang lên Kỹ thuật

Leo thang lên Kỹ thuật (qua #support-triage → #engineering-oncall) khi:
- Vấn đề không thể tái tạo trong môi trường test nhưng được xác nhận trong production
- Vấn đề có vẻ là lỗi nền tảng (không phải lỗi cấu hình)
- Vấn đề là P0 hoặc P1
- Dữ liệu khách hàng có nguy cơ (mất, hỏng hoặc truy cập trái phép)
- Vấn đề đã mở > 2× thời gian giải quyết SLA mà không có tiến triển

### 14.2 Mẫu Bàn giao Leo thang

Khi leo thang lên Kỹ thuật, cung cấp:

```
TICKET: [ID Ticket]
MỨC ĐỘ: [P0/P1/P2/P3]
KHÁCH HÀNG: [Tên khách hàng] | Gói: [Tier gói] | ARR: [Doanh thu hàng năm nếu biết]
TÁC ĐỘNG: [Số người dùng bị ảnh hưởng / workflow ngừng / doanh thu có nguy cơ]
TÓM TẮT: [Mô tả 2-3 câu về vấn đề]
CÁC BƯỚC TÁI TẠO:
  1.
  2.
  3.
MONG ĐỢI: [Điều gì nên xảy ra]
THỰC TẾ: [Điều gì đang xảy ra]
LẦN ĐẦU THẤY: [Timestamp]
BẰNG CHỨNG: [Đường dẫn đến log, screenshot, ghi màn hình, thông báo lỗi]
CS ĐÃ THỬ: [Hành động CS đã thực hiện trước leo thang]
KỲ VỌNG KHÁCH HÀNG: [Những gì đã hứa với khách hàng về timeline]
```

### 14.3 Leo thang Sự cố P0 (Ngoài Giờ)

Cho sự cố P0 ngoài giờ làm việc:
1. Báo cho kỹ sư on-call qua **PagerDuty** (không chỉ dựa vào Slack)
2. Nếu không có phản hồi trong 10 phút, leo thang lên Engineering Lead qua điện thoại
3. Nếu không có phản hồi trong 20 phút, leo thang lên CTO
4. Cập nhật trang trạng thái khách hàng trong vòng 15 phút sau khi khai báo P0
5. Gửi email thông báo khách hàng trong vòng 1 giờ

### 14.4 Leo thang Khách hàng (Khách hàng Không hài lòng)

Khi khách hàng bày tỏ sự không hài lòng đáng kể hoặc đe dọa rời bỏ:
1. Xác nhận ngay lập tức — "Tôi hiểu điều này không thể chấp nhận và tôi cá nhân chịu trách nhiệm"
2. Chuyển ticket lên tối thiểu P1 bất kể mức độ kỹ thuật
3. Thông báo CS Manager trong vòng 1 giờ
4. Cung cấp cuộc gọi cá nhân với CS Manager trong vòng 4 giờ làm việc
5. Theo dõi bằng văn bản trong vòng 24 giờ sau cuộc gọi với tóm tắt và cam kết

---

## 15. Tài nguyên Tự phục vụ

### 15.1 Trung tâm Hỗ trợ (help.workflowez.com)

| Mục | Nội dung |
|-----|---------|
| **Bắt đầu** | Thiết lập tài khoản, workflow đầu tiên, checklist onboarding |
| **Hướng dẫn Sản phẩm** | Hướng dẫn từng bước cho tất cả tính năng chính |
| **Thư viện Tích hợp** | Hướng dẫn thiết lập cho mỗi tích hợp được hỗ trợ |
| **Tài liệu API** | Tài liệu API đầy đủ với ví dụ code |
| **Xử lý Sự cố** | Các vấn đề phổ biến và giải pháp theo danh mục |
| **Release Notes** | Changelog cho tất cả release nhỏ và lớn |
| **FAQ** | Câu hỏi thường gặp theo chủ đề |
| **Thư viện Video** | Video hướng dẫn cho người học trực quan |

### 15.2 Trang Trạng thái (status.workflowez.com)

| Thành phần | Bao gồm |
|------------|---------|
| API | Khả dụng và độ trễ API |
| Workflow Execution Engine | Độ tin cậy thực thi workflow và độ sâu hàng đợi |
| AI Services | Khả dụng AI Advisor |
| Dashboard & UI | Khả dụng ứng dụng web |
| Tích hợp | Trạng thái các connector tích hợp bên thứ ba |
| Webhooks | Xử lý webhook inbound và outbound |

Khách hàng có thể đăng ký cập nhật trạng thái qua email hoặc RSS.

### 15.3 Diễn đàn Cộng đồng (community.workflowez.com)

Diễn đàn cộng đồng cho phép khách hàng:
- Đặt câu hỏi và chia sẻ giải pháp với người dùng khác
- Duyệt câu hỏi theo tag (tích hợp, API, workflow, AI, thanh toán)
- Truy cập câu trả lời được nhân viên Workflowez xác minh (được đánh dấu bằng huy hiệu "Staff")
- Bình chọn cho yêu cầu tính năng

Nhóm CS theo dõi diễn đàn hàng ngày và trả lời các câu hỏi chưa được trả lời trong vòng 1 ngày làm việc. Các giải pháp được xác minh được thêm vào Trung tâm Hỗ trợ.

---

## 16. Giới hạn Đã biết & Cách giải quyết

### 16.1 Giới hạn Nền tảng

| Giới hạn | Starter | Pro | Business | Enterprise | Cách giải quyết |
|---------|---------|-----|----------|------------|----------------|
| Số node tối đa mỗi workflow | 100 | 250 | 500 | Không giới hạn | Chia workflow thành các sub-workflow kết nối qua lời gọi API |
| Thời gian chạy workflow tối đa | 5 phút | 15 phút | 30 phút | 60 phút | Chia quy trình dài thành các workflow chuỗi |
| Kích thước payload webhook | 1 MB | 5 MB | 10 MB | 25 MB | Phân trang payload lớn; sử dụng tham chiếu file thay vì dữ liệu inline |
| Thực thi đồng thời | 5 | 20 | 50 | Tùy chỉnh | Xếp hàng trigger sử dụng staggering lịch |
| Lưu trữ lịch sử thực thi | 7 ngày | 30 ngày | 90 ngày | 1 năm | Xuất log thực thi định kỳ qua API để lưu trữ dài hạn |
| Giới hạn rate API | 60/phút | 300/phút | 1.000/phút | Tùy chỉnh | Triển khai caching và xếp hàng request |
| Người dùng mỗi workspace | 3 | 10 | 25 | Không giới hạn | Tạo nhiều workspace (lưu ý: dữ liệu không được chia sẻ giữa các workspace) |

### 16.2 Giới hạn AI Đã biết

| Giới hạn | Mô tả | Cách giải quyết |
|---------|-------|----------------|
| Điểm cắt dữ liệu huấn luyện | AI Advisor không có kiến thức về các sự kiện sau ngày cắt huấn luyện | Sử dụng cơ sở kiến thức đã kết nối hoặc tính năng tìm kiếm web cho thông tin gần đây |
| Nguy cơ hallucination | AI có thể tạo ra thông tin sai nhưng có vẻ đúng | Luôn xác minh thông tin quan trọng từ các nguồn có thẩm quyền |
| Cửa sổ ngữ cảnh | Các cuộc trò chuyện rất dài có thể khiến AI "quên" ngữ cảnh trước đó | Bắt đầu cuộc trò chuyện mới cho các chủ đề mới; cung cấp ngữ cảnh chính vào đầu mỗi phiên |
| Trộn lẫn ngôn ngữ | AI đôi khi có thể chuyển đổi ngôn ngữ trong cuộc trò chuyện đa ngôn ngữ | Hướng dẫn rõ ràng AI phản hồi bằng ngôn ngữ cụ thể vào đầu cuộc trò chuyện |
| Thực thi code | AI Advisor không thể thực thi code trực tiếp | Sử dụng node code của workflow builder để thực thi code do AI tạo ra |

### 16.3 Giới hạn Tích hợp Đã biết

| Tích hợp | Giới hạn | Cách giải quyết |
|----------|---------|----------------|
| Google Sheets | Tối đa 1.000 hàng đọc mỗi trigger | Sử dụng phân trang hoặc lọc dữ liệu trước khi đọc |
| Slack | Không thể gửi file > 20 MB qua API | Sử dụng luồng URL tải file thay vì đính kèm file trực tiếp |
| HubSpot | Tài khoản HubSpot miễn phí không thể sử dụng một số API endpoint | Nâng cấp gói HubSpot hoặc sử dụng các endpoint có sẵn |
| Salesforce | Bulk API không khả dụng trên Developer Edition | Sử dụng API tiêu chuẩn với xử lý batch |
| Gmail | Tối đa 100 email đọc mỗi lần thực thi | Triển khai phân trang hoặc sử dụng lọc nhãn để giảm khối lượng |

### 16.4 Tương thích Trình duyệt

Workflowez chính thức được hỗ trợ trên:
- **Google Chrome** (2 phiên bản major gần nhất) ✅
- **Mozilla Firefox** (2 phiên bản major gần nhất) ✅
- **Microsoft Edge** (dựa trên Chromium, 2 phiên bản gần nhất) ✅
- **Safari** (2 phiên bản major gần nhất) ✅ (với một số khác biệt rendering nhỏ đã biết)
- **Trình duyệt di động** — chế độ chỉ xem; chỉnh sửa workflow không được hỗ trợ trên mobile

**Không được hỗ trợ:**
- Internet Explorer (bất kỳ phiên bản nào)
- Chrome phiên bản cũ hơn 2 major release
- Cấu hình trình duyệt tùy chỉnh/doanh nghiệp vô hiệu hóa JavaScript hoặc cookie

Nếu khách hàng báo cáo vấn đề UI, luôn hỏi tên và phiên bản trình duyệt là bước chẩn đoán đầu tiên.

---

*Mọi thắc mắc nội bộ của nhóm hỗ trợ, liên hệ **CS Lead** hoặc đăng trong **#support-triage** trên Slack.*

*Mọi thắc mắc của khách hàng, hướng dẫn khách hàng đến **support@workflowez.com** hoặc **help.workflowez.com**.*

*© 2026 Workflowez. Bảo lưu mọi quyền. Tài liệu này có tính bảo mật và chỉ dành cho sử dụng nội bộ.*
