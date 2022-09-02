import { Heading } from '@digg/design-system';
import React from 'react';
import { LinksBlock as ILinksBlock } from '../../graphql/__generated__/LinksBlock';
import { SharedContentData_blocks } from '../../graphql/__generated__/SharedContentData';
import {
  Start_devportal_Digg_Start_blocks,
  Start_devportal_Digg_Start_blocks_devportal_Digg_FaqBlock as FAQ,
  Start_devportal_Digg_Start_blocks_devportal_Digg_SharedContentContainer,
} from '../../graphql/__generated__/Start';
import { FaqBlock, GroupBlock, LinksBlock, MediaBlock, PuffBlock, TextBlock } from '../blocks';
import SharedContent from './SharedContent';

interface ContentAreaProps {
  blocks: (Start_devportal_Digg_Start_blocks | SharedContentData_blocks | null)[];
}

/**
 * Finds grouped accordions and returns them
 * @param blocks all blocks from the content area
 * @param pos the position of the FAQ
 * @returns FaqBlocks wrapped in <dl> element
 */
const handleFaqs = (
  blocks: (Start_devportal_Digg_Start_blocks | SharedContentData_blocks | null)[],
  pos: number
) => {
  // skip rendering if previous block was FAQ
  // because then in should already be rendered
  const previousBlock = blocks[pos - 1];
  if (previousBlock?.__typename === 'devportal_Digg_FaqBlock') return;

  let i = 0;
  // count the number of FAQs to render from the given position
  while (blocks[pos + i]?.__typename === 'devportal_Digg_FaqBlock' || i > 500) {
    i++;
  }

  // make a copy of the FAQ range to render
  const faqGroup = (blocks as FAQ[]).slice(pos, pos + i);

  return (
    <dl
      className="faqblock"
      key={`content-${pos}-${faqGroup[0].id}`}
    >
      {faqGroup.map((faq) => (
        <FaqBlock
          {...faq}
          key={faq?.id}
        />
      ))}
    </dl>
  );
};

const ContentArea: React.FC<ContentAreaProps> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, index) => {
        const { id } = block || {};
        switch (block?.__typename) {
          case 'devportal_Digg_PuffBlock':
            return (
              <PuffBlock
                {...block}
                key={`content-${index}-${id}`}
              />
            );
          case 'devportal_Digg_TextBlock':
            return (
              <TextBlock
                {...block}
                key={`content-${index}-${id}`}
              />
            );
          case 'devportal_Digg_MediaBlock':
            return (
              <MediaBlock
                {...block}
                key={`content-${index}-${id}`}
              />
            );
          case 'devportal_Digg_FaqBlock':
            const faqs = handleFaqs(blocks, index);
            return faqs;
          case 'devportal_Digg_GroupBlock':
            return (
              <GroupBlock
                {...block}
                key={`content-${index}-${id}`}
              />
            );
          // ? we handle HeroBlock in _app.tsx
          case 'devportal_Digg_HeroBlock':
            return;
          case 'devportal_Digg_LinksBlock':
            return (
              <LinksBlock
                {...(block as ILinksBlock)}
                key={`content-${index}-${id}`}
              />
            );
          case 'devportal_Digg_SharedContentContainer':
            const typedBlock =
              block as Start_devportal_Digg_Start_blocks_devportal_Digg_SharedContentContainer;
            return (
              typedBlock.contents &&
              typedBlock.contents.map((content) => (
                <SharedContent
                  {...content}
                  key={content.identifier}
                />
              ))
            );
          default:
            return (
              <div key={`shared-content-${index}-${id}`}>
                <Heading
                  level={2}
                  lang="en"
                >
                  {block} Not found
                </Heading>
                <pre style={{ overflowX: 'auto' }}>{JSON.stringify(block, null, 2)}</pre>
              </div>
            );
        }
      })}
    </>
  );
};

export default ContentArea;
