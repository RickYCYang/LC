/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  backTracking(result, [], new Set(nums));
  console.log('result', result);
  return result;
};

const backTracking = (result, selNums, remNums) => {
  console.log('result, selNums, remNums', result, selNums, remNums);

  if (remNums.size === 0) {
    result.push([...selNums]);
    // console.log('remNums, selNums, result', remNums, selNums, result);
    return;
  }

  for (const num of remNums) {
    // if don't copy a new remmaing numbers, the loop would not end
    const copiedRemNums = new Set(remNums);
    selNums.push(num);
    copiedRemNums.delete(num);
    backTracking(result, selNums, copiedRemNums);
    selNums.pop(num);
  }
};

const testCases = [
  {
    input: [0, 1],
    output: [
      [0, 1],
      [1, 0],
    ],
  },
  {
    input: [1, 2, 3],
    output: [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ],
  },
  {
    input: [1],
    output: [[1]],
  },
];

for (const testCase of testCases) {
  console.log(
    JSON.stringify(permute(testCase.input)) === JSON.stringify(testCase.output)
  );
}
