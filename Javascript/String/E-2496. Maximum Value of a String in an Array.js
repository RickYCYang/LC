/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  let max = Number.MIN_SAFE_INTEGER;
  for (const str of strs) {
    const num = Number(str);
    const val = Number.isNaN(num) ? str.length : num;
    max = Math.max(max, val);
  }
  return max;
};
