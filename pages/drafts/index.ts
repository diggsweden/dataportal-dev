import { GetServerSideProps } from 'next';
import { client, CONTAINER_QUERY } from '../../graphql';
import { Containers, ContainersVariables } from '../../graphql/__generated__/Containers';
import { devportal_ContainerState } from '../../graphql/__generated__/globalTypes';
import Page from '../[...containerSlug]';

export const getServerSideProps: GetServerSideProps = async ({ query, locale }) => {
  const slug = (query?.slug as string) || '';
  const secret = (query?.secret as string) || '';
  // Get external data from the file system, API, DB, etc.
  const result = await client.query<Containers, ContainersVariables>({
    query: CONTAINER_QUERY,
    variables: {
      filter: {
        slug,
        limit: 1,
        locale,
        previewSecret: secret,
        state: devportal_ContainerState.preview,
      },
    },
    fetchPolicy: 'no-cache',
  });

  const page = result && result.data ? result.data.devportal_Digg_Containers[0] : undefined;

  if (result && result.error) {
    console.error(result.error);
  }

  if (!page) {
    console.warn(`No page found with slug: ${slug}`);
    return {
      notFound: true,
    };
  }

  // The value of the `props` key will be
  //  passed to the `Page` component
  return {
    props: { ...page },
  };
};

export default Page;
