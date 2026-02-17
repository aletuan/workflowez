import { Link } from "react-router";
import { ArrowLeft, ArrowRight, Sparkles, Zap, GraduationCap, FileText, Headphones } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ChatBox } from "../components/chat/ChatBox";
import { useChat } from "../../hooks/useChat";

const VALUE_ICONS: Record<string, typeof Zap> = {
  zap: Zap,
  graduation: GraduationCap,
  file: FileText,
  headphones: Headphones,
};

export function DemoPage() {
  const { t } = useLanguage();
  const { messages, isLoading, sendMessage } = useChat(t.demo.chatWelcome, t.demo.mockResponses);

  return (
    <div className="min-h-screen bg-white">
      {/* Demo header */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-600 hover:text-[var(--brand)] font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.demo.backToHome}
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
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {t.demo.title}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t.demo.subtitle}
          </p>
        </div>

        {/* Two-column: business values + chat */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Business values - left */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xl font-bold text-gray-900">
              {t.demo.values.title}
            </h2>
            {/* S3: cards are clickable — sends the associated prompt to chat */}
            <ul className="space-y-4">
              {t.demo.values.items.map((item: { title: string; desc: string; icon?: string; prompt?: string }, i: number) => {
                const Icon = (item.icon && VALUE_ICONS[item.icon]) || Zap;
                return (
                  <li
                    key={i}
                    onClick={() => item.prompt && sendMessage(item.prompt, true)}
                    className="flex gap-4 p-4 rounded-2xl bg-[var(--brand-light)]/30 border border-[var(--brand-light)] hover:border-[var(--brand)]/40 hover:bg-[var(--brand-light)]/50 transition-colors cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[var(--brand)] shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Chat box - right */}
          <div className="lg:col-span-7">
            <ChatBox
              messages={messages}
              isLoading={isLoading}
              onSend={sendMessage}
              quickPrompts={t.demo.quickPrompts}
            />
          </div>
        </div>

        {/* S4: CTA strip */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 rounded-[var(--section-radius)] bg-[var(--brand-light)]/40 border border-[var(--brand)]/20">
            <div>
              <p className="font-bold text-gray-900 text-lg">{t.demo.ctaBanner.text}</p>
              <p className="text-sm text-gray-500 mt-0.5">{t.demo.ctaBanner.sub}</p>
            </div>
            <Link
              to="/#pricing"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand)] text-white font-semibold rounded-xl hover:bg-[var(--brand-dark)] transition-colors text-sm"
            >
              {t.demo.ctaBanner.button}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
