function pivotIndex(nums: number[]): number {
  const ttlSum = nums.reduce((prev, cur) => prev + cur, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if ((ttlSum - nums[i]) / 2 === leftSum) return i;
    leftSum += nums[i];
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
  {
    nums: [2, 1, -1],
    ans: 0,
  },
  { nums: [-1, -1, -1, -1, -1, -1], ans: -1 },
];

for (const data of testData) {
  console.log(data['ans'] === pivotIndex(data['nums']));
}
