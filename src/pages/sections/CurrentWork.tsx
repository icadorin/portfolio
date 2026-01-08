import React from 'react';
import '@styles/global.css';
import '@styles-sections/current-work.css';
import { currentWork } from '@/data/sections/currentWork';
import HighlightedText from '@/components/highlight/portfolio/TextHighlighter';
import { FiGithub, FiFileText } from 'react-icons/fi';

const CurrentWok: React.FC = () => {
  const { paragraphs, highlights } = currentWork;

  return (
    <section id="current-work" className="current-work">
      <div className="">
        <h2 className="section-current-work">Atualmente</h2>
        <div className="">
          {paragraphs.map((text, index) => (
            <p key={index}>
              <HighlightedText text={text} highlights={highlights} highlightClass="highlight" />
            </p>
          ))}
          <div className="current-links">
            <a
              href="https://github.com/icadorin/quick-bite-backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
              <span>Repositório</span>
            </a>

            <a
              href="https://israelcadorin.vercel.app/quickbite"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFileText />
              <span>Documentação</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWok;
