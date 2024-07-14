import { createSlice, configureStore } from '@reduxjs/toolkit'

const MessagesReducer = createSlice({
    name: 'messages',
    initialState: {
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'Hello' },
            { id: 3, message: 'How are you?' },
        ],
        newMessageBody: "",
        dialogs: [
            { id: 1, name: 'Nikolay' },
            { id: 2, name: 'Lolla' },
            { id: 3, name: 'Rosa' },
            { id: 4, name: 'Antonio' }
        ]
    },
    reducers: {
        updateNewMessageBody: (state, action) => {
            state.newMessageBody = action.payload
        },
        sendMessage: (state) => {
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({ id: 4, message: body })
        }
    }
})

export { MessagesReducer }

export const { updateNewMessageBody, sendMessage } = MessagesReducer.actions

