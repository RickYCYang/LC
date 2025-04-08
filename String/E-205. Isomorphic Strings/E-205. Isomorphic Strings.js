/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const sMap = { [s[0]]: 0 }; // record the last position of chars in s
  const tMap = { [t[0]]: 0 }; // record the last position of chars in t
  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]] !== tMap[t[i]]) return false;
    sMap[s[i]] = i;
    tMap[t[i]] = i;
  }
  return true;
};
