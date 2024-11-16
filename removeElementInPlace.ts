// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

//     Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
//     Return k

function removeElement(nums: number[], val: number): number {
  //start with two pointers l and r
  let l: number = 0;
  let r: number = nums.length - 1;
  while (l < r) {
    if (nums[r] == val) {
      r--;
      continue;
    }

    if (nums[l] == val) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
      r--;
    } else {
      l++;
    }
  }
  if (l == r) {
    return nums[r] == val ? r : r + 1;
  }
  return r + 1;
}


