import React from 'react';
import styles from './ProfileInfo.module.css';
import { Loader } from '../../Common/Loader/Loader';


const ProfileInfo = (props) => {
    console.log(props)
    if (!props.profile?.profile) {
        return <div>
            <Loader/>
            </div>
    }

    return <div className={styles.wrapper}>
        <div>
            <img className={styles.profileImg} src='https://klike.net/uploads/posts/2019-11/1572606539_23.jpg'></img>
        </div>
        <div>
            <img src={props.profile.profile.photos.large} />
            {/* <img className={styles.userPhoto} src='https://media.istockphoto.com/id/1361394182/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D0%B1%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%BE%D1%88%D0%B5%D1%80%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%B2%D1%8B%D0%B3%D0%BB%D1%8F%D0%B4%D1%8F%D1%89%D0%B8%D0%B9-%D1%88%D0%BE%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B8%D0%BB%D0%B8-%D1%83%D0%B4%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC.jpg?s=612x612&w=0&k=20&c=yEEyxvdyb-jUxnHmr8nXSf9qQPS0WfkhBITLVIaj7OY='></img> */}
        </div>
    </div>
}

export default ProfileInfo; 