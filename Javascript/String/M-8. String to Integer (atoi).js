/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let n = s.length;
  let idx = 0;

  while (idx < n && s[idx] === ' ') idx++;
  if (idx === n) return 0;

  let sign = 1;
  if (s[idx] === '-') {
    sign = -1;
    idx++;
  } else if (s[idx] === '+') {
    idx++;
  } else if (!isNumeric(s[idx])) {
    return 0;
  }

  let ans = 0;
  while (idx < n && isNumeric(s[idx])) {
    ans = ans * 10 + parseInt(s[idx++]);
  }

  ans *= sign;
  ans = Math.max(Math.min(ans, Math.pow(2, 31) - 1), -Math.pow(2, 31)); // Check for integer overflow
  return ans;
};

function isNumeric(str) {
  return /^\d+$/.test(str);
}

const testData = [
  {
    s: '42',
    ans: 42,
  },
  {
    s: '   -42',
    ans: -42,
  },
  {
    s: '4193 with words',
    ans: 4193,
  },
];

for (const data of testData) {
  console.log(data.ans === myAtoi(data.s));
}
