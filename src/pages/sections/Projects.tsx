import React from 'react';
import '@styles/global.css';
import '@styles-sections/projects.css';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { projectsData } from '@data-sections/projectsData';
import { highlightLinks } from '@/components/highlight/portfolio/ProjectLinkHighlighter';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-projects">Projetos</h2>
      <p className="projects-description">Projetos desenvolvidos e em andamento</p>
      <div className="card-container">
        {projectsData.map((project) => (
          <div key={project.id} className="card">
            <div className="card-content">
              <div className="icon-container">
                <a
                  className="github-icon"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Código no GitHub - ${project.title}`}
                >
                  <FaGithub size={25} />
                </a>
                {project.liveUrl && (
                  <a
                    className="external-link-icon"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver projeto online - ${project.title}`}
                  >
                    <FiExternalLink size={25} />
                  </a>
                )}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-status">{project.status}</p>
              <p className="project-description">{highlightLinks(project.description)}</p>
              <div className="technologies-container">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="project-technologies">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
