
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary mt-20">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-text-secondary">
        <p>&copy; {new Date().getFullYear()} John Doe. All Rights Reserved.</p>
        <p className="text-sm mt-1">Built with React, TypeScript & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
