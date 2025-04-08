/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // Base condition...
  if (nums.length <= 1) return true;

  let maxNextStep = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (i >= maxNextStep && nums[i] === 0) return false;

    if (i + nums[i] > maxNextStep) {
      maxNextStep = i + nums[i];
    }

    if (maxNextStep >= nums.length - 1) return true;
  }

  return false;
};

const testData = [
  [2, 3, 1, 1, 4], // true
  [3, 2, 1, 0, 4], // false
  [0], //true
  [2, 0], //true
  [5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0], // true
  [4, 2, 0, 0, 1, 0, 4, 4, 4, 0, 4, 0], // true
];

for (const data of testData) {
  console.log(canJump(data));
}
