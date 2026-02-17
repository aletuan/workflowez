import { Link } from "react-router";
import { ArrowLeft, ArrowRight, Sparkles, Radio, Smile, TrendingUp, Send } from "lucide-react";
import { motion } from "motion/react";
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

export function SocialAgentPage() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Background — cyan gradient top + soft blob */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-cyan-50/60 to-transparent" />
        <div className="absolute top-24 right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-400/5 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link
            to="/products"
            className="flex items-center gap-2 text-gray-600 hover:text-[var(--brand)] font-medium transition-colors cursor-pointer"
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
        {/* Page title */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Coming soon badge */}
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

        {/* Two-column: value props + dashboard screenshot */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">

          {/* Left — value propositions */}
          <div className="lg:col-span-5 space-y-5">
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

          {/* Right — dashboard screenshot with Hero/DemoPage visual treatment */}
          <div className="lg:col-span-7 relative">
            {/* Glow blobs — same pattern as DemoPage ChatBox (cyan) + Hero image (yellow) */}
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-cyan-300 rounded-3xl rotate-12 blur-2xl opacity-50 animate-pulse pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sky-200 rounded-full blur-2xl opacity-40 pointer-events-none" />

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              {/* Image container — same ring + shadow + rounded pattern as Hero section */}
              <div className="rounded-[2rem] overflow-hidden shadow-2xl ring-8 ring-white/60 backdrop-blur-xl bg-white/30">
                <img
                  src="/images/social-dashboard.png"
                  alt={t.social.dashboardAlt}
                  className="w-full h-auto object-cover object-top"
                />
              </div>

              {/* Floating dashboard badge — same pattern as Hero's "Workflow Optimized" */}
              <motion.div
                animate={reducedMotion ? { y: 0 } : { y: [-8, 8, -8] }}
                transition={reducedMotion ? { duration: 0 } : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-3.5 rounded-2xl shadow-xl shadow-cyan-500/10 border border-cyan-100 hidden md:flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                  <TrendingUp className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">2.4M Reach</p>
                  <p className="text-xs text-cyan-600 font-medium">+12.5% this week</p>
                </div>
              </motion.div>

              {/* Dashboard preview label */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/50 backdrop-blur-md text-white text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                {t.social.dashboardBadge}
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-16 max-w-6xl mx-auto">
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
      </main>
    </div>
  );
}
