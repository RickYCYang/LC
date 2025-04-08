/**
 * ref: https://rust-algo.club/levenshtein_distance/
 **/
function minDistance(word1: string, word2: string): number {
  const [m, n] = [word1.length, word2.length];
  const dp: number[][] = new Array(m + 1)
    .fill(null)
    .map((_) => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let i = 0; i <= n; i++) dp[0][i] = i;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (word1[i - 1] === word2[j - 1] ? 0 : 1)
      );
    }
  }
  return dp[m][n];
}

const testData = [
  {
    word1: 'horse',
    word2: 'ros',
    ans: 3,
  },
  {
    word1: 'intention',
    word2: 'execution',
    ans: 5,
  },
];

for (const data of testData) {
  console.log(data.ans === minDistance(data.word1, data.word2));
}
