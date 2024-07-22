import React from 'react';
import styles from './header.module.css';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return <header className={styles.header}>
        <img src='https://cdn-icons-png.flaticon.com/512/71/71295.png'></img>
        <div className={styles.loginBlock}>
            {props.auth.isAuth ? props.auth.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;