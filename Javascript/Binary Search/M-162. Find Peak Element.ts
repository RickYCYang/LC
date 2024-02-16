function findPeakElement(nums: number[]): number {
  let [l, r] = [0, nums.length - 1];
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[mid + 1]) r = mid;
    else l = mid + 1;
  }
  return l;
}

const testData = [
  {
    nums: [1, 2, 3, 1],
    ans: 2,
  },
  {
    nums: [1, 2, 1, 3, 5, 6, 4],
    ans: 5,
  },
  { nums: [-2147483648], ans: 0 },
  { nums: [3, 2, 1], ans: 0 },
];

for (const data of testData) {
  console.log(data.ans === findPeakElement(data.nums));
}
