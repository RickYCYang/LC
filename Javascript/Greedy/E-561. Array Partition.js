/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  const total = arr.reduce((accu, num) => accu + num);
  const n = arr.length;
  const targetSum = total / 3;
  let sum = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum === targetSum) {
      sum = 0;
      count++;

      // there's remaining number
      if (count === 2 && i < n - 1) return true;
    }
  }
  return false;
};

const testData = [
  { arr: [3, 3, 6, 5, -2, 2, 5, 1, -9, 4], ans: true },
  { arr: [0, 0, 0, 0], ans: true },
  { arr: [10, -10, 10, -10, 10, -10, 10, -10], ans: true },
  { arr: [3, 1, 2, 0, 3], ans: true },
];

for (const data of testData) {
  console.log(data['ans'] === canThreePartsEqualSum(data['arr']));
}
