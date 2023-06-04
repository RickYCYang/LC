var numOfMinutes = function (n, headID, manager, informTime) {
  for (let emp = 0; emp < n; emp++) {
    calcSupToEmpTime(emp);
  }
  return Math.max(...informTime);

  function calcSupToEmpTime(empId) {
    if (manager[empId] !== -1) {
      informTime[empId] += calcSupToEmpTime(manager[empId]);
      /** mark the informTime of current emp has already added its supervisor's informTime */
      manager[empId] = -1;
    }
    return informTime[empId];
  }
};

const output1 = numOfMinutes(
  15,
  0,
  [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
);

console.log('output1', output1);
