import React from 'react';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const links = [
        {
            to: '/profile',
            label: 'Profile'
        },
        {
            to: '/dialogs',
            label: 'Messages'
        },
        {
            to: '/news',
            label: 'News'
        },
        {
            to: '/music',
            label: 'Music'
        },
        {
            to: '/settings',
            label: 'Settings'
        },
        {
            to: '/users',
            label: 'Users'
        },
    ]

    return (
        <nav className={styles.nav}>
            {links.map(el => <div>
                <NavLink to={el.to} className={({ isActive }) => styles.link + ' ' + (isActive ? styles.active : undefined)}>
                    <div className={styles.linkContent}>
                        {el.label}
                    </div>
                </NavLink>
            </div>)}
        </nav>
    )
}

export default NavBar;