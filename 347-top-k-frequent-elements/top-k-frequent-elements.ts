function topKFrequent(nums: number[], k: number): number[] {
  const seen = new Map();
  for (const num of nums) {
    if (seen.has(num)) {
      seen.set(num, seen.get(num) + 1);
      continue;
    }
    seen.set(num, 1);
  }

  const result: number[] = Array.from(seen.entries())
    .sort((a, b) => b[1] - a[1]) // 出現回数の多い順でソート
    .slice(0, k)								 // k個までを抽出
    .map(([key]) => key);				 // 出現した数字のみを抽出

  return result;
};