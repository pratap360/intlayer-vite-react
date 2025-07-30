import { t, type DeclarationContent } from 'intlayer';

const footerContent = {
  key: 'footer',
  content: {
    copyright: t({
      en: ' 2025 IntLayer Blog. All rights reserved.',
      fr: ' 2025 Blog IntLayer. Tous droits rservs.',
      es: ' 2025 Blog IntLayer. Todos los derechos reservados.',
      hi: ' 2025 . '
    }),
    links: [
      {
        label: t({
          en: 'Home',
          fr: 'Accueil',
          es: 'Inicio',
          hi: ''
        }),
        url: '/'
      },
      {
        label: t({
          en: 'About',
          fr: ' propos',
          es: 'Acerca de',
          hi: ''
        }),
        url: '/about'
      },
      {
        label: t({
          en: 'Contact',
          fr: 'Contact',
          es: 'Contacto',
          hi: ''
        }),
        url: '/contact'
      }
    ]
  }
} satisfies DeclarationContent;

export default footerContent;