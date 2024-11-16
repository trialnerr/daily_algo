/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  const sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < m && rightIndex < n) {
    if (nums1[leftIndex] <= nums2[rightIndex]) {
      sortedArray.push(nums1[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(nums2[rightIndex]);
      rightIndex++;
    }
  }
  for (let i = rightIndex; i < n; i++) {
    sortedArray.push(nums2[i]);
  }
  for (let i = leftIndex; i < m; i++) {
    sortedArray.push(nums1[i]);
  }
  //see if you can recall why we did this.
  for (let i = 0; i < sortedArray.length; i++) {
    nums1[i] = sortedArray[i];
  }
  console.log(leftIndex, rightIndex);
  console.log(sortedArray);
};
