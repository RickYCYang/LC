/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const origColor = image[sr][sc];
  if (origColor === color) return image;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const stack = [[sr, sc]];
  while (stack.length) {
    const [x, y] = stack.pop();
    if (image[x][y] !== origColor) continue;

    image[x][y] = color;
    for (const [moveX, moveY] of directions) {
      const [newX, newY] = [x + moveX, y + moveY];
      if (newX < 0 || newX > image.length - 1) continue;
      if (newY < 0 || newY > image[newX].length - 1) continue;
      stack.push([newX, newY]);
    }
  }

  return image;
};

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    1,
    0,
    2
  )
);
