function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const maxCandies = Math.max(...candies);
  return candies.map((item) => item + extraCandies >= maxCandies);
}

const testData = [
  {
    candies: [2, 3, 5, 1, 3],
    extraCandies: 3,
    ans: [true, true, true, false, true],
  },
];

for (const data of testData) {
  console.log(
    JSON.stringify(data.ans) ===
      JSON.stringify(kidsWithCandies(data.candies, data.extraCandies))
  );
}
