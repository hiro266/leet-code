function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
  const seen = new Set(nums1.concat(nums2, nums3))
  const count = new Map([...seen].map((num) => [num, 2]))
  const result = []

  for (const num of [...new Set(nums1)]) {
    if (count.has(num)) {
      count.set(num, (count.get(num) ?? 0) - 1)
    }
  }

  for (const num of [...new Set(nums2)]) {
    if (count.has(num)) {
      if (count.get(num) === 1) result.push(num)
      count.set(num, (count.get(num) ?? 0) - 1)
    }
  }

  for (const num of [...new Set(nums3)]) {
    if (count.has(num)) {
      if (count.get(num) === 1) result.push(num)
      count.set(num, (count.get(num) ?? 0) - 1)
    }
  }

  return result
};