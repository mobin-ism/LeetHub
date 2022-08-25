function canConstruct(ransomNote: string, magazine: string): boolean {
    let usedCharacterIndex: number[] = []
    
    for(let i = 0; i < ransomNote.length; i++) {
        if(magazine.includes(ransomNote[i])){
            magazine = magazine.substring(0, magazine.indexOf(ransomNote[i])) + magazine.substring(magazine.indexOf(ransomNote[i]) + 1)
        }else{
            return false
        }    
    }
    return true
};