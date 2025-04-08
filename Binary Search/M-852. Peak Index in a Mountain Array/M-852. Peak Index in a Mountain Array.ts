function peakIndexInMountainArray(arr: number[]): number {
  let [l, r] = [0, arr.length - 1];
  while (l <= r) {
    const mid = (l + r) >> 1;
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;
    if (arr[mid] > arr[mid - 1] || mid === 0) l = mid + 1;
    else r = mid - 1;
  }
}

const testData = [
  {
    arr: [0, 1, 0],
    ans: 1,
  },
  {
    arr: [0, 2, 1, 0],
    ans: 1,
  },
  {
    arr: [0, 10, 5, 2],
    ans: 1,
  },
  {
    arr: [3, 5, 3, 2, 0],
    ans: 1,
  },
];

for (const data of testData) {
  console.log(data.ans === peakIndexInMountainArray(data.arr));
}
