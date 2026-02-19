import { useLanguage } from "../../context/LanguageContext";
import { ImageWithFallback } from "../shared/ImageWithFallback";

/** Avatar URL - friendly cartoon style for human touch */
const AVATAR_URL =
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4,c0aede,d1d4f9";

export function AdvisorAvatar() {
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-[var(--brand-light)] ring-2 ring-white shadow-md">
          <ImageWithFallback
            src={AVATAR_URL}
            alt={t.demo.advisor.name}
            className="w-full h-full object-cover"
          />
        </div>
        <span
          className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white"
          title="Online"
        />
      </div>
      <div>
        <h3 className="font-bold text-gray-900 text-base">{t.demo.advisor.name}</h3>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          {t.demo.advisor.role}
        </p>
        <p className="text-xs text-gray-400">{t.demo.advisor.domain}</p>
      </div>
    </div>
  );
}
