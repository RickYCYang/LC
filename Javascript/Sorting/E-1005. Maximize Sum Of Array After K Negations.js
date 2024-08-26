/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums.sort((a, b) => a - b);
    nums[0] = -nums[0];
  }
  return nums.reduce((accu, cur) => accu + cur, 0);
};
