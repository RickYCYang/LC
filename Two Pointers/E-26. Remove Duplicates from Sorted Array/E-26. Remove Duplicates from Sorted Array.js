/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let uniqueIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[uniqueIndex] !== nums[i]) {
      uniqueIndex++;
      nums[uniqueIndex] = nums[i];
    }
  }
  return uniqueIndex + 1; // unique items
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums)); // 5
console.log(nums); // [0,1,2,3,4]
