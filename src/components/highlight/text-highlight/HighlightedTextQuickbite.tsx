import React from 'react';

interface HighlightedTextProps {
  text?: string;
  children?: string;
}

interface HighlightRule {
  regex: RegExp;
  className: string;
}

// Regras de destaque em ordem de prioridade
const HIGHLIGHT_RULES: readonly HighlightRule[] = [
  // 1. Anotações primeiro (ex: @Entity, @Id)
  { regex: /(@\w+)/g, className: 'annotation' },

  // 2. Texto em negrito (ex: **importante**)
  { regex: /\*\*(.*?)\*\*/g, className: 'bold-word' },

  // 3. Frameworks e tecnologias
  {
    regex: /\b(JPA|Hibernate|Spring|Lombok)\b/gi,
    className: 'framework',
  },

  // 4. Conceitos de código
  {
    regex: /\b(getters|setters|boilerplate|entity|repository)\b/gi,
    className: 'code-concept',
  },

  // 5. Termos técnicos específicos
  {
    regex: /\b(builder|cascade|orphanRemoval|mappedBy|order)\b/gi,
    className: 'programming-term',
  },

  // 6. Constantes (último para evitar conflitos)
  {
    regex: /\b([A-Z_]{2,}|lazy)\b/g,
    className: 'constant',
  },
] as const;

const highlightText = (
  text: string,
  rules: readonly HighlightRule[],
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
            </span>,
          );

          lastIndex = freshRegex.lastIndex;
        }

        if (lastIndex < part.length) {
          result.push(part.slice(lastIndex));
        }

        return result;
      });
    },
    [text],
  );
};

const HighlightedTextQuickbite: React.FC<HighlightedTextProps> = ({
  text,
  children,
}) => {
  const content = text ?? children ?? '';

  if (!content) return null;

  const highlightedContent = highlightText(content, HIGHLIGHT_RULES);

  return <>{highlightedContent}</>;
};

export default HighlightedTextQuickbite;
