
import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="My Skills">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center justify-center p-6 bg-secondary rounded-lg shadow-md hover:shadow-accent/30 hover:-translate-y-2 transition-all duration-300">
            {skill.icon}
            <span className="mt-4 text-text-primary font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
