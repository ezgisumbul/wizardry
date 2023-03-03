import { Link } from 'react-router-dom';
import './index.scss';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-link navbar-logo" to="/">
        <img src="/logo.png" alt="home" className="navbar-logo-img" />
      </Link>
      <div className="navbar-link-wrapper">
        <Link className="navbar-link" to="/spells">
          Spells
        </Link>
        <Link className="navbar-link" to="/potions">
          Potions
        </Link>
        <Link className="navbar-link" to="/movies">
          Movies
        </Link>
        <Link className="navbar-link" to="/books">
          Books
        </Link>
        <Link className="navbar-link" to="/movies">
          Characters
        </Link>
      </div>
    </nav>
  );
};
