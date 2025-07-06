function sumOfUnique(nums: number[]): number {
  let sum: number = 0;
  const seen: Map<number, number> = new Map();

  for (const num of nums) {
    seen.set(num, (seen.get(num) ?? 0) + 1);
  }

  for (const [key, value] of seen) {
    if (value === 1) {
      sum = sum + key;
    }
  }

  return sum;
};