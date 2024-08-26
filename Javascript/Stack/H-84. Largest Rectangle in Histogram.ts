function largestRectangleArea(heights: number[]): number {
  const stack: number[] = [];
  let idx = 0;
  let maxArea = 0;

  while (idx < heights.length) {
    if (!stack.length || heights[idx] >= heights[stack[stack.length - 1]]) {
      stack.push(idx++);
    } else {
      const height = heights[stack.pop() as number];
      const width = stack.length ? idx - stack[stack.length - 1] - 1 : idx;
      const area = height * width;
      maxArea = Math.max(area, maxArea);
    }
  }

  while (stack.length) {
    const height = heights[stack.pop() as number];
    const width = stack.length ? idx - stack[stack.length - 1] - 1 : idx;
    const area = height * width;
    maxArea = Math.max(area, maxArea);
  }

  return maxArea;
}

console.log(largestRectangleArea([3, 2, 3, 2, 2, 2, 2, 1]) === 14); // 14
