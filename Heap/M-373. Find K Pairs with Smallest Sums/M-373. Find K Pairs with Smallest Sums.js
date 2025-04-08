/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const sums = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      // console.log('nums1[i]', nums1[i]);
      // console.log('nums2[j]', nums2[j]);
      // console.log('nums1[i] + nums2[j]', nums1[i] + nums2[j]);
      sums.push([nums1[i], nums2[j], nums1[i] + nums2[j]]);
    }
  }
  sums.sort((a, b) => a[2] - b[2] || a[0] - b[0] || a[1] - b[1]);
  console.log(sums);
  return sums.slice(0, k).map(([num1, num2]) => [num1, num2]);
};

console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2));
