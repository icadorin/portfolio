import React from 'react';

interface Props {
  text: string;
  boldHighlights?: string[];
  underlineHighlights?: string[];
  boldClass: string;
  underlineClass: string;
}

const HighlightedText: React.FC<Props> = ({
  text,
  boldHighlights = [],
  underlineHighlights = [],
  boldClass,
  underlineClass,
}) => {
  const highlightMap = new Map<string, string>();

  boldHighlights.forEach((item) => {
    highlightMap.set(item.toLowerCase(), boldClass);
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
