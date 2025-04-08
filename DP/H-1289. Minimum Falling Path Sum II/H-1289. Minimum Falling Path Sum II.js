/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
  const n = grid.length;
  const minPaths = new Array(n).fill(null).map((_) => new Array(n).fill(0));
  let lastRow1stMinNumIdx = -1;
  let lastRow2ndMinNumIdx = -1;
  /** init minPaths[0], lastRow1stMinNumIdx, and lastRow2ndMinNumIdx */
  for (let i = 0; i < n; i++) {
    const val = grid[0][i];
    minPaths[0][i] = val;
    if (
      val <
      (lastRow1stMinNumIdx === -1 ? Infinity : grid[0][lastRow1stMinNumIdx])
    ) {
      lastRow2ndMinNumIdx = lastRow1stMinNumIdx;
      lastRow1stMinNumIdx = i;
    } else if (
      val <
      (lastRow2ndMinNumIdx === -1 ? Infinity : grid[0][lastRow2ndMinNumIdx])
    ) {
      lastRow2ndMinNumIdx = i;
    }
  }
  /** start traveling grid */
  for (let i = 1; i < n; i++) {
    let curRow1stMinNumIdx = -1;
    let curRow2ndMinNumIdx = -1;
    for (let j = 0; j < n; j++) {
      const val = grid[i][j];
      if (j !== lastRow1stMinNumIdx) {
        minPaths[i][j] = val + minPaths[i - 1][lastRow1stMinNumIdx];
      } else {
        minPaths[i][j] = val + minPaths[i - 1][lastRow2ndMinNumIdx];
      }
      /** find current row's 2 smallest number's index */
      if (
        minPaths[i][j] <
        (curRow1stMinNumIdx === -1 ? Infinity : minPaths[i][curRow1stMinNumIdx])
      ) {
        curRow2ndMinNumIdx = curRow1stMinNumIdx;
        curRow1stMinNumIdx = j;
      } else if (
        minPaths[i][j] <
        (curRow2ndMinNumIdx === -1 ? Infinity : minPaths[i][curRow2ndMinNumIdx])
      ) {
        curRow2ndMinNumIdx = j;
      }
    }
    lastRow1stMinNumIdx = curRow1stMinNumIdx;
    lastRow2ndMinNumIdx = curRow2ndMinNumIdx;
  }

  return Math.min(...minPaths[n - 1]);
};

const testData = [
  {
    data: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    ans: 13, //1, 5, 7
  },
  {
    data: [[7]],
    ans: 7,
  },
  {
    data: [
      [2, 2, 1, 2, 2],
      [2, 2, 1, 2, 2],
      [2, 2, 1, 2, 2],
      [2, 2, 1, 2, 2],
      [2, 2, 1, 2, 2],
    ],
    ans: 7,
  },
];

for (const data of testData) {
  console.log(data.ans === minFallingPathSum(data.data));
}
