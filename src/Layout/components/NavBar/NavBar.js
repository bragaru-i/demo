import React from 'react';

import styles from './NavBar.module.scss';
import Icon from '../../../icons/Icons';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.Navbar}>
        <div className={styles.logo}></div>
        <div className={styles.search}>
          <Icon name="search" width="2.4rem" fill="black" />
        </div>
        <ul className={styles.NavItems}>
          <li className={styles.NavItem}>Organizations </li>
          <li className={styles.NavItem}>Projects</li>
          <li className={styles.NavItem}>Data agents</li>
          <li className={styles.NavItem}>Persons</li>
        </ul>
        <div className={styles.login}>
          <span className={styles.loginIcon}>
            <Icon name="user" width="2.4rem" />
          </span>
          <span className={styles.loginUser}>Login</span>
          <span className={styles.loginLanguage}>中文</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
