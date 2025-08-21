function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  const map = new Map()

  for (const [id, val] of nums1) {
    map.set(id, val)
  }

  for (const [id, val] of nums2) {
    map.set(id, (map.get(id) ?? 0) + val)
  }

  const mergedArray = [...map].sort((a, b) => a[0] - b[0])
  return mergedArray
};