import React from 'react';

export interface LayerSubSection {
  title: string;
  description?: React.ReactNode;
  content?: React.ReactNode;
}

interface LayerSectionProps {
  title: string;
  overview?: React.ReactNode;
  sections: LayerSubSection[];
}

const LayerSection: React.FC<LayerSectionProps> = ({ title, overview, sections }) => {
  return (
    <div className="doc-section">
      <h3 className="doc-section-title">{title}</h3>

      {overview}

      {sections.map((section, index) => (
        <div key={index}>
          <h3 className="doc-section-subtitle">{section.title}</h3>

          {section.description}
          {section.content}
        </div>
      ))}
    </div>
  );
};

export default LayerSection;
