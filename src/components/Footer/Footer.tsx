import React from 'react';
import { useIntlayer } from 'react-intlayer';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { copyright,community } = useIntlayer('footer');

  return (
    <footer className="py-4 text-center text-gray-600 text-sm">
      <div className="container mx-auto">
        <p style={{
          textAlign: 'center'
        }}>
          {currentYear} {copyright}
          {/* {currentYear} {copyright}&nbsp;{community} */}
          </p>
      </div>
    </footer>
  );
};