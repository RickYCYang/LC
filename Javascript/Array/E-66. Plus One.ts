function plusOne(digits: number[]): number[] {
  const n = digits.length - 1;
  let offset = 0;

  for (let i = n; i >= 0; i--) {
    const num = digits[i] + (i === n ? 1 : offset);
    const digit = num % 10;
    offset = Math.floor(num / 10);
    digits[i] = digit;
    if (offset !== 1) return digits;
  }
  digits.unshift(1);
  return digits;
}
