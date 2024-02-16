/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number): number {
  let [l, r] = [1, n];
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const ans = guess(mid);
    if (ans === 0) return mid;
    if (ans === -1) r = mid - 1;
    else l = mid + 1;
  }
  return -1;
}
