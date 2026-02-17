import { motion } from "motion/react";
import { Zap, BarChart3, Users, Lock, Sparkles, Workflow, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { Section } from "./shared/Section";

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
    <Section
      id="features"
      eyebrow={t.features.eyebrow}
      title={t.features.title}
      subtitle={t.features.subtitle}
      className="relative overflow-hidden"
    >
      {/* Background Mesh */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-[var(--brand-light)]/30 rounded-full blur-[var(--blur-lg)] -translate-y-1/2 -translate-x-1/2 -z-10"></div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((feature: any, index: number) => (
            <motion.div
              key={feature.id}
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={reducedMotion ? { duration: 0 } : { delay: index * 0.1 }}
              className="relative bg-white/80 backdrop-blur-lg p-5 md:p-8 rounded-[var(--card-radius)] border border-white shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-[var(--brand)]/20 hover:-translate-y-1 transition-all duration-300 group overflow-hidden cursor-pointer"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[var(--brand-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${colors[index]} flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                    {icons[index]}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-[var(--brand)] transition-colors" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[var(--brand-dark)] transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
      </div>
    </Section>
  );
}
