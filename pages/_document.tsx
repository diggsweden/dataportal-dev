import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ApolloProvider } from '@apollo/client';
import {
  CacheProvider,
  createEmotionServer,
  theme,
  ThemeProvider,
  createCache,
} from '@digg/design-system';
import { renderToString } from 'react-dom/server';
import { SettingsProvider, LocalStoreProvider, defaultSettings } from '../components';
import { TrackingProvider } from '../components/TrackingProvider';
import { client } from '../graphql';
import { GlobalStyles } from '../styles/GlobalStyles';

//@ts-ignore
class DevportalDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    const key = 'devportalen';
    const cache = createCache({ key });
    const { extractCritical } = createEmotionServer(cache);
    let styles = '';

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) =>
          function callback(props) {
            const frontend = (
              <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                  <SettingsProvider value={{ ...defaultSettings }}>
                    <LocalStoreProvider>
                      <TrackingProvider initalActivation={false}>
                        <CacheProvider value={cache}>
                          <GlobalStyles />
                          <App {...props} />
                        </CacheProvider>
                      </TrackingProvider>
                    </LocalStoreProvider>
                  </SettingsProvider>
                </ThemeProvider>
              </ApolloProvider>
            );
            let { css } = extractCritical(renderToString(frontend));
            styles = css;
            return frontend;
          },
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style dangerouslySetInnerHTML={{ __html: styles }}></style>
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            type="text/javascript"
            src="/__ENV.js"
          />
          <link
            rel="preload"
            href="/fonts/Ubuntu/Ubuntu-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Ubuntu/Ubuntu-Regular.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Ubuntu/Ubuntu-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Ubuntu/Ubuntu-Bold.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="line-numbers">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DevportalDocument;
