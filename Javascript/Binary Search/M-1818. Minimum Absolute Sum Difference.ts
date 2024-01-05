function minAbsoluteSumDiff(nums1: number[], nums2: number[]): number {
  const n = nums1.length;
  const mod = 1e9 + 7; // Math.pow(10, 9) + 7
  const origAbsSumDiffs: number[] = [];
  let origAbsSumDiff = 0;

  /** prepare original diff numbers and diff sum */
  for (let i = 0; i < n; i++) {
    const absDiff = Math.abs(nums1[i] - nums2[i]);
    origAbsSumDiff += absDiff;
    origAbsSumDiffs.push(absDiff);
  }

  /** iterate nums1 to find the best candidate to replace for getting the minDiffSum  */
  nums1.sort((a, b) => a - b);
  let minAbsSumDiff = origAbsSumDiff;
  for (let i = 0; i < n; i++) {
    let minAbsDiff = origAbsSumDiffs[i];
    let [l, r] = [0, n - 1];
    while (l <= r) {
      const mid = (l + r) >> 1; // Math.floor((l + r) / 2)
      const absDiff = Math.abs(nums1[mid] - nums2[i]);
      if (absDiff < minAbsDiff) {
        minAbsDiff = absDiff;
        if (absDiff === 0) break;
      }
      if (nums1[mid] < nums2[i]) l = mid + 1;
      else r = mid - 1;
    }
    const newAbsSumDiff = origAbsSumDiff - origAbsSumDiffs[i] + minAbsDiff;
    minAbsSumDiff = Math.min(minAbsSumDiff, newAbsSumDiff);
  }

  return minAbsSumDiff % mod;
}

const testData = [
  {
    nums1: [1, 7, 5],
    nums2: [2, 3, 5],
    ans: 3,
  },
  {
    nums1: [2, 4, 6, 8, 10],
    nums2: [2, 4, 6, 8, 10],
    ans: 0,
  },
  {
    nums1: [1, 10, 4, 4, 2, 7],
    nums2: [9, 3, 5, 1, 7, 4],
    ans: 20,
  },
  {
    nums1: [1, 28, 21],
    nums2: [9, 21, 20],
    ans: 9,
  },
  {
    nums1: [9, 20, 20, 21, 50],
    nums2: [9, 21, 20, 21, 1],
    ans: 9,
  },
];

for (const data of testData) {
  console.log(data['ans'] === minAbsoluteSumDiff(data['nums1'], data['nums2']));
}
