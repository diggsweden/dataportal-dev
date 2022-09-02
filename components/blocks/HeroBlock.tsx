import React from 'react';
import Image from 'next/image';
import { HeroBlock as IHeroBlock, HeroBlock_media } from '../../graphql/__generated__/HeroBlock';
import env from '@beam-australia/react-env';
import { renderMarkdown } from '../Renderers';
import { checkLang } from '../../helpers/checkLang';
import { imageLoader } from './MediaBlock';
import { Heading } from '@digg/design-system';

const renderMedia = (media: HeroBlock_media) => {
  const { url, alt, mime } = media;
  switch (media.__typename) {
    case 'devportal_Digg_Image':
      const width = media?.width || '';
      const height = media?.height || '';
      return (
        <Image
          loader={() => imageLoader((env('MEDIA_BASE_URL') || '') + url, width as number)}
          src={(env('MEDIA_BASE_URL') || '') + url}
          width={width}
          height={height}
          alt={alt || ''}
          layout="responsive"
        />
      );
    case 'devportal_Digg_Video':
      return (
        <video controls>
          <source
            src={`${env('MEDIA_BASE_URL') || ''}${url}`}
            type={mime}
          />
        </video>
      );
  }
};

const theme = (uiHints: (DiggStrapiTheme | null)[]) => {
  // * Get a theme if there is one
  const darkTheme = uiHints?.find((hint) => hint === 'darkTheme');
  const grayTheme = uiHints?.find((hint) => hint === 'grayTheme');
  const greenTheme = uiHints?.find((hint) => hint === 'greenTheme');
  const lightGreenTheme = uiHints?.find((hint) => hint === 'lightGreenTheme');
  const orangeTheme = uiHints?.find((hint) => hint === 'orangeTheme');
  const lightOrangeTheme = uiHints?.find((hint) => hint === 'lightOrangeTheme');
  const pinkTheme = uiHints?.find((hint) => hint === 'pinkTheme');
  const ligthPinkTheme = uiHints?.find((hint) => hint === 'lightPinkTheme');

  if (darkTheme) return ` ${darkTheme}`;
  else if (grayTheme) return ` ${darkTheme}`;
  else if (greenTheme) return ` ${greenTheme}`;
  else if (lightGreenTheme) return ` ${lightGreenTheme}`;
  else if (orangeTheme) return ` ${orangeTheme}`;
  else if (lightOrangeTheme) return ` ${lightOrangeTheme}`;
  else if (pinkTheme) return ` ${pinkTheme}`;
  else if (ligthPinkTheme) return ` ${ligthPinkTheme}`;
  return '';
};

export const HeroBlock: React.FC<IHeroBlock> = ({ media, heading, heroText, uiHints }) => {
  return (
    <div className={`heroblock${theme(uiHints as (DiggStrapiTheme | null)[])}`}>
      {renderMedia(media)}
      {(heading || heroText) && (
        <div className={`main-container`}>
          {heading && <Heading>{checkLang(heading)}</Heading>}
          <div className="content">
            {heroText && (
              <div className="text-lg preamble">
                {heroText.markdown && renderMarkdown(heroText.markdown)}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
