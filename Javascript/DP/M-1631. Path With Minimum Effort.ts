function minimumEffortPath(heights: number[][]): number {
  let min = 0;
  const rows = heights.length;
  const cols = heights[0].length;
  const minPaths = new Array(rows)
    .fill(null)
    .map((_) => new Array(cols).fill(-1));
  const directions = [
    [-1, 0], //up
    [1, 0], //down
    [0, -1], //left
    [0, 1], //right
  ];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {}
  }
}

const testData = [
  {
    data: [
      [1, 2, 2],
      [3, 8, 2],
      [5, 3, 5],
    ],
    ans: 2,
  },
  {
    data: [
      [1, 2, 3],
      [3, 8, 4],
      [5, 3, 5],
    ],
    ans: 1,
  },
  {
    data: [
      [1, 2, 1, 1, 1],
      [1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1],
      [1, 1, 1, 2, 1],
    ],
    ans: 0,
  },
];

for (const data of testData) {
  console.log(data.ans === minimumEffortPath(data.data));
}
