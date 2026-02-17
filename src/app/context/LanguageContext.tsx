import { createContext, useContext, useState, useMemo, useCallback, ReactNode } from "react";
import type { TranslationKeys } from "../../types/translations";
import vi from "../../locales/vi.json";
import en from "../../locales/en.json";

type Language = "vi" | "en";

const translations: Record<Language, TranslationKeys> = {
  vi: vi as TranslationKeys,
  en: en as TranslationKeys,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi");

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage: handleSetLanguage,
      t: translations[language],
    }),
    [language, handleSetLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
