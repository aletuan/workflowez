import { Menu, X, ChevronRight, Globe, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { NAV_ITEMS } from "../../config/navigation";
import { PrimaryButton } from "./shared/PrimaryButton";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let rafId: number;
    let lastValue: boolean | null = null;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const value = window.scrollY > 20;
        if (value !== lastValue) {
          lastValue = value;
          setScrolled(value);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  return (
    <div className="sticky top-0 z-50 md:fixed md:left-0 md:right-0 md:pointer-events-none">
      <header
        className={`w-full md:pointer-events-auto ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm"
            : "bg-white/70 backdrop-blur-sm border-b border-gray-100/50"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-[linear-gradient(to_bottom_right,var(--brand),var(--accent-gradient-via))] flex items-center justify-center shadow-md shadow-[var(--brand)]/20 rotate-3">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand-dark)] to-[var(--accent-gradient-via)]">
              Workflow EZ
            </span>
          </Link>

          {/* Desktop Nav + Actions */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            <nav className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.id}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[var(--brand)] hover:bg-[var(--brand-light)] rounded-lg"
                >
                  {t.header[item.labelKey]}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-gray-500 hover:text-[var(--brand)] bg-gray-100 hover:bg-[var(--brand-light)] rounded-lg"
              >
                <Globe className="w-3 h-3" />
                {language === 'vi' ? 'EN' : 'VI'}
              </button>
              <PrimaryButton variant="brand" size="sm" href="/#pricing" icon={<ChevronRight className="w-4 h-4" />}>
                {t.header.getStarted}
              </PrimaryButton>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3 md:hidden ml-auto">
            <button
              onClick={toggleLanguage}
              style={{ WebkitTapHighlightColor: "transparent" }}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center gap-1 px-3 text-xs font-bold text-gray-500 bg-gray-100 rounded-lg focus:outline-none"
            >
              <Globe className="w-3 h-3" />
              {language === 'vi' ? 'EN' : 'VI'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ WebkitTapHighlightColor: "transparent" }}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-full bg-white/95 border-b border-gray-100">
          <div className="flex flex-col p-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.id}
                onClick={() => setIsOpen(false)}
                style={{ WebkitTapHighlightColor: "transparent" }}
                className="flex items-center py-3 pl-5 pr-4 text-base font-medium text-gray-600 hover:text-[var(--brand)] focus:outline-none"
              >
                {t.header[item.labelKey]}
                <ChevronRight className="w-4 h-4 ml-auto text-gray-300" />
              </a>
            ))}
            <div className="h-px bg-gray-100 my-2" />
            <PrimaryButton
              variant="brand"
              href="/#pricing"
              icon={<ChevronRight className="w-4 h-4" />}
              className="w-full focus:outline-none"
              style={{ WebkitTapHighlightColor: "transparent" }}
              onClick={() => setIsOpen(false)}
            >
              {t.header.getStarted}
            </PrimaryButton>
          </div>
        </div>
      )}
    </div>
  );
}
