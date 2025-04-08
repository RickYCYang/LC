function numTilings(n: number): number {
  const mod = 1e9 + 7;
  const dp = new Array(n).fill(0);
  [dp[0], dp[1], dp[2]] = [1, 2, 5];
  for (let i = 3; i <= n; i++) {
    dp[i] = (2 * dp[i - 1] + dp[i - 3]) % mod;
  }
  return dp[n - 1];
}

const testData = [
  {
    n: 3,
    ans: 5,
  },
  {
    n: 1,
    ans: 1,
  },
  { n: 5, ans: 24 },
];

for (const data of testData) {
  console.log(data.ans === numTilings(data.n));
}
