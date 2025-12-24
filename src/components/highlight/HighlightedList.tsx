import React from 'react';
import QuickbiteHighlighter from '@/components/highlight/QuickbiteHighlighter';

interface HighlightedListProps {
  items: string[];
  className?: string;
}

const HighlightedList: React.FC<HighlightedListProps> = ({ items, className }) => {
  return (
    <ul className={`list ${className ?? ''}`}>
      {items.map((item, index) => (
        <li key={index} className="list-item">
          <QuickbiteHighlighter>{item}</QuickbiteHighlighter>
        </li>
      ))}
    </ul>
  );
};

export default HighlightedList;
