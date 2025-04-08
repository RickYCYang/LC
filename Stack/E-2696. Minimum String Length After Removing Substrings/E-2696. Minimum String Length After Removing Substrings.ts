function minLength(s: string): number {
  const stack: string[] = [];
  const set = new Set(['AB', 'CD']);
  for (const c of s) {
    const top = stack[stack.length - 1];
    const curSubstr = top + c;
    if (set.has(curSubstr)) stack.pop();
    else stack.push(c);
  }
  //console.log('stack', stack);
  return stack.length;
}
