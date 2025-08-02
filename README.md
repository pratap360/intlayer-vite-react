# Intlayer Blog Demo

A modern, multilingual blog application built with React, Vite, and Intlayer to demonstrate internationalization capabilities and content management features.

## 🌟 Features

- **🌍 Multilingual Support**: Built-in internationalization with support for English, French, Spanish, and Hindi
- **🎨 Modern UI**: Beautiful hero section with translator image background and responsive design
- **📝 Blog Management**: Dynamic blog post display with summary cards and detailed views
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and build times
- **🔧 TypeScript**: Full TypeScript support for type-safe development
- **📱 Responsive Design**: Mobile-first approach with responsive layouts
- **🎯 Component-Based**: Modular component architecture for maintainability

## 🚀 Live Demo

🔗 **Live Demo**: [https://url-live/](https://url-live/)

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Internationalization**: Intlayer 5.6.0
- **Routing**: React Router DOM 7.7.0
- **Styling**: CSS3 with modern features
- **Language**: TypeScript 5.8.3
- **UI Components**: Radix UI
- **Development**: ESLint for code quality

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pratap360/intlayer-vite-react/tree/blog
   cd intlayer-vite-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
intlayer-feedback/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header/         # Navigation header
│   │   ├── Footer/         # Page footer
│   │   ├── BlogViewer/     # Individual blog post viewer
│   │   └── BlogSummaryList/ # Blog posts listing
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Homepage with hero section
│   │   ├── Home.content.ts # Internationalized content
│   │   └── Home.css        # Page-specific styles
│   ├── services/           # Business logic and API calls
│   │   └── blogService.ts  # Blog data management
│   ├── assets/             # Static assets (images, etc.)
│   └── App.tsx             # Main application component
├── intlayer.config.ts      # Intlayer configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🌐 Internationalization

This project uses **Intlayer** for internationalization, supporting:

- **English** (default)
- **French**
- **Spanish** 
- **Hindi**

### Content Management

Content is managed through `.content.ts` files that define multilingual content:

```typescript
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
    // ... more content
  }
};
```

## 🎨 Key Components

### Hero Section
- Beautiful translator image background with overlay
- Multilingual welcome message and description
- Responsive design with proper text positioning

### Blog System
- Dynamic blog post loading
- Summary cards with thumbnails
- Detailed blog post viewer
- Mock data for demonstration

### Navigation
- Language switcher
- Responsive header and footer
- Clean, modern design

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🔧 Configuration

### Intlayer Configuration
The `intlayer.config.ts` file configures supported locales and default language settings.

### Vite Configuration
Optimized for React development with Intlayer plugin integration.


## 📚 Learn More

- **Intlayer Documentation**: [https://github.com/aymericzip/intlayer](https://github.com/aymericzip/intlayer)

- **Check out the Detial Guide Blog**: [https://paruidev.com](https://paruidev.com)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Intlayer](https://github.com/aymericzip/intlayer) for internationalization
- Powered by [React](https://react.dev) and [Vite](https://vitejs.dev)
- UI components from [Radix UI](https://www.radix-ui.com)

---

**Made with ❤️ by [Parui Dev](https://paruidev.com) for the Intlayer community**
