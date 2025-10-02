import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { projectsData } from '../data/projectsData';
import { highlightLinks } from '../components/common/HighlightedLinkProject';
import '../styles/global.css';
import '../styles/projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-projects">Projetos</h2>
      <p className="projects-description">
        Projetos desenvolvidos e em andamento
      </p>
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

              <h2 className="project-title">{project.title}</h2>

              <p className="project-description">
                {highlightLinks(project.description)}
              </p>

              <div className="technologies-container">
                {project.technologies.map((tech, index) => (
                  <p key={index} className="project-technologies">
                    {tech}
                  </p>
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
