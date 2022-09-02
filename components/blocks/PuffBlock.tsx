import { Heading } from '@digg/design-system';
import Link from 'next/link';
import React from 'react';
import { PuffBlock as IPuffBlock, PuffBlock_puffs } from '../../graphql/__generated__/PuffBlock';
import { checkLang } from '../../helpers/checkLang';

export const PuffBlock: React.FC<IPuffBlock> = ({ heading, description, puffs }) => {
  return (
    <>
      {heading && (
        <Heading
          level={2}
          weight="bold"
        >
          {checkLang(heading)}
        </Heading>
      )}
      {description && <p className="text-md content_grid-preamble">{checkLang(description)}</p>}
      <ul className="content_grid-list">
        {puffs &&
          puffs.map((puff: PuffBlock_puffs, i: number) => {
            return (
              <li
                key={i}
                className="content_grid-item"
                onClick={() => {
                  (window as any).location.href = puff?.link?.link;
                }}
              >
                <div className="content_grid-item-wrapper">
                  <Link
                    href={puff.link?.link || ''}
                    scroll={false}
                  >
                    <a className="content_grid-itemlink text-lg font-bold">
                      {checkLang(puff.heading)}
                    </a>
                  </Link>
                  <p className="text-md content_grid-itemdesc">
                    {/* <Truncate lines={4}>{puffblock.preamble}</Truncate> */}
                    {checkLang(puff.description)}
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};
