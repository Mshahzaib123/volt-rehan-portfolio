import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locals/enTranslation.json'
import arTranslation from './locals/arTranslation.json' 

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslation
            },
            ar: {
                translation: arTranslation
            },
        },
        lng: "ar",
        fallbackLng: "en",
        supportedLngs: ["en", "ar"],
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;