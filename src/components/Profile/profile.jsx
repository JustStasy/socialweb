import React from 'react';
import styles from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';


const Profile = (props) => {

    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPosts />
    </div>
}

export default Profile; 