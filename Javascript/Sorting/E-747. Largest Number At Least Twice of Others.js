/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let [max, maxIdx] = [Number.MIN_SAFE_INTEGER, -1];
  let secondMax = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      secondMax = max;
      [max, maxIdx] = [nums[i], i];
      continue;
    }
    if (nums[i] < max && nums[i] > secondMax) secondMax = nums[i];
  }
  return max >= secondMax * 2 ? maxIdx : -1;
};
