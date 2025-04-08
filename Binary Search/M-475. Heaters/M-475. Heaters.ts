function findRadius(houses: number[], heaters: number[]): number {
  heaters.sort((a, b) => a - b);
  const minRadiusOfHouses = houses.map((house) =>
    findMinDistance(house, heaters)
  );
  return Math.max(...minRadiusOfHouses);
}

const findMinDistance = (house: number, heaters: number[]): number => {
  const n = heaters.length;
  let [l, r] = [0, n - 1];
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (house >= heaters[mid] && house <= heaters[mid + 1]) {
      return Math.min(house - heaters[mid], heaters[mid + 1] - house);
    }
    if (house >= heaters[mid]) l = mid + 1;
    else r = mid - 1;
  }
  if (l === 0) return heaters[0] - house; // house is smaller than all heaters
  if (l === n) return house - heaters[n - 1]; // house is larger than all heaters
};

const testData = [
  {
    houses: [1, 2, 3],
    heaters: [2],
    ans: 1,
  },
  {
    houses: [1, 2, 3, 4],
    heaters: [1, 4],
    ans: 1,
  },
  {
    houses: [1, 5],
    heaters: [2],
    ans: 3,
  },
];

for (const data of testData) {
  console.log(data.ans === findRadius(data.houses, data.heaters));
}
