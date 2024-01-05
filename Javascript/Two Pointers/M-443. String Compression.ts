function compress(chars: string[]): number {
  let [l, r] = [0, 0];
  while (r < chars.length) {
    const curChar = chars[r];
    let count = 0;

    /* find the end position of curChar */
    while (r < chars.length && curChar === chars[r]) {
      r++;
      count++;
    }

    /* add curChar */
    chars[l++] = curChar;

    /* add count */
    if (count > 1) {
      for (const digit of count.toString()) chars[l++] = digit;
    }
  }

  return l;
}

const testData = [
  {
    chars: ['a', 'a', 'b', 'b', 'c', 'c', 'c'],
    ans: 6,
  },
  {
    chars: ['a'],
    ans: 1,
  },
  {
    chars: ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ans: 4,
  },
];

for (const data of testData) {
  console.log(data['ans'] === compress(data['chars']));
}
