/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const minPath = new Array(2)
    .fill(null)
    .map((_) => new Array(triangle.length));
  minPath[0][0] = triangle[0][0];

  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      const curVal = triangle[i][j];
      if (j === 0) {
        minPath[i % 2][j] = minPath[(i - 1) % 2][j] + curVal;
      } else if (j === triangle[i].length - 1) {
        minPath[i % 2][j] = minPath[(i - 1) % 2][j - 1] + curVal;
      } else {
        minPath[i % 2][j] =
          Math.min(minPath[(i - 1) % 2][j - 1], minPath[(i - 1) % 2][j]) +
          curVal;
      }
    }
  }

  return Math.min(...minPath[(triangle.length - 1) % 2]);
};

const testData = [
  {
    data: [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]],
    ans: 11,
  },
  {
    data: [[-10]],
    ans: -10,
  },
];

for (const data of testData) {
  console.log(data.ans === minimumTotal(data.data));
}
