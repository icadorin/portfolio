import React from 'react';
import JavaHighlighter from '@/components/highlight/quickbite/JavaHighlighter';

interface CodeBlockProps {
  code: string;
  showLineNumbers?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, showLineNumbers = true }) => {
  return <JavaHighlighter code={code.trim()} showLineNumbers={showLineNumbers} />;
};

export default CodeBlock;
