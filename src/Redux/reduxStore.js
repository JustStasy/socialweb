
import { MessagesReducer } from "./messagesReducer";
import { ProfilePageReducer } from "./profilePageReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { UsersReducer } from "./usersReduser";
import { AuthReducer } from "./authReduser";

const store = configureStore({
    reducer: combineReducers({
        messages: MessagesReducer.reducer,
        profile: ProfilePageReducer.reducer,
        users: UsersReducer.reducer,
        auth: AuthReducer.reducer,
    })
})


export { store };