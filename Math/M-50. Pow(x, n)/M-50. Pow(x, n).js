/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  if (n % 2 === 0) {
    let halfPower = myPow(x, n / 2);
    return halfPower * halfPower;
  } else {
    return x * myPow(x, n - 1);
  }
};

const testData = [
  {
    x: 2,
    n: 10,
    ans: 1024,
  },
  {
    x: 2,
    n: -2,
    ans: 0.25,
  },
  {
    x: 0.00001,
    n: 2147483647,
    ans: 1,
  },
];

for (const data of testData) {
  console.log(myPow(data.x, data.n));
  console.log(data.ans === myPow(data.x, data.n));
}
