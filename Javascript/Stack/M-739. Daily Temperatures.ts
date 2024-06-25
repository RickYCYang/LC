function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [];
  const result: number[] = new Array(temperatures.length).fill(0);
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      stack.length &&
      temperatures[i] >= temperatures[stack[stack.length - 1]]
    ) {
      stack.pop();
    }
    if (!stack.length) result[i] = 0;
    else result[i] = stack[stack.length - 1] - i;
    stack.push(i);
  }
  return result;
}

const testData = [
  {
    temperatures: [73, 74, 75, 71, 69, 72, 76, 73],
    ans: [1, 1, 4, 2, 1, 1, 0, 0],
  },
  {
    temperatures: [30, 40, 50, 60],
    ans: [1, 1, 1, 0],
  },
  {
    temperatures: [30, 60, 90],
    ans: [1, 1, 0],
  },
];

for (const data of testData) {
  console.log(
    JSON.stringify(data['ans']) ===
      JSON.stringify(dailyTemperatures(data['temperatures']))
  );
}
