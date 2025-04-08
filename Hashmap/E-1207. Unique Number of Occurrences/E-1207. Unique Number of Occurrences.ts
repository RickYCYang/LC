function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map();
  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const uniqueOccur = new Set(map.values());
  return map.size === uniqueOccur.size;
}

const testData = [
  {
    arr: [1, 2, 2, 1, 1, 3],
    ans: true,
  },
  {
    arr: [1, 2],
    ans: false,
  },
  {
    arr: [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0],
    ans: true,
  },
];

for (const data of testData) {
  console.log(data['ans'] === uniqueOccurrences(data['arr']));
}
