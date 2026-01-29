import React from 'react';
import SimpleList from '@/components/ui/SimpleList';

interface Props {
  title: string;
  items: string[];
  className?: string;
}

export const SimpleSection: React.FC<Props> = ({ title, items, className = '' }) => (
  <div className={className}>
    <h3 className="sub-description">{title}</h3>
    <SimpleList items={items} />
  </div>
);
