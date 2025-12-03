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

const ANNOTATIONS = ['@\\w+'];
const BOLD_TEXT = ['\\*\\*(.*?)\\*\\*'];
const FRAMEWORKS_WITH_HYPHENS = ['spring-boot-starter-test'];
const FRAMEWORKS_WITHOUT_HYPHENS = [
  'JPA',
  'Hibernate',
  'Spring-boot',
  'Lombok',
  'JUnit 5',
  'Junit',
  'Mockito',
];
const CODE_CONCEPTS = ['getters', 'setters', 'boilerplate', 'entity', 'repository'];
const PROGRAMMING_TERMS = [
  'builder',
  'cascade',
  'orphanRemoval',
  'mappedBy',
  'order',
  'timestamps',
  'LocalDateTime',
  'mock',
  'mocks',
];
const CONSTANTS = ['[A-Z_]{2,}', 'lazy'];

const TEST_FUNCTION_PATTERNS = [
  '\\b\\w+_(?:Should|When|Given)(?:[A-Z][a-zA-Z]*)+\\b',
  '\\btest[A-Z]\\w*\\b',
];

const REPOSITORY_METHOD_PATTERNS = [
  'findBy\\w+(?:OrderBy\\w+)?(?:Asc|Desc)?',
  'countBy\\w+',
  'existsBy\\w+',
  'deleteBy\\w+',
  'getBy\\w+',
];

const FUNCTIONS = [
  'when',
  'thenReturn',
  'thenThrow',
  'thenAnswer',
  'verify',
  'assertEquals',
  'assertNotNull',
  'assertThrows',
  'any',
  'argThat',
  'findById',
  'save',
  'deleteAll',
  'findAll',
  'existsById',
  'count',
  'getById',
];

const LITERAL_VALUES = ['null', 'true', 'false', '0', '1'];

// Regras de destaque em ordem de prioridade - CORRIGIDA
const HIGHLIGHT_RULES: readonly HighlightRule[] = [
  { regex: new RegExp(`(${ANNOTATIONS[0]})`, 'g'), className: 'annotation' },
  { regex: new RegExp(`(${BOLD_TEXT[0]})`, 'g'), className: 'bold-word' },
  { regex: new RegExp(`(${FRAMEWORKS_WITH_HYPHENS.join('|')})`, 'gi'), className: 'framework' },
  {
    regex: new RegExp(`\\b(${FRAMEWORKS_WITHOUT_HYPHENS.join('|')})\\b`, 'gi'),
    className: 'framework',
  },
  { regex: new RegExp(`\\b(${CODE_CONCEPTS.join('|')})\\b`, 'gi'), className: 'code-concept' },
  {
    regex: new RegExp(`\\b(${PROGRAMMING_TERMS.join('|')})\\b`, 'gi'),
    className: 'programming-term',
  },
  { regex: new RegExp(`\\b(${CONSTANTS.join('|')})\\b`, 'g'), className: 'constant' },
  {
    regex: new RegExp(`\\b(${TEST_FUNCTION_PATTERNS.join('|')})\\b`, 'g'),
    className: 'function-call',
  },
  {
    regex: new RegExp(`\\b([a-z]+(?:[A-Z][a-zA-Z]*)+)\\b`, 'g'),
    className: 'function-call',
  },
  {
    regex: new RegExp(`\\b(${REPOSITORY_METHOD_PATTERNS.join('|')})\\b`, 'g'),
    className: 'function-call',
  },
  {
    regex: new RegExp(
      `\\b(?:[A-Za-z_]\\w*\\.)?(?:${FUNCTIONS.join('|')})\\b(?:\\s*\\(.*?\\))?`,
      'g'
    ),
    className: 'function-call',
  },
  { regex: new RegExp(`\\b(${LITERAL_VALUES.join('|')})\\b`, 'g'), className: 'literal-value' },
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

const QuickbiteHighlighter: React.FC<HighlightedTextProps> = ({
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

export default QuickbiteHighlighter;
