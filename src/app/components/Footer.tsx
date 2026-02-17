import { Twitter, Linkedin, Github, Facebook, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-900 to-fuchsia-900">
                Workflow EZ
              </span>
            </div>
            <p className="text-gray-500 text-base max-w-xs mb-8 leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Github, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-violet-100 hover:text-violet-600 transition-all hover:scale-110">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">{t.footer.cols.product}</h4>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li><a href="#" className="hover:text-violet-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">{t.footer.cols.resources}</h4>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li><a href="#" className="hover:text-violet-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">API Reference</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">{t.footer.cols.company}</h4>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li><a href="#" className="hover:text-violet-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Legal</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500 font-medium">{t.footer.copyright}</p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-gray-500 hover:text-violet-600 font-medium transition-colors">Terms</a>
            <a href="#" className="text-sm text-gray-500 hover:text-violet-600 font-medium transition-colors">Privacy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-violet-600 font-medium transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
