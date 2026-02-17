import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function Benefits() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  return (
    <section id="benefits" className="py-24 relative overflow-hidden bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={reducedMotion ? { duration: 0 } : undefined}
            className="lg:w-1/2 relative"
          >
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-violet-100/50 rounded-full blur-[80px] -z-10"></div>

            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 group">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1559136560-16ad036d85d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdGFydHVwJTIwdGVhbSUyMG9mZmljZXxlbnwxfHx8fDE3NzEyNjUxODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Team working together" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent flex items-end p-10">
                <div className="text-white">
                  <p className="text-2xl font-bold mb-3 italic">"{t.benefits.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-8 bg-violet-500 rounded-full"></div>
                    <p className="opacity-90 font-medium">Sarah Jenks, CEO at TechStart</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <span className="text-violet-600 font-bold tracking-wider text-sm uppercase mb-2 block">Why Choose Us</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8">{t.benefits.title}</h2>
            
            <div className="space-y-8">
              {t.benefits.items.map((item: any, index: number) => (
                <motion.div 
                  initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={reducedMotion ? { duration: 0 } : { delay: index * 0.1 }}
                  className="flex gap-5 group" 
                  key={item.id}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 font-bold text-xl shadow-sm group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-violet-700 transition-colors">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
