function maxDepth(s: string): number {
  let depth = 0;
  let current = 0;

  for (const c of s) {
    if (c === '(') {
      current++;
      continue;
    }
    if (c === ')') {
      depth = Math.max(depth, current);
      current--;
    }
  }

  return depth;
}
