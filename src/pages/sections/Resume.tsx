import React from 'react';
import '@styles/global.css';
import '@styles-sections/resume.css';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="resume">
      <p className="resume-greeting">Olá, meu nome é</p>
      <p className="resume-name">Israel.</p>
      <p className="resume-proficiency">Desenvolvedor Full-Stack com foco em Backend Java.</p>
      <div className="description-container">
        <p className="resume-description">
          Atuo na criação de aplicações web, do backend ao front-end.
        </p>
      </div>
    </section>
  );
};

export default Resume;
