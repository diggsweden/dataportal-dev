import React from 'react';
import { Start_devportal_Digg_Start_blocks_devportal_Digg_SharedContentContainer_contents } from '../../graphql/__generated__/Start';
import ContentArea from './ContentArea';

export const SharedContent: React.FC<
  Start_devportal_Digg_Start_blocks_devportal_Digg_SharedContentContainer_contents
> = ({ blocks }) => {
  return <ContentArea blocks={blocks || []} />;
};

export default SharedContent;
