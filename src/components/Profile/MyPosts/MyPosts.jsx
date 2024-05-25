import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            my post
            <div>
                new post
            </div>
            <div className={styles.posts}>
                <Post message="Hi, how are you?"/>
                <Post message="fantastic"/>
                <Post message="cocolastic"/>
            </div>
        </div>
    )
}

export default MyPosts;