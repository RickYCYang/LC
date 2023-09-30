/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const n = height.length;
  let max = -Number.MAX_SAFE_INTEGER;
  let l = 0;
  let r = n - 1;
  while (l < r) {
    const current = (r - l) * Math.min(height[l], height[r]);
    max = Math.max(max, current);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return max;
};

const testData = [
  {
    height: [1, 8, 6, 2, 5, 4, 8, 3, 7],
    ans: 49,
  },
  {
    height: [1, 1],
    ans: 1,
  },
];

for (const data of testData) {
  console.log(data.ans === maxArea(data.height));
}
