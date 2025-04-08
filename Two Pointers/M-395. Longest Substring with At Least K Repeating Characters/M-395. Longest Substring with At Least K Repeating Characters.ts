var longestSubstring = function (s, k) {
  const uniqueCharCnt = new Set(s).size;
  let result = 0;
  for (
    let allowedUniqueCharCnt = 1;
    allowedUniqueCharCnt <= uniqueCharCnt;
    allowedUniqueCharCnt++
  ) {
    let left = 0;
    let right = 0;
    let uniqueCharCnt = 0;
    let freqKCharCnt = 0;
    let charMap = new Map<string, number>();
    /** start traveling */
    while (right < s.length) {
      const charOfRight = s[right];
      charMap.set(charOfRight, (charMap.get(charOfRight) || 0) + 1);
      if (charMap.get(charOfRight) === k) freqKCharCnt++;
      if (charMap.get(charOfRight) === 1) uniqueCharCnt++;

      while (uniqueCharCnt > allowedUniqueCharCnt) {
        const charOfLeft = s[left];
        charMap.set(charOfLeft, (charMap.get(charOfLeft) || 1) - 1);
        if (charMap.get(charOfLeft) === k - 1) freqKCharCnt--;
        if (charMap.get(charOfLeft) === 0) uniqueCharCnt--;
        left++;
      }

      if (
        uniqueCharCnt === allowedUniqueCharCnt &&
        uniqueCharCnt === freqKCharCnt
      ) {
        result = Math.max(result, right - left + 1);
      }
      right++;
    }
  }
  return result;
};
const testData = [
  {
    s: 'aaabb',
    k: 3,
    ans: 3,
  },
  {
    s: 'ababbc',
    k: 2,
    ans: 5,
  },
  {
    s: 'aaabbb',
    k: 3,
    ans: 6,
  },
  {
    s: 'aaaaaaaaabbbcccccddddd',
    k: 5,
    ans: 10,
  },
];

for (const data of testData) {
  console.log(data.ans === longestSubstring(data.s, data.k));
}
