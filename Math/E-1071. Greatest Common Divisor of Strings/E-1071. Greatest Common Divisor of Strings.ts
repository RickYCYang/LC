function gcdOfStrings(str1: string, str2: string): string {
  const gcd = (num1: number, num2: number): number => {
    if (!num2) return num1;
    return gcd(num2, num1 % num2);
  };

  if (str1 + str2 !== str2 + str1) return '';
  return str1.substring(0, gcd(str1.length, str2.length));
}

const testData = [
  {
    str1: 'ABCABC',
    str2: 'ABC',
    ans: 'ABC',
  },
  {
    str1: 'ABABAB',
    str2: 'ABAB',
    ans: 'AB',
  },
  {
    str1: 'LEET',
    str2: 'CODE',
    ans: '',
  },
];

for (const data of testData) {
  console.log(data.ans === gcdOfStrings(data.str1, data.str2));
}
