function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  const n = potions.length;
  const pairs: number[] = [];
  potions.sort((a, b) => a - b);

  const findLeastL = (spell: number): number => {
    let [l, r] = [0, n - 1];
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      const product = spell * potions[mid];
      if (product < success) l = mid + 1;
      else r = mid - 1;
    }
    return l;
  };

  for (const spell of spells) {
    const leastL = findLeastL(spell);
    // when leastL equals m that means there is no possible pair which could over success
    if (leastL === n) pairs.push(0);
    else pairs.push(n - leastL);
  }

  return pairs;
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
