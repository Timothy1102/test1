
import React from 'react';
import Section from './Section';
import TimelineItem from './TimelineItem';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience">
      <div className="relative border-l-2 border-secondary/50 ml-4 md:ml-0">
        {EXPERIENCE.map((item, index) => (
          <TimelineItem key={index} experience={item} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
