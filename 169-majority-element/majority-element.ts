function majorityElement(nums: number[]): number {
  const seen = new Map();

  for (const num of nums) {
    if (seen.has(num)) {
      seen.set(num, seen.get(num) + 1);
      continue;
    }
    seen.set(num, 1);
  }

  return Array.from(seen)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 1)[0][0];
};