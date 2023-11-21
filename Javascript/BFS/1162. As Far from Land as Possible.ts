function maxDistance(grid: number[][]): number {
  const n = grid.length;
  const landQueue: number[][] = [];
  const initDist = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) landQueue.push([i, j, initDist]);
    }
  }

  const dirs: number[][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let max = 0;
  while (landQueue.length) {
    const [x, y, dist] = landQueue.shift() as number[];
    max = Math.max(max, dist);
    for (const [xDir, yDir] of dirs) {
      const [movedX, movedY] = [x + xDir, y + yDir];
      if (movedX < 0 || movedX >= n || movedY < 0 || movedY >= n) continue;
      if (grid[movedX][movedY] === 1) continue;

      landQueue.push([movedX, movedY, dist + 1]);
      grid[movedX][movedY] = 1;
    }
  }

  return max > 0 ? max : -1;
}

const testData = [
  {
    grid: [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ],
    ans: 2,
  },
  {
    grid: [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ],
    ans: 2,
  },
  {
    grid: [
      [0, 0, 0, 0, 0], //[0, 4] - [1, 0] = |0-1| + |4-0| = 5
      [1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0],
    ],
    ans: 5,
  },
];

for (const data of testData) {
  console.log(data['ans'] === maxDistance(data.grid));
}
