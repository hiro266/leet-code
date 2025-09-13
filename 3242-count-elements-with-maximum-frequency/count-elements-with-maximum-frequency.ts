function maxFrequencyElements(nums: number[]): number {
  const seenCount = new Map()

  for (const num of nums) {
    seenCount.set(num, (seenCount.get(num) ?? 0) + 1)
  }

  const maxCount = Math.max(...seenCount.values())

  let maxKeyCount = 0
  for (const [_, count] of seenCount) {
    if (count === maxCount) maxKeyCount += count
  }

  return maxKeyCount
};