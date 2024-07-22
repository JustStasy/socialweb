import { createSlice } from "@reduxjs/toolkit"


const AuthReducer = createSlice({
    name: 'auth',
    initialState: {
        userId: null,
        email: null,
        login: null,
        isAuth: false
    },
    reducers: {
        setAuthUserDataActionCreator: (state, action) => {
            const {id, email, login} = action.payload;
            state.userId = id;
            state.email = email;
            state.login = login;
            state.isAuth = true;
            
        },
    }
})

export { AuthReducer }

export const { setAuthUserDataActionCreator } = AuthReducer.actions