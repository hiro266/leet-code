function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
  const divisors = nums2.map((num) => num * k)

  let goodPairs = 0

  for (let i = 0; i < nums1.length; i++) {
    const dividend = nums1[i] // 割る数(分母)
    for (let j = 0; j < divisors.length; j++) {
      const divisor = divisors[j]  // 割られる数(分子)
      if (dividend % divisor === 0) goodPairs++
    }
  }

  return goodPairs
};