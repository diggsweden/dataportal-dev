import {
  MenuIcon,
  styled,
  CloseIcon,
  Container,
  css,
  space,
  Button,
  responsiveProp,
  colorPalette,
} from '@digg/design-system';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { DataportalLogo } from '../Logo/Logo';
import FocusTrap from 'focus-trap-react';
import { MainMenu_devportal_Digg_Menu } from '../../graphql/__generated__/MainMenu';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { checkLang } from '../../helpers/checkLang';

const Innerdiv = styled.div`
  pointer-events: auto;
`;

type HeaderProps = {
  menu: MainMenu_devportal_Digg_Menu;
  activeLink?: string;
};

export const Header: React.FC<HeaderProps> = ({ menu }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [focusTrap, setFocusTrap] = useState(false);
  const { t } = useTranslation('common');
  const { query } = useRouter() || {};
  // const showLangLink = menu?.uiHints?.some((hint) => hint === 'showLangLink');
  const slug = `/${query?.containerSlug && query?.containerSlug[0]}`;

  const openMenu = () => {
    setShowMenu(true);
    setFocusTrap(true);
    document.body.setAttribute('style', `position:fixed;width:100%`);
  };

  const closeMenu = () => {
    setShowMenu(false);
    setFocusTrap(false);
    document.body.setAttribute('style', ``);
  };

  const handleMenuState = (e: UIEvent) => {
    const screenWidth = (e as any).currentTarget.innerWidth;
    if (screenWidth > 880) {
      showMenu && closeMenu();
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleMenuState);

    return () => {
      window.removeEventListener('resize', handleMenuState);
    };
  }, [showMenu]);

  return (
    <header>
      <Innerdiv
        css={css`
          ${space({ py: 0, px: 4 })}
        `}
      >
        <Container>
          <div className="header-box">
            <Link
              href={`/`}
              scroll={false}
            >
              <a
                aria-label={t('logo-title')}
                className={'dataportal-logo'}
                aria-hidden={showMenu}
              >
                <div>
                  <div className="logo-box">
                    <DataportalLogo />
                  </div>
                </div>
              </a>
            </Link>
            <FocusTrap active={focusTrap}>
              <div
                role="dialog"
                aria-modal={showMenu}
              >
                <Button
                  css={css`
                    ${space({ px: 3 })}
                    ${responsiveProp('display', ['flex', 'flex', 'none'])}
                    justify-content: space-around;
                    align-items: center;
                    gap: 0.75rem;
                  `}
                  inline
                  aria-label={showMenu ? t('close_menu') : t('menu')}
                  onClick={showMenu ? closeMenu : openMenu}
                >
                  {showMenu ? (
                    <CloseIcon
                      width={24}
                      color={colorPalette.green600}
                      className="close-icon"
                    ></CloseIcon>
                  ) : (
                    <MenuIcon
                      width={[24, 18]}
                      color={colorPalette.green600}
                      className="menu-icon"
                    ></MenuIcon>
                  )}{' '}
                  <span
                    className="text-base"
                    css={css`
                      ${responsiveProp('display', ['none', 'block'])}
                    `}
                  >
                    {' '}
                    {showMenu ? t('close') : t('menu')}
                  </span>
                </Button>
                <div className={'menu-bg' + (showMenu ? ' menu-bg--active' : '')}></div>
                <nav className={'header-links' + (showMenu ? '--active text-md' : '')}>
                  {menu?.children?.map((child, index) => (
                    <Link
                      href={child?.link?.link || ''}
                      key={index}
                      scroll={false}
                    >
                      <a
                        onClick={closeMenu}
                        className={`header-link${slug === child?.link?.link ? ' active' : ''}`}
                      >
                        {checkLang(child?.link?.title || '')}
                      </a>
                    </Link>
                  ))}
                  {/* REMOVED UNTIL ENGLISH VERSION IS AVAILABLE */}
                  {/* {showLangLink && (
                    <Link
                      href="/"
                      key={'lang-link'}
                      locale={t('change-lang-to')}
                    >
                      <a
                        onClick={closeMenu}
                        className={`header-link header-link--top`}
                      >
                        {t('lang-link')}
                      </a>
                    </Link>
                  )} */}
                  {showMenu && (
                    <button
                      className="link-btn text-xs"
                      onClick={closeMenu}
                    >
                      {t('close_menu')}
                    </button>
                  )}
                  <div
                    className="click-outside"
                    onClick={closeMenu}
                  ></div>
                </nav>
              </div>
            </FocusTrap>
          </div>
        </Container>
      </Innerdiv>
    </header>
  );
};
