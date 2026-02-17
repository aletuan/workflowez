import { motion } from "motion/react";
import { Zap, BarChart3, Users, Lock, Sparkles, Workflow, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function Features() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  const icons = [
    <Workflow className="w-6 h-6 text-white" />,
    <Sparkles className="w-6 h-6 text-white" />,
    <Users className="w-6 h-6 text-white" />,
    <Zap className="w-6 h-6 text-white" />,
    <BarChart3 className="w-6 h-6 text-white" />,
    <Lock className="w-6 h-6 text-white" />
  ];

  const colors = [
    "bg-blue-500",
    "bg-purple-500",
    "bg-indigo-500",
    "bg-amber-500",
    "bg-emerald-500",
    "bg-rose-500"
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-fuchsia-100/30 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-violet-600 font-bold tracking-wider text-sm uppercase mb-2 block">Powerful Tools</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">{t.features.title}</h2>
          <p className="text-xl text-gray-500 leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((feature: any, index: number) => (
            <motion.div
              key={feature.id}
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={reducedMotion ? { duration: 0 } : { delay: index * 0.1 }}
              className="relative bg-white/60 backdrop-blur-lg p-8 rounded-[2rem] border border-white shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-violet-200/50 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-violet-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${colors[index]} flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                    {icons[index]}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-violet-500 transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-violet-700 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
