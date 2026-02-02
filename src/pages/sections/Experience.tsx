import React from 'react';
import '@styles/global.css';
import '@styles-sections/experience.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import companies from '@data-sections/experienceData';
import { ExperienceProps } from '../../types/experience';

const Experience: React.FC<ExperienceProps> = ({ selectedCompany, setSelectedCompany }) => {
  return (
    <section id="experience" className="experience">
      <h2 className="section-experience">Experiência</h2>
      <div className="experience-container">
        <div className="exp-contents-container">
          {companies.map((company, index) => (
            <button
              key={index}
              className={`exp-button ${selectedCompany.name === company.name ? 'selected' : ''}`}
              onClick={() => setSelectedCompany(company)}
            >
              {company.name}
            </button>
          ))}
        </div>
        <div className="exp-description">
          <div className="exp-desc-container">
            <p className="position">{selectedCompany.position}</p>
            <p className="company-name">{selectedCompany.name}</p>
          </div>
          <p className="time-worked">{selectedCompany.period}</p>
          <ul className="description-list">
            {selectedCompany.descriptions.map((desc: string, index: number) => (
              <li key={index} className="description-item">
                <ArrowRightIcon className="arrow-icon" />
                <span className="description-text">{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
