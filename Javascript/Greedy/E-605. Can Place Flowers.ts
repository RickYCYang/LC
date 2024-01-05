function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (n === 0) return true;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] || flowerbed[i - 1] || flowerbed[i + 1]) continue;
    flowerbed[i] = 1;
    if (--n === 0) return true;
  }

  return false;
}

const testData = [
  { flowerbed: [1, 0, 0, 0, 1], n: 1, ans: true },
  { flowerbed: [1, 0, 0, 0, 1], n: 2, ans: false },
  { flowerbed: [1, 0, 1, 0, 1, 0, 1], n: 0, ans: true },
];

for (const data of testData) {
  console.log(data['ans'] === canPlaceFlowers(data['flowerbed'], data['n']));
}
