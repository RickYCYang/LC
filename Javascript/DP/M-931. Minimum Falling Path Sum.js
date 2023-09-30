/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  const minPathSum = new Array(2).fill(null).map((_) => new Array(n).fill(0));
  minPathSum[0] = [...matrix[0]];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const curValue = matrix[i][j];
      minPathSum[i % 2][j] = minPathSum[(i - 1) % 2][j] + curValue;
      if (j - 1 >= 0) {
        minPathSum[i % 2][j] = Math.min(
          minPathSum[i % 2][j],
          minPathSum[(i - 1) % 2][j - 1] + curValue
        );
      }
      if (j < n - 1) {
        minPathSum[i % 2][j] = Math.min(
          minPathSum[i % 2][j],
          minPathSum[(i - 1) % 2][j + 1] + curValue
        );
      }
    }
  }

  return Math.min(...minPathSum[(n - 1) % 2]);
};

const testData = [
  {
    data: [
      [2, 1, 3],
      [6, 5, 4],
      [7, 8, 9],
    ],
    ans: 13,
  },
  {
    data: [
      [-19, 57],
      [-40, -5],
    ],
    ans: -59,
  },
];

for (const data of testData) {
  console.log(data.ans === minFallingPathSum(data.data));
}
