import React from 'react';
import QuickbiteHighlighterSection from '@/components/highlight/QuickbiteHighlighterSection';

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
    <div className="layer-content">
      <h3 className="layer-title">{title}</h3>

      {overview && <QuickbiteHighlighterSection>{overview}</QuickbiteHighlighterSection>}

      {sections.map((section, index) => (
        <div key={index}>
          <h4 className="sub-description">{section.title}</h4>

          {section.description && (
            <QuickbiteHighlighterSection>{section.description}</QuickbiteHighlighterSection>
          )}

          {section.content && section.content}
        </div>
      ))}
    </div>
  );
};

export default LayerSection;
