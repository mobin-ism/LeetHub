function containsDuplicate(nums: number[]): boolean {
    let occurrances : number[] = []
    for(let i = 0; i < nums.length; i++){
        if(occurrances.includes(nums[i])){
            return true
        }
        occurrances.push(nums[i])
    }
    return false
};
