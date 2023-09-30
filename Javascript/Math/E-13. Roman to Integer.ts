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

  let i = 0;
  let ans = 0;
  while (i < s.length) {
    const curChar = s[i];
    const nextChar = s[i + 1];
    if (romanMap[curChar] < romanMap[nextChar]) {
      ans += romanMap[nextChar] - romanMap[curChar];
      i++;
    } else {
      ans += romanMap[curChar];
    }
    i++;
  }
  return ans;
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
