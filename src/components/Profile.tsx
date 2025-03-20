import React from "react";
import "../profile.css";

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
          <p className="resume-proficiency">Desenvolvedor web.</p>
          <p className="resume-description">
            Sou desenvolvedor full-stack, utilizo diversas tecnologias e gosto
            de aplicar minhas habilidades para solucionar problemas.
            Trabalhar em equipe é essencial para criar soluções inovadoras e eficientes.
          </p>
        </section>

        <section id="sobre" className="about">
          <h2 className="section-title">Sobre Mim</h2>
          <div className="profile-about">
            <div className="profile-text">
              <p className="profile-description">
                Sou desenvolvedor full-stack, utilizo diversas tecnologias e gosto
                de aplicar minhas habilidades para solucionar problemas.
                Trabalhar em equipe é essencial para criar soluções inovadoras e eficientes.
              </p>
            </div>
            <div className="profile-photo"></div>
          </div>
        </section>

        <section id="experiencia" className="experience">
          <h2>Experiência Profissional</h2>
          <p>Full Stack Developer - 1 ano de experiência em desenvolvimento web e mobile.</p>
        </section>

        <section id="trabalhos" className="works">
          <h2>Projetos Desenvolvidos</h2>
          <p>Sistema de gerenciamento de tarefas, plataforma e-commerce e aplicativo mobile.</p>
        </section>

        <section id="contatos" className="contact">
          <h2>Entre em Contato</h2>
          <div className="link-format">
            <a href="mailto:email@example.com" className="contact-link">Email</a>
            <a href="https://www.linkedin.com/in/username" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/username" className="contact-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
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
