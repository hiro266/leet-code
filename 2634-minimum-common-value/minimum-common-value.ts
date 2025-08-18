function getCommon(nums1: number[], nums2: number[]): number {
  const seen = new Set(nums1)

  for (const num of nums2) {
    if (seen.has(num)) return num
  }

  return -1
};