interface cloudPlatform {
    listFiles: (directory?: string)=>Promise<any[]>,
    uploadFiles: (filename: string, content: string)=>Promise<boolean>,
    logout: ()=>Promise<void>,
    mkdir: (name: string)=>Promise<boolean>
}

export default cloudPlatform