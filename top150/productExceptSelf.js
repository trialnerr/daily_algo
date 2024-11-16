/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (array) {
  let productArray;
  let zeroCount = 0;
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
    let product = 1;
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
    let product = 1;
    for (let i = 0; i < array.length; i++) {
      product *= array[i];
    }
    productArray = array.map((el) => product / el);
  }

  return productArray;
};
