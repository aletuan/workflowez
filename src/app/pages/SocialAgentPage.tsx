import { Link } from "react-router";
import { ArrowLeft, Sparkles, TrendingUp, BarChart3 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function SocialAgentPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link
            to="/products"
            className="flex items-center gap-2 text-gray-600 hover:text-[var(--brand)] font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.catalog.backToCatalog}
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[linear-gradient(to_bottom_right,var(--brand),var(--accent-gradient-via))] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900">Workflow EZ</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {t.catalog.social}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t.catalog.socialDesc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-[var(--brand-light)]/30 border border-[var(--brand-light)]">
            <TrendingUp className="w-10 h-10 text-[var(--brand)] mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Listen & Analyze</h3>
            <p className="text-gray-600 text-sm">Lắng nghe và phân tích feedback từ người dùng, fans trên social.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[var(--brand-light)]/30 border border-[var(--brand-light)]">
            <BarChart3 className="w-10 h-10 text-[var(--brand)] mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Trend & Publish</h3>
            <p className="text-gray-600 text-sm">Theo dõi xu hướng, hot topics và xuất bản nội dung tối ưu.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 font-medium">Coming soon — Demo & full integration in progress.</p>
        </div>
      </main>
    </div>
  );
}
