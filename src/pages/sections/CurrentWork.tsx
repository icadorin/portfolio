import React from 'react';
import '@styles/global.css';
import '@styles-sections/current-work.css';
import { currentWork } from '@/data/sections/currentWork';
import HighlightedText from '@/components/highlight/portfolio/TextHighlighter';
import { FiGithub, FiFileText } from 'react-icons/fi';

const CurrentWork: React.FC = () => {
  const { paragraphs, highlights } = currentWork;
  return (
    <section id="current-work" className="current-work">
      <h2 className="current-work__title">Atualmente</h2>
      <div className="current-work__container">
        {paragraphs.map((text, index) => (
          <p key={index} className="current-work__paragraph">
            <HighlightedText
              text={text}
              highlights={highlights}
              highlightClass="current-work__highlight"
            />
          </p>
        ))}
        <div className="current-work__links">
          <a
            href="https://github.com/icadorin/quick-bite-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="current-work__link"
            aria-label="Repositório no GitHub"
          >
            <FiGithub />
            <span>Repositório</span>
          </a>
          <a
            href="https://israelcadorin.vercel.app/quickbite"
            target="_blank"
            rel="noopener noreferrer"
            className="current-work__link"
            aria-label="Documentação do projeto"
          >
            <FiFileText />
            <span>Documentação</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CurrentWork;
