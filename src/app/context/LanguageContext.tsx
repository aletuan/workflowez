import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'vi' | 'en';

type Translations = {
  [key in Language]: {
    [key: string]: any;
  };
};

const translations: Translations = {
  vi: {
    header: {
      features: "Tính năng",
      benefits: "Lợi ích",
      testimonials: "Khách hàng",
      pricing: "Bảng giá",
      signin: "Đăng nhập",
      getStarted: "Bắt đầu ngay"
    },
    hero: {
      badge: "Được hỗ trợ bởi GPT-4o",
      title_line1: "Tự động hóa AI hướng tới khách hàng",
      title_line2: "Tối ưu hóa vận hành của bạn",
      description: "Chúng tôi đặt giá trị doanh nghiệp của bạn lên hàng đầu. Tận dụng sức mạnh của AI để tinh giản vận hành, giảm chi phí và mang lại trải nghiệm tốt hơn cho khách hàng.",
      startFree: "Dùng thử miễn phí",
      watchDemo: "Xem Demo",
      noCard: "Không cần thẻ tín dụng",
      trial: "Dùng thử miễn phí 14 ngày",
      img_sales: "Trợ lý kinh doanh AI",
      img_sales_desc: "Tự động trả lời yêu cầu về sản phẩm ngay lập tức",
      img_receipts: "Hóa đơn & Báo cáo",
      img_cashflow: "Trực quan hóa dòng tiền"
    },
    features: {
      title: "Đổi mới hướng tới khách hàng",
      subtitle: "Chúng tôi tập trung vào việc mang lại giá trị hữu hình cho doanh nghiệp của bạn thông qua tự động hóa thông minh và tối ưu hóa vận hành.",
      items: [
        { title: "Xây dựng quy trình trực quan", desc: "Kéo và thả để tạo các luồng tự động hóa phức tạp. Không cần lập trình." },
        { title: "Tích hợp AI", desc: "Kết nối GPT-4, Claude và các mô hình khác trực tiếp vào logic kinh doanh của bạn." },
        { title: "Hợp tác nhóm", desc: "Chia sẻ quy trình, phân quyền và làm việc cùng nhau trong thời gian thực." },
        { title: "Kích hoạt tức thì", desc: "Phản hồi email, gửi biểu mẫu và sự kiện API ngay lập tức." },
        { title: "Phân tích nâng cao", desc: "Theo dõi hiệu suất, ROI và lịch sử thực hiện với bảng điều khiển chi tiết." },
        { title: "Bảo mật doanh nghiệp", desc: "Chứng nhận SOC2 Type II. Dữ liệu của bạn được mã hóa và bảo mật." }
      ]
    },
    benefits: {
      quote: "Workflow EZ hiểu nhu cầu kinh doanh của chúng tôi hơn bất kỳ công cụ nào khác.",
      title: "Xây dựng cho các đội ngũ phát triển nhanh",
      items: [
        { title: "Kết nối ứng dụng của bạn", desc: "Tích hợp với hơn 500 công cụ bao gồm Slack, Salesforce, HubSpot và Notion chỉ trong vài cú nhấp chuột." },
        { title: "Xây dựng quy trình của bạn", desc: "Sử dụng trình xây dựng trực quan để lập bản đồ logic. Thêm các bước AI để xử lý văn bản, phân tích dữ liệu hoặc tạo nội dung." },
        { title: "Ra mắt và mở rộng", desc: "Triển khai chỉ với một cú nhấp chuột. Cơ sở hạ tầng không máy chủ của chúng tôi xử lý việc mở rộng trong khi bạn ngủ." }
      ]
    },
    testimonials: {
      title: "Được tin dùng bởi các đội ngũ sáng tạo",
      subtitle: "Tham gia cùng hàng ngàn công ty đang sử dụng Workflow EZ để tinh giản hoạt động của họ.",
      items: [
        { quote: "Tích hợp AI rất mượt mà. Chúng tôi đã tự động hóa toàn bộ quy trình giới thiệu khách hàng chỉ trong một buổi chiều.", role: "COO tại GrowthFlow" },
        { quote: "Tôi từng hoài nghi về các công cụ no-code, nhưng Workflow EZ thì khác. Nó đủ mạnh cho kỹ sư nhưng đủ đơn giản cho mọi người.", role: "Giám đốc sản phẩm tại DevCorp" },
        { quote: "Thời gian phản hồi hỗ trợ khách hàng giảm 80% sau khi chúng tôi triển khai quy trình trả lời tự động bằng AI.", role: "Trưởng bộ phận hỗ trợ tại HelpDesk" }
      ]
    },
    pricing: {
      title: "Bảng giá đơn giản, minh bạch",
      subtitle: "Bắt đầu miễn phí, mở rộng khi bạn phát triển.",
      month: "/tháng",
      starter: {
        title: "Khởi động",
        desc: "Hoàn hảo cho cá nhân và người làm việc tự do.",
        cta: "Bắt đầu miễn phí",
        features: ["5 quy trình hoạt động", "100 lần chạy mỗi tháng", "Tích hợp cơ bản"]
      },
      pro: {
        title: "Chuyên nghiệp",
        tag: "Phổ biến",
        desc: "Dành cho nhóm nhỏ và doanh nghiệp đang phát triển.",
        cta: "Dùng thử miễn phí",
        features: ["20 quy trình hoạt động", "5,000 lần chạy mỗi tháng", "Tạo văn bản AI", "Hỗ trợ email ưu tiên"]
      },
      business: {
        title: "Doanh nghiệp",
        desc: "Tính năng nâng cao cho đội ngũ mở rộng.",
        cta: "Liên hệ kinh doanh",
        features: ["Quy trình không giới hạn", "50,000 lần chạy mỗi tháng", "Phân tích nâng cao", "Quản lý tài khoản riêng"]
      }
    },
    cta: {
      title: "Sẵn sàng tự động hóa sự phát triển của bạn?",
      desc: "Tham gia cùng hơn 10.000 doanh nghiệp tiết kiệm thời gian và tiền bạc với Workflow EZ. Bắt đầu dùng thử miễn phí 14 ngày ngay hôm nay.",
      primary: "Bắt đầu ngay",
      secondary: "Đặt lịch Demo",
      note: "Không cần thẻ tín dụng • Hủy bất cứ lúc nào"
    },
    footer: {
      desc: "Trao quyền cho các doanh nghiệp vừa và nhỏ với quy trình tự động hóa dựa trên AI. Xây dựng, triển khai và mở rộng mà không cần viết mã.",
      cols: {
        product: "Sản phẩm",
        resources: "Tài nguyên",
        company: "Công ty"
      },
      copyright: "© 2026 Workflow EZ Inc. Bảo lưu mọi quyền."
    }
  },
  en: {
    header: {
      features: "Features",
      benefits: "Benefits",
      testimonials: "Testimonials",
      pricing: "Pricing",
      signin: "Sign in",
      getStarted: "Get Started"
    },
    hero: {
      badge: "Now powered by GPT-4o",
      title_line1: "Customer-First AI Automation",
      title_line2: "Optimize Your Operations",
      description: "We put your business value first. Leverage the power of AI to streamline operations, reduce costs, and deliver better experiences to your customers.",
      startFree: "Start Free Trial",
      watchDemo: "Watch Demo",
      noCard: "No credit card required",
      trial: "14-day free trial",
      img_sales: "AI Sales Assistant",
      img_sales_desc: "Auto-reply to product inquiries instantly",
      img_receipts: "Receipts & Reports",
      img_cashflow: "Cash Flow Viz"
    },
    features: {
      title: "Customer-Centric Innovation",
      subtitle: "We focus on delivering tangible value to your business through intelligent automation and operational optimization.",
      items: [
        { title: "Visual Workflow Builder", desc: "Drag and drop to create complex automation flows. No coding required." },
        { title: "AI Integration", desc: "Connect GPT-4, Claude, and other models directly into your business logic." },
        { title: "Team Collaboration", desc: "Share workflows, assign roles, and work together in real-time." },
        { title: "Instant Triggers", desc: "React to emails, form submissions, and API events instantly." },
        { title: "Advanced Analytics", desc: "Track performance, ROI, and execution history with detailed dashboards." },
        { title: "Enterprise Security", desc: "SOC2 Type II certified. Your data is encrypted and secure." }
      ]
    },
    benefits: {
      quote: "Workflow EZ understands our business needs like no other tool.",
      title: "Built for teams that move fast",
      items: [
        { title: "Connect your apps", desc: "Integrate with 500+ tools including Slack, Salesforce, HubSpot, and Notion in just a few clicks." },
        { title: "Build your workflow", desc: "Use our visual builder to map out logic. Add AI steps to process text, analyze data, or generate content." },
        { title: "Launch and scale", desc: "Deploy with one click. Our serverless infrastructure handles the scale while you sleep." }
      ]
    },
    testimonials: {
      title: "Trusted by innovative teams",
      subtitle: "Join thousands of companies using Workflow EZ to streamline their operations.",
      items: [
        { quote: "The AI integration is seamless. We automated our entire customer onboarding process in one afternoon.", role: "COO at GrowthFlow" },
        { quote: "I was skeptical about no-code tools, but Workflow EZ is different. It's powerful enough for engineers but simple enough for everyone.", role: "Product Manager at DevCorp" },
        { quote: "Customer support response times dropped by 80% after we implemented the AI auto-responder workflows.", role: "Head of Support at HelpDesk" }
      ]
    },
    pricing: {
      title: "Simple, transparent pricing",
      subtitle: "Start for free, scale as you grow.",
      month: "/mo",
      starter: {
        title: "Starter",
        desc: "Perfect for individuals and hobbyists.",
        cta: "Get Started Free",
        features: ["5 active workflows", "100 runs per month", "Basic integrations"]
      },
      pro: {
        title: "Pro",
        tag: "Popular",
        desc: "For small teams and growing businesses.",
        cta: "Start Free Trial",
        features: ["20 active workflows", "5,000 runs per month", "AI text generation", "Priority email support"]
      },
      business: {
        title: "Business",
        desc: "Advanced features for scaling teams.",
        cta: "Contact Sales",
        features: ["Unlimited workflows", "50,000 runs per month", "Advanced analytics", "Dedicated account manager"]
      }
    },
    cta: {
      title: "Ready to automate your growth?",
      desc: "Join 10,000+ businesses saving time and money with Workflow EZ. Start your 14-day free trial today.",
      primary: "Get Started Now",
      secondary: "Book a Demo",
      note: "No credit card required • Cancel anytime"
    },
    footer: {
      desc: "Empowering SMBs with AI-driven automation workflows. Build, deploy, and scale without writing code.",
      cols: {
        product: "Product",
        resources: "Resources",
        company: "Company"
      },
      copyright: "© 2026 Workflow EZ Inc. All rights reserved."
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any; // Using any for simplicity in nested object access
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('vi');

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
