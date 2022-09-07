function minMaxGame(nums: number[]): number {
    let length = nums.length, lastNode = nums.length % 2 == 0 ? Infinity : nums[length - 1], result = recurr(nums, lastNode)
    return result[0]
};

function recurr(nums:number[], lastNode:number) : number[] {
    let altArray : number[] = [], isMin = true
    for(let i = 0; i < nums.length; i++) {
        if(i % 2 !== 0) {
            if(isMin) {
                if(altArray[altArray.length - 1] > nums[i]){
                    altArray[altArray.length - 1] = nums[i]
                }
                isMin = false
            }else{
                if(altArray[altArray.length - 1] < nums[i]){
                    altArray[altArray.length - 1] = nums[i]
                }
                isMin = true
            }
            
        }else{
            altArray.push(nums[i])
        }
    }
    
    if(altArray.length > 1) {
        console.log("Before Final", altArray)
        return recurr(altArray, lastNode)   
    }
    console.log("Final", altArray)
    return altArray
}