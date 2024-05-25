import React from 'react';
import styles from './Post.module.css';


const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src='https://i.ytimg.com/vi/IB6HFMODSR4/maxresdefault.jpg'></img>
            {props.message}
        </div>
    )
}

export default Post;