function myAtoi(s: string): number {
    const maxRange = Math.pow(2, 31) - 1
    const minRange = Math.pow(-2, 31)
    
    if(parseInt(s)) {
        if(maxRange > parseInt(s) && parseInt(s) > minRange){
            return parseInt(s)
        }else if(parseInt(s) >= maxRange){
            return maxRange
        }else{
            return minRange
        }
    }
    
    return 0
}