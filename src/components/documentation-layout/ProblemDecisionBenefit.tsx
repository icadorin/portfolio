// src/components/documentation/ProblemDecisionBenefit.tsx
import React from 'react';
import '@/styles/quickbite/problem-decision-benefit.css';
import QuickbiteHighlighterSection from '@/components/highlight/quickbite/QuickbiteHighlighterSection';

interface Props {
  problem: string;
  decision: string;
  benefit: string;
  className?: string;
}

export const ProblemDecisionBenefit: React.FC<Props> = ({
  problem,
  decision,
  benefit,
  className = '',
}) => {
  return (
    <div className={'problem-wrapper ' + className}>
      <QuickbiteHighlighterSection className="pdb problem">
        <strong>Problema:</strong> {problem}
      </QuickbiteHighlighterSection>

      <QuickbiteHighlighterSection className="pdb decision">
        <strong>Decisão:</strong> {decision}
      </QuickbiteHighlighterSection>

      <QuickbiteHighlighterSection className="pdb benefit">
        <strong>Benefício:</strong> {benefit}
      </QuickbiteHighlighterSection>
    </div>
  );
};
