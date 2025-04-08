function addToArrayForm(num: number[], k: number): number[] {
  const n = num.length;

  // add k to num for each digit
  for (let i = n - 1; i >= 0; i--) {
    const sum = num[i] + k;
    num[i] = sum % 10;
    k = Math.floor(sum / 10);
  }

  // handle remaining k
  while (k > 0) {
    num.unshift(k % 10);
    k = Math.floor(k / 10);
  }

  return num;
}
