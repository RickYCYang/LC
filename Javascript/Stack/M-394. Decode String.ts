function decodeString(s: string): string {
  const stack: string[] = [];
  for (const char of s) {
    if (char !== ']') {
      stack.push(char);
      continue;
    }
    let cur = stack.pop();
    let str = '';
    while (cur !== '[') {
      str = cur + str;
      cur = stack.pop();
    }
    let num = '';
    cur = stack.pop();
    while (Number.isInteger(Number(cur))) {
      num = cur + num;
      cur = stack.pop();
    }
    if (cur) {
      stack.push(cur);
    }
    stack.push(str.repeat(Number(num)));
  }
  return stack.join('');
}

const testData = [
  {
    s: '3[a]2[bc]',
    ans: 'aaabcbc',
  },
  {
    s: '3[a2[c]]',
    ans: 'accaccacc',
  },
  {
    s: '2[abc]3[cd]ef',
    ans: 'abcabccdcdcdef',
  },
  {
    s: '100[leetcode]',
    ans: 'leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode',
  },
];

for (const data of testData) {
  console.log(data['ans'] === decodeString(data['s']));
}
