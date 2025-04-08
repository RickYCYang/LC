function maxVowels(s: string, k: number): number {
  let [l, r] = [0, 0];
  let maxVowelCount = 0;
  let vowelCount = 0;
  let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  while (r < s.length) {
    if (vowels.has(s[r])) {
      vowelCount++;
      maxVowelCount = Math.max(maxVowelCount, vowelCount);
    }

    /** reach to the window size */
    if (r - l === k - 1) {
      if (vowels.has(s[l])) vowelCount--;
      l++;
    }
    r++;
  }
  return maxVowelCount;
}

const testData = [
  {
    s: 'abciiidef',
    k: 3,
    ans: 3,
  },
  {
    s: 'aeiou',
    k: 2,
    ans: 2,
  },
  {
    s: 'leetcode',
    k: 3,
    ans: 2,
  },
];

for (const data of testData) {
  console.log(data['ans'] === maxVowels(data['s'], data['k']));
}
