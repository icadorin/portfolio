import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="profile-about">
        <h2 className="section-about">Sobre Mim</h2>
        <div className="profile-description">
          <p>
            Sou desenvolvedor full-stack, utilizo diversas tecnologias e gosto
            de aplicar minhas habilidades para solucionar problemas.
            Trabalhar em equipe é essencial para criar soluções inovadoras e eficientes.
          </p>
        </div>
      </div>
      <div className="photo-container">
        <div className="profile-photo">
          <div className="photo-border"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
