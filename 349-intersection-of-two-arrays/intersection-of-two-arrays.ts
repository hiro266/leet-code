function intersection(nums1: number[], nums2: number[]): number[] {
  const filteredArr = nums1.filter((num) => nums2.includes(num) ?? num);
  const set = Array.from(new Set(filteredArr));
  return set;

};