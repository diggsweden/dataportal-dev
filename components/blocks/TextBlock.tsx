import { Heading } from '@digg/design-system';
import React from 'react';
import { TextBlock as ITextBlock } from '../../graphql/__generated__/TextBlock';
import { checkLang } from '../../helpers/checkLang';
import { renderMarkdown } from '../Renderers';

export const TextBlock: React.FC<ITextBlock> = ({ heading, text }) => (
  <>
    {heading && <Heading level={2}>{checkLang(heading)}</Heading>}
    {text.markdown && renderMarkdown(text.markdown)}
  </>
);
