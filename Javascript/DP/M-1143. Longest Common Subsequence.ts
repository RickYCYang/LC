function longestCommonSubsequence(text1: string, text2: string): number {
  const [n, m] = [text1.length, text2.length];
  const dp: number[][] = new Array(n + 1)
    .fill(null)
    .map((_) => new Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[n][m];
}

const testData = [
  {
    text1: 'abcde',
    text2: 'ace',
    ans: 3,
  },
  {
    text1: 'abc',
    text2: 'abc',
    ans: 3,
  },
  {
    text1: 'abc',
    text2: 'def',
    ans: 0,
  },
];

for (const data of testData) {
  console.log(
    data.ans === longestCommonSubsequence(data['text1'], data['text2'])
  );
}
