import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [
      Locales.ENGLISH,
      Locales.FRENCH,
      Locales.SPANISH,
      Locales.HINDI
      // Your other locales
    ],
    defaultLocale: Locales.ENGLISH,
  },
  // log:{
  //   mode: "verbose",
  // }
};

export default config;