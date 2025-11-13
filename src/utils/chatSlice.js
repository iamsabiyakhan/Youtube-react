import {createSlice} from '@reduxjs/toolkit'
import { LIVE_CHAT_COUNT } from './constants'

const chatSlice  = createSlice({
    name:"chat",
    initialState:{
        message :[],
    },
    reducers:{
        addMessage:(state,action)=>{
            state.message.splice(LIVE_CHAT_COUNT,1) // to keep only last 10 messages
            state.message.unshift(action.payload)
        }   
    }
})
export const{addMessage} = chatSlice.actions
export default chatSlice.reducer