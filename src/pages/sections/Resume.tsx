import React from 'react';
import '@styles/global.css';
import '@styles-sections/resume.css';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="resume">
      <p className="resume-greeting">Olá, meu nome é</p>
      <h1 className="resume-name">Israel.</h1>
      <h2 className="resume-proficiency">Desenvolvedor Full-Stack com foco em Backend Java.</h2>
      <div className="description-container">
        <p className="resume-description">
          Atuo na criação de aplicações web, do backend ao front-end.
        </p>
      </div>
    </section>
  );
};

export default Resume;
