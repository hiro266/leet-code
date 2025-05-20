function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const seen: Map<number, number> = new Map();
  let result = 0;

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const sum = nums1[i] + nums2[j];
      if (seen.has(sum)) {
        const count = seen.get(sum);
        if (count !== undefined) seen.set(sum, count + 1);
        continue;
      }
      seen.set(sum, 1);
    }
  }

  for (let k = 0; k < nums3.length; k++) {
    for (let l = 0; l < nums4.length; l++) {
      const negativeSum = -(nums3[k] + nums4[l]);
      if (seen.has(negativeSum)) {
        const count = seen.get(negativeSum);
        if (count !== undefined) {
          result = result + count;
        }
      }
    }
  }

  return result;
};