import { createSlice } from "@reduxjs/toolkit"

const ProfilePageReducer = createSlice({
    name: 'profilePage',
    initialState: {
        posts: [
            { id: 1, message: 'Hi, how are you?' },
            { id: 2, message: 'fantastic' },
            { id: 3, message: 'cocolastic' },
        ],
        newPostText: 'Create',
        profile: null
    },
    reducers: {
        addPostActionCreator: (state) => {
            state.posts.push({ id: 4, message: state.newPostText })
            state.newPostText = ''
        },
        updateNewPostTextActionCreator: (state, action) => {
            state.newPostText = action.newText
        },
        setUsersProfileActionCreator: (state, action) => {
            state.profile = action.payload
        }
    }
})

export { ProfilePageReducer }

export const { addPostActionCreator, updateNewPostTextActionCreator, setUsersProfileActionCreator } = ProfilePageReducer.actions