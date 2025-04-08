function strStr(haystack: string, needle: string): number {
  if (needle.length > haystack.length) return -1;
  for (let i = 0; i < haystack.length; i++) {
    let isSubstr = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) isSubstr = false;
    }
    if (isSubstr) return i;
  }
  return -1;
}
