import { GetServerSideProps } from 'next';
import { client, CONTAINER_QUERY } from '../graphql';
import {
  Containers,
  ContainersVariables,
  Containers_devportal_Digg_Containers,
} from '../graphql/__generated__/Containers';

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res, req, locales }) => {
  const allContainers: (Containers_devportal_Digg_Containers | null)[] = [];
  locales &&
    (await Promise.all(
      // Get all containers in all locales
      locales.map(async (locale) => {
        // Get external data from the file system, API, DB, etc.
        const result = await client.query<Containers, ContainersVariables>({
          query: CONTAINER_QUERY,
          variables: { filter: { locale, limit: 9999 } },
        });

        const containers = result?.data?.devportal_Digg_Containers;

        if (result?.error) {
          console.error(result?.error);
        }

        containers && allContainers.push(...containers);
      })
    ));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allContainers
      .map(
        (c) => `
        <url>
            <loc>${req.headers.host}${
          c?.locale === 'sv' ? c?.slug : `/${c?.locale}${c?.slug}`
        }</loc>
            <lastmod>${c?.updatedAt}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>
    `
      )
      .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
