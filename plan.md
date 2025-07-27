# Intlayer React Showcase Project Plan

## Notes
- User wants a simple, text-heavy React project using Redux and Webpack to showcase Intlayer (i18n tool).
- Intlayer features: free & open source, JS-powered content management, type-safe (TypeScript), component-level i18n, integrated CMS, AI-powered content suggestions, Markdown support, visual editor, easy setup.
- Project should highlight what makes Intlayer unique vs. other i18n tools.

## Task List
- [ ] Research example Intlayer integration in React vite
- [ ] Design a basic project structure (text-heavy, suitable for i18n demo)
- [ ] Document unique features of Intlayer for comparison
- [ ] Set up React + Redux + Webpack boilerplate
- [ ] Integrate Intlayer into the project
- [ ] Create sample text content and demonstrate translations
- [ ] Showcase Intlayer CMS and AI-powered features if possible
- [ ] Write article/README explaining the showcase and Intlayer's advantages

## Current Goal
Research Intlayer integration in React with Redux/Webpack

## Proposed Project Structure

```
intlayer-demo/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.tsx              # Localized header
│   │   │   └── Header.content.ts       # Intlayer dictionary for header
│   │   ├── Footer/
│   │   │   ├── Footer.tsx              # Localized footer
│   │   │   └── Footer.content.ts
│   │   ├── Language/
│   │   │   └── Language.tsx    # Dropdown/buttons to change language
│   │   └── BlogSummaryList/
│   │       ├── BlogSummaryList.tsx     # Shows blog post summaries
│   │       └── BlogSummaryList.content.ts
│   ├── pages/
│   │   ├── Home.tsx                    # Home page: lists blog summaries
│   │   └── Post.tsx                    # Post page: full view of a post
│   ├── App.tsx                         # Main app, uses IntlayerProvider
│   ├── intlayer.config.ts              # Intlayer global config
│   └── index.tsx                       # Entry point
├── package.json
└── README.md
```
**Key Features:**

- Each component has its own `.content.ts` dictionary for easy localization.
- LanguageSwitcher for instant language change.
- Home and Post pages to demonstrate i18n in action.
- Simple and clear for both tech and non-tech users.

--- 
### informed by aymeric 
Be free to make the approach you want 

One idea would be "How intlayer helps speeding up i18n" or "How to scale i18n"

Here some points about intlayer:

- keep your codebase more organised. 1 component = 1 dictionary in the same folder
- typescript types are automatically implemented, you will not break your code with renamed /deleted keys
- in you CI, you can autofill your translations using your own openai api key, no need for l10n platform
- you can import and interpret markdown files for multilingual privacy policy etc
- free visual editor + CMS if you need to works with content writer for your translations, again no need localization platform and you can externalise the content from the codebase
- no need to call your t function for each content, retrieve all your content straight using a single hook
- same implementation for client and server components, no need to pass your t function across each server component
- the unused content will be purged at build time. Each dictionary is three shakable, so you will lighter the final bundle
- Intlayer don't block Static Rendering as does next-intl
- Manage multilingual page metadata, sitemap, robot.txt, etc
- An improved middleware to redirect the user to the proper localized page, that does not block nextjs page prefetching