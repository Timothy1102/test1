
import React from 'react';
import Section from './Section';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <p className="mb-8 text-lg text-text-secondary">
          I'm currently open to new opportunities and collaborations. Feel free to send me a message about anything you want to discuss.
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name" className="w-full bg-secondary text-text-primary px-4 py-3 rounded-md border border-primary focus:outline-none focus:ring-2 focus:ring-accent" />
            <input type="email" placeholder="Your Email" className="w-full bg-secondary text-text-primary px-4 py-3 rounded-md border border-primary focus:outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <div>
            <textarea placeholder="Your Message" rows={5} className="w-full bg-secondary text-text-primary px-4 py-3 rounded-md border border-primary focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full bg-accent text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-white transition-all duration-300 transform hover:scale-105">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
