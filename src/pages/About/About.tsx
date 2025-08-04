import React from 'react';
import { useIntlayer } from 'react-intlayer';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import './About.css';

// Import the content to register it with Intlayer
import aboutContent from './About.content';

// This ensures the content is registered with Intlayer
// The export is needed to prevent tree-shaking
// @ts-ignore - This is a side-effect import
export const __aboutContent = aboutContent;

// Define the type for our content
interface AboutContent {
  title: string;
  subtitle: string;
  missionTitle: string;
  missionText: string;
  featuresTitle: string;
  featuresText: string;
  learnMoreButton: string;
  backToHome: string;
}

export const About: React.FC = () => {
  // Use the content from about content file
  const content = useIntlayer('about') as unknown as AboutContent;

  const handleLearnMore = () => {
    window.open('https://github.com/aymericzip/intlayer', '_blank');
  };

  return (
    <div className="about-page">
      <Header />
      <main className="about-main">
        <div className="about-container">
          {/* Hero Section */}
          <section className="about-hero">
            <h1 className="about-title">{content.title}</h1>
            <p className="about-subtitle">{content.subtitle}</p>
          </section>

          {/* Content Sections */}
          <div className="about-content">
            {/* Mission Section */}
            <section className="about-section">
              <h2 className="section-title">{content.missionTitle}</h2>
              <p className="section-text">{content.missionText}</p>
            </section>

            {/* Features Section */}
            <section className="about-section">
              <h2 className="section-title">{content.featuresTitle}</h2>
              <p className="section-text">{content.featuresText}</p>
            </section>

            {/* Action Buttons */}
            <section className="about-actions">
              <button 
                onClick={handleLearnMore}
                className="learn-more-button"
              >
                {content.learnMoreButton}
                <svg 
                  className="external-link-icon" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15,3 21,3 21,9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </button>
              
              <Link to="/" className="back-home-button">
                {content.backToHome}
              </Link>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
