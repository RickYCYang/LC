// one dimension array
// function canPartition(nums: number[]): boolean {
//   const n = nums.length;
//   const sum = nums.reduce((sum, cur) => sum + cur, 0);

//   /* if sum is odd number */
//   if (sum % 2 !== 0) return false;

//   /*
//    * half is the target we need to find if there is any combination whose
//    * sum are equal to it.
//    **/
//   const half = sum / 2;
//   const dp = new Array(half + 1).fill(-1);

//   for (let i = 0; i < n; i++) {
//     const itemVal = nums[i];
//     for (let remWt = half; remWt <= 0; remWt--) {
//       const notPickedSum = dp[remWt];
//       const pickedSum = remWt >= itemVal ? dp[remWt - itemVal] + itemVal : 0;
//       dp[remWt] = Math.max(notPickedSum, pickedSum);
//     }
//   }
//   return dp[half] === half;
// }

// two dimensions array
function canPartition(nums: number[]): boolean {
  const n = nums.length;
  const sum = nums.reduce((sum, cur) => sum + cur, 0);

  /* if sum is odd number */
  if (sum % 2 !== 0) return false;

  /*
   * half is the target we need to find if there is any combination whose
   * sum are equal to it.
   **/
  const half = sum / 2;

  /*
   * store the maximum sum for picked items with each remaining weight
   * including zero (no picked item)
   **/
  const dp = new Array(n).fill(null).map((_) => new Array(half + 1));
  /* pick the 1st item to initialize the dp array */
  for (let remWt = 0; remWt < half + 1; remWt++) {
    const firstItemVal = nums[0];
    dp[0][remWt] = remWt >= firstItemVal ? firstItemVal : 0;
  }
  /* pick the rest items starting from 1 since the 1st item has already been picked */
  for (let itemCnt = 1; itemCnt < n; itemCnt++) {
    const itemVal = nums[itemCnt];
    for (let remWt = 0; remWt < half + 1; remWt++) {
      const notPickedSum = dp[itemCnt - 1][remWt];
      const pickedSum =
        remWt >= itemVal ? dp[itemCnt - 1][remWt - itemVal] + itemVal : 0;
      /* update dp */
      dp[itemCnt][remWt] = Math.max(notPickedSum, pickedSum);
    }
  }
  return dp[n - 1][half] === half;
}

const testData = [
  {
    nums: [5, 1, 11, 5],
    ans: true,
  },
  {
    nums: [1, 2, 3, 5],
    ans: false,
  },
  {
    nums: [1, 2, 5],
    ans: false,
  },
];

for (const data of testData) {
  console.log(data.ans === canPartition(data.nums));
}
