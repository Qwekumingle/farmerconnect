import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    if (menuActive) {
      setMenuActive(false);
    }
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <FontAwesomeIcon icon={faLeaf} /> FarmConnect
        </div>
        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          <li><a href="#features" onClick={closeMenu}>Features</a></li>
          <li><a href="#how-it-works" onClick={closeMenu}>How It Works</a></li>
          <li><a href="#testimonials" onClick={closeMenu}>Testimonials</a></li>
          <li><a href="#" className="btn btn-secondary" onClick={closeMenu}>Login</a></li>
          <li><a href="#" className="btn" onClick={closeMenu}>Sign Up</a></li>
        </ul>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuActive ? faTimes : faBars} />
        </button>
      </nav>
    </header>
  );
};

export default Header;