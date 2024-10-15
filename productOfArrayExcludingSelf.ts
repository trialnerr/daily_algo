// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
// Each product is guaranteed to fit in a 32-bit integer.
// Follow-up: Could you solve it in O(n) time without using the division operation?

// Example 1:
// Input: nums = [1,2,4,6]
// Output: [48,24,12,8]

// Example 2:
// Input: nums = [-1,0,1,2,3]
// Output: [0,-6,0,0,0]

//Example 3
// Input: nums = [-1,0,1, 0 ,3]
// Output: [0, 0,0,0,0]

const productExcludingSelf = (array: number[]): number[] => {
  let productArray: number[];
  let zeroCount: number = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) zeroCount++;
  }
  //if there are more than two zeros, return all zeros
  if (zeroCount > 1) {
    productArray = new Array(array.length).fill(0);
  }
  //if the array contains a zero everything except itself would be 0 and the product of everything else for the zero index
  else if (zeroCount === 1) {
    const zeroIndex = array.indexOf(0); 
    let product: number = 1; 
    for (let i = 0; i < array.length; i++) {
      if (i === zeroIndex) continue; 
      else product *= array[i];
    }
    productArray = new Array(array.length).fill(0);
    productArray[zeroIndex] = product; 
  }
  //if there are no zeros
  //multiply all the numbers by each other
  //loop through the array and then when you encounter a number divide the product by that num
  else {
    let product: number = 1;
    for (let i = 0; i < array.length; i++) {
      product *= array[i];
    }
    productArray = array.map((el) => product / el);
  }

  return productArray;
}


//write the tests here: 
console.log(productExcludingSelf([1, 2, 4, 6])); // [48, 24, 12, 8]
console.log(productExcludingSelf([-1, 0, 1, 2, 3])); // [0, -6, 0, 0, 0]
console.log(productExcludingSelf([-1, 0, 1, 0, 3])); // [0, 0, 0, 0, 0]
console.log(productExcludingSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExcludingSelf([1, 2, 3, 0])); // [0, 0, 0, 6]

//great work. Come back and optimize this solution. You can do it! <3