import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ENUS from './locales/en-us.json'
import PTBR from './locales/pt-br.json'

const resources = {
    en: ENUS,
    pt: PTBR
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;