function searchRange(nums: number[], target: number): number[] {
  const n = nums.length;
  let result = [-1, -1];
  if (n === 0) return result;

  /* find first target*/
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      result[0] = mid;
      right = mid - 1;
      continue;
    }
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  /* find second target*/
  left = 0;
  right = n - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      result[1] = mid;
      left = mid + 1;
      continue;
    }
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return result;
}
const testData = [
  {
    nums: [5, 7, 7, 8, 8, 10],
    target: 8,
    ans: [3, 4],
  },
  {
    nums: [5, 7, 7, 8, 8, 10],
    target: 6,
    ans: [-1, -1],
  },
  {
    nums: [],
    target: 0,
    ans: [-1, -1],
  },
];

for (const data of testData) {
  console.log(
    JSON.stringify(data.ans) ===
      JSON.stringify(searchRange(data.nums, data.target))
  );
}
