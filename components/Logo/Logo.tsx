import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { LogoEN } from './LogoEN';
import { LogoSE } from './LogoSE';

export const DataportalLogo: React.FC = () => {
  const { t, lang } = useTranslation('common');
  const title = t('logo-alt-title');
  const titleID = 'LogoID';
  if (lang === 'en') {
    return (
      <LogoEN
        title={title}
        id={titleID}
      />
    ); // Todo - make svg english
  }

  return (
    <LogoSE
      title={title}
      id={titleID}
    />
  );
};
