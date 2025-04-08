function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const neededChars = {};
  for (const c of s1) neededChars[c] = (neededChars[c] || 0) + 1;

  let l = 0;
  let r = 0;
  let requiredLength = s1.length;
  while (r < s2.length) {
    if (neededChars[s2[r]] > 0) requiredLength--;
    neededChars[s2[r]]--;

    if (requiredLength === 0) return true;

    /* reach the window size */
    if (r - l === s1.length - 1) {
      if (neededChars[s2[l]] >= 0) requiredLength++;
      neededChars[s2[l]]++;
      l++;
    }

    r++;
  }

  return false;
}

const testData = [
  {
    s1: 'ab',
    s2: 'aeidbaooo',
    ans: true,
  },
  {
    s1: 'ab',
    s2: 'eidboaoo',
    ans: false,
  },
  { s1: 'adc', s2: 'dcda', ans: true },
];

for (const data of testData) {
  console.log(data.ans === checkInclusion(data.s1, data.s2));
}
