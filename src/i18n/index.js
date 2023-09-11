// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import pt from './locales/pt';
import es from './locales/es';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: en,
      pt: pt,
      es: es
    },
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
