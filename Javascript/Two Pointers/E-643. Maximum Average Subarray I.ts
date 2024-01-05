function findMaxAverage(nums: number[], k: number): number {
  let [l, r] = [0, 0];
  let maxAvg = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  while (r < nums.length) {
    sum += nums[r++];
    if (r < k) continue;
    const avg = sum / k;
    maxAvg = Math.max(maxAvg, avg);
    sum -= nums[l++];
  }
  return maxAvg;
}

const testData = [
  {
    nums: [1, 12, -5, -6, 50, 3],
    k: 4,
    ans: 12.75,
  },
  { nums: [5], k: 1, ans: 5 },
];

for (const data of testData) {
  console.log(data.ans === findMaxAverage(data.nums, data.k));
}
