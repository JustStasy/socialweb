import React from 'react';
import Profile from './profile';
import { setUsersProfileActionCreator } from '../../Redux/profilePageReducer';
import axios from 'axios';
import {withRouter} from "react-router-dom"

class profileAPIComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            debugger
            this.props.dispatch(setUsersProfileActionCreator(response.data))
        })
    }
    debugger
    render() {
        return <div>
            <Profile {...this.props}
                profile={this.props.profile}
                dispatch={this.props.dispatch} />
        </div>
    }
}

let withUrlDataContainerComponent = withRouter(profileAPIComponent)

export default profileAPIComponent; 