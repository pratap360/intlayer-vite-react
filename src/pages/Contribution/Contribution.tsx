import React from 'react';
import { useIntlayer } from 'react-intlayer';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import './Contribution.css';

// Import the content to register it with Intlayer
import contributionContent from './Contribution.content';

// This ensures the content is registered with Intlayer
// The export is needed to prevent tree-shaking
// @ts-ignore - This is a side-effect import
export const __contributionContent = contributionContent;

// Define the type for our content
interface ContributionContent {
  title: string;
  subtitle: string;
  understandingTitle: string;
  understandingText: string;
  developmentTitle: string;
  developmentText: string;
  fullGuideButton: string;
  backToHome: string;
}

export const Contribution: React.FC = () => {
  // Use the content from contribution content file
  const content = useIntlayer('contribution') as unknown as ContributionContent;

  const handleFullGuideClick = () => {
    window.open('https://github.com/aymericzip/intlayer/blob/main/CONTRIBUTING.md', '_blank');
  };

  return (
    <div className="contribution-page">
      <Header />
      <main className="contribution-main">
        <div className="contribution-container">
          {/* Hero Section */}
          <section className="contribution-hero">
            <h1 className="contribution-title">{content.title}</h1>
            <p className="contribution-subtitle">{content.subtitle}</p>
          </section>

          {/* Content Sections */}
          <div className="contribution-content">
            {/* Understanding the Project */}
            <section className="contribution-section">
              <h2 className="section-title">{content.understandingTitle}</h2>
              <p className="section-text">{content.understandingText}</p>
            </section>

            {/* Development Setup */}
            <section className="contribution-section">
              <h2 className="section-title">{content.developmentTitle}</h2>
              <p className="section-text">{content.developmentText}</p>
            </section>

            {/* Action Buttons */}
            <section className="contribution-actions">
              <button 
                onClick={handleFullGuideClick}
                className="full-guide-button"
              >
                {content.fullGuideButton}
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

export default Contribution;
