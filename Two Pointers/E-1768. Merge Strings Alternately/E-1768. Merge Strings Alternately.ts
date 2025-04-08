function mergeAlternately(word1: string, word2: string): string {
  let result = '';
  let i = 0;
  const maxLength = Math.max(word1.length, word2.length);

  while (i < maxLength) {
    if (word1[i]) result += word1[i];
    if (word2[i]) result += word2[i];
    i++;
  }

  return result;
}

const testData = [
  {
    word1: 'abc',
    word2: 'pqr',
    ans: 'apbqcr',
  },
  { word1: 'ab', word2: 'pqrs', ans: 'apbqrs' },
  { word1: 'abcd', word2: 'pq', ans: 'apbqcd' },
];

for (const data of testData) {
  console.log(data.ans === mergeAlternately(data.word1, data.word2));
}
