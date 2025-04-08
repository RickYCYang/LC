/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let res = 0;
  let [R, L] = [0, 0];
  for (const c of s) {
    if (c === 'R') R++;
    if (c === 'L') L++;
    if (R === L) {
      res++;
      (R = 0), (L = 0);
    }
  }
  return res;
};
