/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const arr = s.split(' ');
  if (arr.length !== pattern.length) return false;
  if (new Set(arr).size !== new Set(pattern).size) return false;

  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(pattern[i])) map.set(pattern[i], arr[i]);
    if (map.get(pattern[i]) !== arr[i]) return false;
  }

  return true;
};
// var wordPattern = function (pattern, s) {
//   const patternMap = {}; // {a: 'dog', b: cat}
//   const sMap = {}; // {dog: a, cat: b}
//   const arr = s.split(' ');
//   if (arr.length !== pattern.length) return false;

//   for (let i = 0; i < arr.length; i++) {
//     if (!(pattern[i] in patternMap)) patternMap[pattern[i]] = arr[i];
//     // ref of difference between in and hasOwnProperty
//     // https://stackoverflow.com/questions/13632999/ifkey-in-object-or-ifobject-hasownpropertykey
//     if (!sMap.hasOwnProperty(arr[i])) sMap[arr[i]] = pattern[i];
//     if (arr[i] !== patternMap[pattern[i]]) return false;
//     if (pattern[i] !== sMap[arr[i]]) return false;
//   }

//   return true;
// };

const testCases = [
  {
    pattern: 'abba',
    s: 'dog constructor constructor dog',
    expected: true,
  },
];

for (const testCase of testCases) {
  console.log(wordPattern(testCase.pattern, testCase.s) === testCase.expected);
}
