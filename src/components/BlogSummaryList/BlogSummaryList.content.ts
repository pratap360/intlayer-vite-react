import { t, type DeclarationContent } from 'intlayer';

const blogSummaryListContent: DeclarationContent = {
  key: 'blog-summary-list',
  content: {
    title: t({
      en: 'Latest Blog Posts',
      fr: 'Derniers articles de blog',
      es: 'Últimas entradas del blog',
      hi: 'नवीनतम ब्लॉग पोस्ट'
    }),
    description: t({
      en: 'A collection of our latest blog posts',
      fr: 'Une collection de nos derniers articles de blog',
      es: 'Una colección de nuestras últimas entradas de blog',
      hi: 'हमारी नवीनतम ब्लॉग पोस्ट का संग्रह'
    }),
    emptyMessage: t({
      en: 'No blog posts found',
      fr: 'Aucun article de blog trouvé',
      es: 'No se encontraron entradas de blog',
      hi: 'कोई ब्लॉग पोस्ट नहीं मिली'
    }),
    readMore: t({
      en: 'Read more',
      fr: 'Lire la suite',
      es: 'Leer más',
      hi: 'और पढ़ें'
    }),
    loading: t({
      en: 'Loading blog posts...',
      fr: 'Chargement des articles...',
      es: 'Cargando publicaciones...',
      hi: 'ब्लॉग पोस्ट लोड हो रहा है...'
    }),
    error: t({
      en: 'Failed to load blog posts. Please try again later.',
      fr: 'Échec du chargement des articles. Veuillez réessayer plus tard.',
      es: 'Error al cargar las publicaciones. Por favor, inténtelo de nuevo más tarde.',
      hi: 'ब्लॉग पोस्ट लोड करने में विफल। कृपया बाद में पुनः प्रयास करें।'
    })
  }
}

export default blogSummaryListContent;