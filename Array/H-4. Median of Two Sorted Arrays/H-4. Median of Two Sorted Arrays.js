/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const mergedArr = [...nums1, ...nums2];
  mergedArr.sort((a, b) => a - b);
  mediumLeftIdx = Math.floor((mergedArr.length - 1) / 2);
  mediumRightIdx = Math.floor(mergedArr.length / 2);
  medium = (mergedArr[mediumLeftIdx] + mergedArr[mediumRightIdx]) / 2;
  return medium;
};

const testData = [
  {
    nums1: [1, 3],
    nums2: [2],
    ans: 2.0,
  },
  {
    nums1: [1, 2],
    nums2: [3, 4],
    ans: 2.5,
  },
];

for (const data of testData) {
  console.log(data.ans === findMedianSortedArrays(data.nums1, data.nums2));
}
