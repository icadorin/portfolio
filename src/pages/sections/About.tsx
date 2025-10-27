import HighlightedText from '@/components/highlight/AboutHighlighter';
import { aboutData } from '@data-sections/aboutData';
import profileImage from '@images/profile-photo.jpeg';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import '@styles-sections/about.css';
import '@styles/global.css';
import React from 'react';

const About: React.FC = () => {
  const { paragraphs, highlights, techStack } = aboutData;

  return (
    <section id="about" className="about">
      <div className="profile-about">
        <h2 className="section-about">Sobre Mim</h2>
        <div className="profile-description">
          {paragraphs.map((text, index) => (
            <p key={index}>
              <HighlightedText text={text} highlights={highlights} highlightClass="highlight" />
            </p>
          ))}
          {/* ARRUMAR FAVICON */}
          {/* ARRUMAR FAVICON */}
          {/* ARRUMAR FAVICON */}
          {/* ARRUMAR FAVICON */}
          {/* ARRUMAR FAVICON */}

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
          <img src={profileImage} alt="Foto de perfil" className="photo" />
          <div className="photo-border"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
