import React from "react";
import "../profile.css";
import { GitHub, LinkedIn } from '@mui/icons-material';
import Folder from "@mui/icons-material/FolderOutlined";

const Profile: React.FC = () => {
  return (
    <section className="profile-container">
      <header className="header">
        <nav className="nav-links">
          <button onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}>
            Sobre
          </button>
          <button onClick={() => document.getElementById("experiencia")?.scrollIntoView({ behavior: "smooth" })}>
            Experiência
          </button>
          <button onClick={() => document.getElementById("trabalhos")?.scrollIntoView({ behavior: "smooth" })}>
            Trabalhos
          </button>
          <button onClick={() => document.getElementById("contatos")?.scrollIntoView({ behavior: "smooth" })}>
            Contatos
          </button>
          <button
            className="btn-resume"
            onClick={() => document.getElementById("resumo")?.scrollIntoView({ behavior: "smooth" })}>
            Resumo
          </button>
        </nav>
      </header>

      <main className="content-wrapper">
        <section id="resumo" className="resume">
          <p className="resume-greeting">Olá, meu nome é</p>
          <p className="resume-name">Israel.</p>
          <p className="resume-proficiency">Desenvolvedor web Full-Stack.</p>
          <div className="description-container">
            <p className="resume-description">
              Sou desenvolvedor full-stack, utilizo diversas tecnologias e gosto
              de aplicar minhas habilidades para solucionar problemas.
              Trabalhar em equipe é essencial para criar soluções inovadoras e eficientes.
            </p>
          </div>
        </section>

        <section id="sobre" className="about">
          <div className="profile-about">
            <h2 className="section-about">Sobre Mim</h2>
            <div className="profile-text">
              <p className="profile-description">
                Sou desenvolvedor full-stack, utilizo diversas tecnologias e gosto
                de aplicar minhas habilidades para solucionar problemas.
                Trabalhar em equipe é essencial para criar soluções inovadoras e eficientes.
              </p>
            </div>
          </div>
          <div className="photo-container">
            <div className="photo-border">
              <div className="profile-photo"></div>
            </div>
          </div>
        </section>

        <section id="experiencia" className="experience">
          <h2 className="section-experience">Experiência</h2>
          <div className="experience-container">

          </div>
        </section>

        <section id="trabalhos" className="works">
          <h2 className="section-works">Projetos</h2>
          <p className="work-description">
            Sistema de gerenciamento de tarefas, plataforma e-commerce e aplicativo mobile.
          </p>
          <div className="card-container">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="card">
                <div className="icon-container">
                  <div>
                    <Folder className="folder-icon" sx={{ fontSize: 25, color: " #1d0327" }} />
                  </div>
                  <a
                    className="github-icon"
                    href="https://github.com/user"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <GitHub sx={{ fontSize: 25, color: " #1d0327" }} />
                  </a>
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

        <section id="contatos" className="contact">
          <h2 className="section-contact">Contato</h2>
          <div className="link-format">
            <a
              href="https://www.linkedin.com/in/user"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn sx={{ color: 'white' }} />
            </a>
            <a
              href="https://github.com/user"
              target="_blank" rel="noopener noreferrer"
            >
              <GitHub sx={{ color: 'white' }} />
            </a>
          </div>
          <p className="contact-email">email_bolado34@gmail.com</p>
        </section>

        <div className="easter-egg">
          <div className="serial-number">R34-Z-015</div>
        </div>

        <footer className="footer">
          <p>Desenvolvido por Israel &copy; {new Date().getFullYear()}</p>
        </footer>
      </main>
    </section>
  );
};

export default Profile;
