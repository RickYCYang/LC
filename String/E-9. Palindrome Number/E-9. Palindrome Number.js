/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // return x.toString() === x.toString().split('').reverse().join('');

  let reverse = 0;
  const origX = x;

  while (x > 0) {
    reverse = reverse * 10 + (x % 10);
    x = parseInt(x / 10);
  }

  return reverse === origX;
};

const testData = [
  {
    x: 121,
    ans: true,
  },
  {
    x: -121,
    ans: false,
  },
  {
    x: 10,
    ans: false,
  },
];

for (const data of testData) {
  console.log(data.ans === isPalindrome(data.x));
}
