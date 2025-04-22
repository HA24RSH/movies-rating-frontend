import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="/">EIGA</a>
        </div>
        <nav className="nav-links">
          <ul className="nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/anime">Anime</a></li>
            <li><a href="/movies">Movies</a></li>
            <li><a href="/series">Series</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
