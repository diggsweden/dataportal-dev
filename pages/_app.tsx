import '../styles/general/typography.scss';
import '../styles/general/general.scss';
import '../styles/general/prism.scss';
import '../styles/general/codetoolbar.scss';
import '../styles/header/header.scss';
import '../styles/footer/footer.scss';
import '../styles/general/prism.scss';
import '../styles/global.css';
import '../styles/content/content.scss';
import '../styles/startpage/jumbotron.scss';
import '../styles/startpage/contentgrid.scss';
import '../styles/breadcrumb/breadcrumb.scss';
import '../styles/blocks/blocks.scss';
import '../styles/blocks/link.scss';
import '../styles/general/components.scss';
import '../styles/notfoundpage/notfoundpage.scss';

import type { AppContext, AppProps } from 'next/app';
import { client, getSharedProps } from '../graphql';
import { ApolloProvider } from '@apollo/client';
import {
  colorPalette,
  ThemeProvider,
  Breadcrumb,
  space,
  css,
  theme,
  fontSize,
  ErrorBoundary,
  skipToContent,
  SkipToContent,
  skipToElement,
  createCache,
  CacheProvider,
} from '@digg/design-system';
import {
  CookieBanner,
  defaultSettings,
  extractSettings,
  Footer,
  Header,
  LocalStoreProvider,
  SettingsProvider,
} from '../components';
import Head from 'next/head';
import Link from 'next/link';
import App from 'next/app';
import { SeoData } from '../graphql/__generated__/SeoData';
import { MainMenu_devportal_Digg_Menu } from '../graphql/__generated__/MainMenu';
import { Footer_devportal_Digg_Footer } from '../graphql/__generated__/Footer';
import { Settings_devportal_Digg_Settings } from '../graphql/__generated__/Settings';
import { useRouter } from 'next/router';
import { EnvSettings, SettingsUtil } from '../env';
import { Containers_devportal_Digg_Containers_breadcrumb } from '../graphql/__generated__/Containers';
import generateCSP from '../helpers/generateCsp';
import { TrackingProvider } from '../components/TrackingProvider';
import { checkLang } from '../helpers/checkLang';
import { useEffect, useState } from 'react';
import { onNextFrame } from '../helpers/onNextFrame';
import { usePrevious } from '../hooks/usePrevious';
import { click, keyUp } from '../helpers/keyFocus';
import reactenv from '@beam-australia/react-env';
import { HeroBlock } from '../components/blocks';
import useTranslation from 'next-translate/useTranslation';
import { GlobalStyles } from '../styles/GlobalStyles';

interface DevportalenProps extends AppProps {
  menu: MainMenu_devportal_Digg_Menu;
  footer: Footer_devportal_Digg_Footer;
  settings: Settings_devportal_Digg_Settings;
}

/**
 * focuses on element with id provided from path
 * @param pathWithHash url path along with hash
 */
const onHash = (pathWithHash: string) => {
  const hashIndex = pathWithHash.indexOf('#');
  const hash = pathWithHash.substring(hashIndex);
  onNextFrame(() => skipToElement(hash));
};

