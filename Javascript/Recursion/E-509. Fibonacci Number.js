/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  return calcFib(n, {});
};

const calcFib = (n, cache) => {
  if (n === 0 || n == 1) return n;
  if (n in cache) return cache[n];
  const result = calcFib(n - 1, cache) + calcFib(n - 2, cache);
  cache[n] = result;
  return result;
};
