/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { devportal_LinkType } from "./globalTypes";

// ====================================================
// GraphQL fragment: LinksBlock
// ====================================================

export interface LinksBlock_links {
  __typename: "devportal_Digg_Link";
  title: string | null;
  link: string;
  linktype: devportal_LinkType;
  description: string | null;
}

export interface LinksBlock {
  __typename: "devportal_Digg_LinksBlock";
  links: LinksBlock_links[] | null;
}
