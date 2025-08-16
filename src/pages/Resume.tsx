import React from 'react';
import '../styles/global.css';
import '../styles/resume.css';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="resume">
      <p className="resume-greeting">Olá, meu nome é</p>
      <p className="resume-name">Israel.</p>
      <p className="resume-proficiency">
        Eu escrevo códigos web com foco em solução.
      </p>
      <div className="description-container">
        <p className="resume-description">
          Sou engenheiro de software, gosto de imaginar cenários que podem ser
          transformados em aplicações, essas ideias me fascinam. Atualmente,
          estou desenvolvendo projetos para expandir minhas habilidades.
        </p>
      </div>
    </section>
  );
};

export default Resume;
