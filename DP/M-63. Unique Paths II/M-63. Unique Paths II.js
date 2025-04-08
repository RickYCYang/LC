/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  const path = new Array(m).fill(null).map((_) => new Array(n).fill(0));
  path[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (obstacleGrid[row][col] === 1) continue;
      else {
        if (row > 0 && col > 0)
          path[row][col] = path[row - 1][col] + path[row][col - 1];
        else if (row > 0) path[row][col] = path[row - 1][col];
        else if (col > 0) path[row][col] = path[row][col - 1];
      }
    }
  }
  console.log(path);
  return path[m - 1][n - 1];
};

const testData = [
  {
    data: [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    ans: 2,
  },
  {
    data: [
      [0, 1],
      [0, 0],
    ],
    ans: 1,
  },
  {
    data: [[1]],
    ans: 0,
  },
];

for (const data of testData) {
  console.log(data.ans === uniquePathsWithObstacles(data.data));
}
