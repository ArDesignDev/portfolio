import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './MenuIcon.scss';
import styles from './Header.module.scss';

function Header() {

  const [navOpen, setNavOpen] = useState(false);

  const ToggleClass = () => {
    setNavOpen(!navOpen); 
  };

  const closeNav = () => {
    setNavOpen(false);
  }

  return (
    <header className={styles.header}>
        <div className={styles.headerInner}>

            <div className={styles.headerLogo}>
                <Link to="/">
                    <h1 className={styles.logo}>Aljoša<span>R</span> </h1>
                </Link>
            </div>

            <nav className={`${styles.nav} ${navOpen ? styles.active : ""}`}  aria-label="Main Navigation">
                <ul className={styles.navList}>
                    <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')} end onClick={closeNav}>
                        Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/services" className={({ isActive }) => (isActive ? styles.active : '')} onClick={closeNav}>
                        Services
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/resume"className={({ isActive }) => (isActive ? styles.active : '')} onClick={closeNav}>
                        Resume
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/work" className={({ isActive }) => (isActive ? styles.active : '')} onClick={closeNav}>
                        Work
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/contact" className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.btn}`} onClick={closeNav}>
                        Contact
                    </NavLink>
                    </li>
                </ul>
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
