import React from 'react';
import styles from'./NavBar.module.css';

const NavBar = () => {
    return <nav className={styles.nav}>
        <div className={styles.item}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messanges</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </div>
    </nav>
}

export default NavBar;