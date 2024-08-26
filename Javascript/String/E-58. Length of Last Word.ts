function lengthOfLastWord(s: string): number {
  const trimS = s.trim();
  const n = trimS.length;
  for (let i = n - 1; i >= 0; i--) {
    if (trimS[i] === ' ') return n - i - 1;
  }
  return n;
}

const testData = [
  {
    s: 'Hello World',
    ans: 5,
  },
  {
    s: '   fly me   to   the moon  ',
    ans: 4,
  },
  { s: 'luffy is still joyboy', ans: 6 },
];

for (const data of testData) {
  console.log(data.ans === lengthOfLastWord(data.s));
}
