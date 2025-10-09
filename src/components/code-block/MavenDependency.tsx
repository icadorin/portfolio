import React from 'react';
import '@styles-quickbite/mavenDependency.css';

interface MavenDependencyProps {
  groupId: string;
  artifactId: string;
  version?: string;
  scope?: string;
  className?: string;
}

const MavenDependency: React.FC<MavenDependencyProps> = ({
  groupId,
  artifactId,
  version,
  scope,
  className = '',
}) => {
  return (
    <div className={`maven-dependency-container ${className}`}>
      <pre className="maven-dependency-block">
        <code className="maven-code">
          <span className="tag-code">&lt;dependency&gt;</span>
          {'\n'}
          {'  '}
          <span className="tag-code">&lt;groupId&gt;</span>
          <span className="maven-value">{groupId}</span>
          <span className="tag-code">&lt;/groupId&gt;</span>
          {'\n'}
          {'  '}
          <span className="tag-code">&lt;artifactId&gt;</span>
          <span className="maven-value">{artifactId}</span>
          <span className="tag-code">&lt;/artifactId&gt;</span>
          {version && (
            <>
              {'\n'}
              {'  '}
              <span className="tag-code">&lt;version&gt;</span>
              <span className="maven-value">{version}</span>
              <span className="tag-code">&lt;/version&gt;</span>
            </>
          )}
          {scope && (
            <>
              {'\n'}
              {'  '}
              <span className="tag-code">&lt;scope&gt;</span>
              <span className="maven-value">{scope}</span>
              <span className="tag-code">&lt;/scope&gt;</span>
            </>
          )}
          {'\n'}
          <span className="tag-code">&lt;/dependency&gt;</span>
        </code>
      </pre>
    </div>
  );
};

export default MavenDependency;
