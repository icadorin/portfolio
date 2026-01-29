import React from 'react';

interface HighlightedTextProps {
  text?: string;
  children?: React.ReactNode;
  asParagraph?: boolean;
  className?: string;
}

interface HighlightRule {
  regex: RegExp;
  className: string;
}

const ANNOTATIONS = ['@\\w+(?:\\.\\w+)*'];
const BOLD_TEXT = ['\\*\\*(.*?)\\*\\*'];
const FRAMEWORKS_WITH_HYPHENS = ['spring-boot-starter-test', 'spring-boot-starter-web'];
const FRAMEWORKS_WITHOUT_HYPHENS = [
  'JPA',
  'Hibernate',
  'Spring',
  'Spring-boot',
  'Spring Data',
  'Spring Test',
  'Lombok',
  'JUnit 5',
  'Junit',
  'Mockito',
  'Spring Security',
  'Docker',
  'PostgreSQL',
  'SQL',
];

const CODE_CONCEPTS = [
  'getters',
  'setters',
  'boilerplate',
  'entity',
  'repository',
  'Tomcat',
  'Jackson',
  'pom.xml',
  'JpaRepository',
  'JWT',
  'DTOs',
  'DTO',
  'JSON',
  'JSONB',
  'JPQL',
  'HTTP',
  'API',
  'APIs',
  'REST',
];

const DATA_STRUCTURES = ['List', 'Map'];

const PROGRAMMING_TERMS = [
  'builder',
  'builders',
  'cascade',
  'orphanRemoval',
  'mappedBy',
  'order',
  'timestamps',
  'LocalDateTime',
  'mock',
  'mocks',
  'revoked',
  'Create',
  'Read',
  'Update',
  'Delete',
  'endpoints',
  'Matchers.anyOf',
  'ObjectMapper ',
  'CRUD',
  'stateless',
  'REST',
  'MVC',
];

const CONSTANTS = ['[A-Z]+(?:_[A-Z]+)+'];

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

const HIGHLIGHT_RULES: readonly HighlightRule[] = [
  { regex: new RegExp(`(${ANNOTATIONS[0]})`, 'g'), className: 'annotation' },
  { regex: new RegExp(`(${BOLD_TEXT[0]})`, 'g'), className: 'bold-word' },
  {
    regex: new RegExp(`(${FRAMEWORKS_WITH_HYPHENS.join('|')})`, 'gi'),
    className: 'framework-hyphens',
  },
  {
    regex: new RegExp(`\\b(${FRAMEWORKS_WITHOUT_HYPHENS.join('|')})\\b`, 'gi'),
    className: 'framework',
  },
  { regex: new RegExp(`\\b(${CODE_CONCEPTS.join('|')})\\b`, 'gi'), className: 'code-concept' },
  {
    regex: new RegExp(`\\b(${DATA_STRUCTURES.join('|')})\\b`, 'g'),
    className: 'data-structure',
  },
  {
    regex: new RegExp(`\\b(${PROGRAMMING_TERMS.join('|')})\\b`, 'g'),
    className: 'programming-term',
  },
  { regex: new RegExp(`\\b(${CONSTANTS.join('|')})\\b`, 'g'), className: 'constant' },
  { regex: /\b(\w+(?:\.\w+)*)(\([^)]*\))/g, className: 'function-call' },
  { regex: new RegExp(`\\b(${LITERAL_VALUES.join('|')})\\b`, 'g'), className: 'literal-value' },
] as const;

const extractText = (node: React.ReactNode): string => {
  if (typeof node === 'string') return node;

  if (Array.isArray(node)) {
    return node.map(extractText).join('');
  }

  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return extractText(node.props.children);
  }

  return '';
};

const highlightText = (
  text: string,
  rules: readonly HighlightRule[]
): (string | React.ReactNode)[] => {
  return rules.reduce<(string | React.ReactNode)[]>(
    (parts, { regex, className }) =>
      parts.flatMap((part) => {
        if (typeof part !== 'string') return part;

        const result: (string | React.ReactNode)[] = [];
        let lastIndex = 0;
        const freshRegex = new RegExp(regex.source, regex.flags);
        let match: RegExpExecArray | null;

        while ((match = freshRegex.exec(part)) !== null) {
          if (match.index > lastIndex) {
            result.push(part.slice(lastIndex, match.index));
          }

          if (className === 'function-call' && match[1] && match[2]) {
            result.push(
              <span key={`fn-name-${match.index}`} className="function-name">
                {match[1]}
              </span>
            );
            result.push(
              <span key={`fn-args-${match.index}`} className="function-args">
                {match[2]}
              </span>
            );
          } else {
            const content = match[1] || match[0];
            result.push(
              <span key={`${className}-${match.index}`} className={className}>
                {content}
              </span>
            );
          }

          lastIndex = freshRegex.lastIndex;
        }

        if (lastIndex < part.length) {
          result.push(part.slice(lastIndex));
        }

        return result;
      }),
    [text]
  );
};

const QuickbiteHighlighter: React.FC<HighlightedTextProps> = ({
  text,
  children,
  asParagraph = false,
  className,
}) => {
  const rawText = text ?? extractText(children);
  if (!rawText) return null;

  const highlightedContent = highlightText(rawText, HIGHLIGHT_RULES);

  if (asParagraph) {
    return <p className={`highlighted-paragraph ${className ?? ''}`}>{highlightedContent}</p>;
  }

  return <>{highlightedContent}</>;
};

export default QuickbiteHighlighter;
