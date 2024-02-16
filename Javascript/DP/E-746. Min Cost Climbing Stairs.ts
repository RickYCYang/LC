function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;
  const dp = new Array(n + 1).fill(0);
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[n];
}

const testData = [
  { cost: [10, 15, 20], ans: 15 },
  { cost: [1, 100, 1, 1, 1, 100, 1, 1, 100, 1], ans: 6 }, //  [0, 0, 1, 2, 2, 3, 3, 4, 4, 5, 6]
];

for (const data of testData) {
  console.log(data['ans'] === minCostClimbingStairs(data['cost']));
}
