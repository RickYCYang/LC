function decodeString(s: string): string {
  const stack: string[] = [];
  for (const char of s) {
    if (char !== ']') {
      stack.push(char);
      continue;
    }

    //console.log('stack', stack);
    let str = '';
    while (stack[stack.length - 1] !== '[') {
      str = stack.pop() + str;
      //console.log('str', str);
    }

    // pop '['
    stack.pop();

    let num = '';
    while (Number.isInteger(Number(stack[stack.length - 1]))) {
      num = stack.pop() + num;
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

const s = new Set([1, 2, 3]);
for (const c of s) console.log(c);
