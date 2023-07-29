import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_TOKEN } from "../constants/storage";
import { errorHandler } from "../utils/utilities";


async function getItem(item: string): Promise<string|null> {
    let token: string|null = null;
    try{
        token = await AsyncStorage.getItem(item)
        return token
    }
    catch(e){
        console.error('Error fetching value')
    }
    return null
}

async function setItem(key: string, item: string): Promise<boolean> {
    try{
        AsyncStorage.setItem(key, item);
        return true;
    }
    catch(e){
        console.error('Error saving the values ', key, item);
        errorHandler(key)
    }
    return false;
}

export function getUserToken(): Promise<string|null>{
    return getItem(USER_TOKEN)
}

export async function setUserToken(token: string|null):Promise<boolean>{
    if(token == null) {
        await AsyncStorage.removeItem(USER_TOKEN);
        return true;
    }
    return setItem(USER_TOKEN, token)
}