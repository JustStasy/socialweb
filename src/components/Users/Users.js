import React from 'react';
import styles from './Users.module.css'
import girl from '../../imges/userImages/girl.webp'
import { NavLink } from 'react-router-dom';
import { Loader } from '../Common/Loader/Loader';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    if (props.isFetching) return <Loader />

    const usersComps = props.users.users.map(user => <div className={styles.userWrapper} key={user.id} >
        <div>
            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : girl} className={styles.userPhoto} />
            </NavLink>
        </div>
        <div className={styles.userInfo}>

            <div>{user.name}</div>
            <div>{user.status}</div>
            {user.followed ? <button onClick={() => { props.dispatch(props.unfollowActionCreator(user.id)) }}>Unfollow</button>
                : <button onClick={() => { props.dispatch(props.followActionCreator(user.id)) }}>Follow</button>}

        </div>
    </div>)

    return <div className={styles.wrapper}>
        <div className={styles.usersWrapper}>
            {usersComps}
        </div>
        <button onClick={props.getUsers}>Get Users</button>
        < div >
            {pages.map(page => {
                return <span className={props.users.currentPage === page && styles.selectPage}
                    onClick={(event) => { props.onPageChenged(page); }}>{page}</span>
            })}
        </div >
    </div>
}

export default Users