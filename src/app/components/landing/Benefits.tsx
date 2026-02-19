import { useLanguage } from "../../context/LanguageContext";
import { ImageWithFallback } from "../shared/ImageWithFallback";

export function Benefits() {
  const { t } = useLanguage();

  return (
    <section id="benefits" className="py-10 md:py-16 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-2/5 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
              <ImageWithFallback
                src="/images/team-office.jpg"
                alt="Team working together"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent flex items-end p-10">
                <div className="text-white">
                  <p className="text-2xl font-bold mb-3 italic">"{t.benefits.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-8 bg-[var(--brand)] rounded-full"></div>
                    <p className="opacity-90 font-medium">Nguyễn Minh Khoa, CEO tại VinaTech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <span className="text-[var(--brand)] font-bold tracking-wider text-sm uppercase mb-2 block">{t.benefits.eyebrow}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">{t.benefits.title}</h2>
            <div className="space-y-8">
              {t.benefits.items.map((item: any, index: number) => (
                <div className="flex gap-5" key={item.id}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[var(--brand-light)] border border-[var(--brand)]/20 flex items-center justify-center text-[var(--brand)] font-bold text-xl shadow-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
