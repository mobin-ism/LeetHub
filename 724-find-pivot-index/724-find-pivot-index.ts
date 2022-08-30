function getPivotIndex(centerIndex:number, nums: number[]) {
    let sum1 = 0, sum2 = 0
    for(let i = centerIndex+1; i < nums.length; i++) {
        sum1 = sum1 + nums[i]
    }
    for(let i = centerIndex - 1; i >= 0; i--){
        sum2 = sum2 + nums[i]
    }
    console.log(sum1)
    console.log(sum2)
    if(sum2 == sum1){
        console.log("Got the pivot", centerIndex)
        return centerIndex
    }else{
        if(centerIndex == nums.length - 1){
            console.log("I am done!")
            return -1
        }
        
        console.log("Move pivot to the right", centerIndex+1)
        return getPivotIndex(centerIndex + 1, nums)
    }
}

function pivotIndex(nums: number[]): number {
    // let centerIndex = Math.ceil(nums.length / 2) - 1
    let centerIndex = 0
    console.log({centerIndex})
    return getPivotIndex(centerIndex, nums)
};