/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { devportal_LinkType } from "./globalTypes";

// ====================================================
// GraphQL fragment: SharedContentData
// ====================================================

export interface SharedContentData_blocks_devportal_Digg_SharedContentContainer {
  __typename: "devportal_Digg_SharedContentContainer";
  id: string;
}

export interface SharedContentData_blocks_devportal_Digg_TextBlock_text {
  __typename: "devportal_Digg_RichText";
  markdown: string | null;
}

export interface SharedContentData_blocks_devportal_Digg_TextBlock {
  __typename: "devportal_Digg_TextBlock";
  id: string;
  heading: string | null;
  text: SharedContentData_blocks_devportal_Digg_TextBlock_text;
}

export interface SharedContentData_blocks_devportal_Digg_FaqBlock_answer {
  __typename: "devportal_Digg_RichText";
  markdown: string | null;
}

export interface SharedContentData_blocks_devportal_Digg_FaqBlock {
  __typename: "devportal_Digg_FaqBlock";
  id: string;
  question: string;
  answer: SharedContentData_blocks_devportal_Digg_FaqBlock_answer;
}

export interface SharedContentData_blocks_devportal_Digg_MediaBlock_media_devportal_Digg_Image {
  __typename: "devportal_Digg_Image";
  url: string;
  alt: string | null;
  name: string | null;
  description: string | null;
  mime: string;
  ext: string;
  width: number | null;
  height: number | null;
}

export interface SharedContentData_blocks_devportal_Digg_MediaBlock_media_devportal_Digg_Video {
  __typename: "devportal_Digg_Video";
  url: string;
  alt: string | null;
  name: string | null;
  description: string | null;
  mime: string;
  ext: string;
}

export interface SharedContentData_blocks_devportal_Digg_MediaBlock_media_devportal_Digg_File {
  __typename: "devportal_Digg_File";
  url: string;
  alt: string | null;
  name: string | null;
  description: string | null;
  mime: string;
  ext: string;
}

export type SharedContentData_blocks_devportal_Digg_MediaBlock_media = SharedContentData_blocks_devportal_Digg_MediaBlock_media_devportal_Digg_Image | SharedContentData_blocks_devportal_Digg_MediaBlock_media_devportal_Digg_Video | SharedContentData_blocks_devportal_Digg_MediaBlock_media_devportal_Digg_File;

export interface SharedContentData_blocks_devportal_Digg_MediaBlock {
  __typename: "devportal_Digg_MediaBlock";
  id: string;
  heading: string | null;
  description: string | null;
  media: SharedContentData_blocks_devportal_Digg_MediaBlock_media;
}

export interface SharedContentData_blocks_devportal_Digg_GroupBlock_body {
  __typename: "devportal_Digg_RichText";
  markdown: string | null;
}

export interface SharedContentData_blocks_devportal_Digg_GroupBlock_blocks_devportal_Digg_FaqBlock {
  __typename: "devportal_Digg_FaqBlock" | "devportal_Digg_GroupBlock" | "devportal_Digg_HeroBlock" | "devportal_Digg_MediaBlock" | "devportal_Digg_PuffBlock" | "devportal_Digg_LinksBlock" | "devportal_Digg_SharedContentContainer";
  id: string;
}

export interface SharedContentData_blocks_devportal_Digg_GroupBlock_blocks_devportal_Digg_TextBlock_text {
  __typename: "devportal_Digg_RichText";
  markdown: string | null;
}

export interface SharedContentData_blocks_devportal_Digg_GroupBlock_blocks_devportal_Digg_TextBlock {
  __typename: "devportal_Digg_TextBlock";
  id: string;
  heading: string | null;
  text: SharedContentData_blocks_devportal_Digg_GroupBlock_blocks_devportal_Digg_TextBlock_text;
}

export type SharedContentData_blocks_devportal_Digg_GroupBlock_blocks = SharedContentData_blocks_devportal_Digg_GroupBlock_blocks_devportal_Digg_FaqBlock | SharedContentData_blocks_devportal_Digg_GroupBlock_blocks_devportal_Digg_TextBlock;

export interface SharedContentData_blocks_devportal_Digg_GroupBlock {
  __typename: "devportal_Digg_GroupBlock";
  id: string;
  heading: string | null;
  body: SharedContentData_blocks_devportal_Digg_GroupBlock_body | null;
  blocks: (SharedContentData_blocks_devportal_Digg_GroupBlock_blocks | null)[];
}

export interface SharedContentData_blocks_devportal_Digg_HeroBlock_heroText {
  __typename: "devportal_Digg_RichText";
  markdown: string | null;
}

