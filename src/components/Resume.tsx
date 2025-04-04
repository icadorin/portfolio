import React from "react";

const Resume: React.FC = () => {
  return (
    <section id="resume" className="resume">
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
  );
};

export default Resume;
