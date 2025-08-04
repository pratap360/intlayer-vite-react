import { t } from 'intlayer';

const footerContent = {
  key: 'footer',
  content: {
    copyright: t({
      en: 'Intlayer Blog. All rights reserved.',
      fr: 'Blog Intlayer. Tous droits rservs.',
      es: 'Blog Intlayer. Todos los derechos reservados.',
      hi: 'इंटलेयर ब्लॉग सभी अधिकार राखे।'
    }),
    community:t({
      en: 'Made with ❤️ by Parui Dev for the Intlayer community.',
      fr: 'Créé avec ❤️ par Parui Dev pour la communauté Intlayer.',
      es: 'Hecho con ❤️ por Parui Dev para la comunidad Intlayer.',
      hi: 'इंटलेयर समुदाय के लिए पारुई देव द्वारा ❤️ के साथ बनाया गया।'
    })
  }
}

export default footerContent;