export interface SharedContentData_blocks_devportal_Digg_HeroBlock_media_devportal_Digg_Image {
  __typename: "devportal_Digg_Image";
  url: string;
  alt: string | null;
  name: string | null;
  description: string | null;
  mime: string;
  ext: string;
  width: number | null;
  height: number | null;
}

export interface SharedContentData_blocks_devportal_Digg_HeroBlock_media_devportal_Digg_Video {
  __typename: "devportal_Digg_Video";
  url: string;
  alt: string | null;
  name: string | null;
  description: string | null;
  mime: string;
  ext: string;
}

export interface SharedContentData_blocks_devportal_Digg_HeroBlock_media_devportal_Digg_File {
  __typename: "devportal_Digg_File";
  url: string;
  alt: string | null;
  name: string | null;
  description: string | null;
  mime: string;
  ext: string;
}

export type SharedContentData_blocks_devportal_Digg_HeroBlock_media = SharedContentData_blocks_devportal_Digg_HeroBlock_media_devportal_Digg_Image | SharedContentData_blocks_devportal_Digg_HeroBlock_media_devportal_Digg_Video | SharedContentData_blocks_devportal_Digg_HeroBlock_media_devportal_Digg_File;

export interface SharedContentData_blocks_devportal_Digg_HeroBlock {
  __typename: "devportal_Digg_HeroBlock";
  id: string;
  heading: string | null;
  heroText: SharedContentData_blocks_devportal_Digg_HeroBlock_heroText | null;
  media: SharedContentData_blocks_devportal_Digg_HeroBlock_media;
  /**
   * Parameters that effects how the ui should be rendererd
   */
  uiHints: (string | null)[];
}

export interface SharedContentData_blocks_devportal_Digg_PuffBlock_puffs_link {
  __typename: "devportal_Digg_Link";
  title: string | null;
  link: string;
  linktype: devportal_LinkType;
  description: string | null;
}

export interface SharedContentData_blocks_devportal_Digg_PuffBlock_puffs_container_image {
  __typename: "devportal_Digg_Image";
  url: string;
  alt: string | null;
  name: string | null;
  description: string | null;
  mime: string;
  ext: string;
  width: number | null;
  height: number | null;
}

export interface SharedContentData_blocks_devportal_Digg_PuffBlock_puffs_container {
  __typename: "devportal_Digg_ContainerMeta";
  id: string;
  /**
   * two-letter lang
   */
  locale: string;
  updatedAt: any;
  createdAt: any;
  slug: string;
  title: string;
  description: string;
  image: SharedContentData_blocks_devportal_Digg_PuffBlock_puffs_container_image | null;
}

export interface SharedContentData_blocks_devportal_Digg_PuffBlock_puffs {
  __typename: "devportal_Digg_Puff";
  heading: string | null;
  description: string | null;
  link: SharedContentData_blocks_devportal_Digg_PuffBlock_puffs_link | null;
  theme: string | null;
  type: string;
  buttonText: string | null;
  container: SharedContentData_blocks_devportal_Digg_PuffBlock_puffs_container | null;
}

export interface SharedContentData_blocks_devportal_Digg_PuffBlock {
  __typename: "devportal_Digg_PuffBlock";
  id: string;
  heading: string | null;
  description: string | null;
  puffs: SharedContentData_blocks_devportal_Digg_PuffBlock_puffs[] | null;
}

export interface SharedContentData_blocks_devportal_Digg_LinksBlock_links {
  __typename: "devportal_Digg_Link";
  title: string | null;
  link: string;
  linktype: devportal_LinkType;
  description: string | null;
}

export interface SharedContentData_blocks_devportal_Digg_LinksBlock {
  __typename: "devportal_Digg_LinksBlock";
  id: string;
  links: SharedContentData_blocks_devportal_Digg_LinksBlock_links[] | null;
}

export type SharedContentData_blocks = SharedContentData_blocks_devportal_Digg_SharedContentContainer | SharedContentData_blocks_devportal_Digg_TextBlock | SharedContentData_blocks_devportal_Digg_FaqBlock | SharedContentData_blocks_devportal_Digg_MediaBlock | SharedContentData_blocks_devportal_Digg_GroupBlock | SharedContentData_blocks_devportal_Digg_HeroBlock | SharedContentData_blocks_devportal_Digg_PuffBlock | SharedContentData_blocks_devportal_Digg_LinksBlock;

export interface SharedContentData {
  __typename: "devportal_Digg_SharedContent";
  identifier: string;
  blocks: SharedContentData_blocks[] | null;
}
