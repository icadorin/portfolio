import React from 'react';
import HighlightedList from '@/components/highlight/quickbite/HighlightedList';

interface Props {
  title: string;
  items: string[];
  className?: string;
}

export const HighlightedSection: React.FC<Props> = ({ title, items, className = '' }) => (
  <div className={className}>
    <h3 className="sub-description">{title}</h3>
    <HighlightedList items={items} />
  </div>
);
