export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  content: string;
  thumbnail?: string;
  language: string;
}


// Multilingual mock data for testing
const blogTranslations: Record<string, BlogPost[]> = {
  en: [
    {
      title: 'What is internationalisation (i18n)',
      link: '/what-is-internationalisation',
      pubDate: new Date('2025-07-31').toISOString(),
      description: 'Get to Know about internationalization.',
      content: `<p>Internationalisation is nothing but a language translation for all available languages, so it’s a commonly referred to as i18n as there are 18 letters between the first "i" and the last "n", so it is the process of designing and developing products, especially software, so they can be easily adapted for different languages, regions, and cultural preferences without requiring significant code changes.</p>`,
      thumbnail: 'https://placehold.co/300x200/2563eb/FFF?text=What+is+internationalisation&font=poppins',
      language: 'en',
    },
    {
      title: 'Key aspects of internationalisation (i18n)',
      link: '/aspects-of-internationalisation',
      pubDate: new Date('2025-08-01').toISOString(),
      description: 'Get to know about the key aspects of internationalisation.',
      content: `<p>So Here are the Key Aspects of Internationalisation:</p><ul><li>Code and content separation: Create systems with all localizable components (text, currencies, date and number formats, images, etc.) separate from the main software logic to facilitate simple localization.</li><li>Handle differences in writing systems, units of measurement, date/time formats, keyboard layouts, and address/phone number structures with local awareness.</li><li>Preparation for localization (l10n): By facilitating these adaptations, internationalization creates the foundation for localization, which is the actual process of modifying the product for a particular target location.</li></ul>`,
      thumbnail: 'https://placehold.co/300x200/2563eb/FFF?text=Aspects+of+internationalisation&font=poppins',
      language: 'en',
    },
    {
      title: 'Introducing Intlayer',
      link: '/introducing-intlayer',
      pubDate: new Date('2025-08-02').toISOString(),
      description: 'Intlayer is a React library that provides a set of tools to help you build internationalized applications.',
      content: `<p>Intlayer is an internationalization library created exclusively for JavaScript developers. It enables the declaration of your content across your code. It translates multilingual content declarations to structured dictionaries that can be readily included in your code. Intlayer uses TypeScript to make your development stronger and more efficient.</p>`,
      thumbnail: 'https://placehold.co/300x200/2563eb/FFF?text=Introducing+Intlayer&font=poppins',
      language: 'en',
    },
  ],
  fr: [
    {
      title: 'Qu\'est-ce que l\'internationalisation (i18n)',
      link: '/what-is-internationalisation',
      pubDate: new Date('2025-07-31').toISOString(),
      description: 'Découvrez l\'internationalisation.',
      content: `<p>L\'internationalisation est la traduction linguistique pour toutes les langues disponibles, souvent appelée i18n car il y a 18 lettres entre le premier "i" et le dernier "n". C\'est le processus de conception et de développement de produits, en particulier de logiciels, afin qu\'ils puissent être facilement adaptés à différentes langues, régions et préférences culturelles sans nécessiter de modifications majeures du code.</p>`,
      thumbnail: 'https://placehold.co/300x200/2563eb/FFF?text=Qu%27est-ce+que+l%27internationalisation&font=poppins',
      language: 'fr',
    },
    {
      title: "Principaux aspects de l'internationalisation (i18n)",
      link: '/aspects-of-internationalisation',
      pubDate: new Date('2025-08-01').toISOString(),
      description: "Découvrez les aspects clés de l'internationalisation.",
      content: `<p>Voici les principaux aspects de l'internationalisation :</p><ul><li>Séparation du code et du contenu : créez des systèmes avec tous les composants localisables séparés de la logique principale pour faciliter la localisation.</li><li>Gérez les différences de systèmes d'écriture, unités de mesure, formats de date/heure, dispositions de clavier, et structures d'adresse/numéro de téléphone avec une conscience locale.</li><li>Préparation à la localisation (l10n) : en facilitant ces adaptations, l'internationalisation crée la base pour la localisation, qui consiste à modifier le produit pour un lieu cible particulier.</li></ul>`,
      thumbnail: 'https://placehold.co/300x200/2563eb/FFF?text=Aspects+de+l%27internationalisation&font=poppins',
      language: 'fr',
    },
    {
      title: 'Présentation d\'Intlayer',
      link: '/introducing-intlayer',
      pubDate: new Date('2025-08-02').toISOString(),
      description: 'Intlayer est une bibliothèque React pour créer des applications internationalisées.',
      content: `<p>Intlayer est une bibliothèque d'internationalisation créée exclusivement pour les développeurs JavaScript. Elle permet de déclarer votre contenu dans votre code. Intlayer traduit les déclarations de contenu multilingues en dictionnaires structurés facilement intégrables. Intlayer utilise TypeScript pour renforcer et optimiser le développement.</p>`,
      thumbnail: 'https://placehold.co/300x200/2563eb/FFF?text=Présentation+d%27Intlayer&font=poppins',
      language: 'fr',
    },
  ],
  es: [
    {
      title: '¿Qué es la internacionalización (i18n)?',
      link: '/what-is-internationalisation',
      pubDate: new Date('2025-07-31').toISOString(),
      description: 'Conozca la internacionalización.',
      content: `<p>La internacionalización es la traducción de idiomas para todos los idiomas disponibles, comúnmente llamada i18n porque hay 18 letras entre la primera "i" y la última "n". Es el proceso de diseñar y desarrollar productos, especialmente software, para que puedan adaptarse fácilmente a diferentes idiomas, regiones y preferencias culturales sin requerir cambios significativos en el código.</p>`,
      thumbnail: 'https://placehold.co/300x200/2563eb/FFF?text=Qué+es+la+internacionalización&font=poppins',
      language: 'es',
    },
    {
      title: 'Aspectos clave de la internacionalización (i18n)',
      link: '/aspects-of-internationalisation',
      pubDate: new Date('2025-08-01').toISOString(),
      description: 'Conozca los aspectos clave de la internacionalización.',
      content: `<p>Estos son los aspectos clave de la internacionalización:</p><ul><li>Separación de código y contenido: cree sistemas con todos los componentes localizables separados de la lógica principal para facilitar la localización.</li><li>Maneje diferencias en sistemas de escritura, unidades de medida, formatos de fecha/hora, distribuciones de teclado y estructuras de dirección/teléfono con conocimiento local.</li><li>Preparación para la localización (l10n): al facilitar estas adaptaciones, la internacionalización crea la base para la localización, que es el proceso de modificar el producto para una ubicación objetivo.</li></ul>`,
      thumbnail: 'https://placehold.co/300x200/2563eb/FFF?text=Aspectos+de+la+internacionalización&font=poppins',
      language: 'es',
    },
    {
      title: 'Presentando Intlayer',
      link: '/introducing-intlayer',
      pubDate: new Date('2025-08-02').toISOString(),
      description: 'Intlayer es una biblioteca de React para aplicaciones internacionalizadas.',
      content: `<p>Intlayer es una biblioteca de internacionalización creada exclusivamente para desarrolladores JavaScript. Permite declarar contenido multilingüe en el código. Intlayer traduce estas declaraciones a diccionarios estructurados fácilmente integrables. Utiliza TypeScript para un desarrollo más sólido y eficiente.</p>`,
      thumbnail: 'https://placehold.co/300x200/2563eb/FFF?text=Presentando+Intlayer&font=poppins',
      language: 'es',
    },
  ],
  hi: [
    {
      title: 'अंतर्राष्ट्रीयकरण (i18n) क्या है?',
      link: '/what-is-internationalisation',
      pubDate: new Date('2025-07-31').toISOString(),
      description: 'अंतर्राष्ट्रीयकरण के बारे में जानें।',
      content: `<p>अंतर्राष्ट्रीयकरण सभी उपलब्ध भाषाओं के लिए भाषा अनुवाद है, जिसे आमतौर पर i18n कहा जाता है क्योंकि पहले "i" और अंतिम "n" के बीच 18 अक्षर होते हैं। यह विभिन्न भाषाओं, क्षेत्रों और सांस्कृतिक प्राथमिकताओं के लिए उत्पादों, विशेष रूप से सॉफ़्टवेयर, को आसानी से अनुकूलित करने के लिए डिज़ाइन और विकास की प्रक्रिया है, जिसमें महत्वपूर्ण कोड परिवर्तन की आवश्यकता नहीं होती।</p>`,
      thumbnail: 'https://placehold.co/300x200/2563eb/FFF?text=अंतर्राष्ट्रीयकरण+(i18n)+क्या+है&font=poppins',
      language: 'hi',
    },
    {
      title: 'अंतर्राष्ट्रीयकरण (i18n) के मुख्य पहलू',
      link: '/aspects-of-internationalisation',
      pubDate: new Date('2025-08-01').toISOString(),
      description: 'अंतर्राष्ट्रीयकरण के मुख्य पहलुओं के बारे में जानें।',
      content: `<p>यहाँ अंतर्राष्ट्रीयकरण के मुख्य पहलू दिए गए हैं:</p><ul><li>कोड और सामग्री को अलग करना: सभी स्थानीयकरण योग्य घटकों को मुख्य सॉफ़्टवेयर लॉजिक से अलग करें ताकि स्थानीयकरण आसान हो सके।</li><li>लिपि, माप की इकाइयाँ, दिनांक/समय प्रारूप, कीबोर्ड लेआउट और पता/फोन नंबर संरचनाओं में अंतर को स्थानीय जागरूकता के साथ संभालें।</li><li>स्थानीयकरण (l10n) की तैयारी: इन अनुकूलनों को आसान बनाकर, अंतर्राष्ट्रीयकरण स्थानीयकरण की नींव रखता है, जो किसी विशेष लक्ष्य स्थान के लिए उत्पाद को अनुकूलित करने की प्रक्रिया है।</li></ul>`,
      thumbnail: 'https://placehold.co/300x200/2563eb/FFF?text=अंतर्राष्ट्रीयकरण+(i18n)+के+मुख्य+पहलू&font=poppins',
      language: 'hi',
    },
    {
      title: 'इंटलेयर का परिचय',
      link: '/introducing-intlayer',
      pubDate: new Date('2025-08-02').toISOString(),
      description: 'इंटलेयर एक React लाइब्रेरी है जो अंतर्राष्ट्रीयकृत एप्लिकेशन बनाने में मदद करती है।',
      content: `<p>इंटलेयर एक अंतर्राष्ट्रीयकरण लाइब्रेरी है जो विशेष रूप से JavaScript डेवलपर्स के लिए बनाई गई है। यह आपके कोड में सामग्री की घोषणा करने की अनुमति देती है। Intlayer बहुभाषी सामग्री घोषणाओं को संरचित शब्दकोशों में अनुवाद करती है जिन्हें आसानी से आपके कोड में शामिल किया जा सकता है। Intlayer TypeScript का उपयोग करता है ताकि आपका विकास मजबूत और कुशल हो।</p>`,
      thumbnail: 'https://placehold.co/300x200/2563eb/FFF?text=इंटलेयर+का+परिचय&font=poppins',
      language: 'hi',
    },
  ],
};

export const fetchBlogPosts = async (language: string = 'en'): Promise<BlogPost[]> => {
  // Return posts for the requested language, fallback to English if not found
  return blogTranslations[language] || blogTranslations['en'];
};
