function wordPattern(pattern: string, s: string): boolean {
    let splittedString = s.split(" "), patternChecker = [], splittedStringChecker = []
    
    if(splittedString.length == pattern.length) {
        for(let i = 0; i < pattern.length; i++){
            patternChecker.push(pattern.indexOf(pattern[i]))
            splittedStringChecker.push(splittedString.indexOf(splittedString[i]))
        }
        if(splittedStringChecker.toString() === patternChecker.toString()){
            return true
        }
    }
    
    return false
};