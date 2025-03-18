import React, { useState } from "react";
import "../profile.css";

const Profile: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("sobre");

  return (
    <section className="profile-container">

      <header className="header">
        <nav className="nav-links">
          <button onClick={() => setActiveSection("sobre")}>Sobre</button>
          <button onClick={() => setActiveSection("experiencia")}>Experiência</button>
          <button onClick={() => setActiveSection("trabalhos")}>Trabalhos</button>
          <button onClick={() => setActiveSection("contatos")}>Contatos</button>
          <button className="btn-resume" onClick={() => setActiveSection("contatos")}>Resumo</button>
        </nav>
      </header>

      {activeSection === "sobre" && (
        <div className="profile-about">
          <div className="profile-info">
            <h1 className="profile-name">Israel</h1>
            <p className="profile-description">
              Desenvolvedor Full Stack - Apaixonado por tecnologia.
            </p>
            <div className="profile-content">
              <p className="profile-description">
                Sou desenvolvedor full-stack, utilizo diversas tecnologias e gosto de aplicar minhas habilidades para solucionar problemas. Trabalhar em equipe é essencial para criar soluções inovadoras e eficientes.
              </p>
              <div className="profile-photo"></div>
            </div>
          </div>
        </div>
      )}

      {activeSection === "experiencia" && (
        <div className="profile-experience">
          <h2>Experiência Profissional</h2>
          <p>Full Stack Developer - 1 anos de experiência em desenvolvimento web e mobile.</p>
        </div>
      )}

      {activeSection === "trabalhos" && (
        <div className="profile-works">
          <h2>Projetos Desenvolvidos</h2>
          <p>Sistema de gerenciamento de tarefas, plataforma e-commerce e aplicativo mobile.</p>
        </div>
      )}

      {activeSection === "contatos" && (
        <div className="profile-contact">
          <h2>Entre em Contato</h2>
          <div className="link-format">
            <a href="mailto:email@example.com" className="contact-link">Email</a>
            <a href="https://www.linkedin.com/in/username" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/username" className="contact-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="serial-number">R34-Z-015</div>
      </footer>
    </section>
  );
};

export default Profile;
