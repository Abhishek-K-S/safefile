import { MutableFile, Storage, Nullable } from "megajs";
import { useDispatch, useSelector } from "react-redux";
import { SAFE_FILE_FOLDER } from "../../../constants/cloud";
import { logoutSuccess } from "../../../store/authReducer";
import { RootState } from "../../../store/store";
import { warnUser } from "../../utilities";
import cloudPlatform from "../cloudPlatform";

export type MegaFileType = {
    name: Nullable<string>, size: number|undefined
}

export class MEGA implements cloudPlatform{
    storage: Storage;
    constructor(storage: Storage){
        this.storage = storage
    }

    async listFiles(directory?: string): Promise<MegaFileType[]>{
        if(!useSelector((state: RootState)=>state.auth.authorized)) return [];
        let files: MegaFileType[] = [];
        if(!directory){
            directory = SAFE_FILE_FOLDER;
        }

        let folder = this.storage.root.children?.filter((ele: MutableFile)=>{
            return ele.directory && ele.name == directory
        })[0]

        if(folder){
            folder.children?.forEach(file =>{
                if(!file.directory) files.push({name: file.name, size: file.size})
            })
        }
        return files
    }
    async uploadFiles(filename: string, content: string): Promise<boolean>{
        if(!useSelector((state: RootState)=>state.auth.authorized)) return false;
        let folder = this.storage.root.children?.filter((child: MutableFile)=>{
            return child.name == SAFE_FILE_FOLDER && child.directory
        })

        try{
            if(!folder?.length){
                let folderCreated = await this.mkdir(SAFE_FILE_FOLDER)
                if(!folderCreated) return false;

                folder = this.storage.root.children?.filter((child: MutableFile)=>{
                    return child.name == SAFE_FILE_FOLDER && child.directory
                })
            }

            if(folder?.length && folder[0].directory){
                await folder[0].upload(filename, content)
            }
        }
        catch(e){
            return false;
        }
        return true;
    }
    async logout(): Promise<void>{
        this.storage.close()
        useDispatch()(logoutSuccess())
    }
    async mkdir(name: string): Promise<boolean>{
        if(!useSelector((state: RootState)=>state.auth.authorized)) return false;
        try{
            await this.storage.root.mkdir(name)
            return true;
        }
        catch(e){
            warnUser("Couldn't create remote folder")
        }
        return false;
    }
}