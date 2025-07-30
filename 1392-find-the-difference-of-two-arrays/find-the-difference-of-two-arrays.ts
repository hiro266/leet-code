function findDifference(nums1: number[], nums2: number[]): number[][] {
  const seenNums1 = new Set(nums1)
  const seenNums2 = new Set(nums2)

  const result1: Set<number> = new Set()
  const result2: Set<number> = new Set()

  for (const num of nums1) {
    if (!seenNums2.has(num)) result1.add(num)
  }

  for (const num of nums2) {
    if (!seenNums1.has(num)) result2.add(num)
  }

  return [[...result1], [...result2]]
};