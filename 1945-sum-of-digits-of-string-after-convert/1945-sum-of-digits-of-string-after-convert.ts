function getLucky(s: string, k: number): number {
    let letterToNumberString = ""
    for(let i = 0; i < s.length; i++) {
        letterToNumberString += (s[i].charCodeAt(0) - 97 + 1).toString() 
    }
    return k > 0 ? recurr(letterToNumberString, k, 0) : parseInt(letterToNumberString)
};

function recurr(num:string, k:number, currentRound: number) : number {
    let sum = 0
    
    currentRound = currentRound + 1
    
    for(let i = 0; i < num.length; i++) {
        sum += parseInt(num[i])
    }
    
    if(k === currentRound){
        return sum
    }
    
    return recurr(sum.toString(), k, currentRound)
}