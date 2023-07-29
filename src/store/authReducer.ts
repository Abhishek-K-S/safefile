import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setGestureState } from "react-native-reanimated";
import { setUserToken } from "./storage";

const initialState = {
    authorized: false,
    loginPlatform: "",
    username: "",
    password: ""
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<any>)=>{
            // state.authorized = true
            // state.username = action.payload.username
            // state.password = action.payload.password
            // state.loginPlatform = action.payload.platform
            setLocalValues(action.payload)
            if(action.payload.newLogin) setUserToken(action.payload.token)
        },
        logoutSuccess: (state) =>{
            state.authorized = false
            state.username = ""
            state.password = ""
            state.loginPlatform = ""
            setUserToken(null)
        },
        setLocalValues: (state, action) =>{
            state.authorized = true,
            state.username = JSON.parse(action.payload.token.username)
            state.password = JSON.parse(action.payload.token.password)
            state.loginPlatform = action.payload.platform
        }
    }

})

export default AuthSlice

export const { loginSuccess, logoutSuccess, setLocalValues } = AuthSlice.actions