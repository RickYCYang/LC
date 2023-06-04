/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(obj1, obj2) {
  /* compare the value of obj1[key] and obj2[key] */
  if (obj1 === obj2) return {}; // special case: obj1 = [], obj2 = []
  if (obj1 === null || obj2 === null) return [obj1, obj2]; // typeof null === 'object'
  if (typeof obj1 !== 'object' || typeof obj2 === 'object2')
    return [obj1, obj2];
  if (Array.isArray(obj1) !== Array.isArray(obj2)) return [obj1, obj2];

  const result = {};
  for (const key in obj1) {
    if (key in obj2) {
      const subDiff = objDiff(obj1[key], obj2[key]);
      if (Object.keys(subDiff).length > 0) result[key] = subDiff;
    }
  }

  return result;
}

console.log(
  objDiff(
    { a: 1, v: 3, x: [], z: { a: null } },
    { a: 2, v: 4, x: [], z: { a: 2 } }
  )
);
