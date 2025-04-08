function maxOperations(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let opertaions = 0;
  let [l, r] = [0, nums.length - 1];
  while (l < r) {
    if (nums[l] + nums[r] === k) opertaions++, l++, r--;
    else if (nums[l] + nums[r] > k) r--;
    else l++;
  }
  //console.log(opertaions);
  return opertaions;
}

const testData = [
  {
    nums: [1, 2, 3, 4],
    k: 5,
    ans: 2,
  },
  {
    nums: [3, 1, 3, 4, 3], // [1, 3, 3, 3, 4]
    k: 6,
    ans: 1,
  },
];

for (const data of testData) {
  console.log(data['ans'] === maxOperations(data['nums'], data['k']));
}
