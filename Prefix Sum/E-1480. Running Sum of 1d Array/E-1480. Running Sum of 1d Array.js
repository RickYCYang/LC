/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const result = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    const sum = nums[i] + result[i - 1];
    result.push(sum);
  }
  return result;
};
