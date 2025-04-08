function removeOuterParentheses(s: string): string {
  let parenthesesCount = 0;
  let result = '';

  for (const c of s) {
    if (c === '(') {
      if (parenthesesCount) result += c;
      parenthesesCount++;
    } else {
      parenthesesCount--;
      if (parenthesesCount) result += c;
    }
  }

  return result;
}
