function reverseWords(s: string): string {
  const arr = s.split(' ').filter((char) => char !== '');
  const reverse = arr.reverse().join(' ');
  return reverse;
}

const testData = [
  {
    s: 'the sky is blue',
    ans: 'blue is sky the',
  },
  {
    s: '  hello world  ',
    ans: 'world hello',
  },
  {
    s: 'a good   example',
    ans: 'example good a',
  },
];

for (const data of testData) {
  console.log(data['ans'] === reverseWords(data['s']));
}
