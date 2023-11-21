import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesEn from "./locales/en.json";

i18n
    .use(initReactI18next)
    .init({
        debug: true,
        lng: "en",
        partialBundledLanguages: true,
        load: "currentOnly",
        resources: {
            en: resourcesEn
        }
    });

export default i18n;