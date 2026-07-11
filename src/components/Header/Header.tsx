import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.scss';
import LanguageSwitcher from '../ui/LanguageSwitcher/LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>ЭЛКУС</h1>
          </Link>
        </div>

        <nav className="main-nav">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {t('menu.about')}
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {t('menu.products')}
          </NavLink>
          <NavLink
            to="/soft"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {t('menu.soft')}
          </NavLink>
          <NavLink
            to="/articles"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {t('menu.articles')}
          </NavLink>
          <NavLink
            to="/support"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {t('menu.support')}
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {t('menu.contacts')}
          </NavLink>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
