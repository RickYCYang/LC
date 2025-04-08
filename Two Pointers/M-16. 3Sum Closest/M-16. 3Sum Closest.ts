function threeSumClosest(nums: number[], target: number): number {
  const n = nums.length;
  let closestSum = Number.MAX_SAFE_INTEGER;
  nums.sort((a, b) => a - b);
  const getClosestNum = (a: number, b: number) => {
    if (Math.abs(a - target) < Math.abs(b - target)) return a;
    return b;
  };
  for (let i = 0; i < n; i++) {
    let l = i + 1;
    let r = n - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === target) return sum;
      closestSum = getClosestNum(sum, closestSum);
      if (sum > target) {
        r--;
      }
      if (sum < target) {
        l++;
      }
    }
  }
  return closestSum;
}

const testData = [
  {
    nums: [-1, 2, 1, -4], // [-4, -1, 1, 2]
    target: 1,
    ans: 2,
  },
  {
    nums: [0, 0, 0],
    target: 1,
    ans: 0,
  },
];

for (const data of testData) {
  console.log(data.ans === threeSumClosest(data.nums, data.target));
}