function Devportalen({
  Component,
  pageProps,
  menu,
  footer,
  settings: diggSettings,
}: DevportalenProps) {
  const { breadcrumb, seo, name, blocks } = pageProps;
  const { title, description, image, robotsFollow, robotsIndex } = (seo as SeoData) || {};
  const { locale, asPath } = useRouter() || {};
  const previousPath = usePrevious(asPath);
  const { t } = useTranslation('common');
  /* eslint-disable */
  // console.log({ pageProps, menu, footer, diggSettings });
  /* eslint-enable */

  const [env] = useState<EnvSettings>(SettingsUtil.create());
  const devportalSettings = extractSettings(diggSettings);
  const crumbs = breadcrumb as Containers_devportal_Digg_Containers_breadcrumb[];
  const defaultDescrtiption =
    'Sveriges nationella dataportal för att hitta, utforska och använda data från offentlig och privat sektor'; // Todo - translate
  const strapiImageUrl = image?.url;
  const imageUrl = strapiImageUrl
    ? `${reactenv('MEDIA_BASE_URL') || ''}${strapiImageUrl}`
    : '/svdp-favicon-150.png';
  const heroBlock =
    blocks && blocks.find((block: any) => block.__typename === 'devportal_Digg_HeroBlock');
  const isDraft = asPath?.substring(0, 7) === '/drafts';
  const allowSEO = env.envName == 'prod' && !isDraft ? true : false;
  // eslint-disable-next-line
  // console.log({ heroBlock });
  const key = 'devportalen';
  const cache = createCache({ key });

  useEffect(() => {
    document.body.addEventListener('keyup', keyUp);
    document.body.addEventListener('click', click);

    return () => {
      document.body.removeEventListener('keyup', keyUp);
      document.body.removeEventListener('click', click);
    };
  }, []);

  const trail = crumbs
    ? [
        ...crumbs?.map((crumb, index) => (
          <span
            css={css`
              ${space({ pr: 2, pl: index === 0 ? 0 : 2 })};
            `}
            key={index}
          >
            <Link
              href={crumb.link?.link || ''}
              passHref
              scroll={false}
            >
              <a>{checkLang(crumb.name)}</a>
            </Link>
          </span>
        )),
        <span
          css={css`
            ${space({ px: 2 })}
          `}
          key="lastCrumb"
        >
          {checkLang(name)}
        </span>,
      ]
    : [];

  const GetCookiesAccepted = () => {
    try {
      const store = JSON.parse(localStorage.getItem('digg-store')!);
      return store ? store.cookiesAccepted == true : false;
    } catch {
      //console.error('Could not parse digg-store');
      return false;
    }
  };

  useEffect(() => {
    if (previousPath) {
      asPath.includes('#')
        ? onHash(asPath)
        : skipToContent(undefined, { showFocus: false, includeHeading: true });
    } else {
      asPath.includes('#') && onHash(asPath);
    }
  }, [asPath]);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <SettingsProvider {...devportalSettings}>
          <LocalStoreProvider>
            <TrackingProvider initalActivation={GetCookiesAccepted()}>
              <CacheProvider value={cache}>
                <GlobalStyles />
                <Head>
                  <meta
                    httpEquiv="Content-Security-Policy"
                    content={generateCSP()}
                  />
                  <meta
                    name="referrer"
                    content="no-referrer"
                  />
                  {/* SEO */}
                  <title>{title ? `${title} - Utvecklarportalen` : 'Utvecklarportalen'}</title>
                  <meta
                    property="og:title"
                    content={title ? `${title} - Utvecklarportalen` : 'Utvecklarportalen'}
                  />
                  <meta
                    name="twitter:title"
                    content={title ? `${title} - Utvecklarportalen` : 'Utvecklarportalen'}
                  />
                  <meta
                    name="description"
                    content={description || defaultDescrtiption}
                  />
                  <meta
                    name="og:description"
                    content={description || defaultDescrtiption}
                  />
                  <meta
                    name="twitter:description"
                    content={description || defaultDescrtiption}
                  />
                  <meta
                    property="og:image"
                    content={imageUrl}
                  />
                  <meta
                    name="twitter:image"
                    content={imageUrl}
                  />
                  <link
                    rel="canonical"
                    href={`${env.CANONICAL_URL}${pageProps.slug || ''}`}
                  />
                  <meta
                    property="og:url"
                    content={`${env.CANONICAL_URL}${pageProps.slug || ''}`}
                  />
                  <meta
                    name="twitter:url"
                    content={`${env.CANONICAL_URL}${pageProps.slug || ''}`}
                  />
                  <meta
                    name="robots"
                    content={`${robotsFollow && allowSEO ? 'follow' : 'nofollow'}, ${
                      robotsIndex && allowSEO ? 'index' : 'noindex'
                    }`}
                  />
                  <meta
                    name="og:site_name"
                    content={devportalSettings.siteName || defaultSettings.siteName}
                  />
                  <meta
                    name="language"
                    content={locale}
                  />
                  <meta
                    name="og:type"
                    content="website"
                  />
                  {/* PWA settings */}
                  <link
                    rel="icon"
                    href="/favicon.ico"
                  />
                  <link
                    rel="manifest"
                    href="/manifest.json"
                  />
                  <meta
                    name="theme-color"
                    content={theme.primary}
                  />
                  <link
                    rel="apple-touch-icon"
                    href="/apple-touch-icon.png"
                  />
                  <meta
                    name="apple-mobile-web-app-status-bar"
                    content={theme.primary}
                  />
                  <meta
                    name="theme-color"
                    content="#171A21"
                  />
                  <link
                    rel="icon"
                    type="image/png"
                    href="/svdp-favicon-16.png"
                    sizes="16x16"
                  />
                  <link
                    rel="icon"
                    type="image/png"
                    href="/svdp-favicon-32.png"
                    sizes="32x32"
                  />
                  <link
                    rel="icon"
                    type="image/png"
                    href="/svdp-favicon-64.png"
                    sizes="64x64"
                  />
                  <link
                    rel="apple-touch-icon"
                    href="/svdp-favicon-150.png"
                  />
                  <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/svdp-favicon.png"
                  />
                  <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/svdp-favicon.png"
                  />
                  <link
                    rel="apple-touch-icon"
                    sizes="167x167"
                    href="/svdp-favicon.png"
                  />
                  <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="black"
                  />
                </Head>
                <div
                  id="top"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    background-color: white;
                  `}
                >
                  <ErrorBoundary>
                    <CookieBanner />
                    <SkipToContent text={t('skiptocontent')} />
                    <Header menu={menu} />
                    <noscript>
                      <div
                        css={css`
                          position: fixed;
                          bottom: 0;
                          left: 0;
                          width: 100%;
                          background-color: ${colorPalette.orange100};
                          ${space({ p: 6 })};
                          z-index: 100;
                        `}
                      >
                        <div
                          css={css`
                            ${fontSize('md')};
                            text-align: center;
                          `}
                        >
                          {devportalSettings.noScriptContent}
                        </div>
                      </div>
                    </noscript>
                    {crumbs && (
                      <div className="breadcrumb">
                        <Breadcrumb trail={trail} />
                      </div>
                    )}
                    <main
                      className="main"
                      css={css`
                        flex: 1 1 auto;
                      `}
                    >
                      {heroBlock && <HeroBlock {...heroBlock} />}
                      <Component {...pageProps} />
                    </main>
                    {footer?.columns && <Footer columns={footer.columns} />}
                  </ErrorBoundary>
                </div>
              </CacheProvider>
            </TrackingProvider>
          </LocalStoreProvider>
        </SettingsProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

Devportalen.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  const { menu, footer, settings } = await getSharedProps(client, appContext.router.locale || 'sv');
  return { ...appProps, menu, footer, settings };
};

export default Devportalen;
