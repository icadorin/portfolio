import React from 'react';

interface HighlightedTextProps {
  text?: string;
  children?: string;
  asParagraph?: boolean;
  className?: string;
}

interface HighlightRule {
  regex: RegExp;
  className: string;
}

// Regras de destaque em ordem de prioridade
const HIGHLIGHT_RULES: readonly HighlightRule[] = [
  { regex: /(@\w+)/g, className: 'annotation' },
  { regex: /\*\*(.*?)\*\*/g, className: 'bold-word' },
  { regex: /\b(JPA|Hibernate|Spring|Lombok)\b/gi, className: 'framework' },
  {
    regex: /\b(getters|setters|boilerplate|entity|repository)\b/gi,
    className: 'code-concept',
  },
  {
    regex: /\b(builder|cascade|orphanRemoval|mappedBy|order|timestamps|LocalDateTime)\b/gi,
    className: 'programming-term',
  },
  { regex: /\b([A-Z_]{2,}|lazy)\b/g, className: 'constant' },
] as const;

const highlightText = (
  text: string,
  rules: readonly HighlightRule[]
): (string | React.ReactNode)[] => {
  return rules.reduce<(string | React.ReactNode)[]>(
    (parts, { regex, className }) => {
      return parts.flatMap((part) => {
        if (typeof part !== 'string') return part;

        const result: (string | React.ReactNode)[] = [];
        let lastIndex = 0;

        const freshRegex = new RegExp(regex.source, regex.flags);
        let match: RegExpExecArray | null;

        while ((match = freshRegex.exec(part)) !== null) {
          if (match.index > lastIndex) {
            result.push(part.slice(lastIndex, match.index));
          }

          const content = match[1] || match[0];
          result.push(
            <span key={`${className}-${match.index}`} className={className}>
              {content}
            </span>
          );

          lastIndex = freshRegex.lastIndex;
        }

        if (lastIndex < part.length) {
          result.push(part.slice(lastIndex));
        }

        return result;
      });
    },
    [text]
  );
};

const HighlightedTextQuickbite: React.FC<HighlightedTextProps> = ({
  text,
  children,
  asParagraph = false,
  className,
}) => {
  const content = text ?? children ?? '';
  if (!content) return null;

  const highlightedContent = highlightText(content, HIGHLIGHT_RULES);

  if (asParagraph) {
    return <p className={`highlighted-paragraph ${className}`}>{highlightedContent}</p>;
  }

  return <>{highlightedContent}</>;
};

export default HighlightedTextQuickbite;
