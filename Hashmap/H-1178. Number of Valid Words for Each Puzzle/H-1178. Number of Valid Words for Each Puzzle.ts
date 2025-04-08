function findNumOfValidWords(words, puzzles) {
  const wordBits = words.map((word) => getBitMask(word));
  console.log('wordBits', wordBits);
  return puzzles.map((puzzle) => {
    const fl = getBitMask(puzzle[0]);
    const p = getBitMask(puzzle);
    return wordBits.reduce(
      (res, w) => ((w & p) === w && (fl & w) === fl ? ++res : res),
      0
    );
  });
}

function getBitMask(word) {
  console.log('word', word);
  const wordBits = word.split('').reduce((acc, letter) => {
    const accBits = acc | (1 << (letter.charCodeAt(0) - 97));
    console.log('acc, letter, accBits', acc, letter, accBits);
    return accBits;
  }, 0);
  console.log('wordBits', wordBits);
  return wordBits;
}

const testData = [
  {
    words: ['aaaa', 'asas', 'able', 'ability', 'actt', 'actor', 'access'],
    puzzles: ['aboveyz', 'abrodyz', 'abslute', 'absoryz', 'actresz', 'gaswxyz'],
    ans: [1, 1, 3, 2, 4, 0],
  },
  // {
  //   words: ['apple', 'pleas', 'please'],
  //   puzzles: ['aelwxyz', 'aelpxyz', 'aelpsxy', 'saelpxy', 'xaelpsy'],
  //   ans: [0, 1, 3, 2, 0],
  // },
];

for (const data of testData) {
  console.log(
    JSON.stringify(data.ans) ===
      JSON.stringify(findNumOfValidWords(data.words, data.puzzles))
  );
}

console.log(1 | 1);
