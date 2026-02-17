import { motion } from "motion/react";
import { Menu, X, ChevronRight, Globe, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { NAV_ITEMS } from "../../config/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="flex justify-center px-4 pt-4">
      <motion.header 
        initial={reducedMotion ? false : { y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={reducedMotion ? { duration: 0 } : undefined}
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 ${
          scrolled || isOpen 
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-[var(--brand)]/5 border border-white/50" 
            : "bg-transparent"
        } rounded-full px-6 py-3`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[linear-gradient(to_bottom_right,var(--brand),var(--accent-gradient-via))] flex items-center justify-center shadow-lg shadow-[var(--brand)]/20 rotate-3 hover:rotate-0 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand-dark)] to-[var(--accent-gradient-via)]">
              Workflow EZ
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.id}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[var(--brand)] hover:bg-[var(--brand-light)] rounded-full transition-all"
              >
                {t.header[item.labelKey]}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-2 text-xs font-bold text-gray-500 hover:text-[var(--brand)] bg-gray-100 hover:bg-[var(--brand-light)] rounded-full transition-colors"
            >
              <Globe className="w-3 h-3" />
              {language === 'vi' ? 'EN' : 'VI'}
            </button>
            <button className="px-5 py-2.5 bg-[var(--brand)] text-white text-sm font-semibold rounded-full hover:bg-[var(--brand-dark)] hover:shadow-lg hover:shadow-[var(--brand)]/25 transition-all flex items-center gap-2 group">
              {t.header.getStarted} 
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2 py-1 text-xs font-bold text-gray-500 bg-gray-100 rounded-full"
              >
              <Globe className="w-3 h-3" />
              {language === 'vi' ? 'EN' : 'VI'}
            </button>
            <button 
              className="p-2 text-gray-600 hover:text-[var(--brand)] bg-gray-100/50 rounded-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={reducedMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reducedMotion ? undefined : { opacity: 0, height: 0 }}
            transition={reducedMotion ? { duration: 0 } : undefined}
            className="md:hidden mt-4 pt-4 border-t border-gray-100"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.id}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-base font-medium text-gray-600 hover:bg-[var(--brand-light)] hover:text-[var(--brand)] rounded-xl transition-colors"
                >
                  {t.header[item.labelKey]}
                </a>
              ))}
              <div className="h-px bg-gray-100 my-2" />
              <button className="w-full px-4 py-3 bg-[var(--brand)] text-white text-base font-bold rounded-xl hover:bg-[var(--brand-dark)] transition-colors shadow-lg shadow-[var(--brand)]/20">
                {t.header.getStarted}
              </button>
            </div>
          </motion.div>
        )}
      </motion.header>
      </div>
    </div>
  );
}
