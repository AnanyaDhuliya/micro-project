import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations";
import { extra } from "./extra";

// Combine the original text with the extra text
const dictionary = {
  en: { ...translations.en, ...extra.en },
  hi: { ...translations.hi, ...extra.hi },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("lang") || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // ignore if storage is unavailable
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key) => dictionary[lang][key] ?? dictionary.en[key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  return useContext(LanguageContext);
}