import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="navbar">
        <div className="navbar__logo">
          <NavLink to="/">My Logo</NavLink>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon">{menuOpen ? '✖' : '☰'}</span>
        </button>
        <nav className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/signin" 
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={() => setMenuOpen(false)}>
                SignIn
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/blog" 
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={() => setMenuOpen(false)}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/product" 
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={() => setMenuOpen(false)}>
                Product
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* // use outlet for header separate css design from child */}
      <Outlet />
    </>
  );
};

export default Header;

