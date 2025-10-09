export interface Project {
  id: number;
  title: string;
  status?: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
}

export type ProjectList = Project[];
