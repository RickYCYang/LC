/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const prefix = strs[0].split('');
  for (const s of strs) {
    for (let i = 0; i < prefix.length; i++) {
      if (prefix[i] !== s[i]) prefix.splice(i);
      if (prefix.length - 1 < i) break;
    }
  }
  return prefix.join('');
};

const testData = [
  {
    strs: ['flower', 'flow', 'flight'],
    ans: 'fl',
  },
  {
    strs: ['dog', 'racecar', 'car'],
    ans: '',
  },
];

for (const data of testData) {
  console.log(data.ans === longestCommonPrefix(data.strs));
}
