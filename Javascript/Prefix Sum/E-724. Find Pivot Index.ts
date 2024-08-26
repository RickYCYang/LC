function pivotIndex(nums: number[]): number {
  const total = nums.reduce((accu, num) => accu + num);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const rightSum = total - nums[i] - leftSum;
    if (leftSum === rightSum) return i;
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
