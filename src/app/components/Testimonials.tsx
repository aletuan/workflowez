import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const avatars = ["PT", "LH", "NT"];
const authors = ["Phạm Minh Tuấn", "Lê Ngọc Hà", "Nguyễn Đức Thắng"];

export function Testimonials() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  return (
    <section id="testimonials" className="py-10 md:py-16 bg-white relative">
       {/* Background Decoration */}
       <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-yellow-100/40 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">{t.testimonials.title}</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item: any, i: number) => (
            <motion.div 
              key={item.id}
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={reducedMotion ? { duration: 0 } : { delay: i * 0.1 }}
              className="bg-gray-50 p-10 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 border border-transparent hover:border-gray-100 group"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed font-medium">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--brand)] to-[var(--accent-gradient-via)] flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-[var(--brand)]/30">
                  {avatars[i]}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{authors[i]}</div>
                  <div className="text-sm text-gray-500 font-medium">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
