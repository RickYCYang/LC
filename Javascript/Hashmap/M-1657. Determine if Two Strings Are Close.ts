function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;
  const word1Map = new Map<string, number>();
  const word2Map = new Map<string, number>();
  for (const char of word1) word1Map.set(char, (word1Map.get(char) || 0) + 1);
  for (const char of word2) word2Map.set(char, (word2Map.get(char) || 0) + 1);

  const word1DistChars = Array.from(word1Map.keys()).sort().join('');
  const word2DistChars = Array.from(word2Map.keys()).sort().join('');
  // console.log('word1DistChars', word1DistChars);
  // console.log('word2DistChars', word2DistChars);
  if (word1DistChars !== word2DistChars) return false;

  const word1CharCount = Array.from(word1Map.values()).sort((a, b) => a - b);
  const word2CharCount = Array.from(word2Map.values()).sort((a, b) => a - b);
  // console.log('word1CharCount', word1CharCount);
  // console.log('word2CharCount', word2CharCount);
  const isCharCountEqual = word1CharCount.every(
    (value, index) => value === word2CharCount[index]
  );
  // console.log('isCharCountEqual', isCharCountEqual);
  return isCharCountEqual;
}

const testData = [
  {
    word1: 'abc',
    word2: 'bca',
    ans: true,
  },
  {
    word1: 'a',
    word2: 'aa',
    ans: false,
  },
  {
    word1: 'cabbba',
    word2: 'abbccc',
    ans: true,
  },
];

for (const data of testData) {
  console.log(data['ans'] === closeStrings(data['word1'], data['word2']));
}
