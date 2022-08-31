function isHappy(n: number): boolean {
    let occurrances : number[] = []
    return sqr(n.toString(), occurrances)
};


function sqr(nToString : string, occurrances : number[]) {
    let sum : number = 0
    
    for(let i=0; i<nToString.length; i++){
        sum = sum + parseInt(nToString[i]) * parseInt(nToString[i])
    }
    
    if(sum == 1){
        return true
    }
    
    if(occurrances.includes(sum)){
        console.log("Found!!! It is: ", sum)
        return false
    }else{
        occurrances.push(sum)
    }
    
    console.log(occurrances)
    
    return sqr(sum.toString(), occurrances)
}