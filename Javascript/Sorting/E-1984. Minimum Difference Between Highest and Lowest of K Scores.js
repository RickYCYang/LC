/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (k === 1 || nums.length === 1) return 0;
  nums.sort((a, b) => a - b);
  let minDiff = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i <= nums.length - k; i++) {
    const diff = nums[i + k - 1] - nums[i];
    minDiff = Math.min(minDiff, diff);
  }
  return minDiff;
};

const testCases = [
  {
    num: [90],
    k: 1,
    expected: 0,
  },
  {
    nums: [9, 4, 1, 7],
    k: 2,
    expected: 2,
  },
];

for (const testCase of testCases) {
  console.log(
    minimumDifference(testCase.nums, testCase.k) === testCase.expected
  );
}
