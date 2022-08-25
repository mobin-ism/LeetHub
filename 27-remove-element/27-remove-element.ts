function removeElement(nums: number[], val: number): number {
    let arrayLen = nums.length
    nums.forEach(function(item,index) {
        if(item === val) {
            nums.splice(nums.indexOf(item), 1)
            nums.push(item)
        }else{
            nums[index] = item
        }
    })
    
    return nums.indexOf(val) > -1 ? arrayLen-nums.splice(nums.indexOf(val), nums.length).length : nums.length
}