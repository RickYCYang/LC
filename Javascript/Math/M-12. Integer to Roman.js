/**
 * @param {number} num
 * @return {string}
 */
const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const rom = [
  'M',
  'CM',
  'D',
  'CD',
  'C',
  'XC',
  'L',
  'XL',
  'X',
  'IX',
  'V',
  'IV',
  'I',
];

var intToRoman = function (num) {
  let ans = '';
  for (let i = 0; num > 0; i++) {
    while (num >= val[i]) {
      num -= val[i];
      ans += rom[i];
    }
  }
  return ans;
};
const testData = [
  {
    num: 58,
    ans: 'LVIII',
  },
  {
    num: 3,
    ans: 'III',
  },
  { num: 1994, ans: 'MCMXCIV' },
];

for (const data of testData) {
  console.log(data.ans === intToRoman(data.num));
}
