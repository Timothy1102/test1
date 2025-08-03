
import React from 'react';
import type { Skill, Project, ExperienceItem } from './types';

// Icons using Heroicons-like SVG structure
const ReactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
  </svg>
);

const TypescriptIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.5 5.5H18l-5.5 14H10l5.5-14zM9.5 5.5H7l-5.5 14h2.5l5.5-14z"/>
    </svg>
);

const TailwindIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 12a4 4 0 0 1-8 0 4 4 0 0 1 8 0z"></path><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
  </svg>
);

const NodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
);

const GeminiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1.75a2.58 2.58 0 0 0-2.58 2.58V6.9a2.58 2.58 0 0 0 5.16 0V4.33A2.58 2.58 0 0 0 12 1.75zM6.9 9.42a2.58 2.58 0 0 0 0 5.16h2.57a2.58 2.58 0 0 0 2.58-2.58V9.42a2.58 2.58 0 0 0-5.15 0zM9.42 17.1a2.58 2.58 0 0 0 5.16 0v-2.57a2.58 2.58 0 0 0-2.58-2.58H9.42a2.58 2.58 0 0 0 0 5.15z"/>
  </svg>
);

const D3Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"/>
    <path d="M15 7.8h5.2V13"/>
  </svg>
);

export const SKILLS: Skill[] = [
  { name: 'React', icon: <ReactIcon /> },
  { name: 'TypeScript', icon: <TypescriptIcon /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon /> },
  { name: 'Node.js', icon: <NodeIcon /> },
  { name: 'Gemini API', icon: <GeminiIcon /> },
  { name: 'D3.js', icon: <D3Icon /> },
];

export const PROJECTS: Project[] = [
  {
    title: 'AI-Powered Data Visualizer',
    description: 'A web application that uses the Gemini API to generate insightful charts and visualizations from user-provided data sets. Built with React, D3.js, and Tailwind CSS.',
    imageUrl: 'https://picsum.photos/seed/project1/500/300',
    tags: ['React', 'D3.js', 'Gemini API', 'TypeScript'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with a modern UI, product catalog, shopping cart, and checkout process. Focused on performance and user experience.',
    imageUrl: 'https://picsum.photos/seed/project2/500/300',
    tags: ['React', 'Node.js', 'Redux', 'Stripe'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Interactive Portfolio Generator',
    description: 'A tool that allows users to input their information and automatically generates a stunning, deployable portfolio website. Leverages AI for content suggestions.',
    imageUrl: 'https://picsum.photos/seed/project3/500/300',
    tags: ['Next.js', 'Tailwind CSS', 'Vercel', 'Gemini API'],
    liveUrl: '#',
  },
   {
    title: 'Real-time Collaborative Whiteboard',
    description: 'A web-based whiteboard that allows multiple users to draw and collaborate in real-time. Implemented using WebSockets for seamless communication.',
    imageUrl: 'https://picsum.photos/seed/project4/500/300',
    tags: ['React', 'WebSockets', 'Canvas API', 'Node.js'],
    sourceUrl: '#',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Innovatech Solutions',
    period: '2020 - Present',
    description: [
      'Led the development of a new design system in React and TypeScript, improving development velocity by 30%.',
      'Architected and implemented a large-scale data visualization dashboard using D3.js and React, handling real-time data streams.',
      'Integrated the Google Gemini API to build AI-powered features, such as natural language querying and automated content generation.',
      'Mentored junior engineers and conducted code reviews to maintain high code quality standards.'
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Creations Co.',
    period: '2017 - 2020',
    description: [
      'Developed and maintained client-facing websites and applications using React and Redux.',
      'Collaborated with UI/UX designers to translate wireframes and mockups into responsive, interactive web pages.',
      'Improved website performance and accessibility, achieving a 95+ score on Google Lighthouse.',
    ],
  },
  {
    role: 'Junior Web Developer',
    company: 'WebStart Inc.',
    period: '2015 - 2017',
    description: [
        'Assisted in the development of marketing websites using HTML, CSS, and JavaScript.',
        'Gained experience with modern frontend frameworks and build tools.',
        'Contributed to bug fixing and feature implementation on various projects.'
    ],
  },
];
