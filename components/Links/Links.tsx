import { ArrowIcon } from '@digg/design-system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Link as LinkType } from '../../graphql/__generated__/Link';
import { checkLang } from '../../helpers/checkLang';

export const Links: React.FC<{ links: LinkType[] }> = ({ links }) => {
  const router = useRouter();
  return (
    <ul className="text-md font-bold linkblock">
      {links.map((l, index) => (
        <li
          key={index}
          onClick={() => router.push(l.link || '', undefined, { scroll: false })}
        >
          <Link
            href={`${l?.link}`}
            passHref
            scroll={false}
          >
            <a>{checkLang(l?.title || l?.link)}</a>
          </Link>
          <ArrowIcon width={24} />
        </li>
      ))}
    </ul>
  );
};

export default Links;
