import { gql } from '@apollo/client';
import { SEO_FRAGMENT, BLOCK_FRAGMENT, SHARED_CONTENT_FRAGMENT, IMAGE_FRAGMENT } from './fragments';

export const START_QUERY = gql`
  query Start($locale: String) {
    devportal_Digg_Start(locale: $locale) {
      heading
      preamble
      image {
        ...Image
      }
      uiHints
      blocks {
        ...BlockData
        ... on devportal_Digg_SharedContentContainer {
          __typename
          id
          contents {
            ...SharedContentData
          }
        }
      }
      seo {
        ...SeoData
      }
    }
  }
  ${BLOCK_FRAGMENT}
  ${SEO_FRAGMENT}
  ${SHARED_CONTENT_FRAGMENT}
  ${IMAGE_FRAGMENT}
`;
