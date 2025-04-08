function reverseParentheses(s: string): string {
  const stack: string[][] = [[]]; // index 0 supposed to be the result
  for (const c of s) {
    if (c === '(') {
      stack.push([]);
      continue;
    }
    if (c === ')') {
      const curSubstr = stack.pop()?.reverse();
      if (curSubstr) stack[stack.length - 1].push(...curSubstr);
      continue;
    }
    stack[stack.length - 1].push(c);
  }

  return stack[0].join('');
}

const testData = [
  {
    s: '(abcd)',
    ans: 'dcba',
  },
  {
    s: '(u(love)i)',
    ans: 'iloveu',
  },
  {
    s: '(ed(et(oc))el)', // (ed(etco)el) => (edocteel) => leetcode
    ans: 'leetcode',
  },
];

for (const data of testData) {
  console.log(data.ans === reverseParentheses(data.s));
}
