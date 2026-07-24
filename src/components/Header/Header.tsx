import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.scss';
import LanguageSwitcher from '../ui/LanguageSwitcher/LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">
          <Link
            to="/"
            onClick={closeMenu}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <h1>ЭЛКУС</h1>
          </Link>
        </div>

        <button
          className={`burger-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
          <nav className="main-nav">
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {t('menu.about')}
            </NavLink>
            <NavLink
              to="/products"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {t('menu.products')}
            </NavLink>
            <NavLink
              to="/soft"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {t('menu.soft')}
            </NavLink>
            <NavLink
              to="/articles"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {t('menu.articles')}
            </NavLink>
            <NavLink
              to="/support"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {t('menu.support')}
            </NavLink>
            <NavLink
              to="/contacts"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {t('menu.contacts')}
            </NavLink>
          </nav>

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
