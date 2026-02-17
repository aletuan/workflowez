import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="relative bg-gray-900 rounded-[3rem] overflow-hidden px-8 py-20 md:px-20 md:py-24 text-center group">
          {/* Animated Background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-40">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-violet-500/50 transition-colors duration-700"></div>
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-600/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 group-hover:bg-fuchsia-500/50 transition-colors duration-700"></div>
          </div>
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-violet-300 font-bold text-sm mb-8 border border-white/5">
              <Sparkles className="w-4 h-4" />
              <span>Start automating today</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
              {t.cta.title}
            </h2>
            <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.cta.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button className="px-10 py-5 bg-white text-gray-900 font-bold text-lg rounded-2xl hover:bg-violet-50 hover:scale-105 transition-all shadow-xl shadow-white/10 flex items-center justify-center gap-2">
                {t.cta.primary} <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-10 py-5 bg-transparent border-2 border-gray-700 text-white font-bold text-lg rounded-2xl hover:bg-gray-800 hover:border-gray-600 transition-colors">
                {t.cta.secondary}
              </button>
            </div>
            <p className="mt-8 text-sm text-gray-500 font-medium">{t.cta.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
