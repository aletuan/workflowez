import { motion, AnimatePresence } from "motion/react";
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
    // mobile: sticky (in flow → menu pushes content down)
    // desktop: fixed (full-width rectangle bar, out of flow)
    <div className="sticky top-0 z-50 md:fixed md:left-0 md:right-0 md:pointer-events-none">
      {/* Header bar — full-width rectangle, no pill */}
      <motion.header
        initial={reducedMotion ? false : { y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={reducedMotion ? { duration: 0 } : undefined}
        className={`w-full transition-all duration-300 md:pointer-events-auto ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm"
            : "bg-white/70 backdrop-blur-sm border-b border-gray-100/50"
        }`}
      >
        {/* Inner container: logo left, nav+CTA pushed right */}
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          {/* Logo — left */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-[linear-gradient(to_bottom_right,var(--brand),var(--accent-gradient-via))] flex items-center justify-center shadow-md shadow-[var(--brand)]/20 rotate-3 hover:rotate-0 transition-transform duration-300">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand-dark)] to-[var(--accent-gradient-via)]">
              Workflow EZ
            </span>
          </div>

          {/* Desktop Nav + Actions — pushed to right */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            <nav className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.id}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[var(--brand)] hover:bg-[var(--brand-light)] rounded-lg transition-all"
                >
                  {t.header[item.labelKey]}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-gray-500 hover:text-[var(--brand)] bg-gray-100 hover:bg-[var(--brand-light)] rounded-lg transition-colors"
              >
                <Globe className="w-3 h-3" />
                {language === 'vi' ? 'EN' : 'VI'}
              </button>
              <button className="px-5 py-2 bg-[var(--brand)] text-white text-sm font-semibold rounded-full hover:bg-[var(--brand-dark)] hover:shadow-lg hover:shadow-[var(--brand)]/25 transition-all flex items-center gap-2 group">
                {t.header.getStarted}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Mobile Toggle — pushed to right */}
          <div className="flex items-center gap-3 md:hidden ml-auto">
            <button
              onClick={toggleLanguage}
              style={{ WebkitTapHighlightColor: "transparent" }}
              className="flex items-center gap-1 px-2 py-1 text-xs font-bold text-gray-500 bg-gray-100 rounded-lg focus:outline-none"
            >
              <Globe className="w-3 h-3" />
              {language === 'vi' ? 'EN' : 'VI'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ WebkitTapHighlightColor: "transparent" }}
              className="p-2 text-gray-600 hover:text-[var(--brand)] focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu — full width, pushes content down (sticky flow) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? {} : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden w-full bg-white/95 backdrop-blur-xl border-b border-gray-100"
          >
            <div className="flex flex-col p-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.id}
                  onClick={() => setIsOpen(false)}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                  className="group relative flex items-center py-3 pl-5 pr-4 text-base font-medium text-gray-600 hover:text-[var(--brand)] focus:outline-none transition-colors duration-200"
                >
                  <span className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-[var(--brand)] scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-center" />
                  {t.header[item.labelKey]}
                  <ChevronRight className="w-4 h-4 ml-auto text-gray-300 group-hover:text-[var(--brand)] group-hover:translate-x-0.5 transition-all duration-200" />
                </a>
              ))}
              <div className="h-px bg-gray-100 my-2" />
              <button
                style={{ WebkitTapHighlightColor: "transparent" }}
                className="w-full px-4 py-3 bg-[var(--brand)] text-white text-base font-bold rounded-xl hover:bg-[var(--brand-dark)] transition-colors shadow-lg shadow-[var(--brand)]/20 focus:outline-none"
              >
                {t.header.getStarted}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
