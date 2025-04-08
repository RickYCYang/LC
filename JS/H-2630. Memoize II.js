/**
 * @param {Function} fn
 */
function memoize(fn) {
  const cache = new Map();
  const keyGenerator = createKeyGenerator();

  return function (...args) {
    const numbers = args.map(keyGenerator);
    const key = numbers.join(',');
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }
  };
}

function createKeyGenerator() {
  let count = 0;
  const argMap = new Map();

  return function (arg) {
    if (argMap.has(arg)) {
      return argMap.get(arg);
    } else {
      argMap.set(arg, ++count);
      return count;
    }
  };
}

let callCount = 0;
let fn = function (a, b) {
  callCount += 1;
  return { ...a, ...b };
};

/** should be 1 */
const getInput1 = () => {
  const o = {};
  return [
    [o, o],
    [o, o],
    [o, o],
  ];
};

/** should be 3 */
const getInput2 = () => {
  return [
    [{}, {}],
    [{}, {}],
    [{}, {}],
  ];
};

const inputs = getInput2();
const memoized = memoize(fn);
for (const arr of inputs) {
  memoized(...arr);
}

console.log('callCount', callCount);
