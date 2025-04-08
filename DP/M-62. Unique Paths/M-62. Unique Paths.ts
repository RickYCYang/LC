function uniquePaths(m: number, n: number): number {
  const dp: number[][] = new Array(m)
    .fill(null)
    .map((_) => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) dp[i][j] = 1;
      else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}

const testData = [
  { m: 3, n: 7, ans: 28 },
  { m: 3, n: 2, ans: 3 },
];

for (let data of testData) {
  console.log(data.ans === uniquePaths(data.m, data.n));
}
