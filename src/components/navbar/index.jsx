import { NavLink } from 'react-router-dom';
import './index.scss';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';
import { useEffect, useLayoutEffect, useState } from 'react';
import cx from 'clsx';
import { FaHatWizard } from 'react-icons/fa';
import { RxMagicWand } from 'react-icons/rx';
import { GiBookshelf } from 'react-icons/gi';
import { GiPotionBall } from 'react-icons/gi';
import { TbMovie } from 'react-icons/tb';

// document.doucmentElement is html element
const html = document.documentElement;
const PREVENT_SCROLL_CLASS = 'prevent-scrolling';
const NAVBAR_LINK = [
  { link: 'Spells', icon: RxMagicWand },
  { link: 'Potions', icon: GiPotionBall },
  { link: 'Movies', icon: TbMovie },
  { link: 'Books', icon: GiBookshelf },
  { link: 'Characters', icon: FaHatWizard }
];

export const Navbar = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [shrinkNavbar, setShrinkNavbar] = useState(false);

  const handleMenuToggle = () => {
    // when negating a state always call an anonymous function so that we make sure that the state is updated
    setBurgerMenuOpen(() => !burgerMenuOpen);
  };

  const handleLinkSelection = () => {
    setBurgerMenuOpen(false);
  };

  const checkScroll = () => {
    const deltaY =
      window.scrollY ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
    // console.log({ deltaY });

    if (deltaY > 0) {
      setShrinkNavbar(true);
    } else {
      setShrinkNavbar(false);
    }
  };
  useEffect(() => {
    // we should still keep this to prevent scroll event to be added on every occasion and limit it to a screensize
    if (window.innerWidth >= 760 && window.innerWidth <= 1000) {
      window.addEventListener('scroll', checkScroll);
    }

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  useEffect(() => {
    if (burgerMenuOpen) {
      html.classList.add(PREVENT_SCROLL_CLASS);
    } else {
      html.classList.remove(PREVENT_SCROLL_CLASS);
    }
    // this return is executed only when the component is unmounted
    return () => html.classList.remove(PREVENT_SCROLL_CLASS);
  }, [burgerMenuOpen]);

  useLayoutEffect(() => {});

  return (
    <nav
      className={cx('navbar', {
        'navbar--open': burgerMenuOpen,
        'navbar--shrink': shrinkNavbar
      })}
    >
      <div className="navbar-header">
        <button className="navbar-toggle" onClick={handleMenuToggle}>
          {!burgerMenuOpen ? (
            <RxHamburgerMenu
              style={{
                color: 'rgb(189, 185, 165)',
                width: '1.4rem',
                height: '1.4rem'
              }}
            />
          ) : (
            <TfiClose
              style={{
                color: 'rgb(189, 185, 165)',
                width: '1.4rem',
                height: '1.4rem'
              }}
            />
          )}
        </button>

        <NavLink
          className="navbar-link navbar-logo"
          to="/"
          onClick={handleLinkSelection}
        >
          <img src="/logo.png" alt="home" className="navbar-logo-img" />
        </NavLink>
      </div>

      <div
        className={cx('navbar-link-wrapper', {
          'navbar-link-wrapper--open': burgerMenuOpen
        })}
      >
        {NAVBAR_LINK.map((navbarLink, index) => {
          const Icon = navbarLink.icon;
          return (
            <NavLink
              key={index}
              className="navbar-link"
              to={`/${navbarLink.link.toLowerCase()}`}
              onClick={handleLinkSelection}
            >
              <Icon className="navbar-link-icon"></Icon>
              {navbarLink.link}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

// max size 600/700 prevent the link click on the card and instead rotate the card still. on card-back there is a "go to detail page" button.
