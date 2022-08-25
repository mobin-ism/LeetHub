function removeDuplicates(nums: number[]): number {
    let expectedNums:number[] = [], iteratedNumber:number
    nums.forEach((item,index) => {
        if(iteratedNumber != item){
            expectedNums.push(item)
            iteratedNumber = item
        }
        
        nums[expectedNums.length-1] = item
    })
    return expectedNums.length
};