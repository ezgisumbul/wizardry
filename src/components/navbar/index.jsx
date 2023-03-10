import { NavLink } from 'react-router-dom';
import './index.scss';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';
import { useState } from 'react';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={menuOpen ? 'navbar' : 'navbar-off'}>
      <div className="navbar-header">
        <button className="navbar-toggle" onClick={handleMenuToggle}>
          {!menuOpen ? (
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
        className={menuOpen ? 'navbar-link-wrapper' : 'navbar-link-wrapper-off'}
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
