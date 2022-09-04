function canJump(nums: number[]): boolean {
    let goToIndex = nums.length - 1, goalIndex = 0
    for(let i = goToIndex; i >= 0; i--){
        if(i + nums[i] >= goToIndex){
            goToIndex = i
        }
        if(goToIndex == goalIndex) return true
    }
    return false
};