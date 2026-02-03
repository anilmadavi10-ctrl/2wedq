
import React from 'react';
import { Project, Skill, Experience, Service } from './types';
import { 
  Code2, 
  Database, 
  Cpu, 
  Layers, 
  Globe, 
  Terminal, 
  Smartphone,
  Cloud
} from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus Social AI',
    description: 'A cutting-edge social media platform using Gemini API for automated content moderation and smart post suggestions.',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Socket.io', 'Gemini API'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '2',
    title: 'CryptoFlux Dashboard',
    description: 'Real-time cryptocurrency analytics platform with advanced charting, news sentiment analysis, and portfolio tracking.',
    techStack: ['React', 'D3.js', 'Express', 'Redis', 'WebSockets'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '3',
    title: 'Echo Commerce',
    description: 'A headless e-commerce solution with dynamic inventory management and localized multi-currency support.',
    techStack: ['TypeScript', 'GraphQL', 'Stripe', 'AWS Lambda', 'MongoDB'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    githubUrl: '#',
    liveUrl: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 98, category: 'Frontend' },
  { name: 'Node.js / Express', level: 88, category: 'Backend' },
  { name: 'Python / Django', level: 80, category: 'Backend' },
  { name: 'Go', level: 75, category: 'Backend' },
  { name: 'PostgreSQL / MySQL', level: 85, category: 'Database' },
  { name: 'MongoDB / Redis', level: 82, category: 'Database' },
  { name: 'Docker / Kubernetes', level: 78, category: 'Tools' },
  { name: 'AWS / GCP', level: 75, category: 'Tools' },
  { name: 'CI/CD (GitHub Actions)', level: 85, category: 'Tools' }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Quantum Tech Solutions',
    role: 'Senior Full Stack Developer',
    period: '2022 - Present',
    description: [
      'Architected a microservices-based CRM handling 500k+ daily users.',
      'Reduced initial page load time by 40% using Next.js App Router and optimized caching.',
      'Led a team of 5 developers across frontend and backend squads.'
    ]
  },
  {
    company: 'BuildFlow Internships',
    role: 'Full Stack Intern',
    period: '2021 - 2022',
    description: [
      'Developed responsive UI components using React and Tailwind CSS.',
      'Implemented RESTful APIs and integrated payment gateways using Stripe.',
      'Assisted in migrating legacy codebases to TypeScript for better type safety.'
    ]
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Web Application Development',
    description: 'Building scalable, high-performance web apps with modern frameworks.',
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: 'API Design & Integration',
    description: 'Crafting robust REST & GraphQL APIs with secure authentication.',
    icon: <Terminal className="w-6 h-6" />
  },
  {
    title: 'UI/UX Engineering',
    description: 'Creating premium, interactive interfaces with smooth user flows.',
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: 'Cloud Deployment',
    description: 'DevOps strategies, containerization, and serverless architectures.',
    icon: <Cloud className="w-6 h-6" />
  }
];

export const TECH_STACK_ICONS = [
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Express', icon: 'https://cdn.simpleicons.org/express/000000/white' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' }
];
