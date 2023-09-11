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
    lng: 'pt', // Defina o idioma padrão
    fallbackLng: 'pt', // Idioma de fallback, caso o idioma solicitado não esteja disponível
    interpolation: {
      escapeValue: false // Evita que os valores sejam escapados automaticamente
    }
  });

export default i18n;