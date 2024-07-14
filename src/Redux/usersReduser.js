import { createSlice } from "@reduxjs/toolkit"


const UsersReducer = createSlice({
    name: 'usersPage',
    initialState: {
        users: [],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false
    },
    reducers: {
        followActionCreator: (state, action) => {
            state.users = state.users.map(user => {
                if (user.id === action.payload) {
                    return { ...user, followed: true }
                }
                return user
            })
        },
        unfollowActionCreator: (state, action) => {
            state.users = state.users.map(user => {
                if (user.id === action.payload) {
                    return { ...user, followed: false }
                }
                return user
            })
        },
        setUsersActionCreator: (state, action) => {
            state.users = action.payload
        },
        setCurrentPageActionCreator: (state, action) => {
            state.currentPage = action.payload
        },
        setUsersTotalCountActionCreator: (state, action) => {
            state.totalUsersCount = action.payload
        },
        toggleIsFethingActionCreator: (state, action) => {
            state.isFetching = action.payload
        },
    }
})

export { UsersReducer }

export const { followActionCreator, unfollowActionCreator, setUsersActionCreator,
    setCurrentPageActionCreator, setUsersTotalCountActionCreator, toggleIsFethingActionCreator } = UsersReducer.actions