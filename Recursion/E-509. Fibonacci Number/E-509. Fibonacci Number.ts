function fib(n: number): number {
  return getFib(n, {});
}

const getFib = (n: number, cache: object) => {
  if (cache[n]) return cache[n];
  if (n <= 1) return n;
  return getFib(n - 2, cache) + getFib(n - 1, cache);
};
