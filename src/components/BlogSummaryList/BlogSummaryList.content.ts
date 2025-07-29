import { t, type DeclarationContent } from 'intlayer';

const blogSummaryListContent = {
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
    })
  }
} satisfies DeclarationContent;

export default blogSummaryListContent;