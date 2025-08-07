import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [
      Locales.ENGLISH,
      Locales.FRENCH,
      Locales.SPANISH,
      Locales.HINDI  // added our national language
      // add more languages
    ],
    defaultLocale: Locales.ENGLISH,
  },
};

export default config;