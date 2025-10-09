import React from 'react';
import '@styles/global.css';
import '@styles-sections/resume.css';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="resume">
      <p className="resume-greeting">Olá, meu nome é</p>
      <p className="resume-name">Israel.</p>
      <p className="resume-proficiency">
        Soluciono problemas com código e doses de café.
      </p>
      <div className="description-container">
        <p className="resume-description">
          Sou desenvolvedor full-stack, gosto de imaginar cenários que podem ser
          solucionados através de código. Atualmente, estou dedicado aos estudos
          back-end, mais especificamente de Java e Spring-Boot.
        </p>
      </div>
    </section>
  );
};

export default Resume;
