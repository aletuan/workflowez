import { ArrowRight, Zap, GraduationCap, FileText, Headphones, Users } from "lucide-react";
import { PrimaryButton } from "../components/shared/PrimaryButton";
import { useLanguage } from "../context/LanguageContext";
import { ChatBox } from "../components/chat/ChatBox";
import { useChat } from "../../hooks/useChat";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const VALUE_ICONS: Record<string, typeof Zap> = {
  zap: Zap,
  users: Users,
  graduation: GraduationCap,
  file: FileText,
  headphones: Headphones,
};

const ICON_GRADIENTS = [
  "bg-gradient-to-br from-sky-400 to-blue-500 shadow-blue-200",
  "bg-gradient-to-br from-emerald-400 to-teal-500 shadow-emerald-200",
  "bg-gradient-to-br from-amber-400 to-orange-500 shadow-amber-200",
  "bg-gradient-to-br from-violet-400 to-purple-600 shadow-violet-200",
];

export function DemoPage() {
  const { t } = useLanguage();
  const { messages, isLoading, sendMessage } = useChat(
    t.demo.chatWelcome,
    t.demo.mockResponses,
    t.demo.chatError
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white relative overflow-x-hidden md:pt-16">
        {/* Subtle background */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-[var(--brand-light)]/50 to-transparent" />
          <div className="absolute top-24 right-[-10%] w-[280px] h-[280px] md:w-[600px] md:h-[600px] rounded-full bg-[var(--brand)]/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
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
          {/* DOM order: chat first (→ top on mobile), values second (→ bottom on mobile) */}
          {/* Desktop: explicit grid placement restores left=values, right=chat */}
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start max-w-6xl mx-auto">

            {/* Chat box — first in DOM (top on mobile), right column on desktop */}
            <div className="lg:col-start-6 lg:col-span-7 lg:row-start-1 space-y-3 relative min-w-0">
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-cyan-300 rounded-3xl rotate-12 blur-xl opacity-60 animate-pulse pointer-events-none" />
              <ChatBox
                messages={messages}
                isLoading={isLoading}
                onSend={sendMessage}
                quickPrompts={t.demo.quickPrompts}
              />
            </div>

            {/* Business values — second in DOM (bottom on mobile), left column on desktop */}
            <div className="lg:col-start-1 lg:col-span-5 lg:row-start-1 space-y-6">
              <h2 className="text-xl font-bold text-gray-900 text-center lg:text-left">
                {t.demo.values.title}
              </h2>
              <ul className="space-y-4">
                {t.demo.values.items.map((item: { title: string; desc: string; icon?: string; prompt?: string }, i: number) => {
                  const Icon = (item.icon && VALUE_ICONS[item.icon]) || Zap;
                  return (
                    <li
                      key={i}
                      onClick={() => item.prompt && sendMessage(item.prompt, true)}
                      className="flex gap-4 p-4 rounded-2xl bg-[var(--brand-light)]/30 border border-[var(--brand-light)] hover:border-[var(--brand)]/40 hover:bg-[var(--brand-light)]/50 transition-colors cursor-pointer"
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${ICON_GRADIENTS[i % ICON_GRADIENTS.length]} flex items-center justify-center text-white shadow-md`}>
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
          </div>

          {/* CTA strip */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 rounded-[var(--section-radius)] bg-[var(--brand-light)]/40 border border-[var(--brand)]/20">
              <div>
                <p className="font-bold text-gray-900 text-lg">{t.demo.ctaBanner.text}</p>
                <p className="text-sm text-gray-500 mt-0.5">{t.demo.ctaBanner.sub}</p>
              </div>
              <PrimaryButton
                variant="brand"
                size="sm"
                to="/#pricing"
                icon={<ArrowRight className="w-4 h-4" />}
                className="flex-shrink-0"
              >
                {t.demo.ctaBanner.button}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
