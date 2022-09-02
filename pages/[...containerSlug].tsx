import React, { useEffect, useState } from 'react';
import { client, CONTAINER_QUERY } from '../graphql';
import { isIE } from '../helpers/detectBrowser';
import ContentArea from '../components/ContentArea/ContentArea';
import {
  Containers,
  ContainersVariables,
  Containers_devportal_Digg_Containers,
} from '../graphql/__generated__/Containers';
import { SharedContentData_blocks } from '../graphql/__generated__/SharedContentData';
import { Start_devportal_Digg_Start_blocks } from '../graphql/__generated__/Start';
import { checkLang } from '../helpers/checkLang';
import { useRouter } from 'next/router';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { AnchorLinkMenu, Heading } from '@digg/design-system';
import useTranslation from 'next-translate/useTranslation';

/**
 * Gets all h2 elements on the page and sets id:s to a visibility:hidden sibling be used
 * in the anchorLinkMenu
 * @returns {Array} An array of id:s to all h2-elements on the page
 */
const getLinks = () => {
  const menuItems: Anchorlink[] = [];
  let headerScope = '.content';
  let cont: HTMLElement = document.querySelector(headerScope) || document.createElement('div');
  let hTags = Array.prototype.slice.call(
    cont.querySelectorAll('h2') || document.createElement('div'),
    0
  );

  // Set only if there are more than 2 elements
  hTags.length > 2 &&
    hTags.forEach((element: HTMLElement) => {
      // filter swedish charachters and whitespaces from anchor
      let chars: any = { å: 'a', ä: 'a', ö: 'o', ' ': '_', '.': '' };
      const id = `${element.innerText.toLowerCase().replace(/[åäö\s\.]/g, (m: any) => chars[m])}`;
      // Get the sibling element and give it the id
      element.id = `${id}`;

      // Adds the lang of the element inside hTag if there is one
      let lang;
      if (element.children[0]) lang = (element.children[0] as any).lang;

      menuItems.push({
        id: id,
        text: element.textContent,
        lang: lang,
      } as Anchorlink);
    });

  return menuItems;
};

/**
 * Uses prismjs to style codeblock
 */
const highlightCodeBlock = async () => {
  // ? Fix to get <br/> as line-breaks
  (await import('prismjs')).hooks.add('before-highlight', function (env) {
    env.code = (env as any).element.innerText;
  });
  // * init prismjs
  (await import('prismjs')).highlightAll();
  // ? Await all plugins and components to fix hydration issue
  await require('prismjs/plugins/line-numbers/prism-line-numbers');
  await require('prismjs/components/prism-markup-templating');
  await require('prismjs/components/prism-csharp');
  await require('prismjs/components/prism-json');
  await require('prismjs/components/prism-javascript');
  await require('prismjs/components/prism-css');
  await require('prismjs/components/prism-php');
  await require('prismjs/components/prism-ruby');
  await require('prismjs/components/prism-python');
  await require('prismjs/components/prism-java');
  await require('prismjs/components/prism-c');
  await require('prismjs/components/prism-cpp');
  await require('prismjs/plugins/line-numbers/prism-line-numbers');
  await require('prismjs/plugins/toolbar/prism-toolbar');
  await require('prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard');
};

export const Page: React.FC<Containers_devportal_Digg_Containers> = ({
  heading,
  preamble,
  uiHints,
  blocks,
  name,
}) => {
  const [menuItems, setMenuItems] = useState<Anchorlink[]>([]);
  const AnchorLinkMenuRef = React.createRef<HTMLDivElement>(); //for making changes in ms edge legacy
  const { pathname } = useRouter() || {};
  const { trackPageView } = useMatomo();
  const { t } = useTranslation('common');

  useEffect(() => {
    highlightCodeBlock();

    // Adds lang attribute to codeBlocks
    const codeWrappers = Array.prototype.slice.call(
      document.getElementsByClassName('code-toolbar')
    );
    codeWrappers.map((codeWrapper) => codeWrapper.setAttribute('lang', 'en'));

    // Adds line numbers to codeBlocks
    const pres = Array.prototype.slice.call(document.getElementsByTagName('pre'));
    pres.map((pre) => pre.classList.add('line-numbers'));
  }, []);

  useEffect(() => {
    const newMenuItems = getLinks();
    // Make sure that the state needs to be updated
    if (
      (menuItems[0] && newMenuItems[0] && menuItems[0].id !== newMenuItems[0].id) ||
      (menuItems[0] && !newMenuItems[0]) ||
      (!menuItems[0] && newMenuItems[0])
    ) {
      !isIE && setMenuItems(newMenuItems);
    }
  }, [menuItems]);

  useEffect(() => {
    trackPageView({ documentTitle: name });
  }, [pathname]);

  // const hideSubMenu = uiHints?.includes('hideSubMenu');
  const showContentMenu = uiHints?.find((hint) => hint === 'showContentMenu');

  return (
    <div className="main-container">
      <Heading>{checkLang(heading)}</Heading>
      <div className="main-container--contentwrapper">
        <div className="anchorlink_wrapper">
          {menuItems[0] && showContentMenu && (
            <div
              ref={AnchorLinkMenuRef}
              className="pagenavigation"
            >
              <AnchorLinkMenu
                menuHeading={t('content-menu-heading')}
                menuItems={menuItems}
                anchorLinkMenuRef={AnchorLinkMenuRef}
              />
            </div>
          )}
        </div>

        <div className="content">
          {preamble && <p className="preamble text-lg font-medium">{checkLang(preamble)}</p>}
          {blocks && blocks.length > 0 && (
            <div className="grid">
              <div className="content_grid main-text">
                <ContentArea
                  blocks={
                    blocks as (
                      | Start_devportal_Digg_Start_blocks
                      | SharedContentData_blocks
                      | null
                    )[]
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const slug = '/' + (params as any)?.containerSlug?.join('/');
  // Get external data from the file system, API, DB, etc.
  const result = await client.query<Containers, ContainersVariables>({
    query: CONTAINER_QUERY,
    variables: {
      filter: { slug, limit: 1, locale },
    },
    fetchPolicy: 'no-cache',
  });

  const page = result && result.data ? result.data.devportal_Digg_Containers[0] : undefined;

  if (result && result.error) {
    console.error(result.error);
  }

  if (!page) {
    console.warn(`No page found for path: ${slug}`);
    return {
      notFound: true,
      revalidate: parseInt(process.env.REVALIDATE_INTERVAL || '60'),
    };
  }

  // The value of the `props` key will be
  //  passed to the `Page` component
  return {
    props: { ...page },
    revalidate: parseInt(process.env.REVALIDATE_INTERVAL || '60'),
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths: any[] = [];
  // locales &&
  //   (await Promise.all(
  //     // create static paths for all locales
  //     locales.map(async (locale) => {
  //       // Get external data from the file system, API, DB, etc.
  //       const result = await client.query<Containers, ContainersVariables>({
  //         query: CONTAINER_QUERY,
  //         variables: { filter: { locale } },
  //       });

  //       const containers = result?.data?.devportal_Digg_Containers;

  //       if (result?.error) {
  //         console.error(result?.error);
  //       }

  //       containers &&
  //         extractSlugs(containers).map((arr) => {
  //           paths.push({ params: { containerSlug: arr }, locale });
  //         });
  //     })
  //   ));

  return {
    paths,
    fallback: 'blocking',
  };
};

export default Page;
