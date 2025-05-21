function topKFrequent(nums: number[], k: number): number[] {
  const seen = new Map();
  for (const num of nums) {
    if (seen.has(num)) {
      seen.set(num, seen.get(num) + 1);
      continue;
    }
    seen.set(num, 1);
  }

  const sortedSeenMap = Array.from(seen.entries()).sort((a, b) => b[1] - a[1]);
  const result: number[] = [];

  for (let i = 0; i < k; i++) {
    result.push(sortedSeenMap[i][0]);
  }

  return result;
};