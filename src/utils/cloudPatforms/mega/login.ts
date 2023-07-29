import { Storage, StorageOpts } from "megajs";
import { useDispatch, useSelector } from "react-redux";
import { MEGA_PLATFORM } from "../../../constants/cloud";
import { loginSuccess } from "../../../store/authReducer";
import { warnUser } from "../../utilities";

export async function MegaLogin(username: string, password:string, secondFactorCode?:string):Promise<boolean>{
    try{
        let loginDetails: StorageOpts = {
            email: username,
            password,
            userAgent: 'Chrome/1.0',
        }
        // if(secondFactorCode) loginDetails['secondFactorCode'] = secondFactorCode
        let storage = new Storage(loginDetails, err=>{
            if(err){
                throw Error("Login Failed")
            }
            else{
                warnUser('Login successful');
                useDispatch()(loginSuccess({token: JSON.stringify({username, password}), platform: MEGA_PLATFORM, newLogin: true}))
            }
        })

    }
    catch(e){
        warnUser("Couldn't login. Please try again")
    }
    return false;
}