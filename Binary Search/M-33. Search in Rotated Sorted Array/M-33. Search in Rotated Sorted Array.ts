function search(nums: number[], target: number): number {
  const n = nums.length;
  if (n === 1) return nums[0] === target ? 0 : -1;

  let l = 0;
  let r = n - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;

    if (nums[l] <= nums[mid]) {
      if (nums[l] <= target && nums[mid] >= target) r = mid - 1;
      else l = mid + 1;
    } else {
      if (nums[r] >= target && nums[mid] <= target) l = mid + 1;
      else r = mid - 1;
    }
  }
  return -1;
}

const testData = [
  {
    nums: [6, 7, 0, 1, 2, 4, 5],
    target: 0,
    ans: 2,
  },
  {
    nums: [4, 5, 6, 7, 0, 1, 2],
    target: 3,
    ans: -1,
  },
  {
    nums: [1],
    target: 0,
    ans: -1,
  },
];

for (const data of testData) {
  console.log(data.ans === search(data.nums, data.target));
}
