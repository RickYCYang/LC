/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let [l, r] = [0, 0];
  let length = 0;
  let maxLength = 0;

  while (r < s.length) {
    const c = s[r];
    if (!set.has(c)) {
      length++;
      maxLength = Math.max(maxLength, length);
      r++;
      set.add(c);
      continue;
    }
    while (set.has(c)) {
      length--;
      set.delete(s[l++]);
    }
  }

  return maxLength;
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
