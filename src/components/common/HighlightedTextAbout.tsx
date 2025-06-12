import React from 'react';
import { HighlightedTextProps } from '../../types/highlightedText';

const HighlightedText: React.FC<HighlightedTextProps> = ({
  text,
  highlights = [],
  underlineHighlights = [],
  hightlightClass,
  underlineClass,
}) => {
  const highlightMap = new Map<string, string>();

  highlights.forEach((item) => {
    highlightMap.set(item.toLowerCase(), hightlightClass);
  });
  underlineHighlights.forEach((item) => {
    highlightMap.set(item.toLowerCase(), underlineClass);
  });

  const highlightWords = Array.from(highlightMap.keys());
  if (highlightWords.length === 0) return <>{text}</>;

  const escapedWords = highlightWords.map((w) =>
    w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  );
  const regex = new RegExp(`(${escapedWords.join('|')})`, 'gi');

  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        const styleClass = highlightMap.get(part.toLowerCase());
        if (styleClass) {
          return (
            <span className={styleClass} key={index}>
              {part}
            </span>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
};

export default HighlightedText;
