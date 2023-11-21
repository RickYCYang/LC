function numberOfArithmeticSlices(nums: number[]): number {
  const n = nums.length;
  const dp = Array(n).fill(0);
  let sum = 0;

  for (let i = 2; i < n; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      dp[i] = dp[i - 1] + 1;
      sum += dp[i];
    }
  }

  return sum;
}

const testData = [
  {
    nums: [1, 2, 3, 4],
    ans: 3,
  },
  {
    nums: [1],
    ans: 0,
  },
];

for (const data of testData) {
  console.log(data.ans === numberOfArithmeticSlices(data.nums));
}
