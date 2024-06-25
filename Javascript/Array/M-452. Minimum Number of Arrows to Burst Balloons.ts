function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[1] - b[1]);
  let prevIdx = 0;
  let minArrow = 1;
  for (let i = 1; i < points.length; i++) {
    const [_prevStart, prevEnd] = points[prevIdx];
    const [start, _end] = points[i];
    if (start <= prevEnd) continue;
    minArrow++;
    prevIdx = i;
  }
  return minArrow;
}

const testData = [
  {
    points: [
      [10, 16],
      [2, 8],
      [1, 6],
      [7, 12],
    ],
    ans: 2, // 6, 11
  },
  {
    points: [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ],
    ans: 4,
  },
  {
    points: [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ],
    ans: 2, //2, 4
  },
];

for (const data of testData) {
  console.log(data['ans'] === findMinArrowShots(data['points']));
}
