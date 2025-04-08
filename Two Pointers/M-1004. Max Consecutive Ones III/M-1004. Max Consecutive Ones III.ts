function longestOnes(nums: number[], k: number): number {
  let maxLength = 0;
  let curLength = 0;
  let [l, r] = [0, 0];

  while (r < nums.length) {
    if (nums[r] || k > 0) {
      curLength++;
      maxLength = Math.max(maxLength, curLength);
      if (!nums[r]) k--;

      r++;
      continue;
    }

    /** find the first zero from left */
    while (k <= 0) {
      curLength--;
      if (!nums[l]) k++;
      l++;
    }
  }

  return maxLength;
}

const testData = [
  {
    nums: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
    k: 2,
    ans: 6,
  },
  {
    nums: [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    k: 3,
    ans: 10,
  },
];

for (const data of testData) {
  console.log(data['ans'] === longestOnes(data['nums'], data['k']));
}
