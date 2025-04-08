function removeStars(s: string): string {
  const stack: string[] = [];
  for (const char of s) {
    if (char === '*' && stack.length) stack.pop();
    else stack.push(char);
  }
  //console.log('stack', stack);
  return stack.join('');
}

const testData = [
  {
    s: 'leet**cod*e',
    ans: 'lecoe',
  },
  {
    s: 'erase*****',
    ans: '',
  },
];

for (const data of testData) {
  console.log(data['ans'] === removeStars(data['s']));
}
