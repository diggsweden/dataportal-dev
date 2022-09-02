/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { devportal_LinkType } from "./globalTypes";

// ====================================================
// GraphQL query operation: MainMenu
// ====================================================

export interface MainMenu_devportal_Digg_Menu_children_link {
  __typename: "devportal_Digg_Link";
  title: string | null;
  link: string;
  linktype: devportal_LinkType;
  description: string | null;
}

export interface MainMenu_devportal_Digg_Menu_children_children_link {
  __typename: "devportal_Digg_Link";
  title: string | null;
  link: string;
  linktype: devportal_LinkType;
  description: string | null;
}

export interface MainMenu_devportal_Digg_Menu_children_children_children_link {
  __typename: "devportal_Digg_Link";
  title: string | null;
  link: string;
  linktype: devportal_LinkType;
  description: string | null;
}

export interface MainMenu_devportal_Digg_Menu_children_children_children {
  __typename: "devportal_Digg_MenuList";
  link: MainMenu_devportal_Digg_Menu_children_children_children_link | null;
  order: number;
}

export interface MainMenu_devportal_Digg_Menu_children_children {
  __typename: "devportal_Digg_MenuList";
  link: MainMenu_devportal_Digg_Menu_children_children_link | null;
  order: number;
  children: (MainMenu_devportal_Digg_Menu_children_children_children | null)[] | null;
}

export interface MainMenu_devportal_Digg_Menu_children {
  __typename: "devportal_Digg_MenuList";
  link: MainMenu_devportal_Digg_Menu_children_link | null;
  order: number;
  children: (MainMenu_devportal_Digg_Menu_children_children | null)[] | null;
}

export interface MainMenu_devportal_Digg_Menu {
  __typename: "devportal_Digg_MenuList";
  title: string | null;
  /**
   * Parameters that effects how the ui should be rendererd
   */
  uiHints: (string | null)[];
  /**
   * two-letter lang
   */
  locale: string;
  children: (MainMenu_devportal_Digg_Menu_children | null)[] | null;
}

export interface MainMenu {
  devportal_Digg_Menu: MainMenu_devportal_Digg_Menu | null;
}

export interface MainMenuVariables {
  locale?: string | null;
}
