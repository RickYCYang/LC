function maxSatisfied(
  customers: number[],
  grumpy: number[],
  minutes: number
): number {
  let initSatisfied = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      initSatisfied += customers[i];
      customers[i] = 0;
    }
  }

  let l = 0;
  let r = 0;
  let current = 0;
  let max = 0;
  while (r < customers.length) {
    current += customers[r];
    if (r - l + 1 === minutes) {
      max = Math.max(max, current);
      current -= customers[l];
      l++;
    }
    r++;
  }

  return initSatisfied + max;
}

const testData = [
  {
    customers: [1, 0, 1, 2, 1, 1, 7, 5],
    grumpy: [0, 1, 0, 1, 0, 1, 0, 1],
    minutes: 3,
    ans: 16,
  },
  {
    customers: [1],
    grumpy: [0],
    minutes: 1,
    ans: 1,
  },
];

for (const data of testData) {
  console.log(
    data.ans === maxSatisfied(data.customers, data.grumpy, data.minutes)
  );
}
