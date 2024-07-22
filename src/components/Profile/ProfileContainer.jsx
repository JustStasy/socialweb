import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProfileAPIComponent from './ProfileAPIComponent';
import { useParams } from 'react-router-dom';

export const ProfileContainer = () => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const params = useParams();
    return (
        <ProfileAPIComponent dispatch={dispatch} profile={profile} userId={params.id}  />
    )
}
