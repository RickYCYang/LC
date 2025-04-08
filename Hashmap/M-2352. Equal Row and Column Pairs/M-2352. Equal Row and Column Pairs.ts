function equalPairs(grid: number[][]): number {
  const n = grid.length;
  const swappedGrid: number[][] = new Array(n)
    .fill(null)
    .map((_) => new Array());
  const rowNumsMap = new Map<string, number[]>();
  let result = 0;

  /* initite swappedGrid and rowNumsMap */
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      swappedGrid[col].push(grid[row][col]);
    }
    const concatNums = grid[row].join('-');
    if (!rowNumsMap.has(concatNums)) rowNumsMap.set(concatNums, []);
    rowNumsMap.get(concatNums)?.push(row);
  }

  /* check the equal pairs */
  for (const nums of swappedGrid) {
    const concatNums = nums.join('-');
    result += rowNumsMap.get(concatNums)?.length || 0;
  }

  return result;
}

const testData = [
  {
    grid: [
      [3, 2, 1],
      [1, 7, 6],
      [2, 7, 7],
    ],
    ans: 1,
  },
  {
    grid: [
      [3, 1, 2, 2],
      [1, 4, 4, 5],
      [2, 4, 2, 2],
      [2, 4, 2, 2],
    ],
    ans: 3,
  },
  {
    grid: [
      [11, 1],
      [1, 11],
    ],
    ans: 2,
  },
];

for (const data of testData) {
  console.log(data['ans'] === equalPairs(data['grid']));
}
