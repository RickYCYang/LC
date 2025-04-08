/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();
  for (const s of magazine) {
    map.set(s, (map.get(s) || 0) + 1);
  }
  for (const s of ransomNote) {
    const count = (map.get(s) || 0) - 1;
    if (count < 0) return false;
    map.set(s, count);
  }
  return true;
};

console.log(canConstruct('aa', 'aab'));

// python
// class Solution:
//     def canConstruct(self, ransomNote: str, magazine: str) -> bool:
//         map = {}
//         for s in magazine:
//             map[s] = (map.get(s) or 0) + 1

//         for s in ransomNote:
//             count = (map.get(s) or 0) - 1
//             if count < 0:
//                 return False
//             map[s] = count

//         return True
