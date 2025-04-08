function backspaceCompare(s: string, t: string): boolean {
  const sStack: string[] = [];
  const tStack: string[] = [];

  for (const c of s) {
    if (c === '#') sStack.pop();
    else sStack.push(c);
  }

  for (const c of t) {
    if (c === '#') tStack.pop();
    else tStack.push(c);
  }

  return sStack.join() === tStack.join();
}
