function orangesRotting(grid: number[][]): number {
  const [m, n] = [grid.length, grid[0].length];
  let freshOranges: number = 0;
  const rottenOrangeQueue: number[][] = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) rottenOrangeQueue.push([i, j, 0]);
      else if (grid[i][j] === 1) freshOranges++;
    }
  }

  if (freshOranges === 0) return 0;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const isWithinBorder = (row: number, col: number): boolean => {
    return row >= 0 && row < m && col >= 0 && col < n;
  };
  while (rottenOrangeQueue.length) {
    const [row, col, minute] = rottenOrangeQueue.shift() as number[];
    for (const [rowDist, colDist] of directions) {
      const [movedRow, movedCol] = [row + rowDist, col + colDist];
      if (
        isWithinBorder(movedRow, movedCol) &&
        grid[movedRow][movedCol] === 1
      ) {
        grid[movedRow][movedCol] = 2;
        if (--freshOranges == 0) return minute + 1;
        rottenOrangeQueue.push([movedRow, movedCol, minute + 1]);
      }
    }
  }

  return -1;
}

const testData = [
  {
    grid: [
      [2, 1, 1],
      [1, 1, 0],
      [0, 1, 1],
    ],
    ans: 4,
  },
  {
    grid: [
      [2, 1, 1],
      [0, 1, 1],
      [1, 0, 1],
    ],
    ans: -1,
  },
  {
    grid: [[0, 2]],
    ans: 0,
  },
];

for (const data of testData) {
  console.log(data['ans'] === orangesRotting(data['grid']));
}
