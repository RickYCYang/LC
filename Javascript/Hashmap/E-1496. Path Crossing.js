/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  const directions = {
    N: [0, 1],
    S: [0, -1],
    W: [-1, 0],
    E: [1, 0],
  };
  const position = [0, 0];
  const positionHistory = new Set([position.join(',')]);

  for (const c of path) {
    const [moveX, moveY] = directions[c];
    position[0] += moveX;
    position[1] += moveY;
    const positionPath = position.join(',');
    // console.log('positionHistory', positionHistory);
    // console.log('positionPath', positionPath);
    if (positionHistory.has(positionPath)) return true;
    positionHistory.add(positionPath);
  }
  return false;
};

console.log(isPathCrossing('ENNNNNNNNNNNEEEEEEEEEESSSSSSSSSS') === false);
