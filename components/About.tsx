
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="md:w-1/3">
          <img 
            src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/488883375_2171865833256382_1632242191760860837_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x1280&ctp=s480x480&_nc_cat=101&cb=99be929b-878c9f95&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ehHbcI2MMaUQ7kNvwEMU9eC&_nc_oc=AdlUbzqgj-65dLE2pbkhlKSJVn9fr6uCqFv4J7QX8vLQ12r0M85nEODZTfhgQeOtRt56Wf7lcA8QVkcDCwkXVKgJ&_nc_zt=24&_nc_ht=scontent.fhan15-1.fna&_nc_gid=S-ONfKscNV9UYU4FP4M5gg&oh=00_AfST8tjxlT0SJUi0n15voLSOLFLIrmELf_4JwauZTOf6jQ&oe=6895593B" 
            alt="Profile portrait"
            className="rounded-full size-[200px] shadow-2xl mx-auto border-4 border-secondary"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-lg text-text-secondary leading-relaxed">
            hi and results-driven Senior Frontend Engineer with over 8 years of experience crafting beautiful and functional user experiences. My expertise lies in the React ecosystem, TypeScript, and modern styling solutions like Tailwind CSS.
          </p>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            I have a deep understanding of UI/UX principles and I am proficient in leveraging powerful tools like the Gemini API to create intelligent and interactive applications. I thrive in collaborative environments and I'm always eager to tackle new challenges and learn new technologies.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
