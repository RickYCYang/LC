/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const path = new Array(m).fill(null).map((_) => new Array(n).fill(0));
  // start position
  path[0][0] = 1;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (row > 0 && col > 0)
        path[row][col] = path[row - 1][col] + path[row][col - 1];
      else if (row > 0) path[row][col] = path[row - 1][col];
      else if (col > 0) path[row][col] = path[row][col - 1];
    }
  }
  return path[m - 1][n - 1];
};

const testData = [
  { m: 3, n: 7, ans: 28 },
  { m: 3, n: 2, ans: 3 },
];

for (let data of testData) {
  console.log(data.ans === uniquePaths(data.m, data.n));
}
