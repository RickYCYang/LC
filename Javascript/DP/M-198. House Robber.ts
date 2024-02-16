function rob(nums: number[]): number {
  const n = nums.length;
  const dp = new Array(n).fill(0);
  dp[0] = nums[0];
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max((dp[i - 2] || 0) + nums[i], dp[i - 1]);
  }
  return dp[n - 1];
}

const testData = [
  {
    nums: [1, 2, 3, 1],
    ans: 4,
  },
  {
    nums: [2, 7, 9, 3, 1],
    ans: 12,
  },
];

for (const data of testData) {
  console.log(data.ans === rob(data.nums));
}
