function findLucky(arr: number[]): number {
  const numCount = new Map();
  for (const num of arr) {
    numCount.set(num, (numCount.get(num) ?? 0) + 1);
  }

  const candidate = [];
  for (const [key, count] of numCount) {
    if (key === count) candidate.push(key);
  }

  return candidate.length === 0 ? -1 : Math.max(...candidate);
};