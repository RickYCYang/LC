/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // store the must finished course number before the current course
  const inDegree = Array(numCourses).fill(0);
  // store the next courses of current course
  const outDegree = Array(numCourses)
    .fill(null)
    .map((_) => []);
  for (const [course, preCourse] of prerequisites) {
    inDegree[course]++;
    outDegree[preCourse].push(course);
  }

  // find the courses that has no needed pre-courses, since they are the starting points of BFS
  const queue = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  // BFS to take all courses starting from the course without pre-course
  let tookCourses = 0;
  while (queue.length) {
    const current = queue.shift();
    tookCourses++;
    for (nextCourse of outDegree[current]) {
      inDegree[nextCourse]--;
      /// if all pre-courses has been finished, then it could be taken
      if (inDegree[nextCourse] === 0) queue.push(nextCourse);
    }
  }

  return tookCourses === numCourses;
};
