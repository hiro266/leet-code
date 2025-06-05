function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];

  for (const numFromNums1 of nums1) {
    let idx = nums2.indexOf(numFromNums1);
    if (idx === nums2.length - 1) {
      result.push(-1);
      continue;
    }

    while (idx <= nums2.length) {
      if (idx === nums2.length - 1) {
        result.push(-1);
        idx++;
        continue;
      }

      if (numFromNums1 < nums2[idx + 1]) {
        result.push(nums2[idx + 1]);
        idx++;
        break;
      }
      idx++;
    }
  }

  return result;
};