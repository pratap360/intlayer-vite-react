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
          en: 'Home',
          fr: 'Accueil',
          es: 'Inicio',
          hi: 'होम'
        }),
        url: '/'
      },
      {
        label: t({
          en: 'Blog',
          fr: 'Blog',
          es: 'Blog',
          hi: 'ब्लॉग'
        }),
        url: '/blog'
      },
      {
        label: t({
          en: 'About',
          fr: 'À propos',
          es: 'Acerca de',
          hi: 'हमारे बारे में'
        }),
        url: '/about'
      },
      {
        label: t({
          en: 'Contact',
          fr: 'Contact',
          es: 'Contacto',
          hi: 'संपर्क करें'
        }),
        url: '/contact'
      }
    ],
    searchPlaceholder: t({
      en: 'Search posts...',
      fr: 'Rechercher des articles...',
      es: 'Buscar publicaciones...',
      hi: 'पोस्ट खोजें...'
    })
  }
}

export default headerContent;