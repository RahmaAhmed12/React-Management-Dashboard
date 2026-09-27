import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ar from "./locales/ar.json";

const savedLang = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  },

  lng: savedLang,
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
const applyDocumentLanguage = (lng: string) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
};

applyDocumentLanguage(savedLang);
i18n.on("languageChanged", applyDocumentLanguage);
export default i18n;
