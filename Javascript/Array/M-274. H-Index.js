/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => b - a);
  let i = 0;
  while (i < citations[i]) i++;

  return i;
};

const testData = [
  [3, 0, 6, 1, 5], //3
  [1, 3, 1], //1
  [100], // 1
  [0], //0
  [1], // 1
  [11, 15], //2
];

for (const data of testData) {
  console.log(hIndex(data));
}
