/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { devportal_LinkType } from "./globalTypes";

// ====================================================
// GraphQL fragment: MenuData
// ====================================================

export interface MenuData_link {
  __typename: "devportal_Digg_Link";
  title: string | null;
  link: string;
  linktype: devportal_LinkType;
  description: string | null;
}

export interface MenuData {
  __typename: "devportal_Digg_MenuList";
  link: MenuData_link | null;
  order: number;
}
