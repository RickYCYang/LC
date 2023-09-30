function fourSum(nums: number[], target: number): number[][] {
  if (nums.length < 4) return [];

  const result: number[][] = [];
  nums.sort((a, b) => a - b);
  const n = nums.length;

  for (let i = 0; i < n - 3; i++) {
    for (let j = i + 1; j < n - 2; j++) {
      let l = j + 1;
      let r = n - 1;
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum < target) l++;
        else if (sum > target) r--;
        else {
          result.push([nums[i], nums[j], nums[l], nums[r]]);
          while (nums[l] === nums[l + 1]) l++;
          while (nums[r] === nums[r - 1]) r--;
          l++;
          r--;
        }
      }
      while (nums[j] === nums[j + 1]) j++;
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return result;
}

const testData = [
  {
    nums: [1, 0, -1, 0, -2, 2],
    target: 0,
    ans: [
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1],
    ],
  },
  {
    nums: [2, 2, 2, 2, 2],
    target: 8,
    ans: [[2, 2, 2, 2]],
  },
];

for (const data of testData) {
  console.log(
    JSON.stringify(data.ans) === JSON.stringify(fourSum(data.nums, data.target))
  );
}
