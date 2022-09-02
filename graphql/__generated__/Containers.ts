/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { devportal_QueryContainerArgs, devportal_LinkType } from "./globalTypes";

// ====================================================
// GraphQL query operation: Containers
// ====================================================

export interface Containers_devportal_Digg_Containers_breadcrumb_link {
  __typename: "devportal_Digg_Link";
  link: string;
  linktype: devportal_LinkType;
}

export interface Containers_devportal_Digg_Containers_breadcrumb {
  __typename: "devportal_Digg_Breadrumb";
  name: string;
  link: Containers_devportal_Digg_Containers_breadcrumb_link;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_TextBlock_text {
  __typename: "devportal_Digg_RichText";
  markdown: string | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_TextBlock {
  __typename: "devportal_Digg_TextBlock";
  id: string;
  heading: string | null;
  text: Containers_devportal_Digg_Containers_blocks_devportal_Digg_TextBlock_text;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_FaqBlock_answer {
  __typename: "devportal_Digg_RichText";
  markdown: string | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_FaqBlock {
  __typename: "devportal_Digg_FaqBlock";
  id: string;
  question: string;
  answer: Containers_devportal_Digg_Containers_blocks_devportal_Digg_FaqBlock_answer;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_MediaBlock_media_devportal_Digg_Image {
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

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_MediaBlock_media_devportal_Digg_Video {
  __typename: "devportal_Digg_Video";
  url: string;
  alt: string | null;
  name: string | null;
  description: string | null;
  mime: string;
  ext: string;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_MediaBlock_media_devportal_Digg_File {
  __typename: "devportal_Digg_File";
  url: string;
  alt: string | null;
  name: string | null;
  description: string | null;
  mime: string;
  ext: string;
}

export type Containers_devportal_Digg_Containers_blocks_devportal_Digg_MediaBlock_media = Containers_devportal_Digg_Containers_blocks_devportal_Digg_MediaBlock_media_devportal_Digg_Image | Containers_devportal_Digg_Containers_blocks_devportal_Digg_MediaBlock_media_devportal_Digg_Video | Containers_devportal_Digg_Containers_blocks_devportal_Digg_MediaBlock_media_devportal_Digg_File;

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_MediaBlock {
  __typename: "devportal_Digg_MediaBlock";
  id: string;
  heading: string | null;
  description: string | null;
  media: Containers_devportal_Digg_Containers_blocks_devportal_Digg_MediaBlock_media;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_GroupBlock_body {
  __typename: "devportal_Digg_RichText";
  markdown: string | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_GroupBlock_blocks_devportal_Digg_FaqBlock {
  __typename: "devportal_Digg_FaqBlock" | "devportal_Digg_GroupBlock" | "devportal_Digg_HeroBlock" | "devportal_Digg_MediaBlock" | "devportal_Digg_PuffBlock" | "devportal_Digg_LinksBlock" | "devportal_Digg_SharedContentContainer";
  id: string;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_GroupBlock_blocks_devportal_Digg_TextBlock_text {
  __typename: "devportal_Digg_RichText";
  markdown: string | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_GroupBlock_blocks_devportal_Digg_TextBlock {
  __typename: "devportal_Digg_TextBlock";
  id: string;
  heading: string | null;
  text: Containers_devportal_Digg_Containers_blocks_devportal_Digg_GroupBlock_blocks_devportal_Digg_TextBlock_text;
}

export type Containers_devportal_Digg_Containers_blocks_devportal_Digg_GroupBlock_blocks = Containers_devportal_Digg_Containers_blocks_devportal_Digg_GroupBlock_blocks_devportal_Digg_FaqBlock | Containers_devportal_Digg_Containers_blocks_devportal_Digg_GroupBlock_blocks_devportal_Digg_TextBlock;

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_GroupBlock {
  __typename: "devportal_Digg_GroupBlock";
  id: string;
  heading: string | null;
  body: Containers_devportal_Digg_Containers_blocks_devportal_Digg_GroupBlock_body | null;
  blocks: (Containers_devportal_Digg_Containers_blocks_devportal_Digg_GroupBlock_blocks | null)[];
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_HeroBlock_heroText {
  __typename: "devportal_Digg_RichText";
  markdown: string | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_HeroBlock_media_devportal_Digg_Image {
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

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_HeroBlock_media_devportal_Digg_Video {
  __typename: "devportal_Digg_Video";
  url: string;
  alt: string | null;
  name: string | null;
  description: string | null;
  mime: string;
  ext: string;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_HeroBlock_media_devportal_Digg_File {
  __typename: "devportal_Digg_File";
  url: string;
  alt: string | null;
  name: string | null;
  description: string | null;
  mime: string;
  ext: string;
}

export type Containers_devportal_Digg_Containers_blocks_devportal_Digg_HeroBlock_media = Containers_devportal_Digg_Containers_blocks_devportal_Digg_HeroBlock_media_devportal_Digg_Image | Containers_devportal_Digg_Containers_blocks_devportal_Digg_HeroBlock_media_devportal_Digg_Video | Containers_devportal_Digg_Containers_blocks_devportal_Digg_HeroBlock_media_devportal_Digg_File;

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_HeroBlock {
  __typename: "devportal_Digg_HeroBlock";
  id: string;
  heading: string | null;
  heroText: Containers_devportal_Digg_Containers_blocks_devportal_Digg_HeroBlock_heroText | null;
  media: Containers_devportal_Digg_Containers_blocks_devportal_Digg_HeroBlock_media;
  /**
   * Parameters that effects how the ui should be rendererd
   */
  uiHints: (string | null)[];
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_PuffBlock_puffs_link {
  __typename: "devportal_Digg_Link";
  title: string | null;
  link: string;
  linktype: devportal_LinkType;
  description: string | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_PuffBlock_puffs_container_image {
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

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_PuffBlock_puffs_container {
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
  image: Containers_devportal_Digg_Containers_blocks_devportal_Digg_PuffBlock_puffs_container_image | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_PuffBlock_puffs {
  __typename: "devportal_Digg_Puff";
  heading: string | null;
  description: string | null;
  link: Containers_devportal_Digg_Containers_blocks_devportal_Digg_PuffBlock_puffs_link | null;
  theme: string | null;
  type: string;
  buttonText: string | null;
  container: Containers_devportal_Digg_Containers_blocks_devportal_Digg_PuffBlock_puffs_container | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_PuffBlock {
  __typename: "devportal_Digg_PuffBlock";
  id: string;
  heading: string | null;
  description: string | null;
  puffs: Containers_devportal_Digg_Containers_blocks_devportal_Digg_PuffBlock_puffs[] | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_LinksBlock_links {
  __typename: "devportal_Digg_Link";
  title: string | null;
  link: string;
  linktype: devportal_LinkType;
  description: string | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_LinksBlock {
  __typename: "devportal_Digg_LinksBlock";
  id: string;
  links: Containers_devportal_Digg_Containers_blocks_devportal_Digg_LinksBlock_links[] | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_SharedContentContainer {
  __typename: "devportal_Digg_SharedContentContainer";
  id: string;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_TextBlock_text {
  __typename: "devportal_Digg_RichText";
  markdown: string | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_TextBlock {
  __typename: "devportal_Digg_TextBlock";
  id: string;
  heading: string | null;
  text: Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_TextBlock_text;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_FaqBlock_answer {
  __typename: "devportal_Digg_RichText";
  markdown: string | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_FaqBlock {
  __typename: "devportal_Digg_FaqBlock";
  id: string;
  question: string;
  answer: Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_FaqBlock_answer;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_MediaBlock_media_devportal_Digg_Image {
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

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_MediaBlock_media_devportal_Digg_Video {
  __typename: "devportal_Digg_Video";
  url: string;
  alt: string | null;
  name: string | null;
  description: string | null;
  mime: string;
  ext: string;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_MediaBlock_media_devportal_Digg_File {
  __typename: "devportal_Digg_File";
  url: string;
  alt: string | null;
  name: string | null;
  description: string | null;
  mime: string;
  ext: string;
}

export type Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_MediaBlock_media = Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_MediaBlock_media_devportal_Digg_Image | Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_MediaBlock_media_devportal_Digg_Video | Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_MediaBlock_media_devportal_Digg_File;

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_MediaBlock {
  __typename: "devportal_Digg_MediaBlock";
  id: string;
  heading: string | null;
  description: string | null;
  media: Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_MediaBlock_media;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_GroupBlock_body {
  __typename: "devportal_Digg_RichText";
  markdown: string | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_GroupBlock_blocks_devportal_Digg_FaqBlock {
  __typename: "devportal_Digg_FaqBlock" | "devportal_Digg_GroupBlock" | "devportal_Digg_HeroBlock" | "devportal_Digg_MediaBlock" | "devportal_Digg_PuffBlock" | "devportal_Digg_LinksBlock" | "devportal_Digg_SharedContentContainer";
  id: string;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_GroupBlock_blocks_devportal_Digg_TextBlock_text {
  __typename: "devportal_Digg_RichText";
  markdown: string | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_GroupBlock_blocks_devportal_Digg_TextBlock {
  __typename: "devportal_Digg_TextBlock";
  id: string;
  heading: string | null;
  text: Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_GroupBlock_blocks_devportal_Digg_TextBlock_text;
}

export type Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_GroupBlock_blocks = Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_GroupBlock_blocks_devportal_Digg_FaqBlock | Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_GroupBlock_blocks_devportal_Digg_TextBlock;

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_GroupBlock {
  __typename: "devportal_Digg_GroupBlock";
  id: string;
  heading: string | null;
  body: Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_GroupBlock_body | null;
  blocks: (Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_GroupBlock_blocks | null)[];
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_HeroBlock_heroText {
  __typename: "devportal_Digg_RichText";
  markdown: string | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_HeroBlock_media_devportal_Digg_Image {
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

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_HeroBlock_media_devportal_Digg_Video {
  __typename: "devportal_Digg_Video";
  url: string;
  alt: string | null;
  name: string | null;
  description: string | null;
  mime: string;
  ext: string;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_HeroBlock_media_devportal_Digg_File {
  __typename: "devportal_Digg_File";
  url: string;
  alt: string | null;
  name: string | null;
  description: string | null;
  mime: string;
  ext: string;
}

export type Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_HeroBlock_media = Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_HeroBlock_media_devportal_Digg_Image | Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_HeroBlock_media_devportal_Digg_Video | Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_HeroBlock_media_devportal_Digg_File;

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_HeroBlock {
  __typename: "devportal_Digg_HeroBlock";
  id: string;
  heading: string | null;
  heroText: Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_HeroBlock_heroText | null;
  media: Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_HeroBlock_media;
  /**
   * Parameters that effects how the ui should be rendererd
   */
  uiHints: (string | null)[];
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_PuffBlock_puffs_link {
  __typename: "devportal_Digg_Link";
  title: string | null;
  link: string;
  linktype: devportal_LinkType;
  description: string | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_PuffBlock_puffs_container_image {
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

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_PuffBlock_puffs_container {
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
  image: Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_PuffBlock_puffs_container_image | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_PuffBlock_puffs {
  __typename: "devportal_Digg_Puff";
  heading: string | null;
  description: string | null;
  link: Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_PuffBlock_puffs_link | null;
  theme: string | null;
  type: string;
  buttonText: string | null;
  container: Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_PuffBlock_puffs_container | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_PuffBlock {
  __typename: "devportal_Digg_PuffBlock";
  id: string;
  heading: string | null;
  description: string | null;
  puffs: Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_PuffBlock_puffs[] | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_LinksBlock_links {
  __typename: "devportal_Digg_Link";
  title: string | null;
  link: string;
  linktype: devportal_LinkType;
  description: string | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_LinksBlock {
  __typename: "devportal_Digg_LinksBlock";
  id: string;
  links: Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_LinksBlock_links[] | null;
}

export type Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks = Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_SharedContentContainer | Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_TextBlock | Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_FaqBlock | Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_MediaBlock | Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_GroupBlock | Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_HeroBlock | Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_PuffBlock | Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks_devportal_Digg_LinksBlock;

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents {
  __typename: "devportal_Digg_SharedContent";
  identifier: string;
  blocks: Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents_blocks[] | null;
}

export interface Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer {
  __typename: "devportal_Digg_SharedContentContainer";
  id: string;
  contents: Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer_contents[] | null;
}

export type Containers_devportal_Digg_Containers_blocks = Containers_devportal_Digg_Containers_blocks_devportal_Digg_TextBlock | Containers_devportal_Digg_Containers_blocks_devportal_Digg_FaqBlock | Containers_devportal_Digg_Containers_blocks_devportal_Digg_MediaBlock | Containers_devportal_Digg_Containers_blocks_devportal_Digg_GroupBlock | Containers_devportal_Digg_Containers_blocks_devportal_Digg_HeroBlock | Containers_devportal_Digg_Containers_blocks_devportal_Digg_PuffBlock | Containers_devportal_Digg_Containers_blocks_devportal_Digg_LinksBlock | Containers_devportal_Digg_Containers_blocks_devportal_Digg_SharedContentContainer;

export interface Containers_devportal_Digg_Containers_seo_image {
  __typename: "devportal_Digg_Image";
  url: string;
  alt: string | null;
  name: string | null;
  description: string | null;
  mime: string;
  ext: string;
}

export interface Containers_devportal_Digg_Containers_seo {
  __typename: "devportal_Digg_SEO";
  title: string | null;
  description: string | null;
  image: Containers_devportal_Digg_Containers_seo_image | null;
  /**
   * Allow robots to crawl this content
   */
  robotsFollow: boolean | null;
  /**
   * Allow robots to index this content
   */
  robotsIndex: boolean | null;
  lang: string | null;
}

export interface Containers_devportal_Digg_Containers {
  __typename: "devportal_Digg_Container";
  name: string;
  updatedAt: any;
  /**
   * two-letter lang
   */
  locale: string;
  heading: string | null;
  preamble: string | null;
  slug: string;
  order: number;
  /**
   * Parameters that effects how the ui should be rendererd
   */
  uiHints: (string | null)[];
  breadcrumb: (Containers_devportal_Digg_Containers_breadcrumb | null)[];
  blocks: (Containers_devportal_Digg_Containers_blocks | null)[];
  seo: Containers_devportal_Digg_Containers_seo | null;
}

export interface Containers {
  devportal_Digg_Containers: (Containers_devportal_Digg_Containers | null)[];
}

export interface ContainersVariables {
  filter?: devportal_QueryContainerArgs | null;
}
