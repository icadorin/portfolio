import React from 'react';
import JavaCodeHighlight from '@code-highlight/JavaCodeHighlight';

interface CodeBlockWithTitleProps {
  title: string;
  code: string;
  showLineNumbers?: boolean;
  icon?: React.ReactNode;
}

const CodeBlockWithTitle: React.FC<CodeBlockWithTitleProps> = ({
  title,
  code,
  showLineNumbers = true,
  icon,
}) => {
  return (
    <div>
      <div
        className="title-container"
        style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
      >
        {icon && <div className="icon-wrapper">{icon}</div>}
        <h3 className="desc-code">{title}</h3>
      </div>
      <JavaCodeHighlight code={code.trim()} showLineNumbers={showLineNumbers} />
    </div>
  );
};

export default CodeBlockWithTitle;
