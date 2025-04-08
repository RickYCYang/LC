function minOperations(logs: string[]): number {
  let folderDepth = 0;
  for (const log of logs) {
    if (log === './') continue;
    if (log === '../') folderDepth = Math.max(0, --folderDepth);
    else folderDepth++;
  }
  return folderDepth;
}

console.log(minOperations(['d1/', '../', '../', '../']));
