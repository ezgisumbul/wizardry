import { NavLink } from 'react-router-dom';
import './index.scss';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';
import { useEffect, useState } from 'react';
import cx from 'clsx';

export const Navbar = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [shrinkNavbar, setShrinkNavbar] = useState(false);

  const handleMenuToggle = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  const checkScroll = () => {
    const deltaY = window.pageYOffset;
    // ||
    // (document.documentElement || document.body.parentNode || document.body)
    //   .scrollTop;
    console.log({ deltaY });

    if (deltaY > 180) {
      setShrinkNavbar(true);
    } else {
      setShrinkNavbar(false);
    }
  };
  useEffect(() => {
    if (
      window.innerWidth >= 760
      // && window.innerWidth <= 1000
    ) {
      window.addEventListener('scroll', checkScroll);
    }

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

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

        <NavLink className="navbar-link navbar-logo" to="/">
          <img src="/logo.png" alt="home" className="navbar-logo-img" />
        </NavLink>
      </div>

      <div
        className={cx('navbar-link-wrapper', {
          'navbar-link-wrapper--open': burgerMenuOpen
        })}
      >
        <NavLink className="navbar-link" to="/spells">
          Spells
        </NavLink>
        <NavLink className="navbar-link" to="/potions">
          Potions
        </NavLink>
        <NavLink className="navbar-link" to="/movies">
          Movies
        </NavLink>
        <NavLink className="navbar-link" to="/books">
          Books
        </NavLink>
        <NavLink className="navbar-link" to="/characters">
          Characters
        </NavLink>
      </div>
    </nav>
  );
};

// max size 600/700 prevent the link click on the card and instead rotate the card still. on card-back there is a "go to detail page" button.
