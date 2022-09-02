import { gql } from '@apollo/client';

/* #region interfaces, unions and types */

// Interface
export const MEDIA_FRAGMENT = gql`
  fragment Media on devportal_Digg_IMedia {
    __typename
    url
    alt
    name
    description
    mime
    ext
  }
`;

// Type
export const IMAGE_FRAGMENT = gql`
  fragment Image on devportal_Digg_Image {
    ...Media
    width
    height
  }
`;

export const CONTAINER_META_FRAGMENT = gql`
  fragment ContainerMetaData on devportal_Digg_ContainerMeta {
    id
    locale
    updatedAt
    createdAt
    slug
    title
    description
    image {
      ...Image
    }
  }
`;

// Union
export const MEDIA_TYPE_FRAGMENT = gql`
  fragment MediaType on devportal_Digg_MediaType {
    ... on devportal_Digg_Image {
      ...Image
    }

    ... on devportal_Digg_Video {
      ...Media
    }

    ... on devportal_Digg_File {
      ...Media
    }
  }
`;
/* #endregion */

/* #region Components */
export const LINK_FRAGMENT = gql`
  fragment Link on devportal_Digg_Link {
    title
    link
    linktype
    description
  }
`;
/* #endregion */

/* #region Blocks */

export const FAQ_BLOCK_FRAGMENT = gql`
  fragment FaqBlock on devportal_Digg_IFaqBlock {
    question
    answer {
      markdown
    }
  }
`;

export const MEDIA_BLOCK_FRAGMENT = gql`
  fragment MediaBlock on devportal_Digg_IMediaBlock {
    heading
    description
    media {
      ...MediaType
    }
  }
`;

export const GROUP_BLOCK_FRAGMENT = gql`
  fragment GroupBlock on devportal_Digg_IGroupBlock {
    heading
    body {
      markdown
    }
    blocks {
      id
      ...TextBlock
    }
  }
`;

export const HERO_BLOCK_FRAGMENT = gql`
  fragment HeroBlock on devportal_Digg_IHeroBlock {
    heading
    heroText: text {
      markdown
    }
    media {
      ...MediaType
    }
    uiHints
  }
`;

export const TEXT_BLOCK_FRAGMENT = gql`
  fragment TextBlock on devportal_Digg_ITextBlock {
    heading
    text: body {
      markdown
    }
  }
`;

export const PUFF_BLOCK_FRAGMENT = gql`
  fragment PuffBlock on devportal_Digg_IPuffBlock {
    heading
    description
    puffs {
      heading
      description
      link {
        ...Link
      }
      theme
      type
      buttonText
      container {
        ...ContainerMetaData
      }
    }
  }
`;

export const LINKS_BLOCK_FRAGMENT = gql`
  fragment LinksBlock on devportal_Digg_ILinksBlock {
    links {
      title
      link
      linktype
      description
    }
  }
`;

export const SHARED_CONTENT_FRAGMENT = gql`
  fragment SharedContentData on devportal_Digg_SharedContent {
    identifier
    blocks {
      ...BlockData
    }
  }
`;
/* #endregion */

/* #region Collections */
export const SEO_FRAGMENT = gql`
  fragment SeoData on devportal_Digg_SEO {
    title
    description
    image {
      ...Media
    }
    robotsFollow
    robotsIndex
    lang
  }
`;
/* #endregion */

export const BLOCK_FRAGMENT = gql`
  fragment BlockData on devportal_Digg_IBlock {
    __typename
    id

    ... on devportal_Digg_TextBlock {
      ...TextBlock
    }

    ... on devportal_Digg_FaqBlock {
      ...FaqBlock
    }

    ... on devportal_Digg_MediaBlock {
      ...MediaBlock
    }

    ... on devportal_Digg_GroupBlock {
      ...GroupBlock
    }

    ... on devportal_Digg_HeroBlock {
      ...HeroBlock
    }

    ... on devportal_Digg_PuffBlock {
      ...PuffBlock
    }

    ... on devportal_Digg_LinksBlock {
      ...LinksBlock
    }
  }
  ${CONTAINER_META_FRAGMENT}
  ${FAQ_BLOCK_FRAGMENT}
  ${GROUP_BLOCK_FRAGMENT}
  ${HERO_BLOCK_FRAGMENT}
  ${TEXT_BLOCK_FRAGMENT}
  ${PUFF_BLOCK_FRAGMENT}
  ${LINKS_BLOCK_FRAGMENT}
  ${MEDIA_BLOCK_FRAGMENT}
  ${MEDIA_FRAGMENT}
  ${MEDIA_TYPE_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${LINK_FRAGMENT}
`;
