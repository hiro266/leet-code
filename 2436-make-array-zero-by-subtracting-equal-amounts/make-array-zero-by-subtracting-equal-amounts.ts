function minimumOperations(nums: number[]): number {
  let count = 0
  while (!nums.every((num) => num === 0)) {
    const min = Math.min(...nums.filter((num) => num !== 0))
    nums = nums.map((num) => num === 0 ? num : num - min)
    count++
  }

  return count
};