import React from 'react';
import JavaCodeHighlight from '@code-highlight/JavaCodeHighlight';

interface CodeBlockWithTitleProps {
  title: string;
  code: string;
  showLineNumbers?: boolean;
}

const CodeBlockWithTitle: React.FC<CodeBlockWithTitleProps> = ({
  title,
  code,
  showLineNumbers = true,
}) => {
  return (
    <div>
      <h3 className="desc-code">{title}</h3>
      <JavaCodeHighlight code={code.trim()} showLineNumbers={showLineNumbers} />
    </div>
  );
};

export default CodeBlockWithTitle;
