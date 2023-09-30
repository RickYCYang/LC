/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let ans = 0;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    map.set(s[r], (map.get(s[r]) || 0) + 1);
    while (map.get(s[r]) > 1) {
      map.set(s[l], map.get(s[l]) - 1);
      l++;
    }
    ans = Math.max(ans, r - l + 1);
  }
  return ans;
};

const testData = [
  {
    s: 'abcabcbb',
    ans: 3,
  },
  {
    s: 'bbbbb',
    ans: 1,
  },
  {
    s: 'pwwkew',
    ans: 3,
  },
];

for (const data of testData) {
  console.log(data.ans === lengthOfLongestSubstring(data.s));
}
