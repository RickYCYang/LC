/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  let n = nums.length;
  while (i < n) {
    if (nums[i] === val) {
      [nums[i], nums[n - 1]] = [nums[n - 1], nums[i]];
      n--;
    } else {
      i++;
    }
  }
  return n;
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;
console.log(removeElement(nums, val)); // 2
console.log(nums); //[2, 2, x, x]
