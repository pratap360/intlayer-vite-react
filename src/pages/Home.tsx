import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { BlogSummaryList } from '../components/BlogSummaryList/BlogSummaryList';
import { useIntlayer } from 'react-intlayer';
import './Home.css';

// Import the content to register it with Intlayer
import homeContent from './Home.content';

// This ensures the content is registered with Intlayer
// The export is needed to prevent tree-shaking
// @ts-ignore - This is a side-effect import
export const __homeContent = homeContent;

// Define the type for our content
interface HomeContent {
  welcome: string;
  description: string;
}

export const Home = () => {
  // Use the content from home content file
  const content = useIntlayer('home') as unknown as HomeContent;

  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <div className="container">
          {/* Hero Section with Translator Image Background */}
          <section className="hero-section">
            <div className="hero-content">
              <h1>{content.welcome}</h1>
              <p>{content.description}</p>
            </div>
          </section>
          
          {/* Blog Section */}
          <section className="blog-section">
            <BlogSummaryList />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};