import React from 'react';
import Header from './header';
import HeaderAPIComponent from './headerAPIComponent';
import { useDispatch, useSelector } from 'react-redux';

export const HeaderContainer = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return (
        <HeaderAPIComponent auth={auth} dispatch={dispatch} />
    )
}


export default HeaderContainer;