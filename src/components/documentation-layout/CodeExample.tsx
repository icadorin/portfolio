import React from 'react';
import CodeBlock from '@/components/code-block/CodeBlock';

interface Props {
  title: string;
  context?: React.ReactNode;
  code: string;
  className?: string;
}

export const CodeExample: React.FC<Props> = ({ title, context, code, className = '' }) => (
  <div className={className}>
    {title && <h3>{title}</h3>}
    {context && context}
    <CodeBlock code={code} />
  </div>
);
