function findRepeatedDnaSequences(s: string): string[] {
  const map = new Map<string, number>();
  const result: string[] = [];

  for (let i = 0; i <= s.length - 10; i++) {
    const substr = s.substring(i, i + 10);
    const curCount = (map.get(substr) || 0) + 1;
    map.set(substr, curCount);
    if (curCount === 2) result.push(substr);
  }

  return result;
}

const testData = [
  { s: 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT', ans: ['AAAAACCCCC', 'CCCCCAAAAA'] },
  { s: 'AAAAAAAAAAAAA', ans: ['AAAAAAAAAA'] },
];

for (const data of testData) {
  console.log(
    JSON.stringify(data['ans']) ===
      JSON.stringify(findRepeatedDnaSequences(data['s']))
  );
}
