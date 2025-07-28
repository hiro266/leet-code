function mostFrequent(nums: number[], key: number): number {
  const seen = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      const next = nums[i + 1]
      seen.set(next, (seen.get(next) ?? 0) + 1)
    }
  }

  let maxCount = 0
  let result: number = 0
  for (const [key, count] of seen) {
    if (count > maxCount) {
      maxCount = count
      result = key
    }
  }

  return result
};