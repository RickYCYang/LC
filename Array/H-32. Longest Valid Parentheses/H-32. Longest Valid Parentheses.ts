/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s: string): number {
  if (!s) return 0;

  const stack: number[] = [];
  let ans = 0;

  for (let i = 0, j = -1; i < s.length; i++) {
    if (s[i] == '(') {
      stack.push(i);
    } else {
      if (stack.length > 0) {
        stack.pop();
        let top = j;
        if (stack.length > 0) top = stack[stack.length - 1];
        ans = Math.max(ans, i - top);
      } else {
        j = i;
      }
    }
  }
  return ans;
}

const testData = [
  { s: '()', ans: 2 },
  {
    s: '(()',
    ans: 2,
  },
  {
    s: ')()())',
    ans: 4,
  },
  {
    s: '',
    ans: 0,
  },
  {
    s: '()(()',
    ans: 2,
  },
];

for (const data of testData) {
  console.log(data.ans === longestValidParentheses(data.s));
}
