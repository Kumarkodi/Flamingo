import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close menu after clicking a link (optional but good for UX)
  const handleNavLinkClick = (e, pageName) => {
    e.preventDefault();
    setPage(pageName);
    setIsOpen(false); // Close the mobile menu after clicking a link
  };
  return (
    <header className="navbar-header">
      <nav className="navbar container">
        {/* Changed onClick to handleNavLinkClick for consistency and menu closing */}
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavLinkClick(e, 'home')}>
          <span>FLAMINGO <span className="big-infinity">∞</span></span> <span className="logo-subtext">DIGITAL MARKETING</span>
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item"><a href="#" onClick={(e) => handleNavLinkClick(e, 'home')} className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#" onClick={(e) => handleNavLinkClick(e, 'aboutus')} className="nav-link">About Us</a></li>
          <li className="nav-item"><a href="#" onClick={(e) => handleNavLinkClick(e, 'solutions')} className="nav-link">Solutions</a></li>
          <li className="nav-item"><a href="#" onClick={(e) => handleNavLinkClick(e, 'showcase')} className="nav-link">Showcase</a></li>
          <li className="nav-item"><a href="#" onClick={(e) => handleNavLinkClick(e, 'contactus')} className="nav-link">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
