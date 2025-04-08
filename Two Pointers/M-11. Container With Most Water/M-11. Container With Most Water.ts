function maxArea(height: number[]): number {
  let max = Number.MIN_SAFE_INTEGER;
  let [l, r] = [0, height.length - 1];
  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);
    max = Math.max(max, area);
    if (height[l] < height[r]) l++;
    else r--;
  }
  return max;
}

const testData = [
  {
    height: [1, 8, 6, 2, 5, 4, 8, 3, 7],
    ans: 49,
  },
  {
    height: [1, 1],
    ans: 1,
  },
  {
    height: [1, 2, 4, 3],
    ans: 4,
  },
  { height: [1, 3, 2, 5, 25, 24, 5], ans: 24 },
];

for (const data of testData) {
  console.log(data.ans === maxArea(data.height));
}
