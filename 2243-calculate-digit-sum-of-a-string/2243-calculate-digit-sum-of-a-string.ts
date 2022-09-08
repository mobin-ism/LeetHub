function digitSum(s: string, k: number): string {
    return recurr(s,k)
}

function recurr(s:string, k:number): string {
    let subS : string[] = [], stringPart : string = ""
    
    if(s.length <= k) return s
    
    for(let i = 0; i < s.length; i = i+k) {
        let sum = 0
        stringPart = s.substr(i, k)
        for(let j = 0; j < stringPart.length; j++) {
            sum = sum + parseInt(stringPart[j])
        }
        subS.push(sum.toString())
    }
    return recurr(subS.join(''), k)
}