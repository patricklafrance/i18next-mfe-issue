import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesEn from "./locales/en.json";

i18n
    .init({
        debug: true,
        lng: "en",
        partialBundledLanguages: true,
        load: "currentOnly",
        resources: {
            en: resourcesEn
        }
    })
    .use(initReactI18next);

export default i18n;