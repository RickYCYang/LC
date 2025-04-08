function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  const dfs = (s: string, l: number, r: number) => {
    if (s.length === n * 2) {
      result.push(s);
      return;
    }
    if (l < n) dfs(s + '(', l + 1, r);
    if (r < l) dfs(s + ')', l, r + 1);
  };

  dfs('', 0, 0);
  return result;
}
const testData = [
  {
    n: 3,
    ans: ['((()))', '(()())', '(())()', '()(())', '()()()'],
  },
  {
    n: 1,
    ans: ['()'],
  },
];

for (const data of testData) {
  console.log(
    JSON.stringify(data.ans) === JSON.stringify(generateParenthesis(data.n))
  );
}
