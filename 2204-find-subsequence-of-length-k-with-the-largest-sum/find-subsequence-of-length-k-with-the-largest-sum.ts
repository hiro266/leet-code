function maxSubsequence(nums: number[], k: number): number[] {
  const copyNums = [...nums]
  copyNums.sort((a, b) => b - a)
  const slice = copyNums.slice(0, k).sort((a, b) => b - a)

  const result = []
  for (const num of nums) {
    if (slice.includes(num)) {
      result.push(num)
      slice.splice(slice.indexOf(num), 1)
    }
  }

  return result
};