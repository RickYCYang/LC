function pivotIndex(nums: number[]): number {
  const n = nums.length;
  const sum = nums.reduce((accu, cur) => accu + cur, 0);
  let leftSum = 0;

  for (let pivot = 0; pivot < n; pivot++) {
    if (leftSum === sum - leftSum - nums[pivot]) return pivot;
    leftSum += nums[pivot];
  }

  return -1;
}

const testData = [
  {
    nums: [1, 7, 3, 6, 5, 6],
    ans: 3,
  },
  {
    nums: [1, 2, 3],
    ans: -1,
  },
  { nums: [2, 1, -1], ans: 0 },
  { nums: [-1, -1, 0, 1, 1, 0], ans: 5 },
];

for (const data of testData) {
  console.log(data.ans === pivotIndex(data.nums));
}
