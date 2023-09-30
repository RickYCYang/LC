/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (!k) return;
  k = k % nums.length;
  nums.unshift(...nums.splice(nums.length - k, k));
};

const testData = [
  { arr: [1, 2, 3, 4, 5, 6, 7], k: 3 }, //[5,6,7,1,2,3,4]
  { arr: [-1, -100, 3, 99], k: 2 }, //[3,99,-1,-100],
  { arr: [1, 2], k: 5 }, //[2,1]
];

for (const data of testData) {
  rotate(data.arr, data.k);
  console.log(data.arr);
}
