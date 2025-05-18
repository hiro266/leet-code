function intersect(nums1: number[], nums2: number[]): number[] {
  const map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i])) {
      map.set(nums1[i], map.get(nums1[i]) + 1);
      continue;
    }
    map.set(nums1[i], 1);
  }

  const result = [];

  for (const num2 of nums2) {
    if (map.has(num2) && map.get(num2) > 0) {
      result.push(num2);
      map.set(num2, map.get(num2) - 1);
    }
  }

  return result;
};