/**
 Do not return anything, modify nums1 in-place instead.
 */

function bubbleSort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let nums1Alt =[], max = m > n ? m : n
    for(let i = 0; i < max; i++) {
        if(nums1[i] !== undefined && m > 0 && i < m){
            nums1Alt.push(nums1[i])        
        }
        if(nums2[i] !== undefined && n > 0 && i < n){
            nums1Alt.push(nums2[i])        
        }
    }
    
    
    let test = bubbleSort(nums1Alt)
    test.forEach((element, index) => {
      nums1[index] = element
    })
};