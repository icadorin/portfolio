import React from 'react';
import { HighlightedTextProps } from '@app-types/highlightedText';

const TextHighlighter: React.FC<HighlightedTextProps> = ({
  text,
  highlights = [],
  highlightClass = 'highlight',
}) => {
  if (highlights.length === 0) {
    return <>{text}</>;
  }

  const escapedWords = highlights.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

  const regex = new RegExp(`(${escapedWords.join('|')})`, 'gi');

  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        const shouldHighlight = highlights.some(
          (highlight) => highlight.toLowerCase() === part.toLowerCase()
        );

        if (shouldHighlight) {
          return (
            <span key={index} className={highlightClass}>
              {part}
            </span>
          );
        }

        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
};

export default TextHighlighter;
