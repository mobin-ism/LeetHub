let arr:any[] = [] 

function ways(sum:number, stairs:number, n:number) : number {
    sum = sum + stairs
    if(sum >= n) {
        if(sum === n)
            return 1
        else
            return 0
    }
    if(arr[sum][stairs] !== -1){
     return arr[sum][stairs]
    }
    let left = ways(sum, 1, n)
    let right = ways(sum, 2, n)
    arr[sum][stairs] = left + right
    return arr[sum][stairs]
}


function climbStairs(n: number): number {
    
    for(let i = 0; i < 50; i++) {
        arr[i] = [-1, -1, -1]
    }
    
    return ways(0, 1, n) + ways(0, 2, n)
};