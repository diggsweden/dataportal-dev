import { Heading, styled } from '@digg/design-system';
import { client } from '../graphql';
import Prism from 'prismjs';
import { START_QUERY } from '../graphql/startQuery';
import { Start, StartVariables, Start_devportal_Digg_Start } from '../graphql/__generated__/Start';
import ContentArea from '../components/ContentArea/ContentArea';
import { useEffect } from 'react';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import env from '@beam-australia/react-env';
import { imageLoader } from '../components/blocks/MediaBlock';

require('prismjs/components/prism-markup-templating');
require('prismjs/components/prism-csharp');
require('prismjs/components/prism-json');
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-css');
require('prismjs/components/prism-php');
require('prismjs/components/prism-ruby');
require('prismjs/components/prism-python');
require('prismjs/components/prism-java');
require('prismjs/components/prism-c');
require('prismjs/components/prism-cpp');
require('prismjs/plugins/line-numbers/prism-line-numbers');
require('prismjs/plugins/toolbar/prism-toolbar');
require('prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard');

export async function getStaticProps({ params, locale }: any) {
  const result = await client.query<Start, StartVariables>({
    query: START_QUERY,
    variables: { locale },
    fetchPolicy: 'no-cache',
  });

  if (result && result.error) {
    console.error(result.error);
    return null;
  }

  return {
    props: { ...result?.data?.devportal_Digg_Start },
    revalidate: parseInt(process.env.REVALIDATE_INTERVAL || '60'),
  };
}

const Spacer = styled.div`
  width: 2.5rem;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    display: none;
  }
`;

const Home: React.FC<Start_devportal_Digg_Start> = ({ heading, blocks, preamble, image }) => {
  const { pathname } = useRouter() || {};
  const { trackPageView } = useMatomo();
  let imgSrc = image?.url ? image.url : '';
  const imgAlt = image?.alt ? image.alt : '';
  const imgHeight = image?.height || 400;
  const imgWidth = image?.width || 600;
  imgSrc = `${env('MEDIA_BASE_URL') || ''}${imgSrc}`;

  useEffect(() => {
    setTimeout(() => {
      Prism.highlightAll();
    }, 0);
  }, []);

  useEffect(() => {
    trackPageView({ documentTitle: 'Start' });
  }, [pathname]);

  return (
    <div className="main-container">
      <div className="jumbotron-wrapper">
        <div className="jumbotron">
          <div className="jumbotron_heading">
            <Heading>{heading}</Heading>
            <span className="text-md">{preamble}</span>
          </div>
          <Spacer></Spacer>
          <div className="jumbotron_img">
            <Image
              loader={() => imageLoader(imgSrc, imgWidth as number)}
              width={imgWidth}
              height={imgHeight}
              src={imgSrc}
              alt={imgAlt}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="grid">
          <div className="content_grid">{blocks && <ContentArea blocks={blocks} />}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
