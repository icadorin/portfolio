import React from 'react';
import '@styles-quickbite/java-highlighter.css';

interface JavaHighlighterProps {
  code: string;
  className?: string;
  showLineNumbers?: boolean;
}

const JavaHighlighter: React.FC<JavaHighlighterProps> = ({
  code,
  className = '',
  showLineNumbers = true,
}) => {
  const highlightJavaCode = (javaCode: string) => {
    const keywords = [
      'public',
      'private',
      'protected',
      'class',
      'interface',
      'extends',
      'implements',
      'static',
      'final',
      'void',
      'return',
      'new',
      'if',
      'else',
      'for',
      'while',
      'do',
      'switch',
      'case',
      'default',
      'break',
      'continue',
      'this',
      'super',
      'import',
      'package',
      'try',
      'catch',
      'finally',
      'throw',
      'throws',
      'true',
      'false',
    ];

    const types = [
      'int',
      'double',
      'float',
      'Long',
      'short',
      'byte',
      'char',
      'boolean',
      'String',
      'List',
      'ArrayList',
      'Map',
      'HashMap',
      'Set',
      'HashSet',
    ];

    const constants = [
      'LAZY',
      'EAGER',
      'IDENTITY',
      'SEQUENCE',
      'TABLE',
      'AUTO',
      'NONE',
      'ALL',
      'PERSIST',
      'MERGE',
      'REMOVE',
      'REFRESH',
      'DETACH',
      'ACTIVE',
    ];

    const combinedRegex = new RegExp(
      [
        // Comentários
        '(?<comment>//[^\\n]*|/\\*[\\s\\S]*?\\*/)',
        // Anotações (@Algo)
        '(?<annotation>@\\w+)',
        // Strings "..."
        '(?<string>"([^"\\\\]|\\\\.)*")',
        // Constantes/Enums (FetchType.LAZY, GenerationType.IDENTITY)
        `\\b(?<constant>${constants.join('|')})\\b`,
        // Palavras-chave
        `\\b(?<keyword>${keywords.join('|')})\\b`,
        // Tipos
        `\\b(?<type>${types.join('|')})\\b`,
        // Captura generics <Category>, <Map<String, List<Product>>>
        '(?<customType>\\b[A-Z]\\w*(?:\\s*<[^>]+>)?)\\b',
        // Números
        '\\b(?<number>\\d+)\\b',
        // Métodos
        '(?<method>\\w+)\\s*\\(',
      ].join('|'),
      'g'
    );

    const classMap: Record<string, string> = {
      comment: 'java-comment',
      annotation: 'java-annotation',
      string: 'java-string',
      keyword: 'java-keyword',
      type: 'java-type',
      number: 'java-number',
      method: 'java-method',
      constant: 'java-constant',
      customType: 'java-type',
    };

    return javaCode.replace(combinedRegex, (match, ...args) => {
      const groups = args[args.length - 1] as Record<string, string | undefined>;

      for (const key in classMap) {
        const value = groups[key];
        if (value) {
          const extra = key === 'method' ? '(' : '';
          return `<span class="${classMap[key]}">${value}</span>${extra}`;
        }
      }

      return match;
    });
  };

  const formattedCode = highlightJavaCode(code);
  const lines = code.split('\n');

  return (
    <div className={`java-code-container ${className}`}>
      <pre className="java-code-block">
        <code className="java-code">
          {showLineNumbers ? (
            <div className="java-code-with-lines">
              {lines.map((line, index) => (
                <div key={index} className="java-line">
                  <span className="java-line-number">{index + 1}</span>
                  <span
                    className="java-line-content"
                    dangerouslySetInnerHTML={{
                      __html: highlightJavaCode(line),
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: formattedCode }} />
          )}
        </code>
      </pre>
    </div>
  );
};

export default JavaHighlighter;
