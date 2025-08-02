import { t, type DeclarationContent } from 'intlayer';

const blogViewerContent: DeclarationContent = {
  key: 'blog-viewer',
  content: {
    loading: t({
      en: 'Loading post...',
      fr: 'Chargement de l\'article...',
      es: 'Cargando publicación...',
      hi: 'पोस्ट लोड हो रहा है...'
    }),
    notFound: t({
      en: 'The requested blog post could not be found.',
      fr: 'L\'article de blog demandé est introuvable.',
      es: 'No se pudo encontrar la publicación de blog solicitada.',
      hi: 'अनुरोधित ब्लॉग पोस्ट नहीं मिल सकी।'
    }),
    error: t({
      en: 'An error occurred while loading the blog post.',
      fr: 'Une erreur est survenue lors du chargement de l\'article.',
      es: 'Se produjo un error al cargar la publicación del blog.',
      hi: 'ब्लॉग पोस्ट लोड करते समय एक त्रुटि हुई।'
    }),
    backToBlog: t({
      en: 'Back to Blog',
      fr: 'Retour au blog',
      es: 'Volver al blog',
      hi: 'ब्लॉग पर वापस जाएं'
    }),
    readOriginal: t({
      en: 'Read original post',
      fr: 'Lire l\'article original',
      es: 'Leer publicación original',
      hi: 'मूल पोस्ट पढ़ें'
    }),
    publishedOn: t({
      en: 'Published on',
      fr: 'Publié le',
      es: 'Publicado el',
      hi: 'प्रकाशित तिथि'
    })
  }
};

export default blogViewerContent;
