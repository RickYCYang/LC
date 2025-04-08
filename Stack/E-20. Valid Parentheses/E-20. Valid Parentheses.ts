function isValid(s: string): boolean {
  const parenthesesMap = {
    ']': '[',
    ')': '(',
    '}': '{',
  };
  const stack: string[] = [];
  for (const char of s) {
    /** if is not close brackets  */
    if (!(char in parenthesesMap)) {
      stack.push(char);
    } else {
      const openBracket = stack.pop();
      if (parenthesesMap[char] !== openBracket) return false;
    }
  }
  return stack.length > 0 ? false : true;
}

const testData = [
  { s: '()', ans: true },
  { s: '()[]{}', ans: true },
  { s: '(]', ans: false },
  { s: '[', ans: false },
];

for (const data of testData) {
  console.log(data.ans === isValid(data.s));
}
