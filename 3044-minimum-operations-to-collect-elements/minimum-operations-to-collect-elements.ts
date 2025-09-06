function minOperations(nums: number[], k: number): number {
  if (nums.length === k) return k

  const collection = new Set()
  let operationCount = 0

  for (let i = nums.length - 1; i >= 0; i--) {
    operationCount++
    const num = nums[i]
    if (num <= k) collection.add(num)
    if (collection.size === k) break
  }


  return operationCount
};