import { ToastAndroid } from "react-native"
import { USER_TOKEN } from "../constants/storage"

export const warnUser = (message: string): void =>{
    if(message.length)
        ToastAndroid.show(message, ToastAndroid.TOP)
}

export const errorHandler = (key:string):void => {
    switch(key){

        case USER_TOKEN: warnUser("Couldn't save credentials. The session will be cleared once the app is restarted.");break;

        default: ;
    }
}