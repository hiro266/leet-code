function intersection(nums: number[][]): number[] {
  const result = new Set(nums[0])

  for (const list of nums) {
    const tmpSet = new Set(list)

    for (const num of result) {
      if (!tmpSet.has(num)) result.delete(num)
    }
  }

  return [...result].sort((a, b) => a - b)
};