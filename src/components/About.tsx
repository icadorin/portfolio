import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import '../styles/global.css';
import '../styles/about.css';
import { aboutData } from '../data/aboutData';
import HighlightedText from './common/HighlightedTextAbout';

const About: React.FC = () => {
  const { paragraphs, highlights, underlineHighlights, techStack } = aboutData;

  return (
    <section id="about" className="about">
      <div className="profile-about">
        <h2 className="section-about">Sobre Mim</h2>
        <div className="profile-description">
          {paragraphs.map((text, index) => (
            <p key={index}>
              <HighlightedText
                text={text}
                highlights={highlights}
                underlineHighlights={underlineHighlights}
                hightlightClass="highlight"
                underlineClass="tech-underline"
              />
            </p>
          ))}

          <div className="tech-columns">
            {techStack.map((column, i) => (
              <div className="tech-column" key={i}>
                {column.map((tech) => (
                  <div className="tech-item" key={tech}>
                    <ArrowRightIcon className="arrow-icon" />
                    <span className="tech">{tech}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
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
