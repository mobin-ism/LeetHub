function runningSum(nums: number[]): number[] {
    let sumArray : number[] = [], sum = 0
    for(let i = 0; i < nums.length; i++){
        sum = sum + nums[i]
        sumArray.push(sum)
    }
    
    return sumArray
};