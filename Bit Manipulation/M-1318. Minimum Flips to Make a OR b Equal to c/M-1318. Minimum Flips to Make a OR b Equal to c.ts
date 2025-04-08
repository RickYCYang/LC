function minFlips(a: number, b: number, c: number): number {
  const [binaryA, binaryB, binaryC] = [
    a.toString(2).split('').reverse(),
    b.toString(2).split('').reverse(),
    c.toString(2).split('').reverse(),
  ];
  let flips = 0;
  const max = Math.max(binaryA.length, binaryB.length, binaryC.length);
  for (let i = 0; i < max; i++) {
    const [numA, numB, numC] = [
      Number(binaryA[i]) || 0,
      Number(binaryB[i]) || 0,
      Number(binaryC[i]) || 0,
    ];
    if ((numA | numB) !== numC) flips += 1 + (numA & numB);
  }
  return flips;
}

// 1 0 0 0
// 0 0 1 1
// 0 1 0 1

const testData = [
  // { a: 2, b: 6, c: 5, ans: 3 },
  // { a: 4, b: 2, c: 7, ans: 1 },
  // { a: 1, b: 2, c: 3, ans: 0 },
  { a: 8, b: 3, c: 5, ans: 3 },
];

for (const data of testData) {
  console.log(data.ans === minFlips(data.a, data.b, data.c));
}
