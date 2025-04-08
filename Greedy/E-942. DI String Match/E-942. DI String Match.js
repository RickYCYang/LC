/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let [small, large] = [0, s.length];
  const result = [];
  for (const char of s) {
    if (char === 'I') result.push(small++);
    else result.push(large--);
  }

  // there is only 1 remaining number, so small would === large now
  result.push(small);
  return result;
};
const testData = [
  { s: 'IDID', ans: [0, 4, 1, 3, 2] },
  { s: 'III', ans: [0, 1, 2, 3] },
  { s: 'DDI', ans: [3, 2, 0, 1] },
];

for (const data of testData) {
  console.log(
    JSON.stringify(data['ans']) === JSON.stringify(diStringMatch(data['s']))
  );
}
