import { Heading } from '@digg/design-system';
import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React from 'react';
import { extractSettings } from '../components';
import { client } from '../graphql';
import { SETTINGS_QUERY } from '../graphql/settingsQuery';
import { Settings, SettingsVariables } from '../graphql/__generated__/Settings';

const NotFound: React.FC<{ heading?: string; text?: string }> = ({ heading, text }) => {
  const { t, lang } = useTranslation('pages');
  return (
    <div className="main-container">
      <Heading>{heading || t('notfoundpage.heading')}</Heading>
      <div className="content notfoundpage__content">
        <span className="text-md">{text || t('notfoundpage.body')}</span>
        <ul>
          <li>
            <Link
              href={`/`}
              locale={lang}
              scroll={false}
            >
              <a className="text-lg">{t('notfoundpage.startpage')}</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // Get external data from the file system, API, DB, etc.
  const result = await client.query<Settings, SettingsVariables>({
    query: SETTINGS_QUERY,
    variables: {
      locale,
    },
    fetchPolicy: 'no-cache',
  });

  const settings = result && result.data ? result.data.devportal_Digg_Settings : undefined;

  if (result && result.error) {
    console.error(result.error);
  }

  const extracted = settings && extractSettings(settings);

  if (!extracted) {
    console.warn(`Could not get and extract settings`);
  }

  // The value of the `props` key will be
  //  passed to the `Page` component
  return {
    props: {
      ...(extracted?.pageNotFoundHeading ? { heading: extracted.pageNotFoundHeading } : {}),
      ...(extracted?.pageNotFoundText ? { text: extracted.pageNotFoundText } : {}),
    },
    revalidate: parseInt(process.env.REVALIDATE_INTERVAL || '60'),
  };
};

export default NotFound;
