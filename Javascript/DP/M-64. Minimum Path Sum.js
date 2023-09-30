/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const minPath = new Array(m).fill(null).map((_) => new Array(n).fill(0));

  minPath[0][0] = grid[0][0];

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (row > 0 && col > 0) {
        minPath[row][col] =
          grid[row][col] +
          Math.min(minPath[row - 1][col], minPath[row][col - 1]);
      } else if (row > 0) {
        minPath[row][col] = grid[row][col] + minPath[row - 1][col];
      } else if (col > 0) {
        minPath[row][col] = grid[row][col] + minPath[row][col - 1];
      }
    }
  }

  return minPath[m - 1][n - 1];
};

const testData = [
  {
    data: [
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ],
    ans: 7,
  },
  {
    data: [
      [1, 2, 3],
      [4, 5, 6],
    ],
    ans: 12,
  },
];

for (const data of testData) {
  console.log(data.ans === minPathSum(data.data));
}
