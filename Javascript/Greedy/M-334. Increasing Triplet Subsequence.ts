function increasingTriplet(nums: number[]): boolean {
  let firstNum = Infinity;
  let secondNum = Infinity;

  for (const currNum of nums) {
    if (currNum > secondNum && secondNum > firstNum) return true;

    //if (currNum > firstNum && currNum <= secondNum) secondNum = currNum;
    if (currNum > firstNum) secondNum = currNum; // equal to line 8
    else firstNum = currNum;
  }

  return false;
}

const testData = [
  { nums: [1, 2, 3, 4, 5], ans: true },
  { nums: [5, 4, 3, 2, 1], ans: false },
  { nums: [2, 1, 5, 2, 3, 6], ans: true },
  { nums: [5, 1, 5, 5, 2, 5, 4], ans: true },
];

for (const data of testData) {
  console.log(data['ans'] === increasingTriplet(data['nums']));
}
