import { Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const avatarImages = ["/images/avatar-pt.jpg", "/images/avatar-lh.jpg", "/images/avatar-nt.jpg"];
const authors = ["Phạm Minh Tuấn", "Lê Ngọc Hà", "Nguyễn Đức Thắng"];
const ratings = [4.5, 4, 5];

function StarRating({ rating, id }: { rating: number; id: string }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => {
        const filled = rating >= n;
        const half = !filled && rating >= n - 0.5;
        const gradId = `${id}-${n}`;
        return (
          <svg key={n} className="w-5 h-5" viewBox="0 0 24 24">
            {half && (
              <defs>
                <linearGradient id={gradId} x1="0" x2="1" y1="0" y2="0">
                  <stop offset="50%" stopColor="#facc15" />
                  <stop offset="50%" stopColor="#d1d5db" />
                </linearGradient>
              </defs>
            )}
            <Star
              className="w-5 h-5"
              fill={filled ? "#facc15" : half ? `url(#${gradId})` : "#d1d5db"}
              stroke={filled || half ? "#facc15" : "#d1d5db"}
            />
          </svg>
        );
      })}
    </div>
  );
}

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-10 md:py-16 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">{t.testimonials.title}</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item: any, i: number) => (
            <div
              key={item.id}
              className="bg-gray-50 p-6 sm:p-8 lg:p-10 rounded-[2.5rem] border border-gray-100"
            >
              <div className="mb-6 sm:mb-8">
                <StarRating rating={ratings[i]} id={item.id} />
              </div>
              <p className="text-lg text-gray-700 mb-8 sm:mb-10 leading-relaxed font-medium">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={avatarImages[i]}
                  alt={authors[i]}
                  className="w-14 h-14 rounded-full object-cover object-top shrink-0 ring-2 ring-[var(--brand-light)] shadow-md"
                />
                <div>
                  <div className="font-bold text-gray-900 text-base">{authors[i]}</div>
                  <div className="text-sm text-gray-500 font-medium">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
