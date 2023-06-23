/**
 * You are given a 0-indexed array nums of n integers, and an integer k.
 * The k-radius average for a subarray of nums centered at some index i with the radius k
 * is the average of all elements in nums between the indices i - k and i + k (inclusive).
 * If there are less than k elements before or after the index i, then the k-radius average is -1.
 * Build and return an array avgs of length n where avgs[i] is the k-radius average for
 * the subarray centered at index i. The average of x elements is the sum of the x elements
 * divided by x, using integer division. The integer division truncates toward zero,
 * which means losing its fractional part.
 */

/**
 * javascript
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
  const result = new Array(nums.length).fill(-1);
  let sum = 0;
  const sliceSize = k * 2 + 1;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (i >= k * 2) {
      result[i - k] = Math.floor(sum / sliceSize);
      sum -= nums[i - k * 2];
    }
  }

  return result;
};

/** python 3 */
// class Solution:
//     def getAverages(self, nums: List[int], k: int) -> List[int]:
//         n = len(nums)
//         result = [-1] * n;
//         sum = 0;
//         slice_size = k * 2 + 1;

//         for i in range(n):
//             sum += nums[i];
//             if i >= k * 2:
//                 result[i - k] = math.floor(sum / slice_size);
//                 sum -= nums[i - k * 2];

//         return result;
