function characterReplacement(s: string, k: number): number {
  const charFreq = {};
  let longest = 0;
  let curLongest = 0;
  let l = 0;
  let r = 0;

  while (r < s.length) {
    charFreq[s[r]] = (charFreq[s[r]] || 0) + 1;
    curLongest = Math.max(curLongest, charFreq[s[r]]);

    while (r - l + 1 - curLongest > k) {
      charFreq[s[l]] -= 1;
      l++;
    }

    longest = Math.max(longest, r - l + 1);
    r++;
  }

  return longest;
}

const testData = [
  {
    s: 'ABAB',
    k: 2,
    ans: 4,
  },
  {
    s: 'AABABBA',
    k: 1,
    ans: 4,
  },
];

for (const data of testData) {
  console.log(data.ans === characterReplacement(data.s, data.k));
}
