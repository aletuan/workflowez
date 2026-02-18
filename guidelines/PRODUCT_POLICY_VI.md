# Chính Sách Sản Phẩm Workflowez

**Phiên bản tài liệu:** 1.0
**Ngày hiệu lực:** 18/02/2026
**Bộ phận soạn thảo:** Lãnh đạo Sản phẩm & Kỹ thuật
**Phê duyệt bởi:** Tổng Giám Đốc

---

## Mục Lục

1. [Giới thiệu & Phạm vi áp dụng](#1-giới-thiệu--phạm-vi-áp-dụng)
2. [Tầm nhìn & Nguyên tắc Sản phẩm](#2-tầm-nhìn--nguyên-tắc-sản-phẩm)
3. [Vòng đời Phát triển Sản phẩm](#3-vòng-đời-phát-triển-sản-phẩm)
4. [Chính sách Ưu tiên Tính năng](#4-chính-sách-ưu-tiên-tính-năng)
5. [Quản lý Roadmap](#5-quản-lý-roadmap)
6. [Quản lý Release & Phiên bản](#6-quản-lý-release--phiên-bản)
7. [Quyền riêng tư Dữ liệu & Bảo mật trong Sản phẩm](#7-quyền-riêng-tư-dữ-liệu--bảo-mật-trong-sản-phẩm)
8. [Chính sách AI Có trách nhiệm](#8-chính-sách-ai-có-trách-nhiệm)
9. [Chính sách Tích hợp & API](#9-chính-sách-tích-hợp--api)
10. [Chính sách Giá & Đóng gói](#10-chính-sách-giá--đóng-gói)
11. [Tiếp cận & Bao trùm](#11-tiếp-cận--bao-trùm)
12. [Chính sách Ngừng hoạt động & Kết thúc Vòng đời](#12-chính-sách-ngừng-hoạt-động--kết-thúc-vòng-đời)
13. [Sở hữu Trí tuệ & Cấp phép](#13-sở-hữu-trí-tuệ--cấp-phép)
14. [Chính sách Sự cố & Leo thang Sản phẩm](#14-chính-sách-sự-cố--leo-thang-sản-phẩm)

---

## 1. Giới thiệu & Phạm vi áp dụng

### 1.1 Mục đích

Chính sách Sản phẩm này ("Chính sách") xác định các nguyên tắc, tiêu chuẩn và quy trình điều chỉnh cách Workflowez xây dựng, phát hành, duy trì và ngừng hoạt động các sản phẩm của mình. Đây là tài liệu tham chiếu có thẩm quyền cho các nhóm sản phẩm, kỹ thuật, thiết kế và các nhóm làm việc với khách hàng về cách đưa ra quyết định sản phẩm và nghĩa vụ của Công ty đối với khách hàng, đối tác và hệ sinh thái rộng lớn hơn.

### 1.2 Phạm vi áp dụng

Chính sách này áp dụng cho:
- Tất cả sản phẩm phần mềm do Workflowez phát triển và vận hành, bao gồm ứng dụng SaaS, API, tích hợp và các tính năng powered by AI
- Tất cả nhóm nội bộ tham gia vào vòng đời sản phẩm: Sản phẩm, Kỹ thuật, Thiết kế, QA, Dữ liệu, Customer Success, Kinh doanh và Marketing
- Nhà cung cấp và cộng tác viên bên thứ ba đóng góp vào phát triển sản phẩm Workflowez, bị ràng buộc bởi các tiêu chuẩn tương đương thông qua hợp đồng

### 1.3 Quản trị Chính sách

Chính sách này do **Trưởng nhóm Sản phẩm** sở hữu và được xem xét hàng năm hoặc khi có thay đổi đáng kể về sản phẩm hoặc quy định. Các sửa đổi cần được CEO phê duyệt. Phiên bản hiện tại có thể truy cập bởi tất cả nhân viên trên wiki Notion nội bộ.

---

## 2. Tầm nhìn & Nguyên tắc Sản phẩm

### 2.1 Tầm nhìn Sản phẩm

Workflowez tồn tại để làm cho tự động hóa quy trình làm việc thông minh trở nên dễ tiếp cận với mọi doanh nghiệp — từ startup 10 người đến công ty 500 người. Sản phẩm của chúng tôi loại bỏ các quy trình thủ công, lặp đi lặp lại thông qua AI, cho phép đội ngũ tập trung vào công việc sáng tạo, tạo ra giá trị cao.

### 2.2 Nguyên tắc Sản phẩm Cốt lõi

Mọi quyết định sản phẩm tại Workflowez được dẫn dắt bởi các nguyên tắc sau, theo thứ tự ưu tiên:

**1. Giá trị Khách hàng Trước tiên**
Chúng tôi xây dựng tính năng vì chúng giải quyết vấn đề thực tế cho khách hàng thực tế — không phải vì chúng thú vị về mặt kỹ thuật hoặc vì đối thủ đã có. Mọi tính năng lớn phải có thể truy nguyên đến một nhu cầu khách hàng đã được xác nhận.

**2. Đơn giản Mặc định, Mạnh mẽ Khi Cần**
Trải nghiệm mặc định phải ngay lập tức hiểu được bởi người dùng không có chuyên môn kỹ thuật. Các khả năng nâng cao tồn tại cho người dùng cao cấp nhưng không bao giờ bắt buộc với những người không cần chúng.

**3. Đáng tin cậy Theo Thiết kế**
Bảo mật, quyền riêng tư và độ tin cậy không phải là suy nghĩ sau — chúng được tích hợp vào mọi quyết định sản phẩm từ đầu. Chúng tôi không phát hành tính năng làm tổn hại đến lòng tin người dùng vì lý do tốc độ.

**4. AI Tăng cường, Con người Kiểm soát**
Các tính năng AI nâng cao việc ra quyết định của con người; chúng không thay thế phán xét của con người. Mọi đầu ra được hỗ trợ bởi AI đều cung cấp cho người dùng sự minh bạch, khả năng hiểu kết quả và khả năng ghi đè.

**5. Lặp lại & Dựa trên Bằng chứng**
Chúng tôi phát hành sớm để học hỏi, nhưng chúng tôi xác định rõ ràng "đủ để phát hành" nghĩa là gì trước khi xây dựng. Chúng tôi đo lường kết quả, không chỉ đầu ra.

**6. Nhịp độ Bền vững**
Chúng tôi xây dựng ở tốc độ mà nhóm có thể duy trì mà không tích lũy nợ kỹ thuật quá mức. Tốc độ mà không có chất lượng không phải là tốc độ — đó là chi phí hoãn lại.

---

## 3. Vòng đời Phát triển Sản phẩm

### 3.1 Các Giai đoạn Vòng đời

Tất cả các tính năng hoặc thay đổi sản phẩm đáng kể đều trải qua các giai đoạn sau:

```
Khám phá → Định nghĩa → Thiết kế → Phát triển → QA & Xem xét → Release → Lặp lại
```

| Giai đoạn | Hoạt động Chính | Chủ sở hữu | Đầu ra |
|-----------|----------------|------------|--------|
| **Khám phá** | Nghiên cứu người dùng, xác nhận vấn đề, phân tích thị trường | PM + UX | Tuyên bố vấn đề, bản tóm tắt cơ hội |
| **Định nghĩa** | Yêu cầu, phạm vi, chỉ số thành công, tiêu chí chấp nhận | PM | Tài liệu Yêu cầu Sản phẩm (PRD) |
| **Thiết kế** | Wireframe UX/UI, prototype, xem xét thiết kế | Thiết kế | File thiết kế được phê duyệt |
| **Phát triển** | Triển khai kỹ thuật, unit test, code review | Kỹ thuật | Code đã merge, đã test |
| **QA & Xem xét** | Kiểm thử chức năng, regression, xem xét bảo mật, PM sign-off | QA + PM | Báo cáo test, quyết định go/no-go |
| **Release** | Triển khai theo giai đoạn, theo dõi, release notes | Kỹ thuật + PM | Tính năng live, thông tin release |
| **Lặp lại** | Phân tích sử dụng, phản hồi khách hàng, sửa lỗi | PM + Kỹ thuật | Backlog items, PRD cải tiến |

### 3.2 Yêu cầu Tối thiểu để Bắt đầu Phát triển

Trước khi bất kỳ tính năng nào chuyển từ Định nghĩa sang Phát triển, những điều sau phải có sẵn:

- [ ] PRD được PM và ít nhất một Engineering Lead phê duyệt
- [ ] Thiết kế được Design Lead và PM phê duyệt
- [ ] Các chỉ số thành công được xác định (thế nào là "đã thành công" sau 30/60/90 ngày phát hành?)
- [ ] Tác động đến bảo mật và quyền riêng tư dữ liệu đã được xem xét
- [ ] Ước tính công việc đã được Engineering thống nhất
- [ ] Tính năng được gắn cờ trong hệ thống (để cho phép triển khai có mục tiêu)

Các tính năng bỏ qua các yêu cầu này có thể bị từ chối trong quá trình QA review.

### 3.3 Định nghĩa "Hoàn thành"

Một tính năng được coi là **hoàn thành** khi:
- [ ] Tất cả tiêu chí chấp nhận trong PRD đều được đáp ứng
- [ ] Các bài test unit và integration đạt (độ bao phủ ≥ 80% cho code mới)
- [ ] QA đã sign-off kiểm thử chức năng
- [ ] Không còn bug mức độ nghiêm trọng cao nào còn mở
- [ ] Xem xét bảo mật đã hoàn thành (cho các tính năng liên quan đến dữ liệu)
- [ ] Tài liệu đã cập nhật (tài liệu hỗ trợ người dùng, tài liệu API, release notes)
- [ ] PM đã sign-off cuối cùng
- [ ] Tính năng đã được triển khai sau feature flag và sẵn sàng cho triển khai có kiểm soát

### 3.4 Nhịp độ Sprint & Delivery

Các nhóm kỹ thuật Workflowez vận hành theo **sprint 2 tuần**:

| Hoạt động | Nhịp độ | Người tham gia |
|-----------|---------|----------------|
| Sprint Planning | Đầu mỗi sprint | PM + Kỹ thuật |
| Daily Standup | Hàng ngày, 15 phút | Nhóm kỹ thuật |
| Sprint Review | Cuối sprint | PM + Kỹ thuật + Thiết kế |
| Sprint Retrospective | Cuối sprint | Nhóm kỹ thuật |
| Xem xét Product Roadmap | Hàng tháng | PM + Lãnh đạo |
| Xem xét OKR Quý | Hàng quý | Tất cả nhóm |

---

## 4. Chính sách Ưu tiên Tính năng

### 4.1 Khung Ưu tiên

Workflowez sử dụng mô hình tính điểm có trọng số — **RICE** — để ưu tiên các tính năng một cách khách quan:

| Yếu tố | Mô tả | Trọng số |
|--------|-------|---------|
| **Reach (Tiếp cận)** | Bao nhiêu người dùng/khách hàng sẽ bị tác động trong quý tới? | Số lượng |
| **Impact (Tác động)** | Điều này sẽ dịch chuyển chỉ số chính bao nhiêu? (3=lớn, 2=đáng kể, 1=thấp, 0.5=tối thiểu) | Hệ số nhân |
| **Confidence (Độ tin cậy)** | Chúng ta tự tin đến đâu về ước tính reach và impact? (100%, 80%, 50%) | % |
| **Effort (Công sức)** | Cần bao nhiêu tuần công của kỹ thuật? | Số chia |

**Điểm RICE = (Reach × Impact × Confidence) / Effort**

Các tính năng có điểm RICE cao hơn được ưu tiên. PM chịu trách nhiệm duy trì điểm RICE cập nhật trong product backlog.

### 4.2 Chủ đề Chiến lược

Ngoài tính điểm RICE, roadmap hàng quý được định hình bởi tối đa **3 chủ đề chiến lược** được thiết lập bởi Ban Lãnh đạo. Các tính năng phù hợp với chủ đề chiến lược nhận được ưu tiên bổ sung ngay cả khi điểm RICE thuần túy của chúng thấp hơn. Các chủ đề chiến lược hiện tại được ghi lại trong bản ghi nhớ chiến lược sản phẩm hàng quý.

### 4.3 Danh mục Tính năng & Leo thang

Các tính năng được phân loại theo loại, ảnh hưởng đến quy trình ưu tiên của chúng:

| Danh mục | Mô tả | Thẩm quyền Quyết định |
|----------|-------|----------------------|
| **Yêu cầu từ Khách hàng** | Được yêu cầu rõ ràng bởi một hoặc nhiều khách hàng trả tiền | PM, với đầu vào của CS |
| **Sáng kiến Chiến lược** | Gắn với OKR công ty hoặc mốc huy động vốn | CEO + Trưởng nhóm Sản phẩm |
| **Nợ Kỹ thuật** | Cải tiến do kỹ thuật khởi xướng về ổn định, hiệu suất hoặc khả năng bảo trì | Engineering Lead + PM |
| **Sửa lỗi** | Vấn đề tính đúng đắn — ưu tiên theo mức độ nghiêm trọng (xem Mục 14) | Kỹ thuật + PM |
| **Tuân thủ/Pháp lý** | Yêu cầu để đáp ứng nghĩa vụ pháp lý hoặc hợp đồng | CEO + Pháp lý + PM |
| **Thử nghiệm** | Thử nghiệm dựa trên giả thuyết với tiêu chí thành công/thất bại rõ ràng | PM + Kỹ thuật |

Các tính năng tuân thủ và pháp lý ghi đè ưu tiên RICE và được xử lý như P0.

### 4.4 Quy tắc "Một Tính năng"

Không nhóm nào có nhiều hơn **một tính năng lớn đang phát triển tích cực** tại một thời điểm (ngoài các công việc bảo trì và sửa lỗi thông thường). Chuyển đổi ngữ cảnh giữa nhiều tính năng lớn làm giảm chất lượng và chậm delivery. Các ngoại lệ cần CEO phê duyệt.

### 4.5 Yêu cầu Tính năng từ Khách hàng

Yêu cầu tính năng của khách hàng là đầu vào chính cho roadmap sản phẩm. Quy trình:

1. **CS/Kinh doanh ghi nhận yêu cầu** trong công cụ phản hồi sản phẩm (với tên khách hàng, use case và tác động kinh doanh)
2. **PM xem xét và gắn thẻ** yêu cầu theo các backlog item hiện có hoặc tạo mục mới
3. **PM tổng hợp xu hướng** — một tính năng được yêu cầu bởi 5+ khách hàng có tầm quan trọng đáng kể hơn một yêu cầu đơn lẻ
4. **PM thông báo quyết định roadmap** lại cho nhóm CS/Kinh doanh để theo dõi với khách hàng

Khách hàng không bao giờ được hứa hẹn một tính năng vào ngày cụ thể mà không có PM sign-off rõ ràng.

---

## 5. Quản lý Roadmap

### 5.1 Các Tầm nhìn Roadmap

Workflowez duy trì ba tầm nhìn roadmap đồng thời:

| Tầm nhìn | Khung thời gian | Độ chắc chắn | Đối tượng |
|----------|----------------|-------------|-----------|
| **Hiện tại (Now)** | Sprint hiện tại + sprint tiếp theo | Cao (đã cam kết) | Nhóm kỹ thuật |
| **Tiếp theo (Next)** | 1–3 tháng tới | Trung bình (đã lên kế hoạch, có thể thay đổi) | Các nhóm nội bộ |
| **Sau này (Later)** | 3–12 tháng | Thấp (định hướng, có thể thay đổi) | Lãnh đạo, khách hàng chủ chốt |

Các tính năng trong tầm nhìn "Sau này" là tín hiệu định hướng, không phải cam kết. Roadmap được xem xét và cập nhật hàng tháng.

### 5.2 Roadmap Nội bộ vs. Bên ngoài

**Roadmap nội bộ** (hiển thị cho tất cả nhân viên Workflowez): Chứa đầy đủ chi tiết bao gồm điểm RICE, phụ thuộc, người sở hữu và timeline sơ bộ.

**Roadmap bên ngoài** (chia sẻ với khách hàng và prospective customers): Chỉ chứa các mục "Hiện tại" và "Tiếp theo", được mô tả theo thuật ngữ năng lực (không phải chi tiết tính năng), với quý thay vì ngày cụ thể. Được PM tuyển chọn và Trưởng nhóm Sản phẩm phê duyệt trước khi chia sẻ.

**Những gì chúng tôi không bao giờ đưa vào roadmap bên ngoài:**
- Ngày phát hành cụ thể (chúng tôi sử dụng ngôn ngữ Q1/Q2/H1/H2)
- Các tính năng chưa được phê duyệt để phát triển
- Các khả năng phụ thuộc vào tích hợp bên ngoài chưa xác nhận
- Bất cứ điều gì tiết lộ chiến lược cạnh tranh ra thị trường sớm

### 5.3 Truyền thông Roadmap

| Đối tượng | Hình thức | Tần suất |
|-----------|-----------|---------|
| Nhóm kỹ thuật | Sprint planning + Notion | Mỗi 2 tuần |
| Tất cả nhân viên Workflowez | All-hands toàn công ty | Hàng tháng |
| Khách hàng Enterprise | Cuộc gọi roadmap với PM + CS | Hàng quý |
| Khách hàng tiềm năng (trong quá trình bán hàng) | Deck roadmap (được tuyển chọn) | Khi cần |
| Công khai | Blog sản phẩm / release notes | Khi có major release |

---

## 6. Quản lý Release & Phiên bản

### 6.1 Các Loại Release

Workflowez phân biệt bốn loại release:

| Loại | Phạm vi | Phê duyệt Cần thiết | Thông báo Khách hàng |
|------|---------|--------------------|-----------------------|
| **Major Release** | Sản phẩm mới, gói mới, mở rộng năng lực đáng kể | CEO + Trưởng nhóm Sản phẩm | Có — thông báo trước 30 ngày |
| **Minor Release** | Tính năng mới, cải tiến UX, tích hợp mới | PM + Engineering Lead | Có — release notes |
| **Patch Release** | Sửa lỗi, bản vá bảo mật, cải tiến hiệu suất | Engineering Lead | Release notes (tùy chọn) |
| **Hotfix** | Lỗi nghiêm trọng hoặc lỗ hổng bảo mật | Kỹ sư on-call + Engineering Lead | Thông báo ngay cho vấn đề ảnh hưởng đến khách hàng |

### 6.2 Semantic Versioning

Tất cả API và sản phẩm có phiên bản của Workflowez tuân theo **Semantic Versioning (SemVer)**: `MAJOR.MINOR.PATCH`

- **MAJOR**: Thay đổi không tương thích ngược với API hoặc hành vi sản phẩm
- **MINOR**: Tính năng mới, tương thích ngược
- **PATCH**: Sửa lỗi, tương thích ngược

### 6.3 Feature Flags & Triển khai Dần dần

Tất cả các tính năng mới đáng kể được triển khai sau **feature flags** trước khi có chung. Tiến trình triển khai tiêu chuẩn:

```
Nhóm nội bộ (alpha) → Khách hàng beta (10%) → Mở rộng (50%) → Phổ biến (100%)
```

Feature flags cho phép:
- Kiểm thử có mục tiêu với khách hàng cụ thể trước khi phát hành rộng rãi
- Rollback ngay lập tức nếu phát hiện vấn đề sau khi ra mắt
- A/B testing các triển khai cạnh tranh
- Tăng dần tải để theo dõi hiệu suất hệ thống

### 6.4 Release Notes

Release notes được xuất bản cho mọi minor release trở lên. Phải bao gồm:
- Tóm tắt những gì đã thay đổi và lý do
- Bất kỳ thay đổi nào không tương thích ngược (làm nổi bật rõ ràng)
- Các bước di chuyển khách hàng cần thực hiện (nếu có)
- Các vấn đề đã biết, với cách giải quyết khi có sẵn
- Liên kết đến tài liệu đã cập nhật

Release notes được xuất bản trên website Công ty, cổng thông tin khách hàng và phân phối qua email đến khách hàng đã đăng ký.

### 6.5 Giai đoạn Đóng băng Thay đổi

Workflowez thực hiện **các giai đoạn đóng băng thay đổi** trong đó không có release không quan trọng nào được thực hiện:
- Kỳ nghỉ Tết Nguyên Đán của Việt Nam (thường 5–10 ngày)
- Các sự kiện hoặc ra mắt lớn của khách hàng (do PM chỉ định)
- 5 ngày làm việc cuối cùng của quý dương lịch (để đảm bảo ổn định cho báo cáo)

Hotfix cho các vấn đề bảo mật hoặc độ tin cậy quan trọng được miễn trừ khỏi giai đoạn đóng băng thay đổi.

---

## 7. Quyền riêng tư Dữ liệu & Bảo mật trong Sản phẩm

### 7.1 Privacy by Design

Quyền riêng tư không phải là hộp kiểm tuân thủ — đó là nguyên tắc thiết kế sản phẩm. Tất cả các tính năng sản phẩm thu thập, xử lý hoặc lưu trữ dữ liệu người dùng phải được xem xét theo các tiêu chí sau ở giai đoạn thiết kế:

- **Tối thiểu hóa dữ liệu:** Tính năng có chỉ thu thập dữ liệu cần thiết cho chức năng của nó không? Thu thập dữ liệu dư thừa không được phép.
- **Giới hạn mục đích:** Dữ liệu được thu thập có chỉ được sử dụng cho mục đích đã nêu không? Sử dụng dữ liệu cho mục đích thứ cấp đòi hỏi sự đồng ý rõ ràng của người dùng.
- **Kiểm soát của người dùng:** Người dùng có thể truy cập, chỉnh sửa, xuất và xóa dữ liệu của họ không? Tất cả dữ liệu cá nhân phải có thể truy cập được cho người dùng thông qua sản phẩm hoặc theo yêu cầu.
- **Giới hạn lưu trữ:** Dữ liệu được lưu trữ bao lâu và có quy trình xóa tự động không? Thời gian lưu trữ phải được xác định và thực thi.

### 7.2 Yêu cầu Bảo mật cho Tính năng Sản phẩm

Tất cả tính năng sản phẩm phải tuân thủ các yêu cầu bảo mật tối thiểu sau trước khi phát hành:

| Yêu cầu | Tiêu chuẩn |
|---------|-----------|
| **Xác thực** | Tất cả tính năng hướng tới người dùng yêu cầu phiên đã xác thực. MFA có sẵn cho tất cả tài khoản. |
| **Phân quyền** | Kiểm soát truy cập dựa trên vai trò (RBAC) được thực thi. Người dùng chỉ truy cập được dữ liệu họ được phép. |
| **Dữ liệu khi truyền** | Tất cả dữ liệu được truyền qua TLS 1.2 trở lên. |
| **Dữ liệu khi lưu trữ** | Dữ liệu nhạy cảm của khách hàng được mã hóa khi lưu trữ (AES-256 hoặc tương đương). |
| **Kiểm tra đầu vào** | Tất cả đầu vào người dùng được làm sạch và xác thực ở phía server. |
| **Quét phụ thuộc** | Thư viện bên thứ ba được quét tìm lỗ hổng đã biết trước khi đưa vào. |
| **Quản lý bí mật** | Không có thông tin xác thực, API key hoặc bí mật nào được lưu trữ trong kho mã nguồn. |

### 7.3 Phân loại Dữ liệu

Workflowez phân loại tất cả dữ liệu sản phẩm thành bốn cấp:

| Cấp | Mô tả | Ví dụ | Kiểm soát Yêu cầu |
|-----|-------|-------|-------------------|
| **Công khai** | Công khai có chủ đích, không nhạy cảm | Nội dung marketing, tài liệu API công khai | Không |
| **Nội bộ** | Không công khai, ít nhạy cảm | Số liệu sử dụng tổng hợp, log nội bộ | Kiểm soát truy cập |
| **Bảo mật** | Dữ liệu kinh doanh hoặc khách hàng nhạy cảm | Cấu hình workflow của khách hàng, dữ liệu kinh doanh | Mã hóa + kiểm soát truy cập + log kiểm tra |
| **Bị hạn chế** | Nhạy cảm cao nhất | PII, dữ liệu thanh toán, thông tin xác thực | Mã hóa + truy cập nghiêm ngặt + DPA + kiểm tra |

### 7.4 Xử lý Dữ liệu Bên thứ ba

Khi Workflowez tích hợp với hoặc phụ thuộc vào các dịch vụ bên thứ ba xử lý dữ liệu khách hàng:
- **Thỏa thuận Xử lý Dữ liệu (DPA)** phải có hiệu lực trước khi bất kỳ dữ liệu khách hàng nào được truyền cho bên thứ ba
- Bên thứ ba phải đáp ứng yêu cầu bảo mật tối thiểu của Workflowez (ưu tiên SOC 2 Type II)
- Khách hàng phải được thông báo về các bộ xử lý bên thứ ba quan trọng trong Chính sách Quyền riêng tư
- Tích hợp phải được bao gồm trong bản đồ dữ liệu nội bộ

### 7.5 Tiêu chuẩn Tuân thủ

Sản phẩm Workflowez được xây dựng để tuân thủ:
- **Nghị định Bảo vệ Dữ liệu Cá nhân của Việt Nam** (Nghị định số 13/2023/NĐ-CP)
- **GDPR** (cho khách hàng ở Khu vực Kinh tế Châu Âu)
- Nguyên tắc **ISO/IEC 27001** (quản lý bảo mật thông tin)
- Khung **SOC 2 Type II** (mục tiêu đạt chứng nhận trong vòng 18 tháng sau khi ra mắt)

Bất kỳ việc gia nhập thị trường mới nào đòi hỏi tiêu chuẩn tuân thủ bổ sung (ví dụ: HIPAA cho chăm sóc sức khỏe Mỹ, PCI-DSS cho xử lý thanh toán) phải được đánh giá bởi nhóm Pháp lý và Bảo mật trước khi bắt đầu phát triển sản phẩm.

---

## 8. Chính sách AI Có trách nhiệm

### 8.1 Nguyên tắc cho Tính năng AI

Workflowez cam kết xây dựng các tính năng AI có lợi ích, công bằng và an toàn. Tất cả tính năng AI trong sản phẩm của chúng tôi phải tuân thủ các nguyên tắc sau:

**Minh bạch**
Người dùng phải biết khi họ đang tương tác với AI. Các đầu ra được tạo bởi AI được gắn nhãn rõ ràng. Hệ thống không giả mạo con người theo cách có thể gây nhầm lẫn cho người dùng.

**Khả năng Giải thích**
Khi khả thi, các khuyến nghị hoặc quyết định được hỗ trợ bởi AI cung cấp cho người dùng một lý do hoặc các yếu tố chính ảnh hưởng đến đầu ra. Kết quả hộp đen là ngoại lệ, không phải quy tắc.

**Giám sát của Con người**
Không có tính năng AI nào trong sản phẩm Workflowez đưa ra quyết định cuối cùng, không thể đảo ngược mà không có bước xác nhận của con người. AI tự động hóa và gợi ý; con người quyết định.

**Công bằng**
Các tính năng AI được đánh giá về thiên kiến tiềm ẩn trước khi phát hành. Đặc biệt chú ý đến các tính năng ảnh hưởng đến kết quả kinh doanh (ví dụ: chấm điểm lead, định tuyến, phân loại) để đảm bảo chúng không gây bất lợi có hệ thống cho các nhóm người dùng hoặc khách hàng của họ.

**Quyền riêng tư**
Dữ liệu khách hàng được sử dụng để hỗ trợ các tính năng AI được xử lý theo đúng Mục 7. Dữ liệu khách hàng không được sử dụng để huấn luyện các mô hình AI mục đích chung mà không có sự đồng ý chọn tham gia rõ ràng.

**Độ tin cậy**
Các tính năng AI được đánh giá về tính nhất quán và độ chính xác của đầu ra trước khi phát hành. Hiệu suất AI suy giảm kích hoạt cảnh báo và khi cần thiết, tự động fallback về hành vi xác định.

### 8.2 Quy trình Xem xét Tính năng AI

Trước khi bất kỳ tính năng powered by AI nào được phát hành cho khách hàng, nó phải vượt qua **AI Feature Review**, bao gồm:

1. **Use case dự định và chế độ thất bại:** Tính năng này được thiết kế để làm gì? Điều gì xảy ra khi nó sai?
2. **Xuất xứ dữ liệu huấn luyện:** Dữ liệu huấn luyện hoặc fine-tuning đến từ đâu? Nó có được cấp phép phù hợp không?
3. **Đánh giá thiên kiến và công bằng:** Mô hình có được kiểm thử trên các quần thể người dùng và use case đa dạng không?
4. **Tiêu chuẩn chất lượng đầu ra:** Cần đạt được mục tiêu accuracy/recall/precision nào trước khi GA release?
5. **Cơ chế kiểm soát của người dùng:** Người dùng có thể sửa chữa, ghi đè hoặc từ chối các đầu ra do AI tạo ra không?
6. **Kế hoạch theo dõi:** Chất lượng tính năng AI sẽ được theo dõi như thế nào sau khi ra mắt? Điều gì kích hoạt rollback?

AI Feature Review được thực hiện bởi PM, Engineering Lead và một AI Safety reviewer được chỉ định (hoặc CTO khi không có reviewer chuyên biệt).

### 8.3 Ứng dụng AI Bị cấm

Workflowez sẽ không xây dựng hoặc triển khai các tính năng AI:
- Tự chủ đưa ra các quyết định có ràng buộc pháp lý hoặc tài chính mà không có sự xem xét của con người
- Tạo hoặc phân phối thông tin sai lệch, spam hoặc nội dung lừa đảo ở quy mô lớn
- Cho phép đối xử phân biệt đối với các cá nhân dựa trên các đặc điểm được bảo vệ
- Giám sát hoặc lập hồ sơ cá nhân bí mật mà không có sự hiểu biết của họ
- Được thiết kế để thao túng người dùng về mặt tâm lý chống lại lợi ích của chính họ (ví dụ: dark patterns được hỗ trợ bởi AI)
- Xử lý các danh mục cá nhân nhạy cảm (sức khỏe, tôn giáo, quan điểm chính trị, dữ liệu sinh trắc học) mà không có sự đồng ý rõ ràng của người dùng và các biện pháp bảo vệ mạnh mẽ

---

## 9. Chính sách Tích hợp & API

### 9.1 Nguyên tắc Thiết kế API

API Workflowez được thiết kế để:
- **Nhất quán:** Quy ước đặt tên, định dạng phản hồi (JSON) và cấu trúc lỗi thống nhất trên tất cả endpoints
- **Ổn định:** API đã xuất bản được hỗ trợ tối thiểu 12 tháng trước khi ngừng hoạt động
- **Bảo mật:** Xác thực qua OAuth 2.0 / API keys với các scope phù hợp; tất cả endpoints yêu cầu phân quyền
- **Tài liệu đầy đủ:** Tất cả API endpoints công khai được ghi lại với ví dụ request/response, mã lỗi và rate limits trước khi phát hành

### 9.2 Phiên bản API

API được phiên bản hóa sử dụng tiền tố đường dẫn `/v{n}/` (ví dụ: `/v1/workflows`). Một phiên bản API mới được giới thiệu khi cần các thay đổi không tương thích ngược. Workflowez hỗ trợ tối đa **hai phiên bản API major đồng thời** bất kỳ lúc nào. Khi v3 được phát hành, v1 được lên lịch ngừng hoạt động (với thông báo trước 12 tháng).

### 9.3 Giới hạn Rate

Giới hạn rate API được thực thi để đảm bảo ổn định nền tảng và sử dụng công bằng giữa các khách hàng. Giới hạn mặc định:

| Gói | Lời gọi API/phút | Lời gọi API/ngày |
|-----|-----------------|-----------------|
| Starter | 60 | 5.000 |
| Pro | 300 | 50.000 |
| Business | 1.000 | 500.000 |
| Enterprise | Tùy chỉnh | Tùy chỉnh |

Khách hàng vượt quá giới hạn rate nhận được phản hồi HTTP 429 với header `Retry-After`. Tăng giới hạn rate có sẵn theo yêu cầu cho khách hàng Enterprise.

### 9.4 Chính sách Tích hợp Bên thứ ba

Khi Workflowez tích hợp với nền tảng hoặc dịch vụ bên thứ ba:

- **Đánh giá bảo mật** của tích hợp phải được hoàn thành trước khi ra mắt
- **DPA** có hiệu lực nếu dữ liệu khách hàng sẽ được truyền cho bên thứ ba
- **Tích hợp được ghi lại** trong danh mục tích hợp công khai với khả năng, giới hạn và hướng dẫn thiết lập
- **Graceful degradation** được triển khai: nếu dịch vụ bên thứ ba không khả dụng, chức năng cốt lõi của Workflowez không bị ảnh hưởng
- **Thỏa thuận đối tác** (khi áp dụng) được Pháp lý xem xét trước khi bắt đầu chia sẻ dữ liệu

---

## 10. Chính sách Giá & Đóng gói

### 10.1 Nguyên tắc Giá

Giá Workflowez được thiết kế để:
- **Phù hợp với giá trị:** Khách hàng trả nhiều hơn khi họ nhận được nhiều giá trị hơn từ sản phẩm
- **Minh bạch:** Không có phí ẩn; giá được công bố và có thể dự đoán
- **Có thể tiếp cận:** Một tier miễn phí hoặc starter có ý nghĩa cho phép khách hàng trải nghiệm giá trị cốt lõi trước khi cam kết
- **Có thể mở rộng:** Giá tăng cùng với khách hàng khi họ mở rộng, tạo ra chuyển động doanh thu mở rộng tự nhiên

### 10.2 Thay đổi Giá

Thay đổi giá cần CEO phê duyệt và tuân theo quy trình sau:
1. PM và Tài chính chuẩn bị đề xuất thay đổi giá với phân tích tác động đến khách hàng
2. CEO phê duyệt thay đổi
3. Khách hàng hiện tại nhận **thông báo bằng văn bản 60 ngày** trước khi bất kỳ tăng giá nào có hiệu lực
4. Giá mới được thông báo qua email, thông báo trong sản phẩm và trên trang giá
5. Người đăng ký hàng năm hiện tại được tôn trọng ở mức giá đã ký kết cho đến hết thời hạn

Workflowez sẽ không thay đổi giá hồi tố trong thời gian đăng ký đang hoạt động mà không có sự đồng ý rõ ràng của khách hàng.

### 10.3 Phân cấp Tính năng

Các tính năng được phân cấp theo gói đăng ký theo chính sách sau:
- **Tier Starter/Miễn phí** bao gồm chức năng cốt lõi đủ để thể hiện giá trị. Không bị cắt giảm hoặc giới hạn nhân tạo đến mức không thể sử dụng.
- **Tier Pro** mở khóa các tính năng cộng tác, tự động hóa nâng cao và giới hạn sử dụng cao hơn.
- **Tier Business/Enterprise** mở khóa bảo mật cấp doanh nghiệp, đảm bảo SLA, hỗ trợ chuyên biệt, tích hợp tùy chỉnh và tính năng AI nâng cao.
- Tính năng mới được gán một tier tại thời điểm PRD được phê duyệt. Thay đổi tier của tính năng sau GA cần PM phê duyệt và thông báo khách hàng.

### 10.4 Chiết khấu & Giá Tùy chỉnh

- Chiết khấu lên đến **20%** có thể được nhóm Kinh doanh cấp trong thẩm quyền chiết khấu đã phê duyệt trước
- Chiết khấu vượt quá 20% cần Trưởng nhóm Kinh doanh phê duyệt
- Chiết khấu vượt quá 40% cần CEO phê duyệt
- Tất cả thỏa thuận giá tùy chỉnh phải được ghi lại trong CRM và Tài chính xem xét
- Đối thủ cạnh tranh, bạn bè hoặc người quen của nhân viên không đủ điều kiện cho giá đặc biệt mà không có CEO phê duyệt

### 10.5 Chính sách Hoàn tiền

- **Đăng ký hàng tháng:** Không hoàn tiền cho các tháng một phần. Hủy có hiệu lực vào cuối kỳ thanh toán.
- **Đăng ký hàng năm:** Khách hàng hủy trong 14 ngày đầu tiên được hoàn tiền đầy đủ. Sau 14 ngày, không hoàn tiền, nhưng đăng ký vẫn còn hiệu lực đến hết thời hạn năm.
- **Tín dụng dịch vụ:** Nếu Workflowez không đáp ứng cam kết SLA (xem Mục 14), khách hàng bị ảnh hưởng nhận tín dụng dịch vụ theo điều khoản SLA.
- Các ngoại lệ hoàn tiền có thể được lãnh đạo Customer Success cấp theo từng trường hợp cho các hoàn cảnh đặc biệt.

---

## 11. Tiếp cận & Bao trùm

### 11.1 Tiêu chuẩn Tiếp cận

Sản phẩm Workflowez hướng đến tuân thủ **WCAG 2.1 Level AA** trên tất cả giao diện hướng tới khách hàng, bao gồm:

- **Có thể nhận thức:** Tất cả nội dung phi văn bản có phương án thay thế dạng văn bản; màu sắc không phải là phương tiện duy nhất để truyền đạt thông tin; tỷ lệ tương phản tối thiểu 4,5:1 cho văn bản bình thường
- **Có thể vận hành:** Tất cả chức năng có thể truy cập qua bàn phím; không có nội dung nào nhấp nháy hơn 3 lần mỗi giây; người dùng có thể tạm dừng, dừng hoặc ẩn nội dung di động
- **Có thể hiểu:** Ngôn ngữ của trang được xác định; thông báo lỗi mang tính mô tả và gợi ý sửa chữa; điều hướng nhất quán
- **Bền vững:** Nội dung có thể giải thích được bởi công nghệ hỗ trợ (trình đọc màn hình, điều khiển giọng nói)

### 11.2 Quốc tế hóa (i18n)

Sản phẩm Workflowez được xây dựng với quốc tế hóa là mối quan tâm hàng đầu:
- Tất cả chuỗi hướng tới người dùng được externalize (không có văn bản hardcode trong code UI)
- Định dạng ngày, số và tiền tệ tôn trọng cài đặt locale của người dùng
- Hỗ trợ layout RTL (phải sang trái) được xem xét cho các thị trường có liên quan
- Ngôn ngữ hiện được hỗ trợ: **Tiếng Việt (vi)** và **Tiếng Anh (en)**. Các ngôn ngữ bổ sung được thêm vào dựa trên nhu cầu thị trường và chiến lược go-to-market.

---

## 12. Chính sách Ngừng hoạt động & Kết thúc Vòng đời

### 12.1 Nguyên tắc Ngừng hoạt động

Workflowez không ngừng hoạt động tính năng hoặc API mà không có thông báo đầy đủ, hỗ trợ di chuyển và truyền thông với khách hàng. Khách hàng phụ thuộc vào sự ổn định sản phẩm của chúng tôi cho hoạt động của họ, và các thay đổi đột ngột làm tổn hại đến lòng tin.

### 12.2 Thời hạn Thông báo Ngừng hoạt động

| Thời hạn Thông báo | Áp dụng cho |
|-------------------|------------|
| **12 tháng** | API công khai, tính năng sản phẩm lớn có nhiều khách hàng sử dụng |
| **6 tháng** | Tính năng sản phẩm nhỏ, tích hợp, API thứ cấp |
| **3 tháng** | Tính năng ít sử dụng (< 5% tài khoản hoạt động), tính năng beta |
| **Ngay lập tức** | Tính năng bị ngừng vì lý do pháp lý, bảo mật hoặc tuân thủ quan trọng (với giải thích ngay cho khách hàng) |

### 12.3 Quy trình Ngừng hoạt động

1. **Quyết định:** PM + Engineering Lead quyết định ngừng một tính năng, với CEO phê duyệt cho các ngừng hoạt động lớn
2. **Đánh giá tác động:** Nhóm CS xác định tất cả khách hàng bị ảnh hưởng và định lượng tác động kinh doanh
3. **Kế hoạch truyền thông:** PM soạn thảo truyền thông hướng tới khách hàng với các phương án thay thế và hướng dẫn di chuyển
4. **Thông báo ngừng hoạt động:** Gửi đến khách hàng bị ảnh hưởng qua email và thông báo trong sản phẩm
5. **Hỗ trợ di chuyển:** Nhóm CS chủ động liên hệ với khách hàng tác động cao để hỗ trợ di chuyển
6. **Giai đoạn ân hạn:** Tính năng vẫn hoạt động trong thời gian thông báo (chỉ đọc cho API khi thực tế)
7. **Ngừng hoạt động:** Tính năng bị vô hiệu hóa vào ngày đã lên lịch
8. **Hỗ trợ sau ngừng hoạt động:** Nhóm CS xử lý các vấn đề khách hàng trong vòng 30 ngày sau ngừng hoạt động

### 12.4 Không Tắt Bất ngờ

Workflowez cam kết không bao giờ tắt sản phẩm hoặc dịch vụ cốt lõi mà không có ít nhất **thông báo trước 6 tháng** và một con đường xuất dữ liệu rõ ràng cho khách hàng. Trong trường hợp mua lại hoặc đóng cửa công ty, khách hàng sẽ được cung cấp thời gian và công cụ hợp lý để di chuyển dữ liệu của họ.

---

## 13. Sở hữu Trí tuệ & Cấp phép

### 13.1 Quyền Sở hữu IP Sản phẩm

Tất cả sở hữu trí tuệ được tạo ra bởi nhân viên và cộng tác viên Workflowez trong quá trình làm việc — bao gồm mã nguồn, thiết kế, tài liệu, mô hình và pipeline dữ liệu — được sở hữu độc quyền bởi Workflowez, được điều chỉnh bởi hợp đồng lao động và các điều khoản chuyển nhượng IP.

### 13.2 Chính sách Mã nguồn Mở

Workflowez có thể sử dụng các thành phần phần mềm mã nguồn mở trong sản phẩm, tuân theo các điều kiện sau:

- **Giấy phép được phê duyệt:** MIT, Apache 2.0, BSD 2/3-clause, ISC. Các giấy phép cho phép này được phê duyệt để sử dụng trong sản phẩm Workflowez mà không cần xem xét thêm.
- **Giấy phép bị hạn chế:** GPL, LGPL, AGPL và các giấy phép copyleft khác cần Engineering Lead và Pháp lý xem xét trước khi sử dụng, vì chúng có thể áp đặt nghĩa vụ lên code độc quyền của Workflowez.
- **Giấy phép bị cấm:** Các thành phần không có giấy phép, xuất xứ không rõ hoặc giấy phép không tương thích với sử dụng thương mại bị cấm.
- **Tuân thủ giấy phép:** Quét phân tích thành phần phần mềm (SCA) được chạy như một phần của pipeline CI/CD để phát hiện và gắn cờ các vấn đề giấy phép trước khi merge.

### 13.3 Quyền Sở hữu Dữ liệu Khách hàng

Khách hàng sở hữu dữ liệu của họ. Quyền của Workflowez đối với dữ liệu khách hàng được giới hạn ở những gì cần thiết để cung cấp dịch vụ đã ký kết, như được mô tả trong Điều khoản Dịch vụ và Chính sách Quyền riêng tư. Workflowez không:
- Bán dữ liệu khách hàng cho bên thứ ba
- Sử dụng dữ liệu khách hàng để huấn luyện các mô hình AI mục đích chung mà không có sự đồng ý rõ ràng
- Giữ lại dữ liệu khách hàng ngoài thời hạn lưu trữ theo hợp đồng

Khách hàng có thể xuất dữ liệu của họ bất kỳ lúc nào thông qua giao diện sản phẩm hoặc bằng cách liên hệ Customer Success.

### 13.4 Cấp phép Mô hình AI

Khi Workflowez tích hợp các mô hình AI bên thứ ba (ví dụ: OpenAI GPT, Anthropic Claude) vào sản phẩm:
- Điều khoản Dịch vụ của nhà cung cấp mô hình áp dụng điều chỉnh các use case được phép
- Dữ liệu khách hàng gửi đến các mô hình bên thứ ba phải tuân theo các chính sách xử lý dữ liệu của các nhà cung cấp đó (như được ghi lại trong các DPA liên quan)
- Workflowez theo dõi các thay đổi về điều khoản của nhà cung cấp mô hình và cập nhật thực hành sản phẩm tương ứng

---

## 14. Chính sách Sự cố & Leo thang Sản phẩm

### 14.1 Mức độ Nghiêm trọng Sự cố

| Mức độ | Định nghĩa | Ví dụ | Mục tiêu Phản hồi |
|--------|------------|-------|-------------------|
| **P0 — Nghiêm trọng** | Gián đoạn dịch vụ hoàn toàn hoặc mất dữ liệu ảnh hưởng đến tất cả hoặc nhiều khách hàng | Nền tảng sập, vi phạm dữ liệu, sự cố bảo mật | 15 phút xác nhận, 4 giờ giải quyết |
| **P1 — Cao** | Tính năng lớn không khả dụng, suy giảm hiệu suất đáng kể, vấn đề toàn vẹn dữ liệu | Công cụ xây dựng workflow cốt lõi bị hỏng, API ngừng hoạt động cho > 10% khách hàng | 1 giờ xác nhận, 8 giờ giải quyết |
| **P2 — Trung bình** | Tính năng không quan trọng không khả dụng, có workaround | Lỗi tích hợp, lỗi UI chặn workflow thứ cấp | 4 giờ xác nhận, 3 ngày làm việc giải quyết |
| **P3 — Thấp** | Lỗi nhỏ, vấn đề thẩm mỹ, suy giảm hiệu suất < 20% | Lỗi đánh máy, vấn đề layout nhỏ, tải báo cáo chậm | 1 ngày làm việc xác nhận, 2 tuần giải quyết |

### 14.2 Quy trình Phản hồi Sự cố

**Sự cố P0/P1:**
1. Kỹ sư on-call khai báo sự cố và tạo kênh sự cố (#incident-[ngày]) trong Slack
2. Engineering Lead và PM được thông báo ngay lập tức (PagerDuty hoặc gọi trực tiếp)
3. Customer Success được thông báo để chuẩn bị truyền thông với khách hàng
4. Trang trạng thái được cập nhật trong vòng 15 phút sau khi khai báo sự cố
5. Cập nhật trạng thái thường xuyên mỗi 30 phút cho đến khi giải quyết
6. Post-mortem được viết trong vòng 5 ngày làm việc sau khi giải quyết (không đổ lỗi, tập trung vào nguyên nhân gốc rễ)

**Sự cố P2/P3:**
- Được ghi vào bug backlog kỹ thuật
- Được ưu tiên theo Mục 4.3
- Được giao cho nhóm kỹ thuật liên quan trong sprint planning tiếp theo

### 14.3 Truyền thông Với Khách hàng Trong Sự cố

- **Trang Trạng thái** (status.workflowez.com): Được cập nhật theo thời gian thực cho sự cố P0/P1
- **Thông báo email** đến khách hàng bị ảnh hưởng: Gửi trong vòng 1 giờ cho sự cố P0/P1
- **Banner trong sản phẩm**: Hiển thị cho các suy giảm hiển thị với khách hàng
- **Báo cáo sau sự cố**: Được xuất bản trên trang trạng thái và gửi email đến khách hàng bị ảnh hưởng trong vòng 5 ngày làm việc sau khi giải quyết

### 14.4 Thỏa thuận Mức độ Dịch vụ (SLA)

| Gói | Uptime SLA | Giai đoạn Đo lường |
|-----|-----------|-------------------|
| Starter | 99,5% | Hàng tháng |
| Pro | 99,7% | Hàng tháng |
| Business | 99,9% | Hàng tháng |
| Enterprise | 99,95% | Hàng tháng |

Uptime được đo lường là tỷ lệ phần trăm thời gian nền tảng cốt lõi (thực thi workflow và API) có sẵn và phản hồi trong ngưỡng độ trễ bình thường. Các cửa sổ bảo trì theo lịch (với thông báo trước 48 giờ) được loại trừ khỏi tính toán SLA.

**Biện pháp khắc phục vi phạm SLA:**

| Thời gian ngừng hoạt động (vượt quá SLA) | Tín dụng Dịch vụ |
|------------------------------------------|-----------------|
| < 1% | Không có |
| 1–5% | 10% phí tháng |
| 5–10% | 25% phí tháng |
| > 10% | 50% phí tháng |

Tín dụng dịch vụ được áp dụng vào chu kỳ thanh toán tiếp theo và là biện pháp khắc phục duy nhất cho vi phạm SLA, ngoại trừ trong các trường hợp sơ suất nghiêm trọng hoặc hành vi cố ý.

---

*Mọi thắc mắc về Chính sách này, vui lòng liên hệ **Nhóm Sản phẩm** tại product@workflowez.com hoặc **Engineering Lead** cho các vấn đề kỹ thuật.*

*© 2026 Workflowez. Bảo lưu mọi quyền. Tài liệu này có tính bảo mật và chỉ dành cho sử dụng nội bộ.*
