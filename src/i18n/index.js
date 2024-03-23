import { createI18n } from 'vue-i18n';

import de from './locales/de.json';
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import ja from './locales/ja.json';
import pt from './locales/pt.json';

const i18n = createI18n({
  locale: 'de',
  fallbackLocale: 'en',
  messages: {
    de,
    en,
    es,
    fr,
    ja,
    pt,
  },
});

export default i18n;
