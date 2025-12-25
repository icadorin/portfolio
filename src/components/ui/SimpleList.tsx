import React from 'react';

interface SimpleListProps {
  items: React.ReactNode[];
  className?: string;
  itemClassName?: string;
}

const SimpleList: React.FC<SimpleListProps> = ({ items, className, itemClassName }) => {
  return (
    <ul className={`list ${className ?? ''}`}>
      {items.map((item, index) => (
        <li key={index} className={`list-item ${itemClassName ?? ''}`}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default SimpleList;
