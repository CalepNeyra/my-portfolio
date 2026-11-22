export interface Project {
  slug: string;
  title: string;
  description: string;
  kind: 'project' | 'academic-demo';
  status?: string;
  image?: { src: string; width: number; height: number };
  technologies: string[];
  progress?: string;
  planned?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Metadata {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  ogImage?: string;
}
