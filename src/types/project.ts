interface Project {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
}

export type Projects = Project[];
