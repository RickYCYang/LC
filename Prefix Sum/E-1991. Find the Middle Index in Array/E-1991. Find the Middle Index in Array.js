/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  const total = nums.reduce((accu, num) => accu + num);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const rightSum = total - nums[i] - leftSum;
    if (rightSum === leftSum) return i;
    leftSum += nums[i];
  }
  return -1;
};
