function sortedSquares(nums: number[]): number[] {
    let squaredArray = nums.map((item, index) => {
      return item * item
    })
    
    // return squaredArray.sort() // WEIRD!!!
    return squaredArray.sort(function (a, b) {  return a - b;  })
};