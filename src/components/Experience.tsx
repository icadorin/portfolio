import React from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import companies from "../data/companiesData";

interface ExperienceProps {
  selectedCompany: any;
  setSelectedCompany: React.Dispatch<React.SetStateAction<any>>;
}

const Experience: React.FC<ExperienceProps> = ({ selectedCompany, setSelectedCompany }) => {
  return (
    <section id="experience" className="experience">
      <h2 className="section-experience">Experiência</h2>
      <div className="experience-container">
        <div className="exp-contents-container">
          {companies.map((company, index) => (
            <button
              key={index}
              className={`exp-button ${selectedCompany.name === company.name ? "selected" : ""}`}
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
          <div>
            {[selectedCompany.descriptionP1, selectedCompany.descriptionP2].map(
              (desc, index) =>
                desc && (
                  <div key={index} className="task-item">
                    <ArrowRightIcon />
                    <p>{desc}</p>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
