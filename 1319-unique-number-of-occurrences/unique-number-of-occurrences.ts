function uniqueOccurrences(arr: number[]): boolean {
  const numCount = new Map();
  for (const num of arr) {
    numCount.set(num, (numCount.get(num) ?? 0) + 1);
  }

  const seen = new Set();
  for (const count of Array.from(numCount.values())) {
    if (seen.has(count)) return false;
    seen.add(count);
  }

  return true;
};