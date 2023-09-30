function threeSum(nums: number[]): number[][] | null[] {
  if (nums.length < 3) return [];

  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(i);
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum > 0) r--;
      if (sum < 0) l++;
      if (sum === 0) {
        result.push([nums[i], nums[l], nums[r]]);
        while (nums[i] === nums[i + 1]) i++;
        while (nums[l] === nums[l + 1]) l++;
        while (nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      }
    }
  }
  return result;
}

const testData = [
  {
    nums: [-1, 0, 1, 2, -1, -4],
    ans: [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  },
  {
    nums: [0, 1, 1],
    ans: [],
  },
  {
    nums: [0, 0, 0],
    ans: [[0, 0, 0]],
  },
  {
    nums: [-1, 0, 1, 2, -1, -4],
    // [-4, -1, -1, 0, 1, 2]
    ans: [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  },
];

for (const data of testData) {
  console.log(JSON.stringify(data.ans) === JSON.stringify(threeSum(data.nums)));
}
