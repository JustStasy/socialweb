
import { MessagesReducer } from "./messagesReducer";
import { ProfilePageReducer } from "./profilePageReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { UsersReducer } from "./usersReduser";

const store = configureStore({
    reducer: combineReducers({
        messages: MessagesReducer.reducer,
        profile: ProfilePageReducer.reducer,
        users: UsersReducer.reducer,
    })
})


export { store };