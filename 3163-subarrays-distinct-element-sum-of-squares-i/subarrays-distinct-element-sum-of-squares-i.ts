function sumCounts(nums: number[]): number {
  let sum = 0

  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      const seen = new Set(nums.slice(i, j))
      const distinctCount = seen.size * seen.size
      sum = sum + distinctCount
    }
  }

  return sum
};