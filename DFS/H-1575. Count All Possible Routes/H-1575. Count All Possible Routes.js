/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function (locations, start, finish, fuel) {
  const n = locations.length;
  const cache = new Array(n)
    .fill(null)
    .map((_) => new Array(fuel + 1).fill(-1));

  return dfs(locations, start, finish, fuel, cache);
};

function dfs(locations, curIdx, finishIdx, remFuel, cache) {
  if (cache[curIdx][remFuel] !== -1) return cache[curIdx][remFuel];

  /** base condition */
  let neededFuel = Math.abs(locations[curIdx] - locations[finishIdx]);
  if (remFuel < neededFuel) {
    cache[curIdx][remFuel] = 0;
    return 0;
  }

  const n = locations.length;
  const mod = 1000000007;
  let ttlRoutes = curIdx === finishIdx ? 1 : 0;
  for (let i = 0; i < n; i++) {
    if (i === curIdx) continue;

    neededFuel = Math.abs(locations[curIdx] - locations[i]);
    if (remFuel >= neededFuel) {
      ttlRoutes += dfs(locations, i, finishIdx, remFuel - neededFuel, cache);
      ttlRoutes %= mod;
    }
  }

  cache[curIdx][remFuel] = ttlRoutes;
  return ttlRoutes;
}

const testData = [
  {
    locations: [2, 3, 6, 8, 4],
    start: 1,
    finish: 3,
    fuel: 5,
    ans: 4,
  },
  {
    locations: [4, 3, 1],
    start: 1,
    finish: 0,
    fuel: 6,
    ans: 5,
  },
  {
    locations: [5, 2, 1],
    start: 0,
    finish: 2,
    fuel: 3,
    ans: 0,
  },
];

for (const data of testData) {
  console.log(
    data.ans === countRoutes(data.locations, data.start, data.finish, data.fuel)
  );
}
