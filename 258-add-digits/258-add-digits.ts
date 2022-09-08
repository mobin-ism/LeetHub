function addDigits(num: number): number {
    let numToString = num.toString(), sum = 0
    
    if(numToString.length == 1) return parseInt(numToString)
    
    for(let i = 0; i < numToString.length; i++) {
        sum += parseInt(numToString[i])
    }
    
    return addDigits(sum)
};