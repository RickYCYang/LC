/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const map = nums.reduce((map, num) => {
    map[num] = (map[num] || 0) + 1;
    return map;
  }, {});
  nums.sort((a, b) => map[a] - map[b] || b - a);
  return nums;
};
