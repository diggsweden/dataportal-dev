import { Container, css, DiggLogo, Heading, space } from '@digg/design-system';
import React from 'react';
import { Footer_devportal_Digg_Footer_columns } from '../../graphql/__generated__/Footer';
import { renderMarkdown } from '../Renderers';

export interface FooterProps {
  columns: (Footer_devportal_Digg_Footer_columns | null)[];
}

export const Footer: React.FC<FooterProps> = ({ columns }) => {
  return (
    <footer
      className="footer"
      css={css`
        ${space({ px: 4 })};
      `}
    >
      <Container>
        <div className="footer-main">
          <div className="footer__columns">
            {columns?.map((col, index) => (
              <div
                key={index}
                className="footer__columns--column"
              >
                <Heading
                  level={2}
                  size="md"
                >
                  {col?.title}
                </Heading>
                {renderMarkdown(col?.text?.markdown || '')}
              </div>
            ))}
          </div>

          <div className="digg__">
            <div
              css={css`
                width: 15rem;
                ${space({ mr: 4 })};
              `}
            >
              <DiggLogo
                title="DIGG - Myndigheten för digital förvaltning"
                id="footer"
                mode="wide"
                width={30 * 16}
              />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
