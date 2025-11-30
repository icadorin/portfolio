import React from 'react';
import QuickbiteHighlighter from '@/components/highlight/QuickbiteHighlighter';
import MavenSnippet from '@/components/code-block/MavenSnippet';
import { repositoryCode } from '@/data/repositoryCode';

const RepositoryImpl: React.FC = () => {
  return (
    <div className="section">
      <h1 className="section-title">Implementação de Repositories</h1>
      <h2 className="section-subtitle">Dependências</h2>
      <div className="section-content">
        <div className="tech-badge-container">
          <span className="tech-badge">Spring Data JPA</span>
          <span className="tech-badge">JPA</span>
        </div>
      </div>

      <div className="dep-content">
        <p>Import das dependências no arquivo.pom</p>
        <QuickbiteHighlighter>
          O Spring Data JPA simplifica de forma significativa a implementação de repositórios, ele
          fornece métodos de CRUD prontos e permite a criação de queries personalizadas através de
          convenções de nomeclatura ou anotações.
        </QuickbiteHighlighter>
        <MavenSnippet
          groupId="org.springframework.boot"
          artifactId="spring-boot-starter-data-jpa"
        />
      </div>
    </div>
  );
};

export default RepositoryImpl;
