/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
  const n = arr.length;
  let res = 0;
  for (let i = 0; i < n - 1; i++) {
    let a = 0;
    for (let j = i + 1; j < n; j++) {
      a ^= arr[j - 1];
      let b = 0;
      for (let k = j; k < n; k++) {
        b ^= arr[k];

        if (a === b) res++;
      }
    }
  }

  return res;
};
