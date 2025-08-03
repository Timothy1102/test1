
import React from 'react';

interface HeroProps {
  scrollToContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToContact }) => {
  return (
    <section className="h-screen flex items-center justify-center bg-primary text-center">
      <div className="max-w-4xl mx-auto px-6 animate-fade-in-up">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
          Hi, I'm a Senior <br/>
          <span className="text-accent">Frontend React Engineer</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-text-secondary">
          I build exceptional, high-quality websites and applications with a focus on performant, responsive, and beautiful user interfaces.
        </p>
        <div className="mt-10 flex justify-center">
          <button
            onClick={scrollToContact}
            className="bg-accent text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
