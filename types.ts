
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}
