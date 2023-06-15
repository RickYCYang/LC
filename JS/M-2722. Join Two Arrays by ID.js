/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const result = {};
  for (const obj of arr1) result[obj.id] = obj;
  for (const obj of arr2) result[obj.id] = { ...result[obj.id], ...obj };
  return Object.values(result);
};

const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];

console.log(join(arr1, arr2));
