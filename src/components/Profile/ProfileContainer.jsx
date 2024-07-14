import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Profile from './ProfileAPIComponent';

export const ProfileContainer = () => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch()
    return (
        <Profile dispatch={dispatch} profile={profile}  />
    )
}
