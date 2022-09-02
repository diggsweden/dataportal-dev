import React from 'react';
import { Settings_devportal_Digg_Settings } from '../../graphql/__generated__/Settings';

export const extractSettings = (
  diggSettings: Settings_devportal_Digg_Settings
): DevportalSettings => {
  return {
    siteName:
      diggSettings?.items?.find((s) => s?.key === 'sitename')?.value || defaultSettings.siteName,
    pageNotFoundHeading:
      diggSettings?.items?.find((s) => s?.key === 'pageNotFoundHeading')?.value || '',
    pageNotFoundText: diggSettings?.items?.find((s) => s?.key === 'pageNotFoundText')?.value || '',
    noScriptContent: diggSettings?.items?.find((s) => s?.key === 'noScriptContent')?.value || '',
    cookieInformation:
      diggSettings?.items?.find((s) => s?.key === 'cookieInformation')?.value || '',
    cookieMoreInfoLink:
      diggSettings?.items?.find((s) => s?.key === 'cookieMoreInfoLink')?.value || '',
    matomoSiteId: diggSettings?.items?.find((s) => s?.key === 'matomoSiteId')?.value || '',
  };
};

export const defaultSettings: DevportalSettings = {
  siteName: 'Sveriges utvecklarportal',
  pageNotFoundHeading: '',
  pageNotFoundText: '',
  noScriptContent: '',
  cookieInformation: '',
  cookieMoreInfoLink: '',
  matomoSiteId: '',
};

export const SettingsContext = React.createContext<DevportalSettings>(defaultSettings);

export const SettingsProvider: React.FunctionComponent<any> = (props) => {
  return <SettingsContext.Provider value={{ ...props }}>{props.children}</SettingsContext.Provider>;
};

export default SettingsProvider;
