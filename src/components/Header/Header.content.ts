import { t } from 'intlayer';

const headerContent = {
  key: 'header',
  content: {
    siteName: t({
      en: 'Intlayer Blog',
      fr: 'Blog Intlayer',
      es: 'Blog de Intlayer',
      hi: 'इंटलेयर ब्लॉग'
    }),
    navigation: [
      {
        label: t({
          en: 'About Us',
          fr: 'A propos de nous',
          es: 'Sobre nosotros',
          hi: 'हमारे बारे में'
        }),
        url: '/about'
      },
      {
        label: t({
          en: 'Contribution Guidelines',
          fr: 'Directives de contribution',
          es: 'Pautas de contribución',
          hi: 'सहयोग के लिए नियम'
        }),
        url: '/contribution'
      },
      {
        label:t({
          en: 'GitHub',
          fr: 'GitHub',
          es: 'GitHub',
          hi: 'गिटहब'
        }),
        url: 'https://github.com/aymericzip/intlayer'
      }
    ],
  }
}

export default headerContent;