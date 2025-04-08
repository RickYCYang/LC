function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];
  for (let i = 0; i < asteroids.length; i++) {
    if (!stack.length) {
      stack.push(asteroids[i]);
      continue;
    }
    /** no explode happened:
     * 1. lastAsteroid and asteroids[i] goes same direction or
     * 2. lastAsteroid goes left and asteroids[i] gose right
     **/
    const lastAsteroid = stack[stack.length - 1];
    if (
      lastAsteroid * asteroids[i] > 0 ||
      (lastAsteroid < 0 && asteroids[i] > 0)
    ) {
      stack.push(asteroids[i]);
      continue;
    }
    /** explode happened */
    if (Math.abs(lastAsteroid) > Math.abs(asteroids[i])) continue;
    stack.pop();
    if (Math.abs(lastAsteroid) < Math.abs(asteroids[i])) i--;
  }
  //console.log('stack', stack);
  return stack;
}

const testData = [
  {
    asteroids: [5, 10, -5],
    ans: [5, 10],
  },
  {
    asteroids: [8, -8],
    ans: [],
  },
  {
    asteroids: [10, 2, -5],
    ans: [10],
  },
  { asteroids: [-2, -1, 1, 2], ans: [-2, -1, 1, 2] },
];

for (const data of testData) {
  console.log(
    JSON.stringify(data['ans']) ===
      JSON.stringify(asteroidCollision(data['asteroids']))
  );
}
