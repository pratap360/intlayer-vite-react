import { t } from 'intlayer';

const homeContent = {
  key: 'home',
  content: {
    welcome: t({
      en: 'Welcome to Intlayer Blog Demo',
      fr: 'Bienvenue sur la démo du blog Intlayer',
      es: 'Bienvenido a la demostración del blog de Intlayer',
      hi: 'इंटलेयर ब्लॉग डेमो में आपका स्वागत है'
    }),
    description: t({
      en: 'This is a demo showing how to use Intlayer for content management in a React application.',
      fr: 'Ceci est une démonstration montrant comment utiliser Intlayer pour la gestion de contenu dans une application React.',
      es: 'Esta es una demostración que muestra cómo usar Intlayer para la gestión de contenido en una aplicación React.',
      hi: 'यह एक डेमो है जो रिएक्ट एप्लिकेशन में सामग्री प्रबंधन के लिए इंटलेयर का उपयोग कैसे करें, इसे दिखाता है।'
    })
  }
};

export default homeContent;
