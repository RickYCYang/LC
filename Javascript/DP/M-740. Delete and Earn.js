/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const map = {};
  for (const num of nums) {
    map[num] = map[num] || 0 + 1;
  }

  console.log('map', map);

  let prevSum = 0;
  let currSum = 0;
  let prevKey = -1;

  for (let key in map) {
    console.log('key', key);
    const m = Math.max(prevSum, currSum); // 0, 2, 3
    key = parseInt(key);
    if (key - 1 !== prevKey) {
      currSum = key * map[key] + m; // 2
      prevSum = m; // 0
    } else {
      currSum = key * map[key] + prevSum; // 3, 6
      prevSum = m; // 2, 3
    }
    prevKey = key; // 2, 3
  }

  return Math.max(prevSum, currSum);
};

const test1 = [3, 4, 2];
const test2 = [2, 2, 3, 3, 3, 4];

console.log(deleteAndEarn(test1)); // 6
//console.log(deleteAndEarn(test2)); // 9
