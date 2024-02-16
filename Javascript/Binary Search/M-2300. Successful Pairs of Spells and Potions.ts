function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  const bs = (spell: number, potions: number[], success: number) => {
    let [l, r] = [0, potions.length - 1];
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      const product = spell * potions[mid];
      if (product < success) l = mid + 1;
      else r = mid - 1;
    }
    return l;
  };
  potions.sort((a, b) => a - b);
  const [n, m] = [spells.length, potions.length];
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    const pair = bs(spells[i], potions, success);
    result[i] = pair === m ? 0 : m - pair;
  }
  return result;
}

const testData = [
  {
    spells: [5, 1, 3],
    potions: [1, 2, 3, 4, 5],
    success: 7,
    ans: [4, 0, 3],
  },
  {
    spells: [3, 1, 2, 4],
    potions: [8, 5, 8],
    success: 16,
    ans: [2, 0, 2, 3],
  },
];

for (const data of testData) {
  console.log(
    JSON.stringify(data['ans']) ===
      JSON.stringify(
        successfulPairs(data['spells'], data['potions'], data['success'])
      )
  );
}
