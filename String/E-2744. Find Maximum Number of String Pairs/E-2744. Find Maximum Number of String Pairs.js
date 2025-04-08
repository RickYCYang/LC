/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  let res = 0;
  const set = new Set();
  for (const word of words) {
    const reverse = word.split('').reverse().join('');
    if (set.has(reverse)) {
      res++;
      set.delete(reverse);
    } else {
      set.add(word);
    }
  }
  return res;
};
