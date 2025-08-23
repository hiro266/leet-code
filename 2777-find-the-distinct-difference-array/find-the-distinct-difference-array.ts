function distinctDifferenceArray(nums: number[]): number[] {
   const result = []

  for (let i = 0; i < nums.length; i++) {
    const prefix = nums.slice(0, i + 1)
    const suffix = nums.slice(i + 1, nums.length)
    const prefixDiff = new Set(prefix)
    const suffixDiff = new Set(suffix)

    const sumDiff = prefixDiff.size - suffixDiff.size
    result.push(sumDiff)
  }

  return result
};