function romanToInt(s: string): number {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanMap[s[i]] < romanMap[s[i + 1]]) {
      result += romanMap[s[i + 1]] - romanMap[s[i]];
      i++;
    } else {
      result += romanMap[s[i]];
    }
  }
  return result;
}

const testResult = () => {
  const testData = [
    {
      s: 'III',
      ans: 3,
    },
    {
      s: 'LVIII',
      ans: 58,
    },
    {
      s: 'MCMXCIV',
      ans: 1994,
    },
  ];

  for (const data of testData) {
    console.log(data.ans === romanToInt(data.s));
  }
};

testResult();
