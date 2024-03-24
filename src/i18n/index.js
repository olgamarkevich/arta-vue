import { createI18n } from 'vue-i18n';

import de from './locales/de.json';
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import ja from './locales/ja.json';
import pt from './locales/pt.json';

export const initI18n = () => {
  /* Supported locales */
  const defaultLocaleTag = 'en';

  const locales = {
    de,
    en,
    es,
    fr,
    ja,
    pt,
  };

  const localeTags = Object.keys(locales);

  let localeTag = defaultLocaleTag;

  /* URL param locale */
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const urlLocaleTag = urlParams.get('lang')?.toLowerCase();

  if (
    urlLocaleTag &&
    localeTags.includes(urlLocaleTag) &&
    urlLocaleTag !== defaultLocaleTag
  ) {
    localeTag = urlLocaleTag;
  }

  /* Browser locale tag */
  if (!urlLocaleTag) {
    const browserLocaleTags = navigator?.languages?.length
      ? navigator.languages
      : [...navigator?.language];

    const splittedLocaleTags = browserLocaleTags.map(
      (tag) => tag.split('-')[0]
    );

    let browserLocaleTag = null;

    splittedLocaleTags.forEach((lang) => {
      if (browserLocaleTag === null) {
        if (localeTags.includes(lang)) {
          browserLocaleTag = lang;
        }
      }
    });

    if (browserLocaleTag !== null && browserLocaleTag !== defaultLocaleTag) {
      localeTag = browserLocaleTag;
    }
  }

  const i18n = createI18n({
    locale: localeTag,
    fallbackLocale: defaultLocaleTag,
    messages: locales,
  });

  return i18n;
};
