/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  let res = 0;
  for (const word of words) {
    if (s.indexOf(word) === 0) res++;
  }
  return res;
};
