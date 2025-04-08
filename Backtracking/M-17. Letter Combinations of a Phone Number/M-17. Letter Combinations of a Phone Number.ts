function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];
  const letterMap: Map<string, string> = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz'],
  ]);
  const combinations: string[] = [];
  backTrack(digits, letterMap, combinations, '');
  return combinations;
}

const backTrack = (
  digits: string,
  letterMap: Map<string, string>,
  combinations: string[],
  letters: string
) => {
  if (letters.length === digits.length) return combinations.push(letters);
  const position: number = letters.length;
  for (const char of letterMap.get(digits[position]) || '') {
    backTrack(digits, letterMap, combinations, letters + char);
  }
};

const testData = [
  {
    digits: '23',
    ans: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
  },
  {
    digits: '',
    ans: [],
  },
  {
    digits: '2',
    ans: ['a', 'b', 'c'],
  },
];

for (const data of testData) {
  console.log(
    JSON.stringify(data.ans) === JSON.stringify(letterCombinations(data.digits))
  );
}
