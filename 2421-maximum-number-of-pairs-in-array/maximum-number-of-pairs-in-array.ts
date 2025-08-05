function numberOfPairs(nums: number[]): number[] {
  const seen = new Set()
  let count = 0

  for (const num of nums) {
    if (seen.has(num)) {
      seen.delete(num)
      count++
    } else {
      seen.add(num)
    }
  }

  return [count, seen.size]
};