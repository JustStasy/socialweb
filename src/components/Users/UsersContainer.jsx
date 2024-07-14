import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Users from './usersAPIComponent';


export const UsersContainer = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch()
    return (
        <Users dispatch={dispatch} users={users} totalUsersCount={users.totalUsersCount}
            currentPage={users.currentPage} pageSize={users.pageSize} isFetching={users.isFetching} />
    )
}
