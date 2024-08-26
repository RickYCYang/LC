/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let perimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++)
      perimeter += getPerimeter(grid, i, j);
  }
  return perimeter;
};

const getPerimeter = (grid, i, j) => {
  // skip if it's not a land
  if (grid[i][j] === 0) return 0;

  const [n, m] = [grid.length, grid[i].length];
  let curPerimeter = 0;
  if (j === 0 || grid[i][j - 1] !== 1) curPerimeter++; // check leftside
  if (j === m - 1 || grid[i][j + 1] !== 1) curPerimeter++; // check rightside
  if (i === n - 1 || grid[i + 1][j] !== 1) curPerimeter++; // check downside
  if (i === 0 || grid[i - 1][j] !== 1) curPerimeter++; // check upside

  return curPerimeter;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
