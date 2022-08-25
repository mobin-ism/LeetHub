function compareVersion(version1: string, version2: string): number {
    let splittedVersion1:string[] = [], splittedVersion2:string[] = [], maxLength:number
    splittedVersion1 = version1.split(".")
    splittedVersion2 = version2.split(".")
    
    maxLength = splittedVersion1.length > splittedVersion2.length ? splittedVersion1.length : splittedVersion2.length
    
    for(let i=0; i < maxLength; i++) {
        splittedVersion1[i] = splittedVersion1[i] ? splittedVersion1[i] : "0"
        splittedVersion2[i] = splittedVersion2[i] ? splittedVersion2[i] : "0"
        
        if(parseInt(splittedVersion1[i]) > parseInt(splittedVersion2[i])){
            return 1;
        }else if(parseInt(splittedVersion1[i]) < parseInt(splittedVersion2[i])){
            return -1;
        }
    }
    return 0
};