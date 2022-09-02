import { gql } from '@apollo/client';

export const SETTINGS_QUERY = gql`
  query Settings($locale: String) {
    devportal_Digg_Settings(locale: $locale) {
      __typename
      items {
        key
        value
      }
    }
  }
`;
