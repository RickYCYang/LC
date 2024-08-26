/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1; // last num in nums1
  let j = n - 1; // last num in nums2
  let k = m + n - 1; // last position of nums1

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) nums1[k--] = nums1[i--];
    else nums1[k--] = nums2[j--];
  }

  while (j >= 0) nums1[k--] = nums2[j--];
};

const testCases = [
  {
    nums1: [1, 2, 3, 0, 0, 0],
    m: 3,
    nums2: [2, 5, 6],
    n: 3,
    expected: [1, 2, 2, 3, 5, 6],
  },
  {
    nums1: [1],
    m: 1,
    nums2: [],
    n: 0,
    expected: [1],
  },
  {
    nums1: [1],
    m: 1,
    nums2: [],
    n: 0,
    expected: [1],
  },
  {
    nums1: [0],
    m: 0,
    nums2: [1],
    n: 1,
    expected: [1],
  },
];

for (const testCase of testCases) {
  console.log(
    merge(testCase.nums1, testCase.m, testCase.nums2, testCase.n) ===
      testCase.expected
  );
}
