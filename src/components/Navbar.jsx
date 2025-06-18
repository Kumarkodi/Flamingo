import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <header className="navbar-header">
      <nav className="navbar container">
        <a href="#home" className="navbar-logo">
          <span>FLAMINGO <span className="big-infinity">∞</span></span> <span className="logo-subtext">DIGITAL MARKETING</span>
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item"><a href="home" className="nav-link" onClick={closeMenu}>Home</a></li>
          <li className="nav-item"><a href="AboutUs.jsx" className="nav-link" onClick={closeMenu}>About Us</a></li>
          <li className="nav-item"><a href="#our-work" className="nav-link" onClick={closeMenu}>Solutions</a></li>
          <li className="nav-item"><a href="#showcase" className="nav-link" onClick={closeMenu}>Showcase</a></li>
          <li className="nav-item"><a href="#contact-us" className="nav-link" onClick={closeMenu}>Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
