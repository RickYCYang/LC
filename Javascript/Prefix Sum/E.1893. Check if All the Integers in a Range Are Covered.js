/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  ranges.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const n = ranges.length;
  console.log('left, right', left, right);

  for (const [l, r] of ranges) {
    console.log('l, r', l, r);
    if (r < left || l > right) continue;
    if (l <= left && r >= right) return true;
    if (l <= left && r >= left) left = r + 1;

    console.log('left, right', left, right);
  }

  return false;
};

const testData = [
  {
    ranges: [
      [13, 43],
      [19, 20],
      [32, 38],
      [26, 33],
      [3, 38],
      [16, 31],
      [26, 48],
      [27, 43],
      [12, 24],
    ],
    left: 36,
    right: 45,
    expected: true,
  },
];

for (const data of testData) {
  console.log(isCovered(data.ranges, data.left, data.right) === data.expected);
}
