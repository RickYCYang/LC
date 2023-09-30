function isToeplitzMatrix(matrix: number[][]): boolean {
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] !== matrix[i - 1][j - 1]) return false;
    }
  }
  return true;
}

const testData: TestData[] = [
  {
    matrix: [
      [1, 2, 3, 4],
      [5, 1, 2, 3],
      [9, 5, 1, 2],
    ],
    ans: true,
  },
  {
    matrix: [
      [1, 2],
      [2, 2],
    ],
    ans: false,
  },
];

for (const data of testData) {
  console.log(data.ans === isToeplitzMatrix(data.matrix));
}
