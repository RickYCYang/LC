/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let ans = 0;
  while (x !== 0) {
    ans = ans * 10 + (x % 10);
    x = Math.trunc(x / 10);
  }

  if (ans > Math.pow(2, 31) - 1 || ans < Math.pow(-2, 31)) return 0;
  return ans;
};

const testData = [
  {
    x: 123,
    ans: 321,
  },
  {
    x: -123,
    ans: -321,
  },
  {
    x: 120,
    ans: 21,
  },
  {
    x: 900000,
    ans: 9,
  },
];

for (const data of testData) {
  console.log(data.ans === reverse(data.x));
}
