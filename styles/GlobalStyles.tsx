import React from 'react';
import { css, globalStyles, theme, Global } from '@digg/design-system';

export const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      ${globalStyles({ theme })}
      body {
        overflow-x: hidden;
        -ms-scroll-limit-x-max: 0;
      }
    `}
  />
);
