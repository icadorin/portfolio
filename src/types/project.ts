export interface Project {
  id: number;
  imageUrl: string;
  title: string;
  status?: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
}

export type ProjectList = Project[];
