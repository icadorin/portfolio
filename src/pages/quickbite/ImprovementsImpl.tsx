import React from 'react';
import '@styles-quickbite/quickbite-highlighter.css';
import MavenSnippet from '@/components/code-block/MavenSnippet';
import QuickbiteHighlighter from '@/components/highlight/quickbite/QuickbiteHighlighter';

const ImprovementsImpl: React.FC = () => {
  return (
    <div className="section">
      <h1 className="section-title">Implementação de DTOs (Data Transfer Objects)</h1>
      <h2 className="section-subtitle">Dependências</h2>
      <div className="section-content">
        <div className="tech-badge-container">
          <span className="tech-badge">JPA</span>
          <span className="tech-badge">Jakarta Validation</span>
        </div>
      </div>

      <div className="dep-content">
        <h3 className="tech-title">Lombok</h3>
        <p>Import da dependência no arquivo pom.xml</p>

        <MavenSnippet
          groupId="org.springframework.boot"
          artifactId="spring-boot-starter-data-jpa"
        />

        <h3 className="sub-description"></h3>
        <QuickbiteHighlighter asParagraph={true}></QuickbiteHighlighter>

        <h3 className="sub-description"></h3>
        <QuickbiteHighlighter asParagraph={true}></QuickbiteHighlighter>
      </div>
    </div>
  );
};

export default ImprovementsImpl;
