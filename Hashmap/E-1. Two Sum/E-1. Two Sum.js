/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const needNum = target - nums[i];
    if (needNum in numMap) return [numMap[needNum], i];
    numMap[nums[i]] = i;
  }

  return null;
};
