import Link, { LinkProps } from 'next/link';
import { isExternal } from 'util/types';
import { ExternalLink } from '..';

interface Props extends LinkProps {
  text: string;
}

export const renderLink = (props: Props) =>
  isExternal(props.href) ? (
    <ExternalLink href={props.href}>{props.text}</ExternalLink>
  ) : (
    <Link href={props.href} scroll={false}>
      <a>{props.text}</a>
    </Link>
  );
