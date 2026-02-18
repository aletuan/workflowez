import { motion } from "motion/react";
import { ArrowRight, Play, CheckCircle2, Star, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { PrimaryButton } from "./shared/PrimaryButton";
import { SecondaryButton } from "./shared/SecondaryButton";

export function Hero() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const motionTransition = reducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" as const };

  return (
    // Fix #2: pt-20 → pt-12 on mobile
    <section className="relative pt-12 pb-12 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 right-0 w-[280px] h-[280px] md:w-[600px] md:h-[600px] bg-purple-200/40 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/2 md:animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[240px] h-[240px] md:w-[500px] md:h-[500px] bg-blue-200/40 rounded-full blur-[80px] md:blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/*
          Mobile (flex-col): text → image → actions  (DOM order)
          Desktop (lg:grid 2-col): [text (col1 row1)] [image (col2 row1+2)]
                                   [actions (col1 row2)]
        */}
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* 1. Text: badge + h1 + description */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={motionTransition}
            className="lg:col-start-1 lg:row-start-1"
          >
            <div className="inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-white border border-[var(--brand-light)] shadow-sm text-[var(--brand-dark)] text-sm font-semibold mb-5 hover:scale-105 transition-transform cursor-default">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand-light)]">
                <Star className="w-3.5 h-3.5 fill-current" />
              </span>
              {t.hero.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-5 leading-[1.1]">
              {t.hero.title_line1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand)] via-[var(--accent-gradient-via)] to-[var(--accent-gradient-to)] animate-gradient">
                {t.hero.title_line2}
              </span>
            </h1>

            <p className="text-base md:text-xl text-gray-600 max-w-lg leading-relaxed font-medium">
              {t.hero.description}
            </p>
          </motion.div>

          {/* 2. Image gallery — second on mobile (above buttons), right column on desktop */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
            className="relative lg:col-start-2 lg:row-start-1 lg:row-span-2"
          >
            {/* Abstract Decorative Elements behind image */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-300 rounded-3xl rotate-12 blur-xl opacity-60 hidden md:block md:animate-pulse"></div>
            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-cyan-300 rounded-full blur-xl opacity-60"></div>

            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl ring-8 ring-white/50 backdrop-blur-xl bg-white/40">
              <div className="grid grid-cols-2 gap-4 p-4">
                {/* Main Card */}
                <div className="col-span-2 relative aspect-video rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1762328862557-e0a36587cd3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwY3VzdG9tZXIlMjBzZXJ2aWNlJTIwbW9iaWxlJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MTI2NTk2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="AI Sales Assistant"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/90 via-[var(--brand-dark)]/20 to-transparent p-6 flex flex-col justify-end">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white text-xs font-bold mb-2 w-fit">AI AGENT</span>
                    <p className="text-white font-bold text-lg">{t.hero.img_sales}</p>
                    <p className="text-white/80 text-sm">{t.hero.img_sales_desc}</p>
                  </div>
                </div>

                {/* Secondary Cards */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1604088308691-59fb736f0b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcmVjZWlwdCUyMGV4cGVuc2UlMjBtYW5hZ2VtZW50JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MTI2NTk2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Receipt Management"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors p-4 flex items-end">
                    <p className="text-white font-bold text-sm leading-tight">{t.hero.img_receipts}</p>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1659479749984-d48333116052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBjYXNoJTIwZmxvdyUyMGNoYXJ0JTIwdGFibGV0JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MTI2NTk2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Cash Flow Visualization"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors p-4 flex items-end">
                    <p className="text-white font-bold text-sm leading-tight">{t.hero.img_cashflow}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <motion.div
              animate={reducedMotion ? { y: 0 } : { y: [-10, 10, -10] }}
              transition={reducedMotion ? { duration: 0 } : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 bg-white p-4 rounded-2xl shadow-xl shadow-[var(--brand)]/10 border border-[var(--brand-light)] hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Workflow Optimized</p>
                  <p className="text-xs text-green-600 font-medium">+145% Efficiency</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 3. Actions: buttons + trust badges — third on mobile (below image), col1 row2 on desktop */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.1 }}
            className="lg:col-start-1 lg:row-start-2"
          >
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <PrimaryButton icon={<ArrowRight className="w-5 h-5" />}>
                {t.hero.startFree}
              </PrimaryButton>
              <SecondaryButton to="/products" icon={<Play className="w-4 h-4 fill-current" />}>
                {t.hero.watchDemo}
              </SecondaryButton>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-semibold text-gray-800">{t.hero.noCard}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-semibold text-gray-800">{t.hero.trial}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
