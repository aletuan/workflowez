import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, Radio, Smile, TrendingUp, Send, LayoutDashboard, Headphones, BarChart3 } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const VALUE_ICONS: Record<string, typeof Radio> = {
  radio: Radio,
  smile: Smile,
  "trending-up": TrendingUp,
  send: Send,
};

const ICON_GRADIENTS = [
  "bg-gradient-to-br from-cyan-400 to-sky-500 shadow-cyan-200",
  "bg-gradient-to-br from-teal-400 to-emerald-500 shadow-emerald-200",
  "bg-gradient-to-br from-sky-400 to-blue-500 shadow-blue-200",
  "bg-gradient-to-br from-violet-400 to-purple-600 shadow-violet-200",
];

const SCREENS = [
  {
    src: "/images/social-dashboard.png",
    tabIcon: LayoutDashboard,
    label: "Dashboard",
    badge: { value: "2.4M Reach", delta: "+12.5% this week" },
  },
  {
    src: "/images/social-listening.png",
    tabIcon: Headphones,
    label: "Active Listening",
    badge: { value: "1,248 Mentions", delta: "+12% vs last week" },
  },
  {
    src: "/images/social-analytics.png",
    tabIcon: BarChart3,
    label: "Analytics",
    badge: { value: "45.2K Impressions", delta: "Top LinkedIn post" },
  },
];

const AUTO_ADVANCE_MS = 4000;

export function SocialAgentPage() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % SCREENS.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [reducedMotion]);

  const current = SCREENS[activeTab];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white relative overflow-x-hidden md:pt-16">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-cyan-50/60 to-transparent" />
        <div className="absolute top-24 right-[-10%] w-[280px] h-[280px] md:w-[600px] md:h-[600px] rounded-full bg-cyan-400/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
        {/* Page title */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            {t.social.comingSoon}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {t.catalog.social}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t.social.subtitle}
          </p>
        </div>

        {/* Two-column: value props + screenshot carousel */}
        {/* DOM order: carousel first (→ top on mobile), value props second (→ bottom on mobile) */}
        {/* Desktop: explicit grid placement restores left=values, right=carousel */}
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start max-w-6xl mx-auto">

          {/* Carousel — first in DOM (top on mobile), right column on desktop */}
          <div className="lg:col-start-6 lg:col-span-7 lg:row-start-1 relative min-w-0">
            {/* Glow blobs */}
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-cyan-300 rounded-3xl rotate-12 blur-2xl opacity-50 animate-pulse pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sky-200 rounded-full blur-2xl opacity-40 pointer-events-none" />

            {/* Tab switcher */}
            <div className="flex items-center gap-2 mb-4 relative z-10">
              {SCREENS.map((screen, i) => {
                const TabIcon = screen.tabIcon;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      activeTab === i
                        ? "bg-cyan-600 text-white shadow-sm"
                        : "bg-gray-100 text-gray-500 hover:bg-cyan-50 hover:text-cyan-700"
                    }`}
                  >
                    <TabIcon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{screen.label}</span>
                  </button>
                );
              })}

              {/* Progress dots — 44px touch target, hidden on mobile */}
              <div className="ml-auto hidden sm:flex items-center">
                {SCREENS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className="py-[19px] px-2 flex items-center justify-center cursor-pointer"
                  >
                    <span className={`rounded-full transition-all duration-300 block ${
                      activeTab === i ? "w-4 h-1.5 bg-cyan-600" : "w-1.5 h-1.5 bg-gray-300 hover:bg-cyan-300"
                    }`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Image container with AnimatePresence for smooth transitions */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              {/* Hero-style image frame: ring-8 + shadow-2xl + rounded */}
              <div className="rounded-[2rem] overflow-hidden shadow-2xl ring-8 ring-white/60 backdrop-blur-xl bg-white/30 relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTab}
                    src={current.src}
                    alt={`${t.social.dashboardAlt} — ${current.label}`}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: reducedMotion ? 0 : 0.35, ease: "easeInOut" }}
                    className="w-full h-auto object-cover object-top"
                  />
                </AnimatePresence>

              </div>

              {/* Floating stat badge — persistent, gently bobs, text updates in-place */}
              <motion.div
                animate={reducedMotion ? { y: 0 } : { y: [-6, 6, -6] }}
                transition={reducedMotion ? { duration: 0 } : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-3.5 rounded-2xl shadow-xl shadow-cyan-500/10 border border-cyan-100 hidden md:flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{current.badge.value}</p>
                  <p className="text-xs text-cyan-600 font-medium">{current.badge.delta}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Value propositions — second in DOM (bottom on mobile), left column on desktop */}
          <div className="lg:col-start-1 lg:col-span-5 lg:row-start-1 space-y-5">
            <h2 className="text-xl font-bold text-gray-900 text-center lg:text-left">
              {t.social.whyTitle}
            </h2>
            <ul className="space-y-4">
              {t.social.values.map((item: { title: string; desc: string; icon?: string }, i: number) => {
                const Icon = (item.icon && VALUE_ICONS[item.icon]) || TrendingUp;
                return (
                  <motion.li
                    key={i}
                    initial={reducedMotion ? false : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-2xl bg-cyan-50/60 border border-cyan-100 hover:border-cyan-300/60 hover:bg-cyan-50 transition-colors"
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${ICON_GRADIENTS[i % ICON_GRADIENTS.length]} flex items-center justify-center text-white shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-0.5">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 rounded-[var(--section-radius)] bg-cyan-50/60 border border-cyan-200/60">
            <div>
              <p className="font-bold text-gray-900 text-lg">{t.social.ctaBanner.text}</p>
              <p className="text-sm text-gray-500 mt-0.5">{t.social.ctaBanner.sub}</p>
            </div>
            <Link
              to="/#pricing"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white font-semibold rounded-xl hover:bg-cyan-700 transition-colors text-sm cursor-pointer"
            >
              {t.social.ctaBanner.button}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}
