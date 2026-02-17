import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 relative">
       <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">{t.pricing.title}</h2>
          <p className="text-xl text-gray-500">{t.pricing.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {/* Starter Plan */}
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-[2.5rem] border border-gray-100 hover:border-violet-200 transition-colors">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.pricing.starter.title}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-extrabold text-gray-900 tracking-tight">$0</span>
              <span className="text-gray-500 font-medium">{t.pricing.month}</span>
            </div>
            <p className="text-gray-500 mb-8 font-medium">{t.pricing.starter.desc}</p>
            <button className="w-full py-4 px-6 bg-gray-100 text-gray-900 font-bold rounded-2xl hover:bg-gray-200 transition-colors mb-8">
              {t.pricing.starter.cta}
            </button>
            <ul className="space-y-4">
              {t.pricing.starter.features.map((feature: string) => (
                <li key={feature} className="flex items-center gap-3 text-sm font-medium text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-gray-600" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-gray-900 p-10 rounded-[2.5rem] shadow-2xl shadow-violet-500/20 scale-105 z-10 text-white overflow-hidden group">
             {/* Gradient Shine */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-violet-600/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-violet-600/50 transition-colors duration-500"></div>

            <div className="absolute top-8 right-8">
              <span className="bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg shadow-violet-500/40">
                {t.pricing.pro.tag}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{t.pricing.pro.title}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-6xl font-extrabold tracking-tight">$49</span>
              <span className="text-gray-400 font-medium">{t.pricing.month}</span>
            </div>
            <p className="text-gray-400 mb-8 font-medium">{t.pricing.pro.desc}</p>
            <button className="w-full py-4 px-6 bg-violet-600 text-white font-bold rounded-2xl hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-600/30 transition-all mb-8">
              {t.pricing.pro.cta}
            </button>
            <ul className="space-y-4">
              {t.pricing.pro.features.map((feature: string) => (
                <li key={feature} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-violet-400" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Business Plan */}
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-[2.5rem] border border-gray-100 hover:border-violet-200 transition-colors">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.pricing.business.title}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-extrabold text-gray-900 tracking-tight">$199</span>
              <span className="text-gray-500 font-medium">{t.pricing.month}</span>
            </div>
            <p className="text-gray-500 mb-8 font-medium">{t.pricing.business.desc}</p>
            <button className="w-full py-4 px-6 bg-gray-100 text-gray-900 font-bold rounded-2xl hover:bg-gray-200 transition-colors mb-8">
              {t.pricing.business.cta}
            </button>
            <ul className="space-y-4">
              {t.pricing.business.features.map((feature: string) => (
                <li key={feature} className="flex items-center gap-3 text-sm font-medium text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-gray-600" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
