import axios from 'axios';
import Header from './header';
import { setAuthUserDataActionCreator } from '../../Redux/authReduser';
import React from 'react';

class HeaderAPIComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me/`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data
                    this.props.dispatch(setAuthUserDataActionCreator({ id, email, login }))
                }
            })
    }
    render() {
        return <Header {...this.props} />

    }
}


export default HeaderAPIComponent; 