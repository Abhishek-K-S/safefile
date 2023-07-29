import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { warnUser } from "../utils/utilities"
import cloudPlatform from '../utils/cloudPatforms/cloudPlatform'

const initialState: {platformObj: null | cloudPlatform} = {
    platformObj: null,
}

const cloudPlatformSlice = createSlice({
    name: 'cloudPlatfrom',
    initialState,
    reducers: {
        addPlatform: (state, action: PayloadAction<cloudPlatform>)=>{
            if(state.platformObj){
                warnUser('User already loged in');
            }
            else{
                state.platformObj = action.payload
            }
        },
        removePlatform: (state)=>{
            state.platformObj = null
        }
    }
})

export default cloudPlatformSlice;

export const { addPlatform, removePlatform } = cloudPlatformSlice.actions