import React from 'react';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <div>
                    <NavLink to='/profile' activeClassName={styles.activeLink}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs' activeClassName={styles.activeLink}>Messanges</NavLink>
                </div>
                <div>
                    <NavLink to='/News' activeClassName={styles.activeLink}>News</NavLink>
                </div>
                <div>
                    <NavLink to='/Music' activeClassName={styles.activeLink}>Music</NavLink>
                </div>
                <div>
                    <NavLink to='/Settings' activeClassName={styles.activeLink}>Settings</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;