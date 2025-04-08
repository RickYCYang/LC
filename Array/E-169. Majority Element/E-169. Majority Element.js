/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const obj = {};
  const threshold = nums.length / 2;
  for (const num of nums) {
    const count = (obj[num] || 0) + 1;
    if (count > threshold) return num;
    obj[num] = count;
  }
};

const testData = [
  [3, 2, 3],
  [2, 2, 1, 1, 1, 2, 2],
];

for (const data of testData) {
  console.log(majorityElement(data));
}
