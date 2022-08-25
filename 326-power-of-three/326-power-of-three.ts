function isPowerOfThree(n: number): boolean {
    while(n){
        if(n === 1){
            return true
        }
        
        n = reminder(n)
    }
    return false
};

function reminder(n:number) {
    return n%3 === 0 ? n/3 : 0
}