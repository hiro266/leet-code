function findMaxK(nums: number[]): number {
  const positiveNums: Set<number> = new Set()
  const negativeNums: Set<number> = new Set()

  for (const num of nums) {
    num > 0 ? positiveNums.add(num) : negativeNums.add(num)
  }

  const ascPositiveNums = Array.from(positiveNums).sort((a, b) => a - b)

  let maxNum = -1
  for (const num of ascPositiveNums) {
    if (negativeNums.has(-num)) {
      maxNum = num
    }
  }

  return maxNum
};