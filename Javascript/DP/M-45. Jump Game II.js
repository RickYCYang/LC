/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const size = nums.length;
  const destination = size - 1;
  let curCoverage = 0;
  let lastJumpIdx = 0;
  let timesOfJump = 0;

  if (size <= 1) return 0;

  for (let i = 0; i < size; i++) {
    curCoverage = Math.max(curCoverage, nums[i] + i);

    if (lastJumpIdx === i) {
      lastJumpIdx = curCoverage;
      timesOfJump++;

      if (curCoverage >= destination) {
        return timesOfJump;
      }
    }
  }

  return timesOfJump;
};

const testData = [
  [0], //0
  [2, 3, 1, 1, 4], //2
  [2, 3, 0, 1, 4], //2
  [2, 1], // 1
  [1, 2, 3], //2
];

for (const data of testData) {
  console.log(jump(data));
}
