function nearestExit(maze: string[][], entrance: number[]): number {
  const [row0, col0] = entrance;
  const [m, n] = [maze.length, maze[0].length];
  maze[row0][col0] = '+';
  const queue: number[][] = [[row0, col0, 0]];
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const exceedBorder = (row, col) => {
    return row > m - 1 || row < 0 || col > n - 1 || col < 0;
  };
  const reachBoundary = (row, col) => {
    return row === m - 1 || row === 0 || col === n - 1 || col === 0;
  };
  while (queue.length) {
    const [row, col, step] = queue.shift() as number[];
    for (const [distRow, distCol] of directions) {
      const [movedRow, movedCol] = [row + distRow, col + distCol];
      if (
        exceedBorder(movedRow, movedCol) ||
        maze[movedRow][movedCol] === '+'
      ) {
        continue;
      }

      if (reachBoundary(movedRow, movedCol)) return step + 1;

      maze[movedRow][movedCol] = '+';
      queue.push([movedRow, movedCol, step + 1]);
    }
  }
  return -1;
}

const testData = [
  {
    maze: [
      ['+', '+', '.', '+'],
      ['.', '.', '.', '+'],
      ['+', '+', '+', '.'],
    ],
    entrance: [1, 2],
    ans: 1,
  },
  {
    maze: [
      ['+', '+', '+'],
      ['.', '.', '.'],
      ['+', '+', '+'],
    ],
    entrance: [1, 0],
    ans: 2,
  },
  {
    maze: [['.', '+']],
    entrance: [0, 0],
    ans: -1,
  },
];

for (const data of testData) {
  console.log(data['ans'] === nearestExit(data['maze'], data['entrance']));
}
