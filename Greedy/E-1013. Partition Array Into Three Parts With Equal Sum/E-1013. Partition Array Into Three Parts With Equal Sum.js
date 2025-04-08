/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  const sumOfPartition = arr.reduce((accu, num) => accu + num, 0) / 3;
  //console.log('sumOfPartition', sumOfPartition);
  let curSum = 0;
  for (const num of arr) {
    if (curSum > sumOfPartition) return false;
    curSum += num;
    if (curSum === sumOfPartition) curSum = 0;
  }
  //console.log('curSum', curSum)
  return curSum === 0;
};
