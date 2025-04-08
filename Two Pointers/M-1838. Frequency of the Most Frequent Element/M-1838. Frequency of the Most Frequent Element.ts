function maxFrequency(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let currentSum = 0;
  let maxFreq = 0;
  for (let l = 0, r = 0; r < nums.length; r++) {
    currentSum += nums[r];

    while (currentSum + k < nums[r] * (r - l + 1)) {
      currentSum -= nums[l];
      l++;
    }

    maxFreq = Math.max(maxFreq, r - l + 1);
  }

  return maxFreq;
}

const testData = [
  {
    nums: [1, 2, 4],
    k: 5,
    ans: 3,
  },
  {
    nums: [1, 4, 8, 13],
    k: 5,
    ans: 2,
  },
  {
    nums: [3, 9, 6],
    k: 2,
    ans: 1,
  },
];

for (const data of testData) {
  console.log(data.ans === maxFrequency(data.nums, data.k));
}
