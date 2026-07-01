import React from 'react';
import '@styles/global.css';
import '@styles-sections/current-work.css';
import { currentWork } from '@/data/sections/currentWork';
import HighlightedText from '@/components/highlight/portfolio/TextHighlighter';
import { FiGithub } from 'react-icons/fi';

const CurrentWork: React.FC = () => {
  const { paragraphs, highlights } = currentWork;
  return (
    <section id="current-work" className="current-work">
      <h2 className="section-title">Atualmente</h2>
      <div className="current-work-container">
        {paragraphs.map((text, index) => (
          <p key={index} className="current-work-paragraph">
            <HighlightedText
              text={text}
              highlights={highlights}
              highlightClass="current-work-highlight"
            />
          </p>
        ))}
        <div className="current-work-links">
          <a
            href="https://github.com/icadorin/bioimpedance-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="current-work-link"
            aria-label="Repositório no GitHub"
          >
            <FiGithub />
            <span>Backend</span>
          </a>
          <a
            href="https://github.com/icadorin/bioimpedance-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="current-work-link"
            aria-label="Repositório no GitHub"
          >
            <FiGithub />
            <span>Frontend</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CurrentWork;
