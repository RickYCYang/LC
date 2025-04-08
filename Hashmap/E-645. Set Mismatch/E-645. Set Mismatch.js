/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const arr = new Array(nums.length).fill(0);
  const n = nums.length;
  let [dupl, loss] = [null, null];

  for (let i = 0; i < n; i++) {
    arr[nums[i] - 1]++;
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] > 1) dupl = i + 1;
    else if (arr[i] === 0) loss = i + 1;
  }
  return [dupl, loss];
};
