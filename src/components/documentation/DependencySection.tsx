import React from 'react';
import MavenSnippet from '@/components/code-block/MavenSnippet';
import QuickbiteHighlighterSection from '@/components/highlight/quickbite/QuickbiteHighlighterSection';

export interface DependencySubSection {
  title: string;
  content: React.ReactNode;
}

interface DependencySectionProps {
  title: string;
  maven?: {
    groupId: string;
    artifactId: string;
  };
  description?: React.ReactNode;
  sections: DependencySubSection[];
}

const DependencySection: React.FC<DependencySectionProps> = ({
  title,
  maven,
  description,
  sections,
}) => {
  return (
    <div className="doc-section">
      <h3 className="doc-section-title">{title}</h3>

      {maven && (
        <QuickbiteHighlighterSection>
          <p>Import da dependência no arquivo pom.xml</p>
          <MavenSnippet groupId={maven.groupId} artifactId={maven.artifactId} />
        </QuickbiteHighlighterSection>
      )}

      {description && <p>{description}</p>}

      {sections.map((section, index) => (
        <div key={index}>
          <h3 className="doc-section-subtitle">{section.title}</h3>
          <QuickbiteHighlighterSection>{section.content}</QuickbiteHighlighterSection>
        </div>
      ))}
    </div>
  );
};

export default DependencySection;
