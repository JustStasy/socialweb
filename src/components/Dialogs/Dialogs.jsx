import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './Dialog/DialogItem';
import Message from './Message/Message';
import { sendMessage, updateNewMessageBody } from '../../Redux/messagesReducer';
import { useDispatch, useSelector } from 'react-redux';

const Dialogs = () => {
    const messagesPage = useSelector((state) => state.messages);
    const dispatch = useDispatch()
    
    let dialogsElements = messagesPage.dialogs.map
        (d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = messagesPage.messages.map
        (m => <Message message={m.message} id={m.id} />)

    let newMessageBody = messagesPage.newMessageBody

    let onSendMessageClick = () => {
        dispatch(sendMessage())
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value
        dispatch(updateNewMessageBody(body))
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
