function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1]);
  let removed = 0;
  let prevIdx = 0;
  for (let i = 1; i < intervals.length; i++) {
    const [_prevStart, prevEnd] = intervals[prevIdx];
    const [start, _end] = intervals[i];
    if (start < prevEnd) removed++;
    else prevIdx = i;
  }
  return removed;
}

const testData = [
  {
    intervals: [
      [1, 2],
      [1, 3],
      [2, 3],
      [3, 4],
    ],
    ans: 1,
  },
  {
    intervals: [
      [1, 2],
      [1, 2],
      [1, 2],
    ],
    ans: 2,
  },
  {
    intervals: [
      [1, 2],
      [2, 3],
    ],
    ans: 0,
  },
  {
    intervals: [
      [0, 2],
      [1, 3],
      [2, 4],
      [3, 5],
      [4, 6],
    ],
    ans: 2,
  },
  {
    intervals: [
      [1, 2],
      [2, 3],
      [3, 4],
      [-100, -2],
      [5, 7],
    ],
    ans: 0,
  },
  {
    intervals: [
      [-52, 31],
      [-73, -26],
      [82, 97],
      [-65, -11],
      [-62, -49],
      [95, 99],
      [58, 95],
      [-31, 49],
      [66, 98],
      [-63, 2],
      [30, 47],
      [-40, -26],
    ],
    ans: 7,
  },
];

for (const data of testData) {
  console.log(data['ans'] === eraseOverlapIntervals(data['intervals']));
}
