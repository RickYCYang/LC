function longestSubarray(nums: number[]): number {
  let [curLength, maxLength] = [0, 0];
  let [l, r] = [0, 0];
  let hasDeleted = false;
  while (r < nums.length) {
    if (nums[r]) {
      curLength++;
      maxLength = Math.max(maxLength, curLength);
      r++;
      continue;
    }
    if (!hasDeleted) {
      hasDeleted = true;
      r++;
      continue;
    }
    /** find the first zero from left  */
    while (hasDeleted) {
      if (nums[l]) curLength--;
      else hasDeleted = false;
      l++;
    }
  }
  return maxLength === nums.length ? maxLength - 1 : maxLength;
}

const testData = [
  {
    nums: [1, 1, 0, 1],
    ans: 3,
  },
  {
    nums: [0, 1, 1, 1, 0, 1, 1, 0, 1],
    ans: 5,
  },
  {
    nums: [1, 1, 1],
    ans: 2,
  },
];

for (const data of testData) {
  console.log(data['ans'] === longestSubarray(data['nums']));
}
