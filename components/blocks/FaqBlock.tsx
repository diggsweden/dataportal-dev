import { Accordion, css, fontSize, fontWeight, space } from '@digg/design-system';
import React from 'react';
import { FaqBlock as IFaqBlock } from '../../graphql/__generated__/FaqBlock';
import { renderMarkdown } from '../Renderers';
import { checkLang } from '../../helpers/checkLang';

export const FaqBlock: React.FC<IFaqBlock> = ({ question, answer }) => {
  return (
    <Accordion
      title={checkLang(question)}
      className="devportal--accordion"
    >
      <div
        css={css`
          ${fontWeight('normal')};
          ${fontSize(['base', 'md'])};
          ${space({ pb: 2 })}
        `}
      >
        {renderMarkdown(answer?.markdown || '')}
      </div>
    </Accordion>
  );
};
