function triangularSum(nums: number[]): number {
    let length = nums.length, result = recurr(nums)
    return length > 1 ? recurr(nums)[0] : nums[0]
};

function recurr(nums:number[]) : number[] {
    let altArray : number[] = []
    for(let i = 0; i < nums.length - 1; i++) {
        let firstValue = nums [i], lastValue = nums [i+1] > 0 ? nums [i+1] : 0, sum = (firstValue + lastValue) > 9 ? (firstValue + lastValue) % 10 : firstValue + lastValue
        altArray[i] = sum
    }
    if(altArray.length > 1) {
        return recurr(altArray)   
    }
    
    console.log("Final", altArray)
    return altArray
}