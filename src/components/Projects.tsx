import React from "react";
import Folder from "@mui/icons-material/FolderOutlined";
import GitHub from '@mui/icons-material/GitHub';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-projects">Projetos</h2>
      <p className="projects-description">
        Sistema de gerenciamento de tarefas, plataforma e-commerce e aplicativo mobile.
      </p>
      <div className="card-container">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="card">
            <div className="icon-container">
              <div className="folder-icon">
                <Folder sx={{ fontSize: 30, color: " #1d0327" }} />
              </div>
              <div>
                <a
                  className="github-icon"
                  href="https://github.com/username!#!@$!$!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub sx={{ fontSize: 30, color: " #1d0327" }} />
                </a>
              </div>
            </div>
            <h2 className="project-title">Api Rest CRUD</h2>
            <p className="project-description">
              Desenvolvimento de uma API simples para gerenciar o cadastro CRUD.
            </p>
            <div className="technologies-container">
              {[...Array(5)].map((_, index) => (
                <p key={index} className="project-technologies">Node</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
