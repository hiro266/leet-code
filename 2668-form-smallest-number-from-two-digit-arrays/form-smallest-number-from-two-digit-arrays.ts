function minNumber(nums1: number[], nums2: number[]): number {
  const seen = new Set(nums1)
  const duplicatNums: Set<number> = new Set()

  for (const num of nums2) {
    if (seen.has(num)) {
      duplicatNums.add(num)
    }
  }

  if (duplicatNums.size !== 0) {
    return Math.min(...duplicatNums)
  }

  const candidate = []
  const minNum1 = Math.min(...seen)
  const minNum2 = Math.min(...nums2)
  candidate.push(minNum1.toString())
  candidate.push(minNum2.toString())

  const result = candidate.sort().join("")
  return Number(result)
};