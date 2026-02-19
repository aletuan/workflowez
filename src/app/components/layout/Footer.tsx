import { Twitter, Linkedin, Github, Facebook, Sparkles } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-100 pt-10 md:pt-14 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--brand)] to-[var(--accent-gradient-via)] rounded-xl flex items-center justify-center shadow-lg shadow-[var(--brand)]/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand-dark)] to-[var(--accent-gradient-via)]">
                {t.footer.brand}
              </span>
            </div>
            <p className="text-gray-500 text-base max-w-xs mb-8 leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: Twitter, key: "twitter" as const },
                { Icon: Linkedin, key: "linkedin" as const },
                { Icon: Github, key: "github" as const },
                { Icon: Facebook, key: "facebook" as const },
              ].map(({ Icon, key }) => (
                <a
                  key={key}
                  href="#"
                  aria-label={t.footer.social[key]}
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[var(--brand-light)] hover:text-[var(--brand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/50 focus-visible:ring-offset-2"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">{t.footer.cols.product}</h4>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li><a href="/#features" className="hover:text-[var(--brand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 focus-visible:ring-offset-1 rounded">{t.footer.links.features}</a></li>
              <li><a href="/#features" className="hover:text-[var(--brand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 focus-visible:ring-offset-1 rounded">{t.footer.links.integrations}</a></li>
              <li><a href="/#features" className="hover:text-[var(--brand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 focus-visible:ring-offset-1 rounded">{t.footer.links.templates}</a></li>
              <li><a href="/#features" className="hover:text-[var(--brand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 focus-visible:ring-offset-1 rounded">{t.footer.links.enterprise}</a></li>
              <li><a href="/#pricing" className="hover:text-[var(--brand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 focus-visible:ring-offset-1 rounded">{t.footer.links.pricing}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">{t.footer.cols.resources}</h4>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li><a href="#" className="hover:text-[var(--brand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 focus-visible:ring-offset-1 rounded">{t.footer.links.blog}</a></li>
              <li><a href="#" className="hover:text-[var(--brand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 focus-visible:ring-offset-1 rounded">{t.footer.links.community}</a></li>
              <li><a href="#" className="hover:text-[var(--brand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 focus-visible:ring-offset-1 rounded">{t.footer.links.documentation}</a></li>
              <li><a href="#" className="hover:text-[var(--brand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 focus-visible:ring-offset-1 rounded">{t.footer.links.helpCenter}</a></li>
              <li><a href="#" className="hover:text-[var(--brand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 focus-visible:ring-offset-1 rounded">{t.footer.links.apiReference}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">{t.footer.cols.company}</h4>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li><a href="/#testimonials" className="hover:text-[var(--brand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 focus-visible:ring-offset-1 rounded">{t.footer.links.aboutUs}</a></li>
              <li><a href="#" className="hover:text-[var(--brand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 focus-visible:ring-offset-1 rounded">{t.footer.links.careers}</a></li>
              <li><a href="#" className="hover:text-[var(--brand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 focus-visible:ring-offset-1 rounded">{t.footer.links.legal}</a></li>
              <li><a href="#" className="hover:text-[var(--brand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 focus-visible:ring-offset-1 rounded">{t.footer.links.privacyPolicy}</a></li>
              <li><a href="/#pricing" className="hover:text-[var(--brand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 focus-visible:ring-offset-1 rounded">{t.footer.links.contact}</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500 font-medium">{t.footer.copyright}</p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-gray-500 hover:text-[var(--brand)] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 focus-visible:ring-offset-1 rounded">{t.footer.links.terms}</a>
            <a href="#" className="text-sm text-gray-500 hover:text-[var(--brand)] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 focus-visible:ring-offset-1 rounded">{t.footer.links.privacy}</a>
            <a href="#" className="text-sm text-gray-500 hover:text-[var(--brand)] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 focus-visible:ring-offset-1 rounded">{t.footer.links.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
