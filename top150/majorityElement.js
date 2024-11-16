/**
 * @param {number[]} nums
 * @return {number}
 */

const majorityElement = function (nums) {
  let result = nums[0];
  let majority = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    if (majority != 0) {
      majority += currentNum === result ? 1 : -1;
    } else {
      result = currentNum;
      majority++;
    }
  }
  return result;
};
