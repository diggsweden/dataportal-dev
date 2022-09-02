/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GroupBlock
// ====================================================

export interface GroupBlock_body {
  __typename: "devportal_Digg_RichText";
  markdown: string | null;
}

export interface GroupBlock_blocks_devportal_Digg_FaqBlock {
  __typename: "devportal_Digg_FaqBlock" | "devportal_Digg_GroupBlock" | "devportal_Digg_HeroBlock" | "devportal_Digg_MediaBlock" | "devportal_Digg_PuffBlock" | "devportal_Digg_LinksBlock" | "devportal_Digg_SharedContentContainer";
  id: string;
}

export interface GroupBlock_blocks_devportal_Digg_TextBlock_text {
  __typename: "devportal_Digg_RichText";
  markdown: string | null;
}

export interface GroupBlock_blocks_devportal_Digg_TextBlock {
  __typename: "devportal_Digg_TextBlock";
  id: string;
  heading: string | null;
  text: GroupBlock_blocks_devportal_Digg_TextBlock_text;
}

export type GroupBlock_blocks = GroupBlock_blocks_devportal_Digg_FaqBlock | GroupBlock_blocks_devportal_Digg_TextBlock;

export interface GroupBlock {
  __typename: "devportal_Digg_GroupBlock";
  heading: string | null;
  body: GroupBlock_body | null;
  blocks: (GroupBlock_blocks | null)[];
}
