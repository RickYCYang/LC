function isSubsequence(s: string, t: string): boolean {
  let i = 0;
  for (const c of t) {
    if (s[i] === c) i++;
    if (i === s.length) return true;
  }
  return i === s.length;
}

const testData = [
  {
    s: 'abc',
    t: 'ahbgdc',
    ans: true,
  },
  {
    s: 'axc',
    t: 'ahbgdc',
    ans: false,
  },
  {
    s: '',
    t: 'ahbgdc',
    ans: true,
  },
  {
    s: '',
    t: '',
    ans: true,
  },
];

for (const data of testData) {
  console.log(data['ans'] === isSubsequence(data['s'], data['t']));
}
