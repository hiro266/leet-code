function mostFrequentEven(nums: number[]): number {
  const seen = new Map()

  for (const num of nums) {
    if (num % 2 === 0) {
      seen.set(num, (seen.get(num) ?? 0) + 1)
    }
  }

  if (seen.size === 0) return -1

  const candidate = []
  let maxTimes = Math.max(...seen.values())

  for (const [num, times] of seen) {
    if (times === maxTimes) candidate.push(num)
  }

  return Math.min(...candidate)
};