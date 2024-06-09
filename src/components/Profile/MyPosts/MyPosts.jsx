import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

    let post = [
        { id: 1, message: 'Hi, how are you?' },
        { id: 2, message: 'fantastic' },
        { id: 3, message: 'cocolastic' },
    ]

    let postsElements=post.map
    (p => <Post message={p.message} id={p.id}/>)

    return (
        <div className={styles.postsBlock}>
            my post
            <div>
                new post
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;