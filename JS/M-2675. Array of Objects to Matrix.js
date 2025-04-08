/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function (arr) {
  const isObject = (x) => x !== null && typeof x === 'object';

  const getKeys = (object) => {
    if (!isObject(object)) return [''];
    const result = [];
    for (const key in object) {
      const childKeys = getKeys(object[key]);
      for (const childKey of childKeys) {
        result.push(childKey ? `${key}.${childKey}` : key);
      }
    }
    return result;
  };

  const keysSet = arr.reduce((acc, curr) => {
    getKeys(curr).forEach((k) => acc.add(k));
    return acc;
  }, new Set());

  console.log('keysSet', keysSet);

  const keys = Array.from(keysSet).sort();

  const getValue = (obj, path) => {
    const paths = path.split('.');
    let i = 0;
    let value = obj;
    while (i < paths.length) {
      if (!isObject(value)) break;
      value = value[paths[i++]];
    }
    if (i < paths.length || isObject(value) || value === undefined) return '';
    return value;
  };

  const matrix = [keys];
  arr.forEach((obj) => {
    matrix.push(keys.map((key) => getValue(obj, key)));
  });

  return matrix;
};

const testData1 = [
  { b: 1, a: 2 },
  { b: 3, a: 4 },
];
const testData2 = [{ a: 1, b: 2 }, { c: 3, d: 4 }, {}];
const testData3 = [{ a: { b: 1, c: 2 } }, { a: { b: 3, d: 4 } }];
const testData4 = [[{ a: null }], [{ b: true }], [{ c: 'x' }]];
const testData5 = [{}, {}, {}];

console.log(testData1);
console.log(jsonToMatrix(testData1));
// console.log(jsonToMatrix(testData2));
// console.log(jsonToMatrix(testData3));
// console.log(jsonToMatrix(testData4));
// console.log(jsonToMatrix(testData5));
