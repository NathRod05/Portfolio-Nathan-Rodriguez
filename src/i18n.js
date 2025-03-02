import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to my website",
          description: "I create modern web applications.",
        },
      },
      fr: {
        translation: {
          welcome: "Bienvenue sur mon site",
          description: "Je crée des applications web modernes.",
        },
      },
    },
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
