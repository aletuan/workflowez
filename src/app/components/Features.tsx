import { Zap, BarChart3, Users, Lock, Sparkles, Workflow, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Section } from "./shared/Section";

export function Features() {
  const { t } = useLanguage();

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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.features.items.map((feature: any, index: number) => (
          <div
            key={feature.id}
            className="relative bg-white p-5 md:p-8 rounded-[var(--card-radius)] border border-gray-100 shadow-lg shadow-gray-200/50 overflow-hidden cursor-pointer"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 rounded-2xl ${colors[index]} flex items-center justify-center shadow-lg`}>
                  {icons[index]}
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-300" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
