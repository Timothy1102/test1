
import React from 'react';
import type { ExperienceItem } from '../types';

interface TimelineItemProps {
  experience: ExperienceItem;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience }) => {
  const { role, company, period, description } = experience;

  return (
    <div className="mb-10 ml-8">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-accent rounded-full -left-3 ring-8 ring-primary">
        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
        </svg>
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
        {role}
        <span className="text-accent text-sm font-medium ml-3 px-2.5 py-0.5 rounded-full bg-secondary">{company}</span>
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-text-secondary">{period}</time>
      <ul className="list-disc list-inside mt-2 space-y-1 text-text-secondary">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default TimelineItem;
