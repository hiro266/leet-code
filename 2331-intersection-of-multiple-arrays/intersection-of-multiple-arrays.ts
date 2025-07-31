function intersection(nums: number[][]): number[] {
  const seen = new Map()

  for (const list of nums) {
    for (const num of list) {
      seen.set(num, (seen.get(num) ?? 0) + 1)
    }
  }

  const result = []
  for (const [key, count] of seen) {
    if (count === nums.length) result.push(key)
  }

  return result.sort((a, b) => a - b)
};