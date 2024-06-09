import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return <div className={styles.item + '' + styles.active}>
        <NavLink to={"/dialogs/1" + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={styles.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Nikolay' },
        { id: 2, name: 'Lolla' },
        { id: 3, name: 'Rosa' },
        { id: 4, name: 'Antonio' }
    ]

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'How are you?' },
    ]

    let dialogsElements = dialogs.map
        (d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = messages.map
        (m => <Message message={m.message} id={m.id} />)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div> 
    )
}

export default Dialogs;
