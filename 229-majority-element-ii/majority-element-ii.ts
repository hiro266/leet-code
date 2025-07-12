function majorityElement(nums: number[]): number[] {
  const minimum = Math.trunc(nums.length / 3);
  if (minimum === 0) return [...new Set(nums)];

  const countMap: Map<number, number> = new Map();

  for (const num of nums) {
    countMap.set(num, (countMap.get(num) ?? 0) + 1);
  }

  const result: number[] = [];
  for (const [key, count] of countMap) {
    if (count > minimum) result.push(key);
  }

  return result;
};