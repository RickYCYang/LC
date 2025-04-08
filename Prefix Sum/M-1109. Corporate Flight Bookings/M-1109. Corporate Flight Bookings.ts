function corpFlightBookings(bookings: number[][], n: number): number[] {
  const prefixSum = new Array(n + 1).fill(0);
  const result = new Array(n).fill(0);
  for (const [l, r, seats] of bookings) {
    prefixSum[l - 1] += seats;
    prefixSum[r] -= seats;
  }
  result[0] = prefixSum[0];
  for (let i = 1; i < n; i++) result[i] = result[i - 1] + prefixSum[i];

  return result;
}

const testData = [
  {
    bookings: [
      [1, 2, 10],
      [2, 3, 20],
      [2, 5, 25],
    ],
    n: 5,
    ans: [10, 55, 45, 25, 25],
  },
  {
    bookings: [
      [1, 2, 10],
      [2, 2, 15],
    ],
    n: 2,
    ans: [10, 25],
  },
];

for (const data of testData) {
  console.log(
    JSON.stringify(data.ans) ===
      JSON.stringify(corpFlightBookings(data.bookings, data.n))
  );
}
