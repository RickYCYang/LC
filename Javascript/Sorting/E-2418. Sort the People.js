/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const heightsWithIdx = heights
    .map((height, idx) => ({ height, idx }))
    .toSorted((a, b) => b.height - a.height);
  const sortedNames = heightsWithIdx.map(({ idx }) => names[idx]);
  return sortedNames;
};
