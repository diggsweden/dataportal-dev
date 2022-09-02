import { styled } from '@digg/design-system';
import useTranslation from 'next-translate/useTranslation';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import { onlyText } from 'react-children-utilities';

const ExtLink = styled.a<{ isMail?: boolean }>`
  //Sets the size of the icon (1.125rem = 18px)
  --size: 1.125rem;

  &::after {
    /* color: white;
    background-image: url('/icons/icon_ExternalLink.svg'); */
    background-color: #2b2a29;
    -webkit-mask-image: ${({ isMail }) =>
      isMail ? "url('/icons/icon_Mail.svg')" : "url('/icons/icon_ExternalLink.svg')"};
    mask-image: ${({ isMail }) =>
      isMail ? "url('/icons/icon_Mail.svg')" : "url('/icons/icon_ExternalLink.svg')"};
    background-size: var(--size) var(--size);
    mask-repeat: no-repeat;
    display: inline-block;
    width: var(--size);
    height: var(--size);
    margin-left: 4px;
    margin-bottom: -4px;
    content: '';
  }
`;
interface ExternalLinkProps extends LinkProps {
  children?: React.ReactNode;
  className?: string;
  isMail?: boolean;
}

export const ExternalLink: React.FC<ExternalLinkProps> = (props) => {
  const { t } = useTranslation('common');
  return (
    <Link
      {...props}
      passHref={true}
    >
      <ExtLink
        isMail={props.isMail}
        className={props.className}
        aria-label={`${onlyText(props.children)} - ${t(
          props.isMail ? 'email_link' : 'external_link'
        )}`}
      >
        <span>{props.children}</span>
      </ExtLink>
    </Link>
  );
};

export default ExternalLink;
