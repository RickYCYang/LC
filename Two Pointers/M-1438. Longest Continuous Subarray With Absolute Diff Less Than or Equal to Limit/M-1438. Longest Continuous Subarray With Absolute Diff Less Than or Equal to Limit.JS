/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  const n = nums.length;
  let ans = 1;
  let l = 0;
  while (l < n) {
    if (l > 0 && nums[l] === nums[l - 1]) {
      l++;
      continue;
    }

    let curAns = 1;
    let r = l + 1;
    let curMaxNum = nums[l];
    let curMinNum = nums[l];
    while (r < n) {
      curMaxNum = Math.max(nums[r], curMaxNum);
      curMinNum = Math.min(nums[r], curMinNum);
      if (Math.abs(curMaxNum - curMinNum) > limit) break;
      curAns++;
      r++;
    }

    ans = Math.max(ans, curAns);
    l++;
  }
  return ans;
};

const testData = [
  {
    nums: [8, 2, 4, 7],
    limit: 4,
    ans: 2,
  },
  {
    nums: [10, 1, 2, 4, 7, 2],
    limit: 5,
    ans: 4,
  },
  {
    nums: [4, 2, 2, 2, 4, 4, 2, 2],
    limit: 0,
    ans: 3,
  },
];

for (const data of testData) {
  console.log(data.ans === longestSubarray(data.nums, data.limit));
}
