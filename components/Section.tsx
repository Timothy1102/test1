
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="w-full max-w-5xl mx-auto px-6 py-20 sm:py-28 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}>
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
        {title} <span className="text-accent">.</span>
      </h2>
      {children}
    </section>
  );
};

export default Section;
