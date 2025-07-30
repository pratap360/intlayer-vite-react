import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 text-center text-gray-600 text-sm">
      <div className="container mx-auto">
        <p> {currentYear} Intlayer Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

 