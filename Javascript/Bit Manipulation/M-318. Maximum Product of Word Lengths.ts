function maxProduct(words: string[]): number {
  let result = 0;
  const n = words.length;
  const masks: number[] = new Array(n);
  const unicodeOfA = 'a'.charCodeAt(0);

  for (let i = 0; i < n; i++) {
    let mask = 0;
    for (let j = 0; j < words[i].length; j++) {
      const unicode = words[i].charCodeAt(j) - unicodeOfA;
      mask |= 1 << unicode;
    }
    masks[i] = mask;
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n; j++) {
      if ((masks[i] & masks[j]) === 0) {
        result = Math.max(result, words[i].length * words[j].length);
      }
    }
  }

  return result;
}

const testData = [
  { words: ['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef'], ans: 16 },
  { words: ['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd'], ans: 4 },
  { words: ['a', 'aa', 'aaa', 'aaaa'], ans: 0 },
];

for (const data of testData) {
  console.log(data.ans === maxProduct(data.words));
}
