/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function (locations, start, finish, fuel) {
  let n = locations.length;
  const mod = 1000000007;

  const routes = new Array(n)
    .fill(null)
    .map((_) => new Array(fuel + 1).fill(null));

  for (let i = 0; i < fuel; i++) routes[finish][i] = 1;

  for (let cur = 0; cur <= fuel; cur++) {
    for (let i = 0; i < n; i++) {
      for (let k = 0; k < n; k++) {
        if (i !== k) {
          const need = Math.abs(locations[i] - locations[k]);
          if (cur >= need) {
            routes[i][cur] += routes[k][cur - need];
            routes[i][cur] %= mod;
          }
        }
      }
    }
  }

  return routes[start][fuel];
};

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
