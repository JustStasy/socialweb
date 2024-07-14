import React from 'react';
import Users from './Users';
import { setUsersTotalCountActionCreator, setCurrentPageActionCreator, unfollowActionCreator, followActionCreator, toggleIsFethingActionCreator } from '../../Redux/usersReduser';
import { setUsersActionCreator } from '../../Redux/usersReduser';
import axios from 'axios';



class usersAPIComponent extends React.Component {

    getUsers = () => {
        this.props.dispatch(toggleIsFethingActionCreator(true))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.dispatch(toggleIsFethingActionCreator(false))
            this.props.dispatch(setUsersActionCreator(response.data.items))
            this.props.dispatch(setUsersTotalCountActionCreator(response.data.totalCount))
        })
    }

    onPageChenged = (pageNumber) => {
        this.props.dispatch(setCurrentPageActionCreator(pageNumber))
        this.props.dispatch(toggleIsFethingActionCreator(true))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.dispatch(toggleIsFethingActionCreator(false))
            this.props.dispatch(setUsersActionCreator(response.data.items))
        })
    }

    render() {

        return <Users
            dispatch={this.props.dispatch}
            isFetching={this.props.isFetching}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChenged={this.onPageChenged}
            getUsers={this.getUsers}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollowActionCreator={unfollowActionCreator}
            followActionCreator={followActionCreator}
        />


    }
}

export default usersAPIComponent