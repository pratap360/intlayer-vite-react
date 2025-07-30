import React, { useState } from 'react';
import { useIntlayer, useLocale } from 'react-intlayer';
import { Link } from 'react-router-dom';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import './Header.css';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { siteName, navigation } = useIntlayer('header');
  const { locale, setLocale } = useLocale();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/" className="logo-link">
            <span className="logo-text">{siteName}</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
        <ul className="nav-list">
          <div className="language-selector">
            <Select.Root 
              value={locale}
              onValueChange={setLocale}
            >
              <Select.Trigger className="select-trigger" aria-label="Select language">
                <Select.Value />
                <Select.Icon className="select-icon">
                  <ChevronDownIcon />
                </Select.Icon>
              </Select.Trigger>

              <Select.Portal>
                <Select.Content className="select-content">
                  <Select.ScrollUpButton className="select-scroll-button">
                    <ChevronUpIcon />
                  </Select.ScrollUpButton>
                  <Select.Viewport className="select-viewport">
                    <Select.Item value="en" className="select-item">
                      <Select.ItemText>English</Select.ItemText>
                      <Select.ItemIndicator className="select-item-indicator">
                        <CheckIcon />
                      </Select.ItemIndicator>
                    </Select.Item>
                    <Select.Item value="fr" className="select-item">
                      <Select.ItemText>French</Select.ItemText>
                      <Select.ItemIndicator className="select-item-indicator">
                        <CheckIcon />
                      </Select.ItemIndicator>
                    </Select.Item>
                    <Select.Item value="es" className="select-item">
                      <Select.ItemText>Spanish</Select.ItemText>
                      <Select.ItemIndicator className="select-item-indicator">
                        <CheckIcon />
                      </Select.ItemIndicator>
                    </Select.Item>
                    <Select.Item value="hi" className="select-item">
                      <Select.ItemText>Hindi</Select.ItemText>
                      <Select.ItemIndicator className="select-item-indicator">
                        <CheckIcon />
                      </Select.ItemIndicator>
                    </Select.Item>
                  </Select.Viewport>
                  <Select.ScrollDownButton className="select-scroll-button">
                    <ChevronDownIcon />
                  </Select.ScrollDownButton>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
            <li>
              <Link to="/about" className="nav-link">
                {navigation[0].label}
              </Link>
            </li>
            <li>
              <Link to="/contribution" className="nav-link">
                {navigation[1].label}
              </Link>
            </li>
            <li>
              <a 
                href="https://github.com/aymericzip/intlayer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-button"
              >
                <svg 
                  className="github-icon" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  width="20" 
                  height="20"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                {navigation[2].label}
              </a>
            </li>
        </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li>
            <Link 
              to="/about" 
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/contribution" 
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >Contribution Guidelines</Link>
          </li>
          <li>
            <a 
              href="https://github.com/aymericzip/intlayer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mobile-github-button"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg 
                className="github-icon" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                width="20" 
                height="20"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </li>
        </ul>
      </nav>


    </header>
  );
};