/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let idx = 0;
  const result = [];

  while (idx < nums.length) {
    let first = nums[idx];
    let last;

    /** start to find the proper last num */
    while (idx + 1 < nums.length && nums[idx] + 1 === nums[idx + 1]) {
      idx++;
    }
    last = nums[idx];

    if (last === first) {
      result.push(String(first));
    } else {
      result.push(`${first}->${last}`);
    }

    idx++;
  }

  return result;
};

const testData = [0, 2, 3, 4, 6, 8, 9];
console.log(summaryRanges(testData));
