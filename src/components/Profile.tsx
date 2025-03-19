import React, { useState } from "react";
import "../profile.css";

const Profile: React.FC = () => {
  return (
    <section className="profile-container">
      <header className="header">
        <nav className="nav-links">
          <button
            onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
          >
            Sobre
          </button>

          <button
            onClick={() => document.getElementById("experiencia")?.scrollIntoView({ behavior: "smooth" })}
          >
            Experiência
          </button>

          <button
            onClick={() => document.getElementById("trabalhos")?.scrollIntoView({ behavior: "smooth" })}
          >
            Trabalhos
          </button>

          <button
            onClick={() => document.getElementById("contatos")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contatos
          </button>

          <button
            className="btn-resume"
            onClick={() => document.getElementById("contatos")?.scrollIntoView({ behavior: "smooth" })}
          >
            Resumo
          </button>
        </nav>
      </header>

      <main className="content-wrapper">
        <div className="resume">
          <p className="profile-greeting">
            Olá, meu nome é
          </p>
          <h1 className="profile-name">Israel.</h1>
          <h1 className="profile-proficiency">Desenvolvedor web.</h1>
          <p className="profile-description">
            Sou desenvolvedor full-stack, utilizo diversas tecnologias e gosto
            de aplicar minhas habilidades para solucionar problemas.
            Trabalhar em equipe é essencial para criar soluções
            inovadoras e eficientes.
          </p>
        </div>

        <div className="profile-about">
          <div className="profile-text">
            <p className="profile-description">
              Sou desenvolvedor full-stack, utilizo diversas tecnologias e gosto
              de aplicar minhas habilidades para solucionar problemas.
              Trabalhar em equipe é essencial para criar soluções
              inovadoras e eficientes.
            </p>
          </div>
          <div className="profile-photo"></div>
        </div>

        <div id="experiencia" className="profile-experience">
          <h2>Experiência Profissional</h2>
          <p>Full Stack Developer - 1 ano de experiência em desenvolvimento web e mobile.</p>
        </div>

        <div id="trabalhos" className="profile-works">
          <h2>Projetos Desenvolvidos</h2>
          <p>Sistema de gerenciamento de tarefas, plataforma e-commerce e aplicativo mobile.</p>
        </div>

        <div id="contatos" className="profile-contact">
          <h2>Entre em Contato</h2>
          <div className="link-format">
            <a
              href="mailto:email@example.com"
              className="contact-link"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/username"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/username"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

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
