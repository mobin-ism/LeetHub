function isSubsequence(s: string, t: string): boolean {
    let checker : string = ""
    
    if(t.includes(s)) return true
    
    for(let i = 0; i < t.length; i++) {
        if(s.includes(t[i]) && checker.indexOf(t[i]) == -1 || s[checker.length] == t[i]){
            checker = checker + t[i]
        }
    }
    return checker == s ? true : false
};