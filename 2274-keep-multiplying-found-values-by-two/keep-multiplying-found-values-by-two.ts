function findFinalValue(nums: number[], original: number): number {
  let shouldIterate = true
  let result = original
  const DOUBLE_FACTOR = 2

  while (shouldIterate) {
    if (nums.includes(result)) {
      result = result * DOUBLE_FACTOR
    } else {
      shouldIterate = false
    }
  }

  return result
};