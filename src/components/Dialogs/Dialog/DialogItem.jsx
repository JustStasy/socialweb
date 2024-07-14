import React from 'react';
import styles from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return <div>
        <NavLink className={styles.item + ' ' + styles.active} to={"/dialogs/1" + props.id}>{props.name}</NavLink>
    </div>
}

export default DialogItem;
