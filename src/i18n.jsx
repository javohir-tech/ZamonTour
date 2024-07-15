import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uzTranslation from '../public/Locales/uz.json';
import enTranslation from '../public/Locales/en.json';
import ruTranslation from '../public/Locales/ru.json';

const language = localStorage.getItem('i18nextLng')

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Qayta til kodi
    lng: language, // Sukutdagi til kodi
    debug: true, // Ogohlantirishni yoqish (xatolikni topish uchun)
    resources: {
      uz: {
        translation: uzTranslation // Uzbek til tarjimalari
      },
      en: {
        translation: enTranslation // Ingliz til tarjimalari
      },
      ru: {
        translation: ruTranslation // Rus til tarjimalari
      }
    },
    interpolation: {
      escapeValue: false // Qaytarilgan qiymatlar qattiq qanday bo'lishi
    }
  });

export default i18n;
