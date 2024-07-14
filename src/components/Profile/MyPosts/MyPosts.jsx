import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profilePageReducer';

const MyPosts = () => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch()

    let postsElements = profile?.posts?.map
        (p => <Post message={p.message} id={p.id} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text)
        dispatch(action)
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={profile.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}> Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;