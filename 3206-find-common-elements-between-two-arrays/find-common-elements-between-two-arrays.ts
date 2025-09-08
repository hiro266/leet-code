function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
  const seen1 = new Set(nums1)
  const seen2 = new Set(nums2)

  let count = 0
  for (const num of nums1) {
    if (seen2.has(num)) count++
  }

  let count2 = 0
  for (const num of nums2) {
    if (seen1.has(num)) count2++
  }

  return [count, count2]
};