function findAnagrams(s: string, p: string): number[] {
  const result: number[] = [];
  const neededChars = {};
  let requiredLength = p.length;
  for (const c of p) neededChars[c] = (neededChars[c] || 0) + 1;

  let l = 0;
  let r = 0;
  while (r < s.length) {
    if (neededChars[s[r]] > 0) requiredLength--;
    neededChars[s[r]]--;

    /* reach to window size */
    if (r - l === p.length - 1) {
      if (requiredLength === 0) result.push(l);
      if (neededChars[s[l]] >= 0) requiredLength++;
      neededChars[s[l]]++;
      l++;
    }
    r++;
  }

  return result;
}

const testData = [
  {
    s: 'cbaebabacd',
    p: 'abc',
    ans: [0, 6],
  },
  {
    s: 'abab',
    p: 'ab',
    ans: [0, 1, 2],
  },
];

for (const data of testData) {
  console.log(
    JSON.stringify(data.ans) === JSON.stringify(findAnagrams(data.s, data.p))
  );
}
