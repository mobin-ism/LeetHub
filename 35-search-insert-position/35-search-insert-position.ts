function searchInsert(nums: number[], target: number): number {
    if(nums.indexOf(target) > -1) {
        return nums.indexOf(target)
    }
    
    let length = nums.length
    
    for(let i = length-1; i >= 0; i--) {
        if(nums[i] > target) {
            console.log("I am less than", i)
            continue
        }else{
            console.log("I am else")
            return i+1
        }
    }
    return 0
}