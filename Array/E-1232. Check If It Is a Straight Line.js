/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length === 2) return true;

  const calcSlope = (c1, c2) => {
    const [x0, _y0] = coordinates[0];
    const [x1, _y1] = coordinates[1];
    if (x0 - x1 === 0) return (c2[0] - c1[0]) / (c2[1] - c1[1]);
    else return (c2[1] - c1[1]) / (c2[0] - c1[0]);
  };

  const slope = calcSlope(coordinates[0], coordinates[1]);
  for (let i = 1; i < coordinates.length - 1; i++) {
    if (slope !== calcSlope(coordinates[i], coordinates[i + 1])) return false;
  }
  return true;
};

console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 5],
  ])
);
