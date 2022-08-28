function isPowerOfFour(n: number): boolean {
    while(n){
        if(n === 1){
            return true
        }
        
        n = reminder(n)
    }
    return false
};

function reminder(n:number) {
    return n%4 === 0 ? n/4 : 0
}