import React from 'react';
import QuickbiteHighlighter from './QuickbiteHighlighter';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const QuickbiteHighlighterSection: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (child === null || child === undefined || typeof child === 'boolean') {
          return null;
        }

        if (typeof child === 'string' || typeof child === 'number') {
          const text = String(child).trim();
          if (!text) return null;

          return <QuickbiteHighlighter asParagraph>{text}</QuickbiteHighlighter>;
        }

        if (React.isValidElement(child) && child.type === React.Fragment) {
          const fragment = child as React.ReactElement<{ children?: React.ReactNode }>;

          return (
            <QuickbiteHighlighterSection>{fragment.props.children}</QuickbiteHighlighterSection>
          );
        }

        return child;
      })}
    </div>
  );
};

export default QuickbiteHighlighterSection;
