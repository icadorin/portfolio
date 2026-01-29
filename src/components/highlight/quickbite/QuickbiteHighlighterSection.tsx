import React from 'react';
import QuickbiteHighlighter from './QuickbiteHighlighter';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const TEXT_CONTAINERS = new Set([
  'p',
  'div',
  'span',
  'strong',
  'em',
  'li',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
]);

type ElementWithChildren = React.ReactElement<{
  children?: React.ReactNode;
}>;

const QuickbiteHighlighterSection: React.FC<Props> = ({ children, className = '' }) => {
  const processChild = (child: React.ReactNode): React.ReactNode => {
    if (typeof child === 'string') {
      return <QuickbiteHighlighter>{child}</QuickbiteHighlighter>;
    }

    if (!React.isValidElement(child)) {
      return child;
    }
    if (child.type === React.Fragment) {
      const fragment = child as ElementWithChildren;
      return React.Children.map(fragment.props.children, processChild);
    }

    if (child.type === QuickbiteHighlighter) {
      return child;
    }

    if (typeof child.type === 'string' && TEXT_CONTAINERS.has(child.type)) {
      const element = child as ElementWithChildren;

      return React.cloneElement(element, {
        children: React.Children.map(element.props.children, processChild),
      });
    }

    return child;
  };

  return (
    <div className={`quickbite-highlighter-section ${className}`}>
      {React.Children.map(children, processChild)}
    </div>
  );
};

export default QuickbiteHighlighterSection;
