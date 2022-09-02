/// <reference types="@digg/design-system/lib/emotion-extention" />
type MenuItem = {
  link: string;
  name: string;
  order: number;
  pageId: number;
  children: MenuItem[];
};

type Breadcrumb = {
  link: string;
  name: string;
};

type Anchorlink = {
  id: string;
  text: string;
  lang: string;
};

interface DevportalSettings {
  siteName: string;
  pageNotFoundHeading: string;
  pageNotFoundText: string;
  noScriptContent: string;
  cookieInformation: string;
  cookieMoreInfoLink: string;
  matomoSiteId: string;
}

declare module 'remark-gfm' {
  const content: any;
  export default content;
}

type CSPDirective =
  | 'child-src'
  | 'connect-src'
  | 'default-src'
  | 'font-src'
  | 'frame-src'
  | 'img-src'
  | 'manifest-src'
  | 'media-src'
  | 'object-src'
  | 'prefetch-src'
  | 'script-src'
  | 'script-src-elem'
  | 'script-src-attr'
  | 'style-src'
  | 'style-src-elem'
  | 'style-src-attr'
  | 'worker-src'
  | 'base-uri'
  | 'plugin-types'
  | 'sandbox'
  | 'form-action'
  | 'frame-ancestors'
  | 'navigate-to'
  | 'report-uri'
  | 'report-to'
  | 'block-all-mixed-content'
  | 'referrer'
  | 'require-sri-for'
  | 'require-trusted-types-for'
  | 'trusted-types'
  | 'upgrade-insecure-requests';

type DiggStrapiTheme =
  | 'brownTheme'
  | 'lightBrownTheme'
  | 'darkTheme'
  | 'grayTheme'
  | 'greenTheme'
  | 'lightGreenTheme'
  | 'orangeTheme'
  | 'lightOrangeTheme'
  | 'pinkTheme'
  | 'lightPinkTheme';
