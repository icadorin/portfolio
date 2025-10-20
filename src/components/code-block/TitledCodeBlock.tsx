import React from 'react';
import JavaHighlighter from '@/components/highlight/JavaHighlighter';

interface TitledCodeBlockProps {
  title: string;
  code: string;
  showLineNumbers?: boolean;
  icon?: React.ReactNode;
}

const TitledCodeBlock: React.FC<TitledCodeBlockProps> = ({
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
      <JavaHighlighter code={code.trim()} showLineNumbers={showLineNumbers} />
    </div>
  );
};

export default TitledCodeBlock;
