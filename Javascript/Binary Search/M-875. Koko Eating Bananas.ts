function minEatingSpeed(piles: number[], h: number): number {
  let [minSpeed, maxSpeed] = [0, Math.max(...piles)];
  let bestSpeed = maxSpeed;
  const calcNeededTime = (speed) =>
    piles.reduce((ttlTime, pile) => {
      return ttlTime + Math.ceil(pile / speed);
    }, 0);

  while (minSpeed <= maxSpeed) {
    const speed = Math.floor((minSpeed + maxSpeed) / 2);
    const neededTime = calcNeededTime(speed);
    if (neededTime <= h) {
      bestSpeed = speed;
      maxSpeed = speed - 1;
    } else {
      minSpeed = speed + 1;
    }
  }
  return bestSpeed;
}

const testData = [
  {
    piles: [3, 6, 7, 11],
    h: 8,
    ans: 4,
  },
  {
    piles: [30, 11, 23, 4, 20],
    h: 5,
    ans: 30,
  },
  {
    piles: [30, 11, 23, 4, 20],
    h: 6,
    ans: 23,
  },
];

for (const data of testData) {
  console.log(data.ans === minEatingSpeed(data.piles, data.h));
}
