import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './MenuIcon.scss';
import styles from './Header.module.scss';

import { LiaSun, LiaMoon } from "react-icons/lia";

import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
  const [navOpen, setNavOpen] = useState(false);
  const [theme, setTheme] = useState(true);

  const ToggleClass = () => {
    setNavOpen(!navOpen); 
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  const ToggleTheme = () => {
    document.body.classList.toggle('light');
    setTheme(!theme);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>

        <div className={styles.headerLogo}>
          <Link to="/">
            <h1 className={styles.logo}>Aljoša<span>R</span></h1>
          </Link>
        </div>

        <nav
          className={`${styles.nav} ${navOpen ? styles.active : ""} ${theme ? styles.dark : styles.light}`}
          aria-label="Main Navigation"
        >
          <ul className={styles.navList}>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')} end onClick={closeNav}>
                {t('navigation.home')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => (isActive ? styles.active : '')} onClick={closeNav}>
                {t('navigation.services')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" className={({ isActive }) => (isActive ? styles.active : '')} onClick={closeNav}>
                {t('navigation.resume')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/work" className={({ isActive }) => (isActive ? styles.active : '')} onClick={closeNav}>
                {t('navigation.work')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.btn}`} onClick={closeNav}>
                {t('navigation.contact')}
              </NavLink>
            </li>
          </ul>

          <div className={styles.switchWrapper} aria-label="Switch Theme" onClick={ToggleTheme}>
            <button className={styles.switch}>
              {theme ? <LiaMoon /> : <LiaSun />}
            </button>
            <span className={styles.switchText}>
              {theme ? t('navigation.darkMode') : t('navigation.lightMode')}
            </span>
          </div>
        </nav>

        <button className={styles.menuButton} aria-label="Toggle Menu" onClick={ToggleClass}>
          <div className={`menu-icon ${navOpen ? "menu-icon--close-x" : ""}`}>
            <div className="menu-icon-middle"></div>
          </div>
        </button>

      </div>
    </header>
  );
}

export default Header;
