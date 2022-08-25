function twoSum(nums: number[], target: number): number[] {
    let result : number[]
    nums.forEach((item, index) => {
        for(let i=index; i< nums.length-1; i++){
            if(item + nums[i+1] == target) {
                result = [index, i+1]
                break
            }
        }
    })
    return result
};