import React from 'react';
import Profile from './profile';
import { setUsersProfileActionCreator } from '../../Redux/profilePageReducer';
import axios from 'axios';

class ProfileAPIComponent extends React.Component {

    componentDidMount() {
        debugger
        let userId = this.props.userId
        if (!userId) { userId = 2 }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.dispatch(setUsersProfileActionCreator(response.data))
            })
    }
    render() {
        return <div>
            <Profile {...this.props}
                profile={this.props.profile}
                dispatch={this.props.dispatch} />
        </div>
    }
}


export default ProfileAPIComponent; 