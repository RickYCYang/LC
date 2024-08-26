/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const cityMap = {};
  for (const [from, to] of paths) {
    cityMap[from] ??= [];
    cityMap[to] ??= [];
    cityMap[from].push(to);
  }
  //console.log('cityMap', cityMap);
  for (const [city, dests] of Object.entries(cityMap)) {
    if (dests.length === 0) return city;
  }
};
