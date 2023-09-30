function letterCombinations(digits: string): string[] {
  const digitsLength = digits.length;
  const combinations: string[] = [];
  if (digitsLength === 0) return combinations;

  const numLetterMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };
  backtrack(digits, numLetterMap, combinations, 0, digitsLength, '');
  return combinations;
}

const backtrack = (
  digits: string,
  numLetterMap: object,
  combinations: string[],
  curPosition: number,
  digitsLength: number,
  curString: string
) => {
  if (curPosition === digitsLength) {
    combinations.push(curString);
    return;
  }
  const letters = numLetterMap[digits[curPosition]];
  for (const letter of letters) {
    backtrack(
      digits,
      numLetterMap,
      combinations,
      curPosition + 1,
      digitsLength,
      curString + letter
    );
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
