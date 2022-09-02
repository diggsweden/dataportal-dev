import { gql } from '@apollo/client';

export const MENU_QUERY = gql`
  query MainMenu($locale: String) {
    devportal_Digg_Menu(locale: $locale) {
      title
      uiHints
      locale
      children {
        ...MenuData
        children {
          ...MenuData
          children {
            ...MenuData
          }
        }
      }
    }
  }

  fragment MenuData on devportal_Digg_IMenu {
    link {
      title
      link
      linktype
      description
    }
    order
  }
`;
