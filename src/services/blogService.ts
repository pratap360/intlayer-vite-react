export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  content: string;
  thumbnail?: string;
  language: string;
}


// Mock data for testing
export const fetchBlogPosts = async (_language: string = 'en'): Promise<BlogPost[]> => {
  // Return mock blog posts
  return [
    {
      title: 'What is internationalisation (i18n)',
      link: '/blog/what-is-internationalisation',
      pubDate: new Date('2025-07-31').toISOString(),
      description: 'Get to Know about internationalization.',
      content: '<p>Internationalisation is nothing but a language translation for all available languages, so it’s a commonly referred to as i18n as there are 18 letters between the first "i" and the last "n", so it is the process of designing and developing products, especially software, so they can be easily adapted for different languages, regions, and cultural preferences without requiring significant code changes.</p>',
      thumbnail: 'https://placehold.co/300x200/2563eb/FFF?text=What+is+internationalisation&font=poppins',
      language: 'en'
    },
    {
      title: 'Key aspects of internationalisation (i18n)',
      link: '/blog/Aspects-of-internationalisation',
      pubDate: new Date('2025-08-01').toISOString(),
      description: 'Get to know about the key aspects of internationalisation.',
      content: '<p>So Here are the Key Aspects of Internationalisation:</p><ul><li>Code and content separation: Create systems with all localizable components (text, currencies, date and number formats, images, etc.) separate from the main software logic to facilitate simple localization.</li><li>Handle differences in writing systems, units of measurement, date/time formats, keyboard layouts, and address/phone number structures with local awareness.</li><li>Preparation for localization (l10n): By facilitating these adaptations, internationalization creates the foundation for localization, which is the actual process of modifying the product for a particular target location.</li></ul>',
      thumbnail: 'https://placehold.co/300x200/2563eb/FFF?text=Aspects+of+internationalisation&font=poppins',
      language: 'en'
    },
    {
      title: 'Introducing Intlayer',
      link: '/blog/Introducing-intlayer',
      pubDate: new Date('2025-08-02').toISOString(),
      description: 'Intlayer is a React library that provides a set of tools to help you build internationalized applications.',
      content: '<p>Intlayer is an internationalization library created exclusively for JavaScript developers. It enables the declaration of your content across your code. It translates multilingual content declarations to structured dictionaries that can be readily included in your code. Intlayer uses TypeScript to make your development stronger and more efficient.</p>',
      thumbnail: 'https://placehold.co/300x200/2563eb/FFF?text=Introducing+Intlayer&font=poppins',
      language: 'en'
    }
  ];
};